<?php
namespace App\Repositories;

use App\Contracts\DoctorContract;
use App\Models\User;
use Carbon\Carbon;

class DoctorRepository implements DoctorContract {

    protected $model;

    public function __construct(User $model)
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
