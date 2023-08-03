<?php
namespace App\Repositories;

use App\Contracts\RoleContract;
use App\Models\Role;
use Carbon\Carbon;

class RoleRepository implements RoleContract {

    protected $model;

    public function __construct(Role $model)
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
