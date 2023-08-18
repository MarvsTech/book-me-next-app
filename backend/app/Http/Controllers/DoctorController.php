<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\User;
use App\Contracts\DoctorContract;
use App\Http\Resources\DoctorResource;
use App\Repositories\DoctorRepository;
use App\Http\Requests\DoctorStoreControllerRequest;
use App\Http\Requests\DoctorUpdateControllerRequest;

class DoctorController extends Controller
{
    protected $doctorContract;

    public function __construct(DoctorContract $doctorContract)
    {
        $this->doctorContract = $doctorContract;
    }

    public function index()
    {
        try {

            $doctor = $this->doctorContract->index();

            return response()->json([
                'status' => 'success',
                'message' => 'Welcome to Doctor Page',
                'data' => new DoctorResource($doctor, __FUNCTION__),
            ]);

        } catch(Exception $e) {

            return response()->json([
                'status' => 'error',
                'message' => 'Failed.',
                'error' => $e->getMessage(),
            ], 500);

        }
    }

    public function getAllDoctors(DoctorContract $doctorContract)
    {
        try {
            $doctor = $this->doctorContract->getAllDoctors('doctor');

            return (new DoctorResource($doctor, __FUNCTION__))->additional([
                'status' => 'success',
                'message' => 'Welcome to Doctor Page',
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
    public function store(DoctorStoreControllerRequest $request, DoctorRepository $doctorRepository)
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
                'room_number',
                'profile',
            ]);
            $params['role_id'] = 2;
            $doctor = $doctorRepository->store($params);

            return response()->json([
                'status' => 'success',
                'message' => 'Doctor created successfully!',
                'data' => new DoctorResource($doctor, __FUNCTION__),
            ]);

        } catch (Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to create Doctor.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(User $doctor)
    {
        try {

            return response()->json([
                'status' => 'success',
                'message' => 'Doctor List!',
                'data' => new DoctorResource($doctor, __FUNCTION__),
            ]);

        } catch (Exception $e) {

            return response()->json([
                'status' => 'error',
                'message' => 'Role does not exists.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(DoctorUpdateControllerRequest $request, User $doctor)
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
                'room_number',
                'profile',
            ]);

            $doctor->update($params);
            $doctor->refresh();

            return response()->json([
                'status' => 'success',
                'message' => 'Doctor updated successfully!',
                'data' => new DoctorResource($doctor, __FUNCTION__),
            ]);
        } catch (Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to update Doctor.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $doctor)
    {
        try{
            $doctor->delete();

            return response()->json([
                'status' => 'success',
                'message' => 'Doctor deleted successfully!',
                'data' => new DoctorResource($doctor, __FUNCTION__),
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
