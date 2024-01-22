<?php

namespace App\Http\Controllers;

use App\Http\Requests\registerRequest;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\user_profile;

use App\Observers\userObserver;

class RegisterController extends Controller
{
    public function sign_up(registerRequest $request)
    {
        $new_user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);
        return response()->json($new_user, 201);
    }



    /**
     * Make login for a user.
     */
    public function login()
    {
        $this->validate(request(), [
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if (\Auth::attempt(request(['email', 'password']))) {
            /**
             *      @var User $user
             */
            $user = \Auth::user();
            if (count($user->tokens) < 6) {
                $token = $user->createToken($user->name);
                auth()->login($user);
                return response()->json([
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                    'token' => $token->accessToken,
                    'token_expires_at' => $token->token->expires_at,
                ], 200);
            } else {
                return response()->json('there is too many user signed in with the same account', 500);
            }
        } else {
            return response()->json([
                'message' => 'Please check your credentials and try again.',
                'status_code' => '401'
            ]);
        }
    }

    /**
     * To logout the user.
     */
    public function logout(Request $request)
    {
        $this->validate($request, [
            'allDevices' => 'required|boolean'
        ]);

        $user = \Auth::user();
        if ($request->allDevices) {
            $user->tokens->each(function ($token) {
                $token->delete();
            });
            return response()->json([
                'message' => 'Logged out from all devices !!',
                'status_code' => '200'
            ], 200);
        }
        $userToken = $user->token();
        $userToken->delete();
        return response()->json([
            'message' => 'Logged out Successful !!',
            'status_code' => '200'
        ], 200);
    }
}