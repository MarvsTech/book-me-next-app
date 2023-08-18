<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\FeedbackController;
use App\Http\Controllers\AppointmentController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::controller(LoginController::class)->group(function(){
    Route::post('signup','signup');
    Route::get('login','login');
    Route::post('login','login')->name('login');
});

Route::middleware('auth:sanctum')->group(function () {

    Route::get('/home', function () {
        if (auth()->check()) {
            $roleId = auth()->user()->role_id;
            $routeName = '';

            switch ($roleId) {
                case 1:
                    $routeName = 'admin.dashboard';
                    break;
                case 2:
                    $routeName = 'doctor.dashboard';
                    break;
                case 3:
                    $routeName = 'patient.dashboard';
                    break;
                default:
                    return redirect()->route('error.dashboard');
            }

            return redirect()->route($routeName);
        }
    });

    // Routes for role: Admin
    Route::middleware('role:Admin')->group(function () {
        Route::prefix('admin')->name('admin.')->group(function () {
            Route::get('dashboard', [AdminController::class, 'index'])->name('dashboard');
            Route::apiResource('role', RoleController::class)->only([
                'index', 'store', 'show', 'update', 'destroy'
            ]);
            Route::apiResource('appointment', AppointmentController::class)->only([
                'index', 'store', 'show', 'update', 'destroy'
            ]);
            Route::get('/doctor/all', [DoctorController::class, 'getAllDoctors']);
            Route::apiResource('doctor', DoctorController::class)->only([
                'index', 'store', 'show', 'update', 'destroy'
            ]);
            Route::apiResource('patient', PatientController::class)->only([
                'index', 'store', 'show', 'update', 'destroy'
            ]);
            Route::apiResource('feedback', FeedbackController::class)->only([
                'index', 'store'
            ]);
            Route::controller(LoginController::class)->group(function () {
                Route::get('profile', 'profile');
                Route::post('signout', 'signout');
                Route::put('updateProfile', 'updateProfile');
            });
        });
    });

    // Routes for role: Doctor
    Route::middleware('role:Doctor')->group(function () {
        Route::prefix('doctor')->name('doctor.')->group(function () {
        });
    });

    // Routes for role: Patient
    Route::middleware('role:Patient')->group(function () {
        Route::prefix('patient')->name('patient.')->group(function () {
        });
    });
});
