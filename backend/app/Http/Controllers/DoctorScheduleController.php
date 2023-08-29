<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\DoctorSchedule;
use Illuminate\Support\Facades\Log;
use App\Contracts\DoctorScheduleContract;
use App\Http\Resources\DoctorScheduleResource;
use App\Repositories\DoctorScheduleRepository;
use App\Http\Requests\DoctorScheduleStoreControllerRequest;
use Illuminate\Support\Facades\Auth;

class DoctorScheduleController extends Controller
{
    protected $doctorScheduleContract;

    public function __construct(DoctorScheduleContract $doctorScheduleContract)
    {
        $this->doctorScheduleContract = $doctorScheduleContract;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {

            $doctorSchedule = $this->doctorScheduleContract->index();
            return new DoctorScheduleResource($doctorSchedule, __FUNCTION__);

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
    public function store(DoctorScheduleStoreControllerRequest $request)
    {
        try {

            $user = Auth::user();
            $params = $request->only([
                'doctor_id',
                'title',
                'description',
                'schedule_date',
                'time_start',
                'time_end',
            ]);

            $params['doctor_id'] = $user->id;
            $doctorSchedule = $this->doctorScheduleContract->store($params);

            return response()->json([
                'status' => 'success',
                'message' => 'DxoctorSchedule created successfully!',
                'data' => new DoctorScheduleResource($doctorSchedule, __FUNCTION__),
            ]);

        } catch (Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to create Role.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(DoctorScheduleRepository $scheduleRepository, $id)
    {
        try {
            $doctorSchedule = $scheduleRepository->find($id);

            if (!$doctorSchedule) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'DoctorSchedule does not exist.',
                ], 404);
            }

            return response()->json([
                'status' => 'success',
                'message' => 'DoctorSchedule created successfully!',
                'data' => new DoctorScheduleResource($doctorSchedule, __FUNCTION__),
            ]);
        } catch (Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'DoctorSchedule does not exists.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(DoctorScheduleStoreControllerRequest $request, $doctorSchedule)
    {
        try {

            $params = $request->only([
                'doctor_id',
                'title',
                'description',
                'schedule_date',
                'time_start',
                'time_end',
            ]);

            $this->doctorScheduleContract->update($doctorSchedule,$params);
            $schedule = $this->doctorScheduleContract->find($doctorSchedule);

            return response()->json([
                'status' => 'success',
                'message' => 'DoctorSchedule updated successfully!',
                'data' => new DoctorScheduleResource($schedule, __FUNCTION__),
            ]);

        } catch (Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to update DoctorSchedule.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DoctorScheduleRepository $scheduleRepository, $id)
    {
        try{
            $doctorSchedule = $scheduleRepository->find($id);

            if (!$doctorSchedule) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'DoctorSchedule does not exist.',
                ], 404);
            }

            $doctorSchedule->delete();

            return response()->json([
                'status' => 'success',
                'message' => 'DoctorSchedule deleted successfully!',
                'data' => new DoctorScheduleResource($doctorSchedule, __FUNCTION__),
            ]);


        } catch (Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to delete DoctorSchedule.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
