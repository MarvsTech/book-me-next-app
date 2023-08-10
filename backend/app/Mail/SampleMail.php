<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class SampleMail extends Mailable
{
    use Queueable, SerializesModels;

    protected $user;
    protected $doctor;

    /**
     * Create a new message instance.
     */
    public function __construct($user,$doctor)
    {
        $this->user = $user;
        $this->doctor = $doctor;
    }

    public function build()
    {
        return $this->markdown('emails.sample_mail', [
            'user' => $this->user,
            'doctor' => $this->doctor,
        ])->subject('Appointment Mail');
    }
}
