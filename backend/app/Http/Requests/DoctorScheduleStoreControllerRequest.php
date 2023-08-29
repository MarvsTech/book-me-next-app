<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DoctorScheduleStoreControllerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'doctor_id' => 'integer',
            'title' => 'required|string',
            'description' => 'nullable|string',
            'schedule_date' => 'required|date',
            'time_start' => 'required',
            'time_end' => 'required|after:time_start',
        ];
    }

    public function messages()
    {
        return [
            'doctor_id.integer' => 'Doctor ID should be an integer',
            'title.required' => 'Title is required',
            'title.string' => 'Title should be a string',
            'description.string' => 'Description should be a string',
            'schedule_date.required' => 'Schedule Date is required',
            'schedule_date.date' => 'Schedule Date should be a valid date',
            'time_start.required' => 'Start Time is required',
            'time_end.required' => 'End Time is required',
            'time_end.after' => 'End Time should be after Start Time',
        ];
    }
}
