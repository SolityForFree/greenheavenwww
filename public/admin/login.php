<?php
declare(strict_types=1);

require_once __DIR__ . '/includes/auth.php';
require_once __DIR__ . '/includes/csrf.php';
require_once __DIR__ . '/includes/helpers.php';

if (current_user()) {
    header('Location: posts.php');
    exit;
}

$isFirstRun = users_count() === 0;
$errors = [];
$name = '';
$email = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    csrf_verify();
    $email = trim((string) ($_POST['email'] ?? ''));

    if ($isFirstRun) {
        $name = trim((string) ($_POST['name'] ?? ''));
        $password = (string) ($_POST['password'] ?? '');
        $passwordConfirm = (string) ($_POST['password_confirm'] ?? '');

        if ($name === '') {
            $errors[] = 'Vyplňte jméno.';
        }
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $errors[] = 'Zadejte platný e-mail.';
        }
        if (strlen($password) < 8) {
            $errors[] = 'Heslo musí mít alespoň 8 znaků.';
        }
        if ($password !== $passwordConfirm) {
            $errors[] = 'Hesla se neshodují.';
        }

        // Re-check right before insert to narrow (not fully eliminate) the race
        // window where two people open this page before either submits.
        if (!$errors && users_count() > 0) {
            $isFirstRun = false;
            $errors[] = 'Účet správce už mezitím vznikl. Přihlaste se prosím.';
        }

        if (!$errors) {
            $userId = create_user($name, $email, $password);
            start_session();
            session_regenerate_id(true);
            $_SESSION['user_id'] = $userId;
            header('Location: posts.php');
            exit;
        }
    } else {
        $password = (string) ($_POST['password'] ?? '');
        if (attempt_login($email, $password)) {
            header('Location: posts.php');
            exit;
        }
        $errors[] = 'Nesprávný e-mail nebo heslo.';
    }
}
?>
<!doctype html>
<html lang="cs">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title><?= $isFirstRun ? 'Vytvořit účet správce' : 'Přihlášení' ?> — Green Heaven Admin</title>
<link rel="stylesheet" href="assets/admin.css">
</head>
<body class="auth-body">
<div class="auth-card">
  <div class="auth-brand">Green Heaven<span>Administrace</span></div>

  <?php if ($isFirstRun): ?>
    <h1>Vytvořit účet správce</h1>
    <p class="auth-hint">Zatím tu není žádný uživatel. Vytvořte první účet správce, kterým se rovnou přihlásíte.</p>
  <?php else: ?>
    <h1>Přihlášení</h1>
  <?php endif; ?>

  <?php foreach ($errors as $error): ?>
    <p class="form-error"><?= e($error) ?></p>
  <?php endforeach; ?>

  <form method="post" action="login.php" class="auth-form">
    <?= csrf_field() ?>

    <?php if ($isFirstRun): ?>
      <label>Jméno
        <input type="text" name="name" value="<?= e($name) ?>" required autofocus>
      </label>
    <?php endif; ?>

    <label>E-mail
      <input type="email" name="email" value="<?= e($email) ?>" required <?= $isFirstRun ? '' : 'autofocus' ?>>
    </label>

    <label>Heslo
      <input type="password" name="password" required minlength="<?= $isFirstRun ? 8 : 1 ?>">
    </label>

    <?php if ($isFirstRun): ?>
      <label>Heslo znovu
        <input type="password" name="password_confirm" required minlength="8">
      </label>
    <?php endif; ?>

    <button type="submit" class="btn-primary">
      <?= $isFirstRun ? 'Vytvořit účet a přihlásit se' : 'Přihlásit se' ?>
    </button>
  </form>
</div>
</body>
</html>
