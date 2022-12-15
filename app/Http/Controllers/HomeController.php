<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use App\Models\RoomImage;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{

  public function index()
  {
    return Inertia::render('Dashboard', []);
  }

  public function about()
  {
    $images = RoomImage::select('url')->take(5)->get();
    return Inertia::render('About', ['images' => $images]);
  }

  public function historyTransactionCustomer()
  {
    $userId = auth()->id();
    $transactions = Payment::select('booked_at', 'id', 'amount', 'status')->where('user_id', $userId)->get();
    return Inertia::render('HistoryTransaction', ['transactions' => $transactions]);
  }

  public function userProfile()
  {

    // $today = date('Y-m-d H:m:s', 1671000586841 / 1000);
    // $today = time();
    // $todayUnix = strtotime($today);
    // $today = date('Y-m-d',  / 1000);
    // $totalBooking = 4;
    // $lastBooking = strtotime("+${totalBooking} month", $today);

    $idUser = auth()->id();
    $user = User::select('first_name', 'last_name', 'email', 'phone_number', 'photo_profile')->where('id', $idUser)->first();
    $transaction = Payment::select('room_no', 'booked_at', 'booked_until')->where('user_id', 1)->orderBy('created_at', 'desc')->first();
    return Inertia::render('UserProfile', ['user' => $user, 'transaction' => $transaction]);
  }
}
