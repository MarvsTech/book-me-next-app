<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Book Me Next App</title>
</head>
<body>
    <h1>Welcome to Book Me Next App</h1>
    <p>Dear {{$user->firstname}} {{$user->middlename}} {{$user->lastname}},</p>
    <p>Your appointment has been successfully created.</p>
    <p>Here are your account details:</p>
    <ul>
        <li><strong>Email:</strong> {{$user->email}}</li>
        <li><strong>Username:</strong> {{$user->email}}</li>
        <li><strong>Date:</strong> {{$user->created_at}}</li>
    </ul>
    <p>If you have any questions or need assistance, feel free to contact our support team.</p>
    <p>Thank you for using Book Me Next App!</p>
    <p>
        Best regards,<br>
        The Book Me Next App Team
    </p>
</body>
</html>
