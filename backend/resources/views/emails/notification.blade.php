<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>{{ $mailData['title'] }}</title>
</head>
<body>
    <h1>Welcome to Book Me Next App!</h1>
    <p>Dear {{ $mailData['client_name'] }},</p>
    <p>{{ $mailData['message'] }}</p>
    <p>Here are your account details:</p>
    <ul>
        <li><strong>Email:</strong> {{ $mailData['email'] }}</li>
        <li><strong>Username:</strong> {{ $mailData['username'] }}</li>
        <li><strong>Date:</strong> {{ $mailData['date'] }}</li>
    </ul>
    <p>If you have any questions or need assistance, feel free to contact our support team.</p>
    <p>Thank you for using Book Me Next App!</p>
    <p>
        Best regards,<br>
        The Book Me Next App Team
    </p>
</body>
</html>
