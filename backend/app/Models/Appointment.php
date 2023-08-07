<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Appointment extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'doctor_id',
        'patient_id',
        'doctor_schedule_time_id',
        'doctor_schedule_date_id',
        'status_id',
        'remarks',
    ];

    public function status() {
        return $this->belongsTo(Status::class, 'status_id');
    }

    public function doctor_schedule_time() {
        return $this->belongsTo(DoctorScheduleTime::class, 'doctor_schedule_time_id');
    }

    public function doctor_schedule_date() {
        return $this->belongsTo(DoctorScheduleDate::class, 'doctor_schedule_date_id');
    }

    public function doctor() {
        return $this->belongsTo(User::class, 'doctor_id');
    }

    public function patient() {
        return $this->belongsTo(User::class, 'patient_id');
    }
}
