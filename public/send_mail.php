<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

$body = file_get_contents('php://input');
$data = json_decode($body, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid request']);
    exit;
}

function clean(string $val): string {
    return htmlspecialchars(strip_tags(trim($val)), ENT_QUOTES, 'UTF-8');
}

$name    = clean($data['name']    ?? '');
$email   = filter_var(trim($data['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$phone   = clean($data['phone']   ?? '');
$company = clean($data['company'] ?? '');
$service = clean($data['service'] ?? '');
$message = clean($data['message'] ?? '');

if (!$name || !$email || !$phone || !$service) {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => 'Missing required fields']);
    exit;
}

$to      = 'info@greenheaven.cz';
$subject = '=?UTF-8?B?' . base64_encode("Nová zpráva z webu – $service") . '?=';

$text  = "Nová zpráva z kontaktního formuláře\n";
$text .= str_repeat('-', 40) . "\n";
$text .= "Jméno:   $name\n";
$text .= "E-mail:  $email\n";
$text .= "Telefon: $phone\n";
if ($company) $text .= "Firma:   $company\n";
$text .= "Služba:  $service\n";
if ($message) {
    $text .= "\nZpráva:\n$message\n";
}

$headers  = "From: Green Heaven <info@greenheaven.cz>\r\n";
$headers .= "Reply-To: $name <$email>\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "Content-Transfer-Encoding: 8bit\r\n";

$sent = mail($to, $subject, $text, $headers);

if ($sent) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Mail delivery failed']);
}
