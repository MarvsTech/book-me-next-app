<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Auth;

class DoctorUpdateControllerRequest extends FormRequest
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
        $user = Auth::user();

        return [
            'firstname' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            'middlename' => 'required|string|max:255',
            'contact_number' => 'required|string|max:20',
            'password' => 'required',
            'confirm_password' => 'required|same:password',
        ];
    }

    public function messages()
    {
        return [
            'firstname.string' => 'Firstname should be a string',
            'firstname.required' => 'Firstname is required',
            'firstname.max' => 'Firstname is too long',
            'lastname.string' => 'Lastname should be a string',
            'lastname.required' => 'Lastname is required',
            'lastname.max' => 'Lastname is too long',
            'middlename.string' => 'Middlename should be a string',
            'middlename.required' => 'Middlename is required',
            'middlename.max' => 'Middlename is too long',
            'contact_number.string' => 'Contact Number should be a string',
            'contact_number.required' => 'Contact Number is required',
            'contact_number.max' => 'Contact Number is too long',
            'password.required' => 'Password is required',
            'confirm_password.required' => 'Confirm Password is required',
            'confirm_password.same' => 'Confirm Password should match the Password',
        ];
    }
}
