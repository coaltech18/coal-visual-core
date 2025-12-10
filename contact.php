<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'METHOD_NOT_ALLOWED']);
    exit;
}

header('Access-Control-Allow-Origin: https://coaltech.in');
header('Access-Control-Allow-Headers: Content-Type');

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'INVALID_JSON']);
    exit;
}

$name        = trim($data['name'] ?? '');
$email       = trim($data['email'] ?? '');
$phone       = trim($data['phone'] ?? '');
$company     = trim($data['company'] ?? '');
$budget      = trim($data['budget'] ?? 'Not specified');
$projectType = trim($data['projectType'] ?? 'Not specified');
$message     = trim($data['message'] ?? '');

if ($name === '' || $email === '' || $message === '') {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'MISSING_FIELDS']);
    exit;
}

$to = "management@coaltech.in";
$subject = "New contact from $name via CoAl Tech Website";

$bodyHtml = "
<h2>New Contact from CoAl Tech Website</h2>
<p><strong>Name:</strong> {$name}</p>
<p><strong>Email:</strong> {$email}</p>
<p><strong>Phone:</strong> " . ($phone ?: '-') . "</p>
<p><strong>Company:</strong> " . ($company ?: '-') . "</p>
<p><strong>Budget:</strong> {$budget}</p>
<p><strong>Project Type:</strong> {$projectType}</p>
<p><strong>Message:</strong><br>" . nl2br(htmlspecialchars($message)) . "</p>
";

$from = "management@coaltech.in";

$headers  = "From: CoAl Tech <{$from}>\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

$sent = mail($to, $subject, $bodyHtml, $headers);

if ($sent) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'MAIL_FAILED']);
}
?>

