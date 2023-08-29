<?php

namespace App\Providers;

// CONTRACTS
use App\Contracts\RoleContract;
use App\Contracts\AppointmentContract;
use App\Contracts\DoctorContract;
use App\Contracts\PatientContract;
use App\Contracts\FeedbackContract;
use App\Contracts\DoctorScheduleContract;

// REPOSITORY
use App\Repositories\RoleRepository;
use App\Repositories\AppointmentRepository;
use App\Repositories\DoctorRepository;
use App\Repositories\PatientRepository;
use App\Repositories\FeedbackRepository;
use App\Repositories\DoctorScheduleRepository;

use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    protected $repositories = [
        RoleContract::class => RoleRepository::class,
        AppointmentContract::class => AppointmentRepository::class,
        DoctorContract::class => DoctorRepository::class,
        PatientContract::class => PatientRepository::class,
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
