<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{

  public function renderHome()
  {
    return Inertia::render("Admin/Dashboard", []);
  }

  public function renderRoomList()
  {
    return Inertia::render('Admin/RoomList');
  }

  public function renderTenantList()
  {
    return Inertia::render("Admin/TenantList");
  }

  public function renderCreateRoom()
  {
    return Inertia::render("Admin/CreateRoom");
  }

  public function renderEditRoom()
  {
    return Inertia::render("Admin/EditRoom");
  }
}
