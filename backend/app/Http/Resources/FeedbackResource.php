<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FeedbackResource extends JsonResource
{
    public function index()
    {
        return $this->resource;
    }

    public function store()
    {
        return $this->resource;
    }
}
