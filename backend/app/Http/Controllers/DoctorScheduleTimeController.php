<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use App\Models\DoctorScheduleTime;
use App\Contracts\DoctorScheduleTimeContract;
use App\Http\Resources\DoctorScheduleTimeResource;
use App\Repositories\DoctorScheduleTimeRepository;
use App\Http\Requests\DoctorScheduleTimeStoreControllerRequest;
class DoctorScheduleTimeController extends Controller
{
    protected $doctorScheduleTimeContract;

    public function __construct(DoctorScheduleTimeContract $doctorScheduleTimeContract)
    {
        $this->doctorScheduleTimeContract = $doctorScheduleTimeContract;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(DoctorScheduleTime $doctorScheduleTime)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(DoctorScheduleTime $doctorScheduleTime)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, DoctorScheduleTime $doctorScheduleTime)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DoctorScheduleTime $doctorScheduleTime)
    {
        //
    }

    public function getAllDoctorScheduleTime()
    {
        try {

            $doctorScheduleTime = $this->doctorScheduleTimeContract->getAllDoctorScheduleTime();
            return new DoctorScheduleTimeResource($doctorScheduleTime, __FUNCTION__);

        } catch(Exception $e) {

            return response()->json([
                'status' => 'error',
                'message' => 'Failed.',
                'error' => $e->getMessage(),
            ], 500);

        }
    }
}
