<?php

namespace App\Contracts;

interface DoctorContract {

    public function index();
    public function store($params);
    public function update($id, $params);
    public function getAllDoctors(string $role);
    public function doctorChangeStatus($id, $params);
}
