import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { existsSync, rmSync } from 'node:fs'
import { resolve } from 'node:path'

// Vite copies everything in public/ into the build output verbatim, with no
// way to exclude individual files — this removes the local-only DB config
// after the copy so `npm run build` never produces a dist/ that could
// silently point the admin panel at the local test database if deployed.
function excludeLocalAdminConfig() {
  let outDir
  return {
    name: 'exclude-local-admin-config',
    apply: 'build',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir)
    },
    closeBundle() {
      const target = resolve(outDir, 'admin/config.local.php')
      if (existsSync(target)) {
        rmSync(target)
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), excludeLocalAdminConfig()],
  server: {
    port: 5175,
    // In production /posts.php is same-origin (same domain as the built
    // site), so the app just fetches '/posts.php' directly. In local dev
    // the React app and PHP run as separate servers, so this proxies that
    // one path to a locally running PHP server — start one with e.g.
    // `php -S 127.0.0.1:8088 -t public` and adjust the port below if needed.
    proxy: {
      '/posts.php': 'http://127.0.0.1:8088',
      '/admin/uploads': 'http://127.0.0.1:8088', // post images, referenced by posts.php's JSON
    },
  },
})
