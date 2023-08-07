<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Contracts\AppointmentContract;
use App\Http\Requests\AppointmentStoreControllerRequest;
use App\Http\Resources\AppointmentResource;
use App\Repositories\AppointmentRepository;
use Exception;

class AppointmentController extends Controller
{
    protected $appointmentContract;

    public function __construct(AppointmentContract $appointmentContract)
    {
        $this->appointmentContract = $appointmentContract;
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
    public function store(AppointmentStoreControllerRequest $request, AppointmentRepository $appointmentRepository)
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

            $appointment = $appointmentRepository->store($params);

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

            $appointment->update($params);

            $appointment->refresh();

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
            $appointment->delete();

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
}
