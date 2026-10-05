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
if ($_SERVER['REQUEST_METHOD'] === 'POST' && post_size_exceeded()) {
    // $_POST/$_FILES were wiped because the body exceeded post_max_size, but
    // $_GET (action/id, from the form's target URL) still comes through, so
    // the right form re-appears — just without the title/text they typed.
    $errors[] = 'Nahrávaná fotka je příliš velká a server ji odmítl. Maximální povolená velikost je ' . MAX_IMAGE_LABEL . '.';
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    csrf_verify();
    $formAction = $_POST['form_action'] ?? '';

    if ($formAction === 'delete') {
        $deleteId = (int) ($_POST['id'] ?? 0);
        $stmt = $pdo->prepare('SELECT image_path FROM posts WHERE id = ?');
        $stmt->execute([$deleteId]);
        $row = $stmt->fetch();
        if ($row) {
            $pdo->prepare('DELETE FROM posts WHERE id = ?')->execute([$deleteId]);
            delete_uploaded_image($row['image_path']);
        }
        header('Location: posts.php');
        exit;
    } elseif ($formAction === 'save') {
        $id = isset($_POST['id']) && $_POST['id'] !== '' ? (int) $_POST['id'] : null;
        $title = trim((string) ($_POST['title'] ?? ''));
        $content = trim((string) ($_POST['content'] ?? ''));

        if ($title === '') {
            $errors[] = 'Vyplňte nadpis.';
        }
        if ($content === '') {
            $errors[] = 'Vyplňte text příspěvku.';
        }

        $upload = ['path' => null, 'error' => null];
        if (!empty($_FILES['image']) && ($_FILES['image']['error'] ?? UPLOAD_ERR_NO_FILE) !== UPLOAD_ERR_NO_FILE) {
            $upload = handle_image_upload($_FILES['image']);
            if ($upload['error']) {
                $errors[] = $upload['error'];
            }
        }

        $removeImage = !empty($_POST['remove_image']);

        if (!$errors) {
            $existingImage = null;
            if ($id !== null) {
                $stmt = $pdo->prepare('SELECT image_path FROM posts WHERE id = ?');
                $stmt->execute([$id]);
                $existing = $stmt->fetch();
                $existingImage = $existing['image_path'] ?? null;
            }

            $imagePath = $existingImage;
            if ($upload['path']) {
                delete_uploaded_image($existingImage);
                $imagePath = $upload['path'];
            } elseif ($removeImage) {
                delete_uploaded_image($existingImage);
                $imagePath = null;
            }

            if ($id === null) {
                $slug = unique_slug($pdo, slugify($title));
                $stmt = $pdo->prepare(
                    'INSERT INTO posts (title, slug, content, image_path, created_by) VALUES (?, ?, ?, ?, ?)'
                );
                $stmt->execute([$title, $slug, $content, $imagePath, $currentUser['id']]);
            } else {
                $stmt = $pdo->prepare(
                    'UPDATE posts SET title = ?, content = ?, image_path = ? WHERE id = ?'
                );
                $stmt->execute([$title, $content, $imagePath, $id]);
            }
            header('Location: posts.php');
            exit;
        }

        $action = $id === null ? 'new' : 'edit';
        $editId = $id;
        $formTitle = $title;
        $formContent = $content;
    }
}

// --- data for the form being displayed ---
$editingPost = null;
if ($action === 'edit' && $editId !== null) {
    $stmt = $pdo->prepare('SELECT id, title, content, image_path FROM posts WHERE id = ?');
    $stmt->execute([$editId]);
    $editingPost = $stmt->fetch();
    if (!$editingPost) {
        $action = 'list';
    }
}
$formTitle = $formTitle ?? ($editingPost['title'] ?? '');
$formContent = $formContent ?? ($editingPost['content'] ?? '');

$posts = $pdo->query('
    SELECT posts.id, posts.title, posts.slug, posts.image_path, posts.created_at, users.name AS author_name
    FROM posts
    LEFT JOIN users ON users.id = posts.created_by
    ORDER BY posts.created_at DESC
')->fetchAll();

render_header('Příspěvky', 'posts', $currentUser);

foreach ($errors as $error) {
    echo '<p class="form-error">' . e($error) . '</p>';
}

if ($action === 'new' || $action === 'edit') :
?>
  <section class="card">
    <h2><?= $action === 'new' ? 'Nový příspěvek' : 'Upravit příspěvek' ?></h2>
    <form method="post" action="<?= $editingPost ? 'posts.php?action=edit&id=' . (int) $editingPost['id'] : 'posts.php?action=new' ?>" class="stacked-form" enctype="multipart/form-data">
      <?= csrf_field() ?>
      <input type="hidden" name="form_action" value="save">
      <?php if ($editingPost): ?>
        <input type="hidden" name="id" value="<?= (int) $editingPost['id'] ?>">
      <?php endif; ?>

      <label>Nadpis
        <input type="text" name="title" value="<?= e($formTitle) ?>" required autofocus>
      </label>

      <label>Text
        <textarea name="content" rows="10" required><?= e($formContent) ?></textarea>
      </label>

      <label>Fotka
        <input type="file" name="image" accept="image/jpeg,image/png,image/webp,image/gif">
        <span class="field-hint">JPG, PNG, WEBP nebo GIF, max. <?= MAX_IMAGE_LABEL ?>.</span>
      </label>

      <?php if ($editingPost && $editingPost['image_path']): ?>
        <div class="current-image">
          <img src="<?= e($editingPost['image_path']) ?>" alt="">
          <label class="checkbox-label">
            <input type="checkbox" name="remove_image" value="1"> Odebrat stávající fotku
          </label>
        </div>
      <?php endif; ?>

      <div class="form-actions">
        <button type="submit" class="btn-primary">Uložit</button>
        <a href="posts.php" class="btn-secondary">Zrušit</a>
      </div>
    </form>
  </section>
<?php else : ?>
  <div class="toolbar">
    <a href="posts.php?action=new" class="btn-primary">+ Nový příspěvek</a>
  </div>

  <table class="data-table">
    <thead>
      <tr>
        <th></th>
        <th>Nadpis</th>
        <th>Autor</th>
        <th>Vytvořen</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <?php if (!$posts): ?>
        <tr><td colspan="5" class="empty-state">Zatím žádné příspěvky.</td></tr>
      <?php endif; ?>
      <?php foreach ($posts as $p): ?>
        <tr>
          <td class="thumb-cell">
            <?php if ($p['image_path']): ?>
              <img src="<?= e($p['image_path']) ?>" alt="" class="thumb">
            <?php endif; ?>
          </td>
          <td><?= e($p['title']) ?></td>
          <td><?= e($p['author_name'] ?? '—') ?></td>
          <td><?= e((new DateTime($p['created_at']))->format('j. n. Y')) ?></td>
          <td class="row-actions">
            <a href="posts.php?action=edit&id=<?= (int) $p['id'] ?>">Upravit</a>
            <form method="post" action="posts.php" onsubmit="return confirm('Opravdu smazat příspěvek „<?= e(addslashes($p['title'])) ?>“?');">
              <?= csrf_field() ?>
              <input type="hidden" name="form_action" value="delete">
              <input type="hidden" name="id" value="<?= (int) $p['id'] ?>">
              <button type="submit" class="link-button link-danger">Smazat</button>
            </form>
          </td>
        </tr>
      <?php endforeach; ?>
    </tbody>
  </table>
<?php endif;

render_footer();
