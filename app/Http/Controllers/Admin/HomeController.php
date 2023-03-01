<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Room;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{

  public function renderHome()
  {

    $sumAvailableRoom = Room::where("is_booked", false)->count();
    $sumBookedRoom = Room::where("is_booked", true)->count();
    $sumRoom = Room::count();

    return Inertia::render("Admin/Dashboard", [
      "room" => [
        "availableRoom" => $sumAvailableRoom,
        "bookedRoom" => $sumBookedRoom,
        "sumRoom" => $sumRoom
      ]
    ]);
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
