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

function encodeSubject(string $subject): string {
    return '=?UTF-8?B?' . base64_encode($subject) . '?=';
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

$baseHeaders  = "MIME-Version: 1.0\r\n";
$baseHeaders .= "Content-Type: text/plain; charset=UTF-8\r\n";
$baseHeaders .= "Content-Transfer-Encoding: 8bit\r\n";

// --- notification to Green Heaven ---
$notifySubject = encodeSubject("Nová zpráva z webu – $service");
$notifyText    = "Nová zpráva z kontaktního formuláře\n";
$notifyText   .= str_repeat('-', 40) . "\n";
$notifyText   .= "Jméno:   $name\n";
$notifyText   .= "E-mail:  $email\n";
$notifyText   .= "Telefon: $phone\n";
if ($company) $notifyText .= "Firma:   $company\n";
$notifyText   .= "Služba:  $service\n";
if ($message) $notifyText .= "\nZpráva:\n$message\n";

$notifyHeaders  = "From: Green Heaven <info@greenheaven.cz>\r\n";
$notifyHeaders .= "Reply-To: $name <$email>\r\n";
$notifyHeaders .= $baseHeaders;

$sent = mail('info@greenheaven.cz', $notifySubject, $notifyText, $notifyHeaders);

if (!$sent) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Mail delivery failed']);
    exit;
}

// --- confirmation to the sender ---
$confirmSubject = encodeSubject('Potvrzení přijetí zprávy – Green Heaven');
$confirmText    = "Dobrý den, $name,\n\n";
$confirmText   .= "děkujeme za Vaši zprávu. Přijali jsme Váš poptávkový formulář ";
$confirmText   .= "a budeme Vás co nejdříve kontaktovat.\n\n";
$confirmText   .= "Shrnutí Vaší zprávy:\n";
$confirmText   .= str_repeat('-', 40) . "\n";
$confirmText   .= "Jméno:   $name\n";
$confirmText   .= "Telefon: $phone\n";
if ($company) $confirmText .= "Firma:   $company\n";
$confirmText   .= "Služba:  $service\n";
if ($message) $confirmText .= "\nZpráva:\n$message\n";
$confirmText   .= str_repeat('-', 40) . "\n\n";
$confirmText   .= "S pozdravem,\nTým Green Heaven\n";
$confirmText   .= "info@greenheaven.cz | www.greenheaven.cz\n\n";
$confirmText   .= "---\n";
$confirmText   .= "Tento e-mail byl odeslán automaticky. Pokud jste tento formulář nevyplnili, ";
$confirmText   .= "prosím ignorujte tuto zprávu.\n";
$confirmText   .= "Upozornění: Tento potvrzovací e-mail může ve Vašem poštovním klientovi ";
$confirmText   .= "skončit ve složce Spam nebo Hromadná pošta. Pokud jej nevidíte ve složce ";
$confirmText   .= "Doručená pošta, zkontrolujte prosím tyto složky.\n";

$confirmHeaders  = "From: Green Heaven <info@greenheaven.cz>\r\n";
$confirmHeaders .= "Reply-To: Green Heaven <info@greenheaven.cz>\r\n";
$confirmHeaders .= $baseHeaders;

// send confirmation but don't fail the request if it doesn't go through
mail($email, $confirmSubject, $confirmText, $confirmHeaders);

echo json_encode([
    'success' => true,
    'notice'  => 'Potvrzovací e-mail byl odeslán. Pokud jej nevidíte v doručené poště, zkontrolujte složku Spam nebo Hromadná pošta.',
]);
