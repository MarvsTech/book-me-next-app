<?php

namespace App\Http\Controllers;

use Exception;
use Vonage\Client;
use App\Models\Appointment;
use Illuminate\Support\Facades\Mail;
use App\Contracts\AppointmentContract;
use App\Http\Resources\AppointmentResource;
use App\Mail\CreateAccountNotificationMail;
use App\Repositories\AppointmentRepository;
use App\Mail\CreateAppointmentNotificationMail;
use App\Mail\DeleteAppointmentNotificationMail;
use App\Mail\UpdateAppointmentNotificationMail;
use App\Http\Requests\AppointmentStoreControllerRequest;
use App\Services\SmsService;
use Carbon\Carbon;

class AppointmentController extends Controller
{
    protected $appointmentContract;
    protected $smsService;

    public function __construct(AppointmentContract $appointmentContract, SmsService $smsService)
    {
        $this->appointmentContract = $appointmentContract;
        $this->smsService = $smsService;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {

            $appointment = $this->appointmentContract->index();
            return new AppointmentResource($appointment, __FUNCTION__);

        } catch(Exception $e) {

            return response()->json([
                'status' => 'error',
                'message' => 'Failed.',
                'error' => $e->getMessage(),
            ], 500);

        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(AppointmentStoreControllerRequest $request)
    {
        try {
            $params = $request->only([
                'doctor_id',
                'patient_id',
                'doctor_schedule_time_id',
                'doctor_schedule_date_id',
                'status_id',
                'remarks',
            ]);

            $appointment = $this->appointmentContract->store($params);

            if(!empty($appointment)) {
                Mail::to($appointment->patient->email)->send(new CreateAppointmentNotificationMail (
                    $appointment,
                    $appointment->patient,
                    $appointment->doctor,
                    $appointment->doctor_schedule_time,
                    $appointment->doctor_schedule_date,
                ));

                $this->smsService->sendSms("639126897665", 'Appointment created successfully');
            }

            return response()->json([
                'status' => 'success',
                'message' => 'Appointment created successfully!',
                'data' => new AppointmentResource($appointment, __FUNCTION__),
            ]);

        } catch (Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to create appointment.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Appointment $appointment)
    {
        try {

            return response()->json([
                'status' => 'success',
                'message' => 'List of appointment!',
                'data' => new AppointmentResource($appointment, __FUNCTION__),
            ]);

        } catch (Exception $e) {

            return response()->json([
                'status' => 'error',
                'message' => 'Appointment does not exists.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(AppointmentStoreControllerRequest $request, Appointment $appointment)
    {
        try {

            $params = $request->only([
                'doctor_id',
                'patient_id',
                'doctor_schedule_time_id',
                'doctor_schedule_date_id',
                'status_id',
                'remarks',
            ]);

            $appointmentData = $this->appointmentContract->update($appointment->id, $params);

            if(!empty($appointmentData)) {
                Mail::to($appointmentData->patient->email)->send(new UpdateAppointmentNotificationMail (
                    $appointment,
                    $appointment->patient,
                    $appointment->doctor,
                    $appointment->doctor_schedule_time,
                    $appointment->doctor_schedule_date,
                ));
                $this->smsService->sendSms("639126897665", 'Appointment updated successfully');
            }

            return response()->json([
                'status' => 'success',
                'message' => 'Appointment updated successfully!',
                'data' => new AppointmentResource($appointment, __FUNCTION__),
            ]);
        } catch (Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to update appointment.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Appointment $appointment)
    {
        try{
            $deleteAppointment = $this->appointmentContract->delete($appointment->id);

            if(!empty($deleteAppointment)) {
                Mail::to($deleteAppointment->patient->email)->send(new DeleteAppointmentNotificationMail (
                    $appointment,
                    $appointment->patient,
                    $appointment->doctor,
                    $appointment->doctor_schedule_time,
                    $appointment->doctor_schedule_date,
                ));
                $this->smsService->sendSms("639126897665", 'Appointment Deleted successfully');
            }

            return response()->json([
                'status' => 'success',
                'message' => 'Appointment deleted successfully!',
                'data' => new AppointmentResource($appointment, __FUNCTION__),
            ]);
        } catch (Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to delete appointment.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function filterByLoginUser() {
        try{
            $loggedInUser = auth()->user();
            $filteredAppointments = $this->appointmentContract->filterByLoginUser($loggedInUser->id, 3);

            return response()->json([
                'status' => 'success',
                'message' => 'This is your all appointment scheduled',
                'data' => new AppointmentResource($filteredAppointments, __FUNCTION__),
            ]);

        } catch (Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to delete appointment.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function doctorAppointmentData() {
        try{
            $loggedInUser = auth()->user();
            $appointmentData = $this->appointmentContract->doctorAppointmentData($loggedInUser->id, 2);

            return response()->json([
                'status' => 'success',
                'message' => 'This is your all appointment scheduled',
                'data' => new AppointmentResource($appointmentData, __FUNCTION__),
            ]);

        } catch (Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to delete appointment.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function getAllAppointmentData() {
        try{
            $appointmentData = $this->appointmentContract->getAllAppointmentData();
            return response()->json([
                'status' => 'success',
                'message' => 'This is your all appointment scheduled',
                'data' => new AppointmentResource($appointmentData, __FUNCTION__),
            ]);

        } catch (Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to delete appointment.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function getAllAppointmentDataByMonth() {
        try {
            $chartDataByMonth = [];
            $appointmentDataByMonth = $this->appointmentContract->getAllAppointmentDataByMonth();

            $chartData = $appointmentDataByMonth->groupBy('month')->map(function ($group) {
                $successfulCount = $group->where('status_id', 1)->count();
                $pendingCount = $group->where('status_id', 2)->count();
                $rejectedCount = $group->where('status_id', 3)->count();

                return [
                    'successful' => $successfulCount,
                    'pending' => $pendingCount,
                    'rejected' => $rejectedCount,
                ];
            });

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

    public function getAllAppointmentChartDataByMonthName() {
        try {
            $chartData = [];
            $appointmentDataByMonth = $this->appointmentContract->getAllAppointmentChartDataByMonthName();

            $chartData = $appointmentDataByMonth->groupBy('month')->map(function ($group, $month) {
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

    public function getAllPatientAppointment() {
        try{
            $patientAppointments = $this->appointmentContract->getAllPatientAppointment(3);
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

    public function getDoctorAppointmentDataByMonth($roleId)
    {
        try {
            $chartDataByMonth = [];
            $appointmentDataByMonth = $this->appointmentContract->getAllAppointmentDataByMonth();

            $chartData = $appointmentDataByMonth->groupBy('month')->map(function ($group) {
                $successfulCount = $group->where('status_id', 1)->count();
                $pendingCount = $group->where('status_id', 2)->count();
                $rejectedCount = $group->where('status_id', 3)->count();

                return [
                    'successful' => $successfulCount,
                    'pending' => $pendingCount,
                    'rejected' => $rejectedCount,
                ];
            });

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
}
