<?php

namespace App\Http\Controllers\Admin;

use App\Enum\TransactionStatusEnum;
use App\Enum\UserRoleEnum;
use App\Http\Controllers\Controller;
use App\Models\Room;
use App\Models\RoomImage;
use App\Models\User;
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
    $rooms = Room::select("no", "is_booked", "price")->get();

    return Inertia::render('Admin/RoomList', [
      "rooms" => $rooms
    ]);
  }

  public function renderTenantList()
  {

    $tenants = User::where("role", UserRoleEnum::CUSTOMER)->select("photo_profile", "first_name", "email", "phone_number")->get();

    return Inertia::render("Admin/TenantList", [
      "tenants" => $tenants
    ]);
  }

  public function renderCreateRoom()
  {
    return Inertia::render("Admin/CreateRoom");
  }

  public function renderEditRoom($roomNo)
  {
    $roomPrice = Room::select("price")->where("no", $roomNo)->first();
    $roomImages = RoomImage::select("url", "id")->where("room_no", $roomNo)->get();
    return Inertia::render("Admin/EditRoom", [
      "roomPrice" => $roomPrice->price,
      "roomNo" => $roomNo,
      "images" => $roomImages
    ]);
  }
}
