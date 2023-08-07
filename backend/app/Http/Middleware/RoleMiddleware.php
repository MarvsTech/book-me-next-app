<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RoleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, ...$role): Response
    {
        if (!$request->user()) {
            return response()->json(['error' => 'Unauthenticated.'], 401);
        }
        if (!$request->user()->hasAnyRole(...$role)) {
            return response()->json(['error' => 'Access denied.'], 403);
        }
        return $next($request);
    }
}
