<?php

namespace App\Providers;

// CONTRACTS
use App\Contracts\RoleContract;
use App\Contracts\AppointmentContract;
use App\Contracts\DoctorContract;
use App\Contracts\PatientContract;
use App\Contracts\FeedbackContract;
use App\Contracts\DoctorScheduleContract;
use App\Contracts\DoctorScheduleDateContract;
use App\Contracts\DoctorScheduleTimeContract;

// REPOSITORY
use App\Repositories\RoleRepository;
use App\Repositories\AppointmentRepository;
use App\Repositories\DoctorRepository;
use App\Repositories\PatientRepository;
use App\Repositories\FeedbackRepository;
use App\Repositories\DoctorScheduleRepository;
use App\Repositories\DoctorScheduleDateRepository;
use App\Repositories\DoctorScheduleTimeRepository;

use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    protected $repositories = [
        RoleContract::class => RoleRepository::class,
        AppointmentContract::class => AppointmentRepository::class,
        DoctorContract::class => DoctorRepository::class,
        PatientContract::class => PatientRepository::class,
        DoctorScheduleTimeContract::class => DoctorScheduleTimeRepository::class,
        DoctorScheduleDateContract::class => DoctorScheduleDateRepository::class,
        DoctorScheduleContract::class => DoctorScheduleRepository::class,
        FeedbackContract::class => FeedbackRepository::class,
    ];

    /**
     * Register services.
     */
    public function register(): void
    {
        foreach($this->repositories as $contract => $repository) {
            $this->app->singleton($contract,$repository);
        }
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
