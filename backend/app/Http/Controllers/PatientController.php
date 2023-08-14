<?php

namespace App\Http\Controllers;

use Exception;
use Vonage\Client;
use App\Models\User;
use App\Mail\NotificationMail;
use App\Contracts\PatientContract;
use Illuminate\Support\Facades\Mail;
use App\Http\Resources\PatientResource;
use App\Repositories\PatientRepository;
use App\Mail\CreateAccountNotificationMail;
use App\Http\Requests\PatientStoreControllerRequest;
use App\Http\Requests\PatientUpdateControllerRequest;

use App\Services\SmsService;

class PatientController extends Controller
{
    protected $patientContract;
    protected $smsService;

    public function __construct(PatientContract $patientContract, SmsService $smsService)
    {
        $this->patientContract = $patientContract;
        $this->smsService = $smsService;
    }

    public function index()
    {
        try {

            $patient = $this->patientContract->index();

            return response()->json([
                'status' => 'success',
                'message' => 'Welcome to Patient Page',
                'data' => new PatientResource($patient, __FUNCTION__),
            ]);

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
    public function store(PatientStoreControllerRequest $request, PatientRepository $patientRepository)
    {
        try {
            $params = $request->only([
                'role_id',
                'firstname',
                'lastname',
                'middlename',
                'specialization',
                'contact_number',
                'address',
                'email',
                'password',
                'profile',
            ]);
            $params['role_id'] = 3;
            $user = $this->patientContract->store($params);

            if(!empty($user)) {
                Mail::to($user->email)->send(new CreateAccountNotificationMail (
                    $user,
                ));
                $this->smsService->sendSms("639126897665", 'Account created successfully');
            }

            return response()->json([
                'status' => 'success',
                'message' => 'Patient created successfully!',
                'data' => new PatientResource($user, __FUNCTION__),
            ]);

        } catch (Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to create Patient.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(User $patient)
    {
        try {

            return response()->json([
                'status' => 'success',
                'message' => 'Patient List!',
                'data' => new PatientResource($patient, __FUNCTION__),
            ]);

        } catch (Exception $e) {

            return response()->json([
                'status' => 'error',
                'message' => 'Patient does not exists.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(PatientUpdateControllerRequest $request, User $patient)
    {
        try {

            $params = $request->only([
                'role_id',
                'firstname',
                'lastname',
                'middlename',
                'specialization',
                'contact_number',
                'address',
                'password',
                'profile',
            ]);

            $patient->update($params);
            $patient->refresh();

            return response()->json([
                'status' => 'success',
                'message' => 'Patient updated successfully!',
                'data' => new PatientResource($patient, __FUNCTION__),
            ]);
        } catch (Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to update Patient.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $patient)
    {
        try{
            $patient->delete();

            return response()->json([
                'status' => 'success',
                'message' => 'Patient deleted successfully!',
                'data' => new PatientResource($patient, __FUNCTION__),
            ]);
        } catch (Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to delete Doctor.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
