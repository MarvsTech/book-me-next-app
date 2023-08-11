<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Appointment Created</title>
</head>
<body>
    <h1></h1>
    <p>Dear {{$patient->firstname}} {{$patient->middlename}} {{$patient->lastname}},</p>
    <p>We are pleased to confirm that your appointment has been successfully created at Gipili(AkoPaba) Medical Clinic. Below are the details of your appointment:</p>
    <p>
        Here are your account details: <br>
          Email: {{$patient->email}} <br>
          Username: {{$patient->email}}
    </p>
    <p>
        Here are your appointment details: <br>
          Doctor: {{$doctor->firstname}} {{$doctor->middlename}} {{$doctor->lastname}} <br>
          Contact Number: {{$doctor->contact_number}} <br>
          Specialization: {{$doctor->specialization}} <br>
          Address: {{$doctor->room_number}} <br>
          Appointment Date: {{$doctor_schedule_date->date_schedule}} <br>
          Appointment Time: {{$doctor_schedule_time->time_schedule}}
    </p>
    <p>Please ensure that you arrive at least 15 minutes before your scheduled appointment time. If you need to reschedule or cancel your appointment, kindly contact us at {{$doctor->contact_number}} or reply to this email at your earliest convenience.</p>
    <p>We value your time and are committed to providing you with the best medical care possible. If you have any specific concerns or questions you would like to address during your appointment, please feel free to let us know in advance.</p>
    <p>Thank you for choosing Gipili(AkoPaba) Medical Clinic for your healthcare needs. We look forward to seeing you on {{$doctor_schedule_date->date_schedule}}.</p>

    Best regards,

    <p>Book Me Next App Team,</p>
    <p>Gipili(AkoPaba) Medical Clinic</p>
</body>
</html>
