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
            }

            $basic  = new \Vonage\Client\Credentials\Basic("28783f03", "3pWalnzN41XSb0Xb");
            $client = new Client($basic);

            $response = $client->sms()->send(
                new \Vonage\SMS\Message\SMS("639126897665", 'BOOK ME NEXT', 'Appointment created successfully'),
            );

            $message = $response->current();

            if ($message->getStatus() == 0) {
                return "The message was sent successfully\n";
            } else {
                return "The message failed with status: " . $message->getStatus() . "\n";
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
            }

            $basic  = new \Vonage\Client\Credentials\Basic("28783f03", "3pWalnzN41XSb0Xb");
            $client = new Client($basic);

            $response = $client->sms()->send(
                new \Vonage\SMS\Message\SMS("639126897665", 'BOOK ME NEXT', 'Appointment updated successfully'),
            );

            $message = $response->current();

            if ($message->getStatus() == 0) {
                return "The message was sent successfully\n";
            } else {
                return "The message failed with status: " . $message->getStatus() . "\n";
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
            }

            $basic  = new \Vonage\Client\Credentials\Basic("28783f03", "3pWalnzN41XSb0Xb");
            $client = new Client($basic);

            $response = $client->sms()->send(
                new \Vonage\SMS\Message\SMS("639126897665", 'BOOK ME NEXT', 'Appointment deleted successfully'),
            );

            $message = $response->current();

            if ($message->getStatus() == 0) {
                return "The message was sent successfully\n";
            } else {
                return "The message failed with status: " . $message->getStatus() . "\n";
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
}
