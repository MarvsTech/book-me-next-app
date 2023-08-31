<?php
namespace App\Repositories;

use App\Contracts\DoctorScheduleDateContract;
use App\Models\DoctorScheduleDate;
use Carbon\Carbon;

class DoctorScheduleDateRepository implements DoctorScheduleDateContract {

    protected $model;

    public function __construct(DoctorScheduleDate $model)
    {
        $this->model = $model;
    }

    public function getAllDoctorScheduleDate()
    {
        return $this->model->get();
    }
}
