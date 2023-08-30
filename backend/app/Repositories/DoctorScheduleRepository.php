<?php
namespace App\Repositories;

use App\Contracts\DoctorScheduleContract;
use App\Models\DoctorSchedule;
use Carbon\Carbon;

class DoctorScheduleRepository implements DoctorScheduleContract {

    protected $model;

    public function __construct(DoctorSchedule $model)
    {
        $this->model = $model;
    }

    public function index()
    {
        return $this->model->get();
    }

    public function store($params)
    {
        return $this->model->create($params);
    }

    public function update($id, $params)
    {
        return $this->model->update($params);
    }

    public function find($id)
    {
        return $this->model->find($id);
    }

    public function getAllDoctorSchedule($doctorId)
    {
        return $this->model->with([
            'doctor',
        ])
        ->where('doctor_id', $doctorId)
        ->orderBy('created_at', 'asc')
        ->get();
    }
}
