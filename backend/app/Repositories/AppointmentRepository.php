<?php
namespace App\Repositories;

use App\Contracts\AppointmentContract;
use App\Models\Appointment;
use Carbon\Carbon;

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
        return $this->model->create($params);
    }

    public function update($id, $params)
    {
        return $this->model->update($params);
    }
}
