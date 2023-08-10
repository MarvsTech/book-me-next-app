<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class NotificationSuccessAppointment extends Mailable
{
    use Queueable, SerializesModels;
    use Queueable, SerializesModels;

    public $successAppointmentData;

    /**
     * Create a new message instance.
     */
    public function __construct($successAppointmentData)
    {
        $this->successAppointmentData = $successAppointmentData;
    }

    /**
     * Build the message.
     */
    public function build()
    {
        return $this->from('marvinramos.nutnull@gmail.com')
                    ->subject('Book Me Next App')
                    ->view('emails.success_appointment', ['successAppointmentData' => $this->successAppointmentData]);
    }
}
