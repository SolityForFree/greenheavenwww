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
  },
})
