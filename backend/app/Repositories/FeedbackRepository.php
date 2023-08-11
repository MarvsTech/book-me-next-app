<?php
namespace App\Repositories;

use App\Contracts\FeedbackContract;
use App\Models\Feedback;
use Carbon\Carbon;

class FeedbackRepository implements FeedbackContract {

    protected $model;

    public function __construct(Feedback $model)
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
}
