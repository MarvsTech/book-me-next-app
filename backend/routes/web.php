<?php

use Illuminate\Http\Request;
use App\Mail\NotificationMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PaypalController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/paypal', [PaypalController::class, 'index'])->name('paypal');
Route::post('/paypal/payment', [PaypalController::class, 'payment'])->name('paypal.payment');
Route::get('/paypal/payment/success', [PaypalController::class, 'success'])->name('paypal.success');
Route::get('/paypal/payment/cancel', [PaypalController::class, 'cancel'])->name('paypal.cancel');
