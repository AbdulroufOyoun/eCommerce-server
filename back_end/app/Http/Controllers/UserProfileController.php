<?php

namespace App\Http\Controllers;

use App\Models\user_profile;
use Illuminate\Http\Request;

class UserProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show()
    {
        $user_id = \Auth::id();
        $user_profile = user_profile::where('user_id', $user_id);
        $user = $user_profile->User();
        return response()->json($user, 200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(user_profile $user_profile)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, user_profile $user_profile)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(user_profile $user_profile)
    {
        //
    }
}
