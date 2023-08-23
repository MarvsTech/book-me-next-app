<?php

namespace App\Contracts;

interface AppointmentContract {

    public function index();
    public function store($params);
    public function update($id, $params);
    public function delete($id);
    public function filterByLoginUser($id, $roleId);
}
