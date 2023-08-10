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

    protected $user;
    protected $doctor;
    protected $patient;

    /**
     * Create a new message instance.
     */
    public function __construct($user,$doctor,$patient)
    {
        $this->user = $user;
        $this->doctor = $doctor;
        $this->patient = $patient;
    }

    public function build()
    {
        return $this->markdown('emails.success_appointment', [
            'user' => $this->user,
            'doctor' => $this->doctor,
            'patient' => $this->patient,
        ])->subject('Appointment Mail');
    }
}
