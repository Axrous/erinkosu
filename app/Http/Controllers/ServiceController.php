<?php

namespace App\Http\Controllers;

use App\Models\Room;
use App\Models\RoomImage;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServiceController extends Controller
{
  public function index()
  {
    // $rooms = Room::join('room_images', function ($join) {
    //   $join->on('rooms.no', '=', 'room_images.room_id');
    // })->get();

    // $rooms = Room::leftJoin('room_images', function ($join) {
    //   $join->on('rooms.no', '=', 'room_images.room_id');
    // })->orderBy('no')->get();
    $rooms = Room::join('room_images', 'rooms.no', '=', 'room_images.room_no')->select('rooms.no', 'room_images.url', 'rooms.status')->groupBy('no')->get();

    return Inertia::render('Service', ['rooms' => $rooms]);
  }

  public function detailService($room_no)
  {
    $room = Room::where('rooms.no', $room_no)->first();
    $images = Room::find($room_no)->images;

    return Inertia::render('DetailService', ['room' => $room, 'images' => $images]);
  }
}
