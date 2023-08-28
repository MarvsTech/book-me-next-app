<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AppointmentResource extends JsonResource
{
    public function index()
    {
        return $this->resource;
    }

    public function store()
    {
        return $this->resource;
    }

    public function update()
    {
        return $this->resource;
    }

    public function destroy()
    {
        return $this->resource;
    }

    public function filterByLoginUser()
    {
        return $this->resource;
    }
    public function doctorAppointmentData()
    {
        return $this->resource;
    }
    public function getAllAppointmentData()
    {
        return $this->resource;
    }
    public function getAllAppointmentDataByMonth()
    {
        return $this->resource;
    }
    public function getAllAppointmentChartDataByMonthName()
    {
        return $this->resource;
    }
    public function getAllAppointmentDataByDoctor()
    {
        return $this->resource;
    }

    public function getDoctorAppointmentDataByMonth()
    {
        return $this->resource;
    }

    public function getAllAppointmentByPatient()
    {
        return $this->resource;
    }

    public function getAllDoctorAppointment()
    {
        return $this->resource;
    }

    public function getAllDoctorAppointmentSchedule()
    {
        return $this->resource;
    }
}
