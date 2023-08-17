<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\BaseController;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Validator;

class LoginController extends BaseController
{
    public function signup (Request $request) {
        $validator = Validator::make($request->all(), [
            'firstname' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            'middlename' => 'required|string|max:255',
            'contact_number' => 'required|numeric',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|max:255',
            'confirm_password' => 'required|same:password|max:255',
            'role_id' => 'exists:roles,id'
        ]);

        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());
        }

        $input = $request->all();
        $input['role_id'] = 3;
        $input['specialization'] = 'Patient';
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $success['token'] =  $user->createToken('BookMeNext')->plainTextToken;
        $success['firstname'] =  $user->firstname;
        $success['lastname'] =  $user->lastname;
        $success['middlename'] =  $user->middlename;

        return $this->sendResponse($success, 'User register successfully.');
    }

    public function login(Request $request)
    {
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = Auth::user();

            $data['token'] = $user->createToken('BookMeNext')->plainTextToken;
            $data['firstname'] = $user->firstname;
            $data['lastname'] = $user->lastname;
            $data['middlename'] = $user->middlename;
            $data['roleId'] = $user->role_id;
            $data['genderId'] = $user->gender_id;
            $data['specialization'] = $user->specialization;
            $data['contactNumber'] = $user->contact_number;
            $data['address'] = $user->address;
            $data['email'] = $user->email;
            $data['roomNumber'] = $user->room_number;
            $data['isActive'] = $user->isActive;
            $data['profile'] = $user->profile;
            $data['birthday'] = $user->birthday;
            $data['message'] = 'User login successfully.';

            $responseData = [
                'data' => $data,
            ];
            return response()->json($responseData);
        } else {
            $data['message'] = 'Invalid credentials.';
            $responseData = [
                'data' => $data,
            ];
            return response()->json($responseData);
        }
    }

    public function profile(Request $request)
    {
        $user = $request->user();
        return $this->sendResponse($user, 'Profile');
    }

    public function signout(Request $request)
    {
        if (auth()->check()) {
            $user = $request->user();
            $user->tokens->each(function ($token, $key) {
                $token->delete();
            });
        }

        return ['message' => 'User logged out'];
    }

    public function updateProfile(Request $request, User $user) {
        try {
            $validator = Validator::make($request->all(), [
                'firstname' => 'required|string|max:255',
                'lastname' => 'required|string|max:255',
                'middlename' => 'required|string|max:255',
                'contact_number' => 'required|numeric',
                'email' => 'required|email|unique:users,email,' . $user->id,
                'password' => 'required|max:255',
                'confirm_password' => 'required|same:password|max:255',
            ]);

            if ($validator->fails()) {
                return response()->json(['status' => 'error', 'message' => 'Validation Error.', 'data' => $validator->errors()]);
            }

            $validatedData = $validator->validated();
            $user->update($validatedData);

            return response()->json([
                'status' => 'success',
                'message' => 'Profile updated successfully!',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'An error occurred while updating the profile.',
                'data' => $e->getMessage(),
            ]);
        }
    }
}
