<?php
declare(strict_types=1);

function render_header(string $title, string $active, array $user, string $extraHead = ''): void
{
    ?><!doctype html>
<html lang="cs">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title><?= e($title) ?> — Green Heaven Admin</title>
<link rel="stylesheet" href="assets/admin.css">
<?= $extraHead ?>
</head>
<body>
<div class="layout">
  <aside class="sidebar">
    <div class="sidebar-brand">Green Heaven<span>Administrace</span></div>
    <nav class="sidebar-nav">
      <a href="posts.php" class="<?= $active === 'posts' ? 'active' : '' ?>">Příspěvky</a>
      <a href="users.php" class="<?= $active === 'users' ? 'active' : '' ?>">Uživatelé</a>
      <a href="settings.php" class="<?= $active === 'settings' ? 'active' : '' ?>">Nastavení</a>
    </nav>
    <div class="sidebar-user">
      <div class="sidebar-user-name"><?= e($user['name']) ?></div>
      <div class="sidebar-user-email"><?= e($user['email']) ?></div>
      <form method="post" action="logout.php">
        <button type="submit" class="link-button">Odhlásit se</button>
      </form>
    </div>
  </aside>
  <main class="content">
    <h1><?= e($title) ?></h1>
<?php
}

function render_footer(): void
{
    ?>
  </main>
</div>
</body>
</html>
<?php
}
