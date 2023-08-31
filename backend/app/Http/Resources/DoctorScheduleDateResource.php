<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DoctorScheduleDateResource extends JsonResource
{
    public function getAllDoctorScheduleDate()
    {
        return $this->resource;
    }
}
