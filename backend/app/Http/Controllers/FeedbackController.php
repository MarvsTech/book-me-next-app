<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\Feedback;
use Illuminate\Http\Request;
use App\Contracts\FeedbackContract;
use App\Http\Resources\FeedbackResource;
use App\Repositories\FeedbackRepository;

class FeedbackController extends Controller
{
    protected $feedbackContract;

    public function __construct(FeedbackContract $feedbackContract)
    {
        $this->feedbackContract = $feedbackContract;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {

            $feedback = $this->feedbackContract->index();

            return response()->json([
                'status' => 'success',
                'message' => 'Feedback List',
                'data' => new FeedbackResource($feedback, __FUNCTION__),
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
    public function store(Request $request, FeedbackRepository $feedbackRepository)
    {
        try {
            $params = $request->only([
                'doctor_id',
                'patient_id',
                'feedback_number',
            ]);
            $feedback = $feedbackRepository->store($params);

            return response()->json([
                'status' => 'success',
                'message' => 'Feedback created successfully!',
                'data' => new FeedbackResource($feedback, __FUNCTION__),
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
    public function show(Feedback $feedback)
    {
        try {

            return response()->json([
                'status' => 'success',
                'message' => 'Feedback List!',
                'data' => new FeedbackResource($feedback, __FUNCTION__),
            ]);

        } catch (Exception $e) {

            return response()->json([
                'status' => 'error',
                'message' => 'Feedback does not exists.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
