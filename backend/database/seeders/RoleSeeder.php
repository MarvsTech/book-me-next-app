<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Role::create([
            'role_name' => 'Admin',
            'description' => 'Administrator Page',
        ]);
        Role::create([
            'role_name' => 'Doctor',
            'description' => 'Doctor Page',
        ]);
        Role::create([
            'role_name' => 'Patient',
            'description' => 'Patient Page',
        ]);
    }
}
