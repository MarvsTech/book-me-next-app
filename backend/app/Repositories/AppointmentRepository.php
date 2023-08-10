<?php
namespace App\Repositories;

use Carbon\Carbon;
use App\Models\User;
use App\Models\Appointment;
use App\Mail\NotificationMail;

use Illuminate\Support\Facades\Mail;
use App\Contracts\AppointmentContract;
use App\Mail\NotificationSuccessAppointment;
use Illuminate\Contracts\Database\Eloquent\Builder;

class AppointmentRepository implements AppointmentContract {

    protected $model;

    public function __construct(Appointment $model)
    {
        $this->model = $model;
    }

    public function index()
    {
        return $this->model->get();
    }

    public function store($params)
    {
        $user = $this->model->create($params);
        $user->load([
            'doctor',
            'patient',
            'doctor_schedule_time',
            'doctor_schedule_date',
        ]);
        $doctor_name = $user->doctor->firstname . ' ' . $user->doctor->middlename . ' ' . $user->doctor->lastname;
        $patient_name = $user->patient->firstname . ' ' . $user->patient->middlename . ' ' . $user->patient->lastname;

        $successAppointmentData = [
            'doctor_name' => $doctor_name,
            'doctor_contact_number' => $user->patient->contact_number,
            'doctor_email' => $user->patient->email,
            'doctor_specialization' => $user->patient->specialization,
            'doctor_room_number' => $user->patient->room_number,

            'patient_name' => $patient_name,
            'patient_email' => $user->patient->email,
            'patient_username' => $user->patient->email,
            'patient_time_schedule' => $user->doctor_schedule_time->time_available,
            'patient_date_schedule' => $user->doctor_schedule_date->date_available,

            'date' => $user->patient->created_at->format('F j, Y'),

            'title' => 'Appointment Confirmation for Gipili(AkoPaba) Medical Clinic',
            'message' => 'Your appointment has been successfully created. Thank you for using Book Me Next App!',
        ];
        Mail::to($user->patient->email)->send(new NotificationSuccessAppointment($successAppointmentData));
    }

    public function update($id, $params)
    {
        return $this->model->update($params);
    }
}
