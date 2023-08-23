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
}
