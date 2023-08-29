<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class DoctorSchedule extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'doctor_id',
        'title',
        'description',
        'schedule_date',
        'time_start',
        'time_end',
    ];

    public function doctor() {
        return $this->belongsTo(User::class, 'doctor_id');
    }
}
