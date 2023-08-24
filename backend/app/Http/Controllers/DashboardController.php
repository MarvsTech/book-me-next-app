<?php

namespace App\Http\Controllers;

use App\Contracts\AppointmentContract;
use App\Contracts\DoctorContract;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    protected $doctorContract;
    protected $appointmentContract;

    public function __construct(
        DoctorContract $doctorContract,
        AppointmentContract $appointmentContract
    ) {
        $this->doctorContract = $doctorContract;
        $this->appointmentContract = $appointmentContract;
    }


    public function dashboardCards()
    {
        $cardData = [];
        $doctor = auth()->user();
        $bookings = $this->appointmentContract->filterByLoginUser($doctor->id, 2);
        $cardData['bookings'] = $bookings->count();
        $cardData['successful'] = $bookings->where('status_id', 1)->count();
        $cardData['pending'] = $bookings->where('status_id', 2)->count();
        $cardData['rejected'] = $bookings->where('status_id', 3)->count();
    }
}
