<?php

namespace Database\Seeders;

use App\Models\DoctorScheduleDate;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DoctorScheduleDateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DoctorScheduleDate::create([
            'doctor_id' => 2,
            'date_available' => '2023-08-01',
        ]);
        DoctorScheduleDate::create([
            'doctor_id' => 2,
            'date_available' => '2023-08-02',
        ]);
        DoctorScheduleDate::create([
            'doctor_id' => 2,
            'date_available' => '2023-08-03',
        ]);
        DoctorScheduleDate::create([
            'doctor_id' => 2,
            'date_available' => '2023-08-04',
        ]);
        DoctorScheduleDate::create([
            'doctor_id' => 2,
            'date_available' => '2023-08-05',
        ]);
        DoctorScheduleDate::create([
            'doctor_id' => 2,
            'date_available' => '2023-08-06',
        ]);
        DoctorScheduleDate::create([
            'doctor_id' => 2,
            'date_available' => '2023-08-07',
        ]);
        DoctorScheduleDate::create([
            'doctor_id' => 2,
            'date_available' => '2023-08-08',
        ]);
        DoctorScheduleDate::create([
            'doctor_id' => 2,
            'date_available' => '2023-08-09',
        ]);
        DoctorScheduleDate::create([
            'doctor_id' => 2,
            'date_available' => '2023-08-10',
        ]);
    }
}
