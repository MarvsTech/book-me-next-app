<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\PatientController;

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

Route::middleware(['auth:sanctum'])->group(function () {

    Route::get('/home', function () {
        if (Auth::check()) {
            $roleId = Auth::user()->role_id;
            $routeName = '';

            switch ($roleId) {
                case 1:
                    $routeName = 'admin.page';
                    break;
                case 2:
                    $routeName = 'doctor.page';
                    break;
                case 3:
                    $routeName = 'patient.page';
                    break;
                default:
                    return redirect()->route('error.page');
            }

            return redirect()->route($routeName);
        }
    });

    Route::middleware('role:Admin')->get('admin/page', [AdminController::class, 'index'])->name('admin.page');
    Route::middleware('role:Doctor')->get('doctor/page', [DoctorController::class, 'index'])->name('doctor.page');
    Route::middleware('role:Patient')->get('patient/page', [PatientController::class, 'index'])->name('patient.page');

    Route::apiResource('role', RoleController::class)->only([
        'index',
        'store',
        'show',
        'update',
        'destroy'
    ]);
    Route::controller(LoginController::class)->group(function(){
        Route::get('profile','profile');
        Route::post('signout','signout');
        Route::put('updateProfile','updateProfile');
    });
});
