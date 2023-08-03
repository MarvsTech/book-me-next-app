<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class DoctorScheduleTime extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'doctor_id',
        'time_available',
    ];

    public function doctor() {
        return $this->belongsTo(User::class, 'doctor_id');
    }
}
