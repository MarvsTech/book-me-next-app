<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Queue\SerializesModels;

class CreateAppointmentNotificationMail extends Mailable
{
    use Queueable, SerializesModels;

    protected $patient;
    protected $doctor;
    protected $appointment;
    protected $doctor_schedule_time;
    protected $doctor_schedule_date;

    /**
     * Create a new message instance.
     */
    public function __construct(
        $appointment,
        $patient,
        $doctor,
        $doctor_schedule_time,
        $doctor_schedule_date,
    ) {
        $this->patient = $patient;
        $this->doctor = $doctor;
        $this->appointment = $appointment;
        $this->doctor_schedule_time = $doctor_schedule_time;
        $this->doctor_schedule_date = $doctor_schedule_date;
    }

    /**
     * Build the message.
     */
    public function build()
    {
        return $this->markdown('emails.create_appointment_notification', [
            'patient' => $this->patient,
            'doctor' => $this->doctor,
            'appointment' => $this->appointment,
            'doctor_schedule_time' => $this->doctor_schedule_time,
            'doctor_schedule_date' => $this->doctor_schedule_date,
        ])->subject('Book Me Next App!');
    }
}
