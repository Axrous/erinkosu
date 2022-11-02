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
use Inertia\Inertia;

class AuthController extends Controller
{
  public function register()
  {
    return Inertia::render('Auth/Register');
  }

  public function postRegister(Request $request)
  {

    $validated = $request->validate([
      'email' => 'required|unique:App\Models\User,email|max:255',
      'password' => 'required|min:8|confirmed'
    ]);

    try {
      $user = User::create([
        'email' => $request->email,
        'password' => Hash::make($request->password),
        'role' => UserRoleEnum::CUSTOMER,
      ]);
    } catch (Exception $e) {
      return response()->json($e, 200);
    }

    return redirect()->route('login');
  }

  public function login()
  {
    return Inertia::render('Auth/Login', [
      'auth' => auth()->hasUser()
    ]);
  }

  public function postLogin(Request $request)
  {

    $validated = $request->validate([
      'email' => 'required|max:255',
      'password' => 'required|min:8'
    ]);
    if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
      $request->session()->regenerate();
      return Inertia::render('Dashboard', ['auth' => auth()->hasUser()]);
    }

    return back()->withErrors([
      'wrong' => 'Wrong Email or Password'
    ]);
  }

  public function logout(Request $request)
  {
    Auth::logout();

    $request->session()->invalidate();

    $request->session()->regenerateToken();

    return redirect('/');
  }
}
