<?php

namespace App\Contracts;

interface RoleContract {

    public function index();
    public function store($params);
    public function update($id, $params);
}
