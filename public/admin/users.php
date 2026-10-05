<?php
declare(strict_types=1);

require_once __DIR__ . '/includes/auth.php';
require_once __DIR__ . '/includes/csrf.php';
require_once __DIR__ . '/includes/helpers.php';
require_once __DIR__ . '/includes/layout.php';

$currentUser = require_login();
$pdo = db();

$errors = [];
$action = $_GET['action'] ?? 'list';
$editId = isset($_GET['id']) ? (int) $_GET['id'] : null;

// --- form submissions ---
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    csrf_verify();
    $formAction = $_POST['form_action'] ?? '';

    if ($formAction === 'delete') {
        $deleteId = (int) ($_POST['id'] ?? 0);
        if ($deleteId === (int) $currentUser['id']) {
            $errors[] = 'Nemůžete smazat vlastní účet.';
            $action = 'list';
        } else {
            $stmt = $pdo->prepare('DELETE FROM users WHERE id = ?');
            $stmt->execute([$deleteId]);
            header('Location: users.php');
            exit;
        }
    } elseif ($formAction === 'save') {
        $id = isset($_POST['id']) && $_POST['id'] !== '' ? (int) $_POST['id'] : null;
        $name = trim((string) ($_POST['name'] ?? ''));
        $email = trim((string) ($_POST['email'] ?? ''));
        $password = (string) ($_POST['password'] ?? '');
        $passwordConfirm = (string) ($_POST['password_confirm'] ?? '');

        if ($name === '') {
            $errors[] = 'Vyplňte jméno.';
        }
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $errors[] = 'Zadejte platný e-mail.';
        }
        if ($id === null && strlen($password) < 8) {
            $errors[] = 'Heslo musí mít alespoň 8 znaků.';
        }
        if ($password !== '' && strlen($password) < 8) {
            $errors[] = 'Heslo musí mít alespoň 8 znaků.';
        }
        if ($password !== $passwordConfirm) {
            $errors[] = 'Hesla se neshodují.';
        }

        if (!$errors) {
            $stmt = $pdo->prepare('SELECT id FROM users WHERE email = ? AND id != ?');
            $stmt->execute([$email, $id ?? 0]);
            if ($stmt->fetch()) {
                $errors[] = 'Tento e-mail už používá jiný uživatel.';
            }
        }

        if (!$errors) {
            if ($id === null) {
                create_user($name, $email, $password);
            } else {
                if ($password !== '') {
                    $stmt = $pdo->prepare('UPDATE users SET name = ?, email = ?, password_hash = ? WHERE id = ?');
                    $stmt->execute([$name, $email, password_hash($password, PASSWORD_DEFAULT), $id]);
                } else {
                    $stmt = $pdo->prepare('UPDATE users SET name = ?, email = ? WHERE id = ?');
                    $stmt->execute([$name, $email, $id]);
                }
            }
            header('Location: users.php');
            exit;
        }

        $action = $id === null ? 'new' : 'edit';
        $editId = $id;
        $formName = $name;
        $formEmail = $email;
    }
}

// --- data for the form being displayed ---
$editingUser = null;
if ($action === 'edit' && $editId !== null) {
    $stmt = $pdo->prepare('SELECT id, name, email FROM users WHERE id = ?');
    $stmt->execute([$editId]);
    $editingUser = $stmt->fetch();
    if (!$editingUser) {
        $action = 'list';
    }
}
$formName = $formName ?? ($editingUser['name'] ?? '');
$formEmail = $formEmail ?? ($editingUser['email'] ?? '');

$users = $pdo->query('SELECT id, name, email, created_at FROM users ORDER BY created_at DESC')->fetchAll();

render_header('Uživatelé', 'users', $currentUser);

foreach ($errors as $error) {
    echo '<p class="form-error">' . e($error) . '</p>';
}

if ($action === 'new' || $action === 'edit') :
?>
  <section class="card">
    <h2><?= $action === 'new' ? 'Nový uživatel' : 'Upravit uživatele' ?></h2>
    <form method="post" action="users.php" class="stacked-form">
      <?= csrf_field() ?>
      <input type="hidden" name="form_action" value="save">
      <?php if ($editingUser): ?>
        <input type="hidden" name="id" value="<?= (int) $editingUser['id'] ?>">
      <?php endif; ?>

      <label>Jméno
        <input type="text" name="name" value="<?= e($formName) ?>" required autofocus>
      </label>
      <label>E-mail
        <input type="email" name="email" value="<?= e($formEmail) ?>" required>
      </label>
      <label>Heslo<?= $editingUser ? ' (ponechte prázdné pro zachování stávajícího)' : '' ?>
        <input type="password" name="password" <?= $editingUser ? '' : 'required' ?> minlength="8">
      </label>
      <label>Heslo znovu
        <input type="password" name="password_confirm" <?= $editingUser ? '' : 'required' ?> minlength="8">
      </label>

      <div class="form-actions">
        <button type="submit" class="btn-primary">Uložit</button>
        <a href="users.php" class="btn-secondary">Zrušit</a>
      </div>
    </form>
  </section>
<?php else : ?>
  <div class="toolbar">
    <a href="users.php?action=new" class="btn-primary">+ Nový uživatel</a>
  </div>

  <table class="data-table">
    <thead>
      <tr>
        <th>Jméno</th>
        <th>E-mail</th>
        <th>Vytvořen</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <?php if (!$users): ?>
        <tr><td colspan="4" class="empty-state">Zatím žádní uživatelé.</td></tr>
      <?php endif; ?>
      <?php foreach ($users as $u): ?>
        <tr>
          <td><?= e($u['name']) ?><?= (int) $u['id'] === (int) $currentUser['id'] ? ' <span class="badge">vy</span>' : '' ?></td>
          <td><?= e($u['email']) ?></td>
          <td><?= e((new DateTime($u['created_at']))->format('j. n. Y')) ?></td>
          <td class="row-actions">
            <a href="users.php?action=edit&id=<?= (int) $u['id'] ?>">Upravit</a>
            <?php if ((int) $u['id'] !== (int) $currentUser['id']): ?>
              <form method="post" action="users.php" onsubmit="return confirm('Opravdu smazat uživatele <?= e(addslashes($u['name'])) ?>?');">
                <?= csrf_field() ?>
                <input type="hidden" name="form_action" value="delete">
                <input type="hidden" name="id" value="<?= (int) $u['id'] ?>">
                <button type="submit" class="link-button link-danger">Smazat</button>
              </form>
            <?php endif; ?>
          </td>
        </tr>
      <?php endforeach; ?>
    </tbody>
  </table>
<?php endif;

render_footer();
