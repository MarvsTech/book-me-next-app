<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AppointmentStoreControllerRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'doctor_id' => 'required',
            'patient_id' => 'required',
            'doctor_schedule_time_id' => 'required',
            'doctor_schedule_date_id' => 'required',
            'status_id' => 'required',
            'remarks' => 'nullable|string',
        ];
    }

    public function messages()
    {
        return [
            'doctor_id.required' => 'The Doctor is required.',
            'patient_id.required' => 'The Patient is required.',
            'doctor_schedule_time_id.required' => 'The schedule time is required.',
            'doctor_schedule_date_id.required' => 'The schedule date is required.',
            'status_id.required' => 'The status is required.',
            'remarks.string' => 'The remarks field must be a string.',
        ];
    }

}
