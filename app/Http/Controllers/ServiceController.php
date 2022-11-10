<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ServiceController extends Controller
{
  public function index()
  {
    return Inertia::render('Service', [
      'auth' => auth()->hasUser()
    ]);
  }

  public function detailService()
  {
    return Inertia::render('DetailService');
  }
}
