<?php

namespace App\Contracts;

interface DoctorScheduleContract {

    public function index();
    public function store($params);
    public function update($id, $params);
    public function find($id);
    public function getAllDoctorSchedule($doctorId);
}
