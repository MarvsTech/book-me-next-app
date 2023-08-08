<?php

use Illuminate\Http\Request;
use App\Mail\NotificationMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;

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

Route::get('/api/send-mail', function () {
    $mailData = [
        'client_name' => 'Marvin Ramos',
        'title' => 'Account Created Successfully',
        'email' => 'sample@sample.com',
        'username' => 'SampleAccount',
        'date' => 'July 15, 2023',
        'message' => 'Your account has been successfully created. You can now start using our services!.',
    ];
    Mail::to('ramos.marvin@seedtech.ph')->send(new NotificationMail($mailData));
    return 'Notification email sent successfully!';
});
