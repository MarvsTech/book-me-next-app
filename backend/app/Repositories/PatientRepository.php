<?php
namespace App\Repositories;

use App\Contracts\PatientContract;
use App\Models\User;
use Carbon\Carbon;

class PatientRepository implements PatientContract {

    protected $model;

    public function __construct(User $model)
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

    public function update($id, $params)
    {
        return $this->model->update($params);
    }

    public function getUserProfile($userId)
    {
        return $this->model->where('id', $userId)->first();
    }

    public function updateUserProfile($userId, $data)
    {
        $userProfile = $this->model->where('user_id', $userId)->first();

        if (!$userProfile) {
            // Handle error
        }

        $userProfile->update($data);

        return $userProfile;
    }
}
