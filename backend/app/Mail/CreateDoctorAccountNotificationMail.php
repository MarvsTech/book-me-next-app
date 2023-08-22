<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Queue\SerializesModels;

class CreateDoctorAccountNotificationMail extends Mailable
{
    use Queueable, SerializesModels;

    protected $defaultPassword;
    protected $doctor;

    /**
     * Create a new message instance.
     */
    public function __construct(
        $doctor,
        $defaultPassword,
    ) {
        $this->doctor = $doctor;
        $this->defaultPassword = $defaultPassword;
    }

    /**
     * Build the message.
     */
    public function build()
    {
        return $this->markdown('emails.create_doctor_account_notification', [
            'doctor' => $this->doctor,
            'defaultPassword' => $this->defaultPassword,
            'loginUrl' => config('common.service_domain.' . app()->environment()) . config('common.url.login'),
        ])->subject('Book Me Next App!');
    }
}
