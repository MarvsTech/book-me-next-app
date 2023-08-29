<?php
namespace App\Repositories;

use DB;
use Carbon\Carbon;
use App\Models\User;
use App\Mail\SampleMail;
use Illuminate\Support\Facades\Auth;
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

    public function getAllAppointmentByID()
    {
        $users = User::where('specialization', 'doctor')->get();
        $appointments = $this->model->with([
            'doctor',
            'patient',
            'doctor_schedule_time',
            'doctor_schedule_date',
            'status'
        ])
        ->where('status_id',1)
        ->select('*', \DB::raw('MONTH(created_at) as month'))
        ->get();

        $data = [];

        foreach($users as $user) {
            $user_appointment = [
                '1' => 0,
                '2' => 0,
                '3' => 0,
                '4' => 0,
                '5' => 0,
                '6' => 0,
                '7' => 0,
                '8' => 0,
                '9' => 0,
                '10' => 0,
                '11' => 0,
                '12' => 0,
            ];
            foreach($appointments as $app) {
                if ($user->id == $app->doctor_id) {
                    $user_appointment[$app->month] = $user_appointment[$app->month] + 1;
                }
            }
            array_push($data, ['doctor_id'=> $user->id, 'months' => $user_appointment]);
        }

        return $data;
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

    public function getAllAppointmentDataByDoctor($roleId)
    {
        return $this->model->with([
            'doctor',
            'patient',
            'doctor_schedule_time',
            'doctor_schedule_date',
            'status'
        ])
        ->select('*', \DB::raw('MONTH(created_at) as month'))
        ->where('doctor_id', $roleId)
        ->get();
    }

    public function getDoctorAppointmentDataByMonth($roleId) {
        return $this->model->with([
            'doctor',
            'patient',
            'doctor_schedule_time',
            'doctor_schedule_date',
            'status'
        ])
        ->select('*', \DB::raw('DATE_FORMAT(created_at, "%Y-%m") as month'))
        ->where('doctor_id', $roleId)
        ->orderBy('created_at', 'asc')
        ->get();
    }

    public function getAllAppointmentByPatient($patientId) {
        return $this->model->with([
            'doctor',
            'patient',
            'doctor_schedule_time',
            'doctor_schedule_date',
            'status'
        ])
        ->where('patient_id', $patientId)
        ->orderBy('created_at', 'asc')
        ->get();
    }

    public function getAllDoctorAppointment($doctorId)
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
        ->where('doctor_id', $doctorId)
        ->get();
    }

    public function getAllDoctorAppointmentSchedule($doctorId, $statusId)
    {
        return $this->model->with([
            'doctor',
            'patient',
            'doctor_schedule_time',
            'doctor_schedule_date',
            'status'
        ])
        ->where('doctor_id', $doctorId)
        ->where('status_id', $statusId)
        ->orderBy('created_at', 'asc')
        ->get();
    }
}
