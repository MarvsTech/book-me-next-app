<?php

namespace Database\Seeders;

use App\Models\Appointment;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AppointmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Appointment::create([
            'doctor_id' => 2,
            'patient_id' => 3,
            'doctor_schedule_time_id' => 1,
            'doctor_schedule_date_id' => 1,
            'status_id' => 1,
            'remarks' => 'success',
        ]);
        Appointment::create([
            'doctor_id' => 2,
            'patient_id' => 3,
            'doctor_schedule_time_id' => 2,
            'doctor_schedule_date_id' => 2,
            'status_id' => 1,
            'remarks' => 'success',
        ]);
        Appointment::create([
            'doctor_id' => 2,
            'patient_id' => 3,
            'doctor_schedule_time_id' => 3,
            'doctor_schedule_date_id' => 3,
            'status_id' => 2,
            'remarks' => 'pending',
        ]);
        Appointment::create([
            'doctor_id' => 2,
            'patient_id' => 3,
            'doctor_schedule_time_id' => 2,
            'doctor_schedule_date_id' => 2,
            'status_id' => 2,
            'remarks' => 'pending',
        ]);
        Appointment::create([
            'doctor_id' => 2,
            'patient_id' => 3,
            'doctor_schedule_time_id' => 4,
            'doctor_schedule_date_id' => 4,
            'status_id' => 3,
            'remarks' => 'rejected',
        ]);
        Appointment::create([
            'doctor_id' => 2,
            'patient_id' => 3,
            'doctor_schedule_time_id' => 5,
            'doctor_schedule_date_id' => 5,
            'status_id' => 3,
            'remarks' => 'rejected',
        ]);
        Appointment::create([
            'doctor_id' => 2,
            'patient_id' => 3,
            'doctor_schedule_time_id' => 7,
            'doctor_schedule_date_id' => 7,
            'status_id' => 1,
            'remarks' => 'success',
        ]);
        Appointment::create([
            'doctor_id' => 2,
            'patient_id' => 3,
            'doctor_schedule_time_id' => 8,
            'doctor_schedule_date_id' => 8,
            'status_id' => 1,
            'remarks' => 'success',
        ]);
        Appointment::create([
            'doctor_id' => 2,
            'patient_id' => 3,
            'doctor_schedule_time_id' => 1,
            'doctor_schedule_date_id' => 9,
            'status_id' => 2,
            'remarks' => 'pending',
        ]);
        Appointment::create([
            'doctor_id' => 2,
            'patient_id' => 3,
            'doctor_schedule_time_id' => 2,
            'doctor_schedule_date_id' => 10,
            'status_id' => 3,
            'remarks' => 'rejected',
        ]);
    }
}
