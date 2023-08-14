<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Srmklive\PayPal\Services\PayPal as PayPalClient;

class PaypalController extends Controller
{
    public function index()
    {
        return view('payments.paypal');
    }

    public function payment(Request $request)
    {
        $provider = new PayPalClient;
        $provider->setApiCredentials(config('paypal'));
        $accessToken = $provider->getAccessToken();

        $order = $provider->createOrder([
            "intent" => "CAPTURE",
            "application_context" => [
                "return_url" => route('paypal.success'),
                "cancel_url" => route('paypal.cancel'),
            ],
            "purchase_units" => [
                [
                    "amount" => [
                        "currency_code" => "USD",
                        "value" => $request->price,
                    ]
                ]
            ]
        ]);

        if ($order['id'] != null) {
            foreach ($order['links'] as $link) {
                if ($link['rel'] === 'approve') { // Check for the correct 'rel' value
                    return redirect()->away($link['href']);
                }
            }
        } else {
            return redirect()->route('paypal.cancel');
        }
    }

    public function success(Request $request)
    {
        $provider = new PayPalClient;
        $provider->setApiCredentials(config('paypal'));
        $accessToken = $provider->getAccessToken();

        $response = $provider->capturePaymentOrder($request->token);
        if ($response['status'] === 'COMPLETED') {
            return "Successfully ordered";
        } else {
            return redirect()->route('paypal.cancel');
        }
    }

    public function cancel()
    {
        return "cancel ordered!";
    }
}
