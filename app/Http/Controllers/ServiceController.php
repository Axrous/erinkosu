<?php

namespace App\Http\Controllers;

use App\Models\Room;
use App\Models\RoomImage;
use Illuminate\Http\Request;
use Inertia\Inertia;
use GuzzleHttp\Client;

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

  public function payment()
  {
    return Inertia::render('Payment', []);
  }

  public function postPayment()
  {
    $client = new Client([
      "headers" => [
        "Accept" => "application/json",
        "Content-Type" => "application/json",
        "Authorization" => base64_encode('SB-Mid-server-cxHsqHyzBbhHzgk8-zWGGhJ0')
      ]
    ]);
    $response = $client->request('POST', 'https://api.sandbox.midtrans.com/v2/charge', [
      "body" => json_encode([
        "payment_type" => "bank_transfer",
        "transaction_details" => [
          "order_id" => "order-4",
          "gross_amount" => 10000
        ],
        "bank_transfer" => [
          "bank" => "bca"
        ]
      ])
    ]);

    return $response->getBody();
  }
}
