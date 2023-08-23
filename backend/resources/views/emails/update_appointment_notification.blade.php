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

        .email-notification-container {
            margin-left: 40px;
            margin-right: 40px;
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

        .sub-closing-greeting {
            margin-top: 0.7%;
        }

        .email-content-item {
            margin-bottom: 5px;
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

            <p class="opening-greeting">Dear {{$patient->firstname}} {{$patient->middlename}} {{$patient->lastname}},</p>
            <p class="email-content">We would like to inform you that your appointment has been successfully updated at Gipili(AkoPaba) Medical Clinic. Below
            are the details of your appointment:</p>
            <p class="email-content">Here are your account details:</p>
            <div class="email-content email-details">
                <ul>
                    <li class="email-content-item"><strong>Email:</strong> {{$patient->email}}</li>
                    <li class="email-content-item"><strong>Username:</strong> {{$patient->email}}</li>
                </ul>
            </div>
            <p class="email-content">Here is you new appointment details:</p>
            <div class="email-content email-details">
                <ul>
                    <li class="email-content-item"><strong>Doctor:</strong> {{$doctor->firstname}} {{$doctor->middlename}} {{$doctor->lastname}}</li>
                    <li class="email-content-item"><strong>Contact Number:</strong> {{$doctor->contact_number}}</li>
                    <li class="email-content-item"><strong>Specialization:</strong> {{$doctor->specialization}}</li>
                    <li class="email-content-item"><strong>Address:</strong> {{$doctor->room_number}}</li>
                    <li class="email-content-item"><strong>Appointment Date:</strong> {{$doctor_schedule_date->date_schedule}}</li>
                    <li class="email-content-item"><strong>Appointment Time:</strong> {{$doctor_schedule_time->time_schedule}}</li>
                </ul>
            </div>
            <p class="email-content">Please ensure that you arrive at least 15 minutes before your scheduled appointment time. If you need to reschedule or
            cancel your appointment, kindly contact us at {{$doctor->contact_number}} or reply to this email at your earliest
            convenience.</p>
            <p class="email-content">We value your time and are committed to providing you with the best medical care possible. If you have any specific
            concerns or questions you would like to address during your appointment, please feel free to let us know in advance.</p>
            <p class="email-content">Thank you for choosing Gipili(AkoPaba) Medical Clinic for your healthcare needs. We look forward to seeing you on
            {{$doctor_schedule_date->date_schedule}}.
            </p>
            
            <p class="closing-greeting">Best regards,</p>
            <p class="closing-greeting">The Book Me Next App Team</p>
            <p class="sub-closing-greeting">Gipili(AkoPaba) Medical Clinic</p>
        </div>
    </div>
</body>

</html>