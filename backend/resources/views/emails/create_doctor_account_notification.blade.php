<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Book Me Next App</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        * {
            font-family: 'Montserrat', sans-serif;
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }

        .email-notifications-header, .email-notification-container, .horizontal-line {
            display: flex;
            justify-content: center;
            align-items: center;
            letter-spacing: 0.75px;
        }

        .logo-email h1 {
            font-size: 20px;
            background: #00AACF;
            width: 100vw;
            height: 10vh;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
        }

        .email-notifications-header h1 {
            margin: 2.5%;
        }

        .horizontal-line hr {
            width: 70vw;
            margin-bottom: 1.5%;
        }

        .opening-greeting {
            margin-bottom: 2.5%;
        }

        .email-content {
            margin-left: 3%;
            margin-bottom: 1.5%;
        }

        .email-details {
            background: #00AACF;
            color: #fff;
            margin-bottom: 1.5%;
        }

        .email-details ul {
            list-style-type: none;
            padding: 1.5%;
            padding-left: 1.5%;
        }

        .closing-greeting {
            margin-top: 1%;
            padding-top: 1%;
        }

        .closing-greeting br {
            margin-top: 1.5%;
        }

    </style>
</head>
<body>
    <div class="logo-email">
        <h1>BOOKMENEXT</h1>
    </div>

    <div class="email-notifications-header">
        <h1>Welcome to Book Me Next App</h1>
    </div>

    <div class="horizontal-line">
        <hr>
    </div>
    
    <div class="email-notification-container">
        <div class="email-notification-content">
            <p class="opening-greeting">Hello {{$doctor->firstname}} {{$doctor->middlename}} {{$doctor->lastname}},</p>
            <p class="email-content">Thank you for joining Book Me Next App.</p>
            <p class="email-content">We'd like to confirm that your account was created successfully. To access Book Me Next App click the link below.</p>
            <p class="email-content">You may use the following credentials:</p>
            <div class="email-content email-details">
                <ul>
                    <li><strong>Application url:</strong> {{ $loginUrl }}</li>
                    <li><strong>Email:</strong> {{ $doctor->email }}</li>
                    <li><strong>Password:</strong> {{$defaultPassword}}</li>
                </ul>
            </div>
            <p class="email-content">If you experience any issues logging into your account, reach out to us at bookmenext@gmail.com.</p>
            <p class="email-content">Thank you for using Book Me Next App!</p>
            <p class="closing-greeting">Best regards,</p>
            <p class="closing-greeting">The Book Me Next App Team</p>
        </div>
    </div>
</body>
</html>
