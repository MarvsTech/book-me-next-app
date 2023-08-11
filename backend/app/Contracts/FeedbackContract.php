<?php

namespace App\Contracts;

interface FeedbackContract {

    public function index();
    public function store($params);
}
