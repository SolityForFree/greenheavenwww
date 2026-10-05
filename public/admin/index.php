<?php
declare(strict_types=1);

require_once __DIR__ . '/includes/auth.php';

header('Location: ' . (current_user() ? 'posts.php' : 'login.php'));
exit;
