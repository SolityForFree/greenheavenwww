<?php
// Copy this file to config.php and fill in real production values.
// config.php is gitignored on purpose — never commit real database
// credentials to the repository. Vite's build DOES copy config.php into
// dist/admin/ along with everything else in public/ (there's no way to
// exclude a single file from that copy) — so if you deploy by uploading
// dist/, make sure config.php there already holds the real values before
// you upload, and don't let an empty/sample one overwrite it on a
// redeploy.
//
// For local testing against a different (throwaway) database, don't edit
// config.php — instead create config.local.php the same way; when it
// exists, includes/db.php uses it instead, so config.php can keep holding
// production values at all times.

define('DB_HOST', '127.0.0.1'); // 'localhost' makes PHP try a unix socket, which often isn't set up on shared hosting — use the TCP address instead
define('DB_PORT', 3306);
define('DB_NAME', 'database_name');
define('DB_USER', 'database_user');
define('DB_PASS', 'database_password');
