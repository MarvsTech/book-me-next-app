<?php
namespace App\Repositories;

use DB;
use Carbon\Carbon;
use App\Models\User;
use App\Mail\SampleMail;

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

    public function filterByLoginUser($userId, $roleId) {
        return $this->model->with([
            'doctor',
            'patient',
            'doctor_schedule_time',
            'doctor_schedule_date',
            'status'
        ])
        ->where('patient_id', $userId)
        ->whereRelation('patient', 'role_id', $roleId)
        ->get();
    }
    public function doctorAppointmentData($userId, $roleId) {
        return $this->model->with([
            'doctor',
            'patient',
            'doctor_schedule_time',
            'doctor_schedule_date',
            'status'
        ])
        ->where('doctor_id', $userId)
        ->whereRelation('doctor', 'role_id', $roleId)
        ->get();
    }
    public function getAllAppointmentData() {
        return $this->model->with([
            'doctor',
            'patient',
            'doctor_schedule_time',
            'doctor_schedule_date',
            'status'
        ])
        ->get();
    }

    public function getAllAppointmentDataByMonth()
    {
        return $this->model->with([
            'doctor',
            'patient',
            'doctor_schedule_time',
            'doctor_schedule_date',
            'status'
        ])
        ->select('*', \DB::raw('MONTH(created_at) as month'))
        ->get();
    }
    public function getAllAppointmentChartDataByMonthName()
    {
        return $this->model->with([
            'doctor',
            'patient',
            'doctor_schedule_time',
            'doctor_schedule_date',
            'status'
        ])
        ->select('*', \DB::raw('DATE_FORMAT(created_at, "%Y-%m") as month'))
        ->orderBy('created_at', 'asc')
        ->get();
    }

    public function getAllPatientAppointment($roleId)
    {
        return $this->model->with([
            'doctor',
            'patient',
            'doctor_schedule_time',
            'doctor_schedule_date',
            'status'
        ])->get();
    }
}
