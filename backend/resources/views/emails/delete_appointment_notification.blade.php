<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Appointment Updated</title>
</head>
<body>
    <h1></h1>
    <p>Dear {{$patient->firstname}} {{$patient->middlename}} {{$patient->lastname}},</p>
    <p>We would like to inform you that your appointment has cancelled successfully at Gipili(AkoPaba) Medical Clinic.</p>
    <p>
        Here are your account details: <br>
        Email: {{$patient->email}} <br>
        Username: {{$patient->email}}
    </p>
    <p>
        Appointment Details: <br>
        Doctor: {{$doctor->firstname}} {{$doctor->middlename}} {{$doctor->lastname}} <br>
        Contact Number: {{$doctor->contact_number}} <br>
        Specialization: {{$doctor->specialization}} <br>
        Address: {{$doctor->room_number}} <br>
        Appointment Date: {{$doctor_schedule_date->date_schedule}} <br>
        Appointment Time: {{$doctor_schedule_time->time_schedule}}
    </p>

    <p>Thank you for choosing Gipili(AkoPaba) Medical Clinic for your healthcare needs. We look forward to seeing you on {{$doctor_schedule_date->date_schedule}}.</p>

    Best regards,

    <p>Book Me Next App Team,</p>
    <p>Gipili(AkoPaba) Medical Clinic</p>
</body>
</html>
