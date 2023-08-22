<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Book Me Next App</title>
</head>
<body>

    <div class="body">
        <p style="color:red;">Hello {{$doctor->firstname}} {{$doctor->middlename}} {{$doctor->lastname}},</p>
        Thank you for joining Book Me Next App.
        <p>We'd like to confirm that your account was created successfully. To access Book Me Next App click the link below.</p>

        <span>Application url: {{ $loginUrl }}</span>
        <p>
            You may use the following credentials: <br>

            Email: {{ $doctor->email }} <br>
            Password: {{$defaultPassword}}
        </p>

        <p>If you experience any issues logging into your account, reach out to us at bookmenext@gmail.com.</p>

        <p>Best,<p>
        <p>The Book Me Next App team<p>
        <p>Gipili(AkoPaba) Medical Clinic</p>
    </div>

</body>
</html>

<style>
    .body {
        border: 1px solid;
    }
</style>
