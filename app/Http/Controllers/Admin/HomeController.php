<?php

namespace App\Http\Controllers\Admin;

use App\Enum\TransactionStatusEnum;
use App\Http\Controllers\Controller;
use App\Models\Room;
use Illuminate\Database\Query\JoinClause;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{

  public function renderHome()
  {

    $sumAvailableRoom = Room::where("is_booked", false)->count();
    $sumBookedRoom = Room::where("is_booked", true)->count();
    $sumRoom = Room::count();

    $room = Room::select("rooms.no", "rooms.is_booked", "payments.booked_until", "payments.user_id", "users.first_name")->leftJoin("payments", function (JoinClause $join) {
      $join->on("rooms.no", "=", "payments.room_no")->where("payments.status", "=", TransactionStatusEnum::SUCCESS);
    })->leftJoin("users", "payments.user_id", "=", "users.id")->get();

    return Inertia::render("Admin/Dashboard", [
      "room" => [
        "availableRoom" => $sumAvailableRoom,
        "bookedRoom" => $sumBookedRoom,
        "sumRoom" => $sumRoom,
      ],
      "roomDetail" => $room
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
