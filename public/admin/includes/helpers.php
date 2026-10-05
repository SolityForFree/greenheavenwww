<?php
declare(strict_types=1);

// Single source of truth for the image size limit, so every error message
// that can fire for an oversized photo states the same number.
const MAX_IMAGE_BYTES = 1258291; // 1.2 MB
const MAX_IMAGE_LABEL = '1,2 MB';

function e(?string $value): string
{
    return htmlspecialchars($value ?? '', ENT_QUOTES, 'UTF-8');
}

/**
 * When an uploaded request body is larger than post_max_size, PHP silently
 * empties $_POST and $_FILES entirely before the script runs — this detects
 * that case so we can show an accurate error instead of a confusing one
 * about a "missing" CSRF token.
 */
function post_size_exceeded(): bool
{
    return $_SERVER['REQUEST_METHOD'] === 'POST'
        && empty($_POST)
        && empty($_FILES)
        && (int) ($_SERVER['CONTENT_LENGTH'] ?? 0) > 0;
}

function slugify(string $text): string
{
    $map = [
        'á' => 'a', 'č' => 'c', 'ď' => 'd', 'é' => 'e', 'ě' => 'e', 'í' => 'i', 'ň' => 'n',
        'ó' => 'o', 'ř' => 'r', 'š' => 's', 'ť' => 't', 'ú' => 'u', 'ů' => 'u', 'ý' => 'y', 'ž' => 'z',
    ];
    $text = mb_strtolower($text, 'UTF-8');
    $text = strtr($text, $map);
    $text = preg_replace('/[^a-z0-9]+/', '-', $text) ?? '';
    return trim($text, '-');
}

function unique_slug(PDO $pdo, string $base, ?int $excludeId = null): string
{
    $slug = $base !== '' ? $base : 'prispevek';
    $candidate = $slug;
    $i = 2;

    while (true) {
        $sql = 'SELECT id FROM posts WHERE slug = ?';
        $params = [$candidate];
        if ($excludeId !== null) {
            $sql .= ' AND id != ?';
            $params[] = $excludeId;
        }
        $stmt = $pdo->prepare($sql);
        $stmt->execute($params);
        if (!$stmt->fetch()) {
            return $candidate;
        }
        $candidate = $slug . '-' . $i;
        $i++;
    }
}

/**
 * Validates and stores an uploaded post image.
 *
 * @return array{path: ?string, error: ?string} path is the new relative
 *   uploads/... path, or null if no new file was submitted (keep existing)
 *   or the upload failed (see error).
 */
function handle_image_upload(array $file): array
{
    if (!isset($file['error']) || $file['error'] === UPLOAD_ERR_NO_FILE) {
        return ['path' => null, 'error' => null];
    }
    if ($file['error'] === UPLOAD_ERR_INI_SIZE || $file['error'] === UPLOAD_ERR_FORM_SIZE) {
        return ['path' => null, 'error' => 'Obrázek je příliš velký. Maximální povolená velikost je ' . MAX_IMAGE_LABEL . '.'];
    }
    if ($file['error'] !== UPLOAD_ERR_OK) {
        return ['path' => null, 'error' => 'Nahrání obrázku se nezdařilo.'];
    }

    if ($file['size'] > MAX_IMAGE_BYTES) {
        return ['path' => null, 'error' => 'Obrázek je příliš velký. Maximální povolená velikost je ' . MAX_IMAGE_LABEL . '.'];
    }

    $imageInfo = @getimagesize($file['tmp_name']);
    if ($imageInfo === false) {
        return ['path' => null, 'error' => 'Nahraný soubor není platný obrázek.'];
    }

    $extensions = [
        'image/jpeg' => 'jpg',
        'image/png' => 'png',
        'image/webp' => 'webp',
        'image/gif' => 'gif',
    ];
    $mime = $imageInfo['mime'];
    if (!isset($extensions[$mime])) {
        return ['path' => null, 'error' => 'Povolené formáty obrázku jsou JPG, PNG, WEBP a GIF.'];
    }

    $filename = bin2hex(random_bytes(16)) . '.' . $extensions[$mime];
    $destination = __DIR__ . '/../uploads/' . $filename;

    if (!move_uploaded_file($file['tmp_name'], $destination)) {
        return ['path' => null, 'error' => 'Obrázek se nepodařilo uložit na server.'];
    }

    return ['path' => 'uploads/' . $filename, 'error' => null];
}

function delete_uploaded_image(?string $path): void
{
    if (!$path) {
        return;
    }
    $full = __DIR__ . '/../' . $path;
    $uploadsDir = realpath(__DIR__ . '/../uploads');
    $realFull = realpath($full);
    if ($uploadsDir && $realFull && str_starts_with($realFull, $uploadsDir) && is_file($realFull)) {
        unlink($realFull);
    }
}
