<?php

namespace App\Http\Controllers;

use App\Enum\TransactionStatusEnum;
use App\Models\Payment;
use App\Models\Room;
use App\Models\RoomImage;
use Illuminate\Http\Request;
use Inertia\Inertia;
use GuzzleHttp\Client;
use sirajcse\UniqueIdGenerator\UniqueIdGenerator;

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

  public function postPayment($room_no)
  {
    $room = Room::where('no', $room_no)->first();

    $client = new Client([
      "headers" => [
        "Accept" => "application/json",
        "Content-Type" => "application/json",
        "Authorization" => base64_encode('SB-Mid-server-cxHsqHyzBbhHzgk8-zWGGhJ0')
      ]
    ]);
    // $order_id = UniqueIdGenerator::generate(['table' => 'payments', 'length' => 10, 'prefix' => 'TR-']);
    $charge = $client->request('POST', 'https://api.sandbox.midtrans.com/v2/charge', [
      "body" => json_encode([
        "payment_type" => "bank_transfer",
        "transaction_details" => [
          "order_id" => uniqid('TR-'),
          "gross_amount" => $room->price
        ],
        "bank_transfer" => [
          "bank" => "bca"
        ]
      ])
    ]);


    $response = json_decode($charge->getBody());

    $payment = new Payment();
    $payment->user_id = auth()->id();
    $payment->transaction_id = $response->transaction_id;
    $payment->room_no = $room_no;
    $payment->va_number = $response->va_numbers[0]->va_number;
    $payment->status = TransactionStatusEnum::PENDING;

    if (!$payment->save()) {
      return false;
    }

    return $response;
  }

  // public function notifHandle(Request $request)
  // {
  //   $notification = json_decode($request->getContent(), true);

  //   $invoice = $notification['order_id'];
  //   $transactionId = $notification['transaction_id'];
  //   $statusCode = $notification['status_code'];

  //   $order = Payment::where('invoice')
  // }
}
