<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RoleStoreControllerRequest extends FormRequest
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
            'role_name' => 'string|required',
            'description' => 'string|nullable'
        ];
    }

    public function messages()
    {
        return [
            'role_name.string' => 'Role Name should be string' ,
            'role_name.required' => 'Role Name should be required' ,
            'description.string' => 'Description should be string' ,
        ];
    }
}
