<?php

namespace App\Contracts;

interface PatientContract {

    public function index();
    public function store($params);
    public function update($id, $params);
}
