<?php
declare(strict_types=1);

require_once __DIR__ . '/admin/includes/db.php';
require_once __DIR__ . '/admin/includes/helpers.php';

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

function iso_date(string $mysqlDatetime): string
{
    $dt = DateTime::createFromFormat('Y-m-d H:i:s', $mysqlDatetime);
    return $dt ? $dt->format(DateTime::ATOM) : $mysqlDatetime;
}

try {
    $pdo = db();
} catch (Throwable $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Database unavailable']);
    exit;
}

$slug = isset($_GET['slug']) ? trim((string) $_GET['slug']) : null;

if ($slug !== null) {
    $stmt = $pdo->prepare(
        'SELECT slug, title, content, image_path, created_at FROM posts WHERE slug = ? AND published = 1'
    );
    $stmt->execute([$slug]);
    $post = $stmt->fetch();

    if (!$post) {
        http_response_code(404);
        echo json_encode(['error' => 'Post not found']);
        exit;
    }

    echo json_encode([
        'slug' => $post['slug'],
        'title' => $post['title'],
        'image' => $post['image_path'] ? '/admin/' . $post['image_path'] : null,
        'imageAlt' => $post['title'],
        'date' => iso_date($post['created_at']),
        'content' => $post['content'],
        'excerpt' => make_excerpt($post['content']),
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$posts = $pdo->query(
    'SELECT slug, title, content, image_path, created_at FROM posts WHERE published = 1 ORDER BY created_at DESC'
)->fetchAll();

echo json_encode(array_map(static fn (array $p) => [
    'slug' => $p['slug'],
    'title' => $p['title'],
    'image' => $p['image_path'] ? '/admin/' . $p['image_path'] : null,
    'imageAlt' => $p['title'],
    'date' => iso_date($p['created_at']),
    'excerpt' => make_excerpt($p['content']),
], $posts), JSON_UNESCAPED_UNICODE);
