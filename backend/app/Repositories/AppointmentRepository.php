<?php
namespace App\Repositories;

use Carbon\Carbon;
use App\Models\User;
use App\Models\Appointment;
use App\Mail\NotificationMail;

use Illuminate\Support\Facades\Mail;
use App\Contracts\AppointmentContract;
use App\Mail\NotificationSuccessAppointment;
use App\Mail\SampleMail;
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
        $user =  $this->model->create($params);
        $user->load([
            'doctor',
            'patient',
            'doctor_schedule_time',
            'doctor_schedule_date',
        ]);

        return $user;
    }

    public function update($id, $params)
    {
        $this->model->where('id', $id)->update($params);
        $updatedAppointment = $this->model->findOrFail($id);

        $updatedAppointment->load([
            'doctor',
            'patient',
            'doctor_schedule_time',
            'doctor_schedule_date',
        ]);

        return $updatedAppointment;
    }

    public function delete($id)
    {
        $appointment = $this->model->findOrFail($id);
        $appointment->delete($id);

        return $appointment;
    }
}
