<?php

namespace App\Contracts;

interface PatientContract {

    public function index();
    public function store($params);
    public function update($id, $params);
    public function getUserProfile($userId);
    public function updateUserProfile($userId, $params);
}
