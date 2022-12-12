<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use App\Models\RoomImage;
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
    $transactions = Payment::where('user_id', $userId)->get();
    return Inertia::render('HistoryTransaction', ['transactions' => $transactions]);
  }
}
