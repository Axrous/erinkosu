<?php

namespace App\Http\Controllers;

use App\Enum\RoomStatusEnum;
use App\Models\Room;
use App\Models\RoomImage;
use Illuminate\Http\Request;

class RoomController extends Controller
{


  public function addRoom(Request $request)
  {

    $validated = $request->validate([
      'no' => 'required',
      'price' => 'required'
    ]);

    $room = Room::create([
      'no' => $request->no,
      'status' => RoomStatusEnum::AVAILABLE,
      'price' => $request->price
    ]);

    foreach ($request->file('images') as $imageFile) {
      $path = $imageFile->store('/images/resource', ['disk' => 'my_files']);
      $image = RoomImage::create([
        'url' => $path,
        'room_no' => $room->no,
      ]);
    }
  }
}
