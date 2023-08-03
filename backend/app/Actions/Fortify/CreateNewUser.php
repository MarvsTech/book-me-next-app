<?php

namespace App\Actions\Fortify;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Laravel\Fortify\Contracts\CreatesNewUsers;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array<string, string>  $input
     */

    public function create(array $input): User
    {
        Validator::make($input, [
            'firstname' => ['required', 'string', 'max:255'],
            'lastname' => ['required', 'string', 'max:255'],
            'middlename' => ['required', 'string', 'max:255'],
            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                Rule::unique(User::class),
            ],
            'password' => $this->passwordRules(),
        ])->validate();

        $user = User::create([
            'role_id' => $input['role_id'],
            'firstname' => $input['firstname'],
            'lastname' => $input['lastname'],
            'middlename' => $input['middlename'],
            'specialization' => $input['specialization'],
            'contact_number' => $input['contact_number'],
            'address' => $input['address'],
            'email' => $input['email'],
            'password' => Hash::make($input['password']),
            'room_number' => $input['room_number'],
            'profile' => $input['profile'],
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'status' => 'success',
            'message' => 'User created successfully!',
            'data' => [
                'user' => $user,
                'token' => $token,
            ],
        ]);
    }
}
