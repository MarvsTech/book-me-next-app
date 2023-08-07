<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Contracts\RoleContract;
use App\Http\Requests\RoleStoreControllerRequest;
use App\Http\Resources\RoleResource;
use App\Repositories\RoleRepository;
use Exception;

class RoleController extends Controller
{
    protected $roleContract;

    public function __construct(RoleContract $roleContract)
    {
        $this->roleContract = $roleContract;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {

            $role = $this->roleContract->index();
            return new RoleResource($role, __FUNCTION__);

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
    public function store(RoleStoreControllerRequest $request, RoleRepository $roleRepository)
    {
        try {
            $params = $request->only([
                'role_name',
                'description',
            ]);

            $role = $roleRepository->store($params);

            return response()->json([
                'status' => 'success',
                'message' => 'Role created successfully!',
                'data' => new RoleResource($role, __FUNCTION__),
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
    public function show(Role $role)
    {
        try {

            return response()->json([
                'status' => 'success',
                'message' => 'Role created successfully!',
                'data' => new RoleResource($role, __FUNCTION__),
            ]);

        } catch (Exception $e) {

            return response()->json([
                'status' => 'error',
                'message' => 'Role does not exists.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(RoleStoreControllerRequest $request, Role $role)
    {
        try {

            $params = $request->only([
                'role_name',
                'description',
            ]);

            $role->update($params);

            $role->refresh();

            return response()->json([
                'status' => 'success',
                'message' => 'Role updated successfully!',
                'data' => new RoleResource($role, __FUNCTION__),
            ]);
        } catch (Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to update Role.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Role $role)
    {
        try{
            $role->delete();

            return response()->json([
                'status' => 'success',
                'message' => 'Role deleted successfully!',
                'data' => new RoleResource($role, __FUNCTION__),
            ]);
        } catch (Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to delete Role.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
