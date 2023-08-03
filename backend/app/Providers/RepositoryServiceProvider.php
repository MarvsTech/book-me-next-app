<?php

namespace App\Providers;

// CONTRACTS
use App\Contracts\RoleContract;

// REPOSITORY
use App\Repositories\RoleRepository;

use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    protected $repositories = [
        RoleContract::class => RoleRepository::class,
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
