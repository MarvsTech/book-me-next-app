<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use App\Models\DoctorScheduleDate;
use App\Contracts\DoctorScheduleDateContract;
use App\Http\Resources\DoctorScheduleDateResource;
use App\Repositories\DoctorScheduleDateRepository;
use App\Http\Requests\DoctorScheduleDateStoreControllerRequest;

class DoctorScheduleDateController extends Controller
{
    protected $doctorScheduleDateContract;

    public function __construct(DoctorScheduleDateContract $doctorScheduleDateContract)
    {
        $this->doctorScheduleDateContract = $doctorScheduleDateContract;
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
    public function show(DoctorScheduleDate $doctorScheduleDate)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(DoctorScheduleDate $doctorScheduleDate)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, DoctorScheduleDate $doctorScheduleDate)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DoctorScheduleDate $doctorScheduleDate)
    {
        //
    }

    public function getAllDoctorScheduleDate()
    {
        try {

            $doctorScheduleDate = $this->doctorScheduleDateContract->getAllDoctorScheduleDate();
            return new DoctorScheduleDateResource($doctorScheduleDate, __FUNCTION__);

        } catch(Exception $e) {

            return response()->json([
                'status' => 'error',
                'message' => 'Failed.',
                'error' => $e->getMessage(),
            ], 500);

        }
    }
}
