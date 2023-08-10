<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ $successAppointmentData['title'] }}</title>
</head>
<body>
    <h1>{{ $successAppointmentData['title'] }} !</h1>
    <p>Dear {{ $successAppointmentData['patient_name'] }},</p>
    <p>We are pleased to confirm that your appointment has been successfully scheduled at Gipili(AkoPaba) Medical Clinic. Below are the details of your appointment:</p>
    <p>Here are your account details:</p>
    <ul>
        <li><strong>Email:</strong> {{ $successAppointmentData['patient_email'] }}</li>
        <li><strong>Username:</strong> {{ $successAppointmentData['patient_username'] }}</li>
    </ul>
    <p>Here are your appointment details:</p>
    <ul>
        <li><strong>Date:</strong> {{ $successAppointmentData['date'] }}</li>
        <li><strong>Doctor:</strong> {{ $successAppointmentData['doctor_name'] }}</li>
        <li><strong>Contact Number:</strong> {{ $successAppointmentData['doctor_contact_number'] }}</li>
        <li><strong>Specialization:</strong> {{ $successAppointmentData['doctor_specialization'] }}</li>
        <li><strong>Address:</strong> {{ $successAppointmentData['doctor_room_number'] }}</li>
        <li><strong>Appointment Date:</strong> {{ $successAppointmentData['patient_date_schedule'] }}</li>
        <li><strong>Appointment Time:</strong> {{ $successAppointmentData['patient_time_schedule'] }}</li>
    </ul>
    <p>Please ensure that you arrive at least 15 minutes before your scheduled appointment time. If you need to reschedule or cancel your appointment, kindly contact us at {{ $successAppointmentData['doctor_contact_number'] }} or reply to this email at your earliest convenience.</p>
    <p>We value your time and are committed to providing you with the best medical care possible. If you have any specific concerns or questions you would like to address during your appointment, please feel free to let us know in advance.</p>
    <p>Thank you for choosing Gipili(AkoPaba) Medical Clinic for your healthcare needs. We look forward to seeing you on {{ $successAppointmentData['patient_date_schedule'] }}.</p>

    Best regards,

    <p>Book Me Next App Team,</p>
    <p>Gipili(AkoPaba) Medical Clinic</p>
</body>
</html>
