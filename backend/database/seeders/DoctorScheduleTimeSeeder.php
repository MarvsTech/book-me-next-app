<?php

namespace Database\Seeders;

use App\Models\DoctorScheduleTime;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DoctorScheduleTimeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DoctorScheduleTime::create([
            'doctor_id' => 2,
            'time_available' => '08:00:00',
        ]);
        DoctorScheduleTime::create([
            'doctor_id' => 2,
            'time_available' => '09:00:00',
        ]);
        DoctorScheduleTime::create([
            'doctor_id' => 2,
            'time_available' => '10:00:00',
        ]);
        DoctorScheduleTime::create([
            'doctor_id' => 2,
            'time_available' => '11:00:00',
        ]);
        DoctorScheduleTime::create([
            'doctor_id' => 2,
            'time_available' => '12:00:00',
        ]);
        DoctorScheduleTime::create([
            'doctor_id' => 2,
            'time_available' => '13:00:00',
        ]);
        DoctorScheduleTime::create([
            'doctor_id' => 2,
            'time_available' => '14:00:00',
        ]);
        DoctorScheduleTime::create([
            'doctor_id' => 2,
            'time_available' => '15:00:00',
        ]);
    }
}
