<?php

namespace App\Http\Controllers;

use App\Contracts\AppointmentContract;
use App\Contracts\DoctorContract;
use App\Http\Resources\AppointmentResource;
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
        $bookings = $this->appointmentContract->getAllAppointmentData();

        $cardData['bookings'] = $bookings->count();
        $cardData['successful'] = $bookings->where('status_id', 1)->count();
        $cardData['pending'] = $bookings->where('status_id', 2)->count();
        $cardData['rejected'] = $bookings->where('status_id', 3)->count();

        $cardData['successful_percentage'] = number_format(($cardData['successful'] / $cardData['bookings']) * 100, 2) . '%';
        $cardData['pending_percentage'] = number_format(($cardData['pending'] / $cardData['bookings']) * 100, 2) . '%';
        $cardData['rejected_percentage'] = number_format(($cardData['rejected'] / $cardData['bookings']) * 100, 2) . '%';

        return response()->json([
            'status' => 'success',
            'message' => 'This is your all appointment scheduled',
            'data' => new AppointmentResource($cardData, __FUNCTION__),
        ]);
    }
}
