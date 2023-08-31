<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DoctorScheduleTimeResource extends JsonResource
{
    public function getAllDoctorScheduleTime()
    {
        return $this->resource;
    }
}
