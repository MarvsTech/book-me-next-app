<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use App\Contracts\DoctorContract;
use Illuminate\Support\Facades\Auth;
use App\Contracts\AppointmentContract;
use App\Http\Resources\AppointmentResource;

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

    public function chartCards()
    {
        $chartDataByMonth = $this->appointmentContract->getAllAppointmentDataByMonth();

        return response()->json([
            'status' => 'success',
            'message' => 'This is your all appointment scheduled',
            'data' => new AppointmentResource($chartDataByMonth, __FUNCTION__),
        ]);
    }

    public function dashboardBookingCardsByDoctor()
    {
        $cardData = [];
        $user = Auth::user();

        $bookings = $this->appointmentContract->getAllAppointmentDataByDoctor($user->role_id);

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

    public function getDoctorAppointmentDataByMonth()
    {

        try {
            $user = Auth::user();

            $chartData = [];
            $chartDataByDoctorMonth = $this->appointmentContract->getDoctorAppointmentDataByMonth($user->role_id);

            $chartData = $chartDataByDoctorMonth->groupBy('month')->map(function ($group, $month) {
                $successfulCount = $group->where('status_id', 1)->count();
                $pendingCount = $group->where('status_id', 2)->count();
                $rejectedCount = $group->where('status_id', 3)->count();

                return [
                    'successful' => $successfulCount,
                    'pending' => $pendingCount,
                    'rejected' => $rejectedCount,
                    'monthname' => date('M', strtotime($group[0]->created_at)),
                    'date' => date('M', strtotime($group[0]->created_at)),
                ];
            })->values();

            return response()->json([
                'status' => 'success',
                'message' => 'This is your all appointment scheduled',
                'data' => $chartData,
            ]);

        } catch (Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to retrieve appointment data.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function getAllAppointmentByPatient() {
        try{
            $user = Auth::user();
            $patientAppointments = $this->appointmentContract->getAllAppointmentByPatient($user->id);
            return response()->json([
                'status' => 'success',
                'message' => 'List of all the appointment',
                'data' => new AppointmentResource($patientAppointments, __FUNCTION__),
            ]);

        } catch (Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to delete appointment.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function getAllDoctorAppointment() {
        try {
            $user = Auth::user();
            $chartData = [];
            $chartDataByDoctorMonth = $this->appointmentContract->getAllDoctorAppointment($user->id);

            $chartData = $chartDataByDoctorMonth->groupBy('month')->map(function ($group, $month) {
                $appointmentCount = $group->count();

                return [
                    'appointment' => $appointmentCount,
                    'monthname' => date('M', strtotime($group[0]->created_at)),
                    'date' => date('M', strtotime($group[0]->created_at)),
                ];
            })->values();

            return response()->json([
                'status' => 'success',
                'message' => 'This is your all appointment scheduled',
                'data' => $chartData,
            ]);

        } catch (Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to retrieve appointment data.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function getAllDoctorAppointmentSchedule() {
        try{
            $user = Auth::user();
            $patientAppointments = $this->appointmentContract->getAllDoctorAppointmentSchedule($user->id, 2);
            return response()->json([
                'status' => 'success',
                'message' => 'List of all the appointment',
                'data' => new AppointmentResource($patientAppointments, __FUNCTION__),
            ]);

        } catch (Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to delete appointment.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
