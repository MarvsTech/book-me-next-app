<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Paypal Payments</title>
</head>
<body>
    <h2>Product: Sample Product</h2>
    <h3>Price: $20</h3>

    <form action="{{ route('paypal.payment') }}" method="POST">
        @csrf
        <input type="hidden" name="price" value="20">
        <button type="submit">Pay with PayPal</button>
    </form>
</body>
</html>
