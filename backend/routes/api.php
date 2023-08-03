<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RoleController;

// for authentication routes
// use App\Actions\Fortify\ResetUserPassword;
// use Laravel\Fortify\Http\Controllers\PasswordResetController;
// use Laravel\Fortify\Http\Controllers\RegisteredUserController;
// use Laravel\Fortify\Http\Controllers\PasswordResetLinkController;
// use Laravel\Fortify\Http\Controllers\AuthenticatedSessionController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// for roles functionality API Endpoint
Route::apiResource('role', RoleController::class)->only(['index', 'store','show','update', 'destroy']);

// for authentication
// Route::post('/register', [RegisteredUserController::class, 'store'])->middleware('guest');
// Route::post('/login', [AuthenticatedSessionController::class, 'store'])->middleware('guest');
// Route::post('/forgot-password', [PasswordResetLinkController::class, 'store'])->middleware('guest')->name('password.email');
// Route::post('/reset-password', [::class, 'reset'])->middleware('guest')->name('password.update');
