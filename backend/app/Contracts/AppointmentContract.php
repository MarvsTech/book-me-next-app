<?php

namespace App\Contracts;

interface AppointmentContract {

    public function index();
    public function store($params);
    public function update($id, $params);
}
