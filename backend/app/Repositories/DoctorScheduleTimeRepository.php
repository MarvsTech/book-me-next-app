<?php
namespace App\Repositories;

use App\Contracts\DoctorScheduleTimeContract;
use App\Models\DoctorScheduleTime;
use Carbon\Carbon;

class DoctorScheduleTimeRepository implements DoctorScheduleTimeContract {

    protected $model;

    public function __construct(DoctorScheduleTime $model)
    {
        $this->model = $model;
    }

    public function getAllDoctorScheduleTime()
    {
        return $this->model->get();
    }
}
