<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'role_id' => 1,
            'gender_id' => 1,
            'firstname' => "admin",
            'lastname' => "admin",
            'middlename' => "admin",
            'specialization' => "admininistrator",
            'contact_number' => "090255441352",
            'address' => "admin",
            'email' => "admin@admin.com",
            'password' => Hash::make('admin'),
            'room_number' => "admin-04",
            'birthday' => '2023-08-10',
            'profile' => "admin.jpg",
        ]);
        User::create([
            'role_id' => 2,
            'gender_id' => 1,
            'firstname' => "doctor",
            'lastname' => "doctor",
            'middlename' => "doctor",
            'specialization' => "doctor",
            'contact_number' => "090255441352",
            'address' => "doctor",
            'email' => "doctor@doctor.com",
            'password' => Hash::make('doctor'),
            'room_number' => "doctor-04",
            'birthday' => '2023-08-10',
            'profile' => "doctor.jpg",
        ]);
        User::create([
            'role_id' => 3,
            'gender_id' => 1,
            'firstname' => "patient",
            'lastname' => "patient",
            'middlename' => "patient",
            'specialization' => "patientinistrator",
            'contact_number' => "090255441352",
            'address' => "patient",
            'email' => "patient@patient.com",
            'password' => Hash::make('patient'),
            'room_number' => "patient-04",
            'birthday' => '2023-08-10',
            'profile' => "patient.jpg",
        ]);
    }
}
