<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Enum\UserRoleEnum;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class AuthController extends Controller
{

  public function register()
  {
    return Inertia::render('Auth/Register', [
      'auth' => auth()->check()
    ]);
  }

  public function postRegister(Request $request)
  {

    $validated = $request->validate([
      'email' => 'required|unique:App\Models\User,email|max:255',
      'password' => 'required|min:8|confirmed',
      'first_name' => 'required',
      'last_name' => 'required',
      'phone_number' => 'required',
      'photo_profile' => 'required',
    ]);

    try {

      if ($request->hasFile('photo_profile')) {
        //save to public/users
        $request->file('photo_profile')->store('public/users');
        //change filename image
        $photoName = $request->file('photo_profile')->hashName();
      }

      $user = User::create([
        'email' => $request->email,
        'password' => Hash::make($request->password),
        'role' => UserRoleEnum::CUSTOMER,
        'first_name' => $request->first_name,
        'last_name' => $request->last_name,
        'phone_number' => $request->phone_number,
        'photo_profile' => $photoName,
      ]);
    } catch (Exception $e) {
      return response()->json($e, 200);
    }

    return redirect()->route('login')->with('message', 'Berhasil Registrasi');
  }

  public function login()
  {
    return Inertia::render('Auth/Login', []);
  }

  public function postLogin(Request $request)
  {

    $validated = $request->validate([
      'email' => 'required|max:255',
      'password' => 'required|min:8'
    ]);
    if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
      $request->session()->regenerate();
      // return Inertia::render('Dashboard', []);
      return Inertia::location('/');
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
    // Cookie::forget("roomId");

    return redirect('/')->withCookie(Cookie::forget("roomId"));
  }
}
