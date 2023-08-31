<?php
namespace App\Services;

use Vonage\Client\Credentials\Basic;
use Vonage\Client;
use Vonage\SMS\Message\SMS;

class SmsService
{
    protected $client;

    public function __construct()
    {
        $basic = new Basic("df0885d0", "cXogSHMikE0dr037");
        $this->client = new Client($basic);
    }

    public function sendSms($to, $message)
    {
        $response = $this->client->sms()->send(
            new SMS($to, 'BOOK ME NEXT', $message)
        );

        $message = $response->current();

        if ($message->getStatus() == 0) {
            return "The message was sent successfully\n";
        } else {
            return "The message failed with status: " . $message->getStatus() . "\n";
        }
    }
}
