<?php

namespace App\Http\Middleware;

use Closure;

class Admin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $adminEmails = config('auth.admins');
        
        if ($request->user() && in_array($request->user()->email, $adminEmails)) {
            return $next($request);
        }

        return response('Unauthorized.', 401);
    }
}
