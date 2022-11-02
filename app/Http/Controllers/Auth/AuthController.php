<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Enum\UserRoleEnum;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->only(['email', 'password']), [
            'email' => 'required|unique:App\Models\User,email|max:255',
            'password' => 'required|min:8'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        try {
            $user = User::create([
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'role' => UserRoleEnum::CUSTOMER,
            ]);
        } catch (Exception $e) {
            return response()->json($e, 200);
        }
        return response()->json($user, 200);
    }

    public function postLogin(Request $request)
    {
        $validator = Validator::make($request->only(['email', 'password']), [
            'email' => 'required|max:255',
            'password' => 'required|min:8'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $request->session()->regenerate();
            return response()->json(auth()->user()->getAuthPassword(), 200);
        }

        return response()->json([
            'message' => 'Email atau Password salah'
        ], 200);
    }

    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response()->json([
            'message' => 'Berhasil Logout'
        ], 200);
    }
}
