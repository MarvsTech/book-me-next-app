<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Paypal Payments</title>
    <style>
        * {
            padding: 5px !important;
            margin: 5px !important;
            box-sizing: border-box;
        }

        div {
            align-items: center;
            width: 30%;
            justify-content: center;
            position: absolute;
            left: 35%;
            text-align: center;
            background: #DEDEDE;
            top: 30%;
            border-radius: 10px;
        }

        h3 {
            font-weight: 500;
        }

        button {
            font-size: 15px;
            border-radius: 5px;
            border: none;
            padding: 10px;
            background: #00AACF;
            color: #fff;
        }
    </style>
</head>
<body>
    <div>
        <h2>Booking Appointment</h2>
        <h3>Price: $2.00</h3>

        <form action="{{ route('paypal.payment') }}" method="POST">
            @csrf
            <input type="hidden" name="price" value="20">
            <button type="submit">Pay with PayPal</button>
        </form>
    </div>
</body>
</html>
