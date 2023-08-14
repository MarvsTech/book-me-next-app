<?php

namespace App\Contracts;

interface DoctorContract {

    public function index();
    public function store($params);
    public function update($id, $params);
}
