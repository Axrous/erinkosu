<?php

namespace App\Http\Controllers;

use App\Enum\RoomStatusEnum;
use App\Enum\TransactionStatusEnum;
use App\Models\Payment;
use App\Models\Room;
use App\Models\RoomImage;
use App\Models\Voucher;
use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Cookie;
use sirajcse\UniqueIdGenerator\UniqueIdGenerator;

class ServiceController extends Controller
{
  public function index()
  {
    $rooms = Room::leftJoin('room_images', 'rooms.no', '=', 'room_images.room_no')->select('rooms.no', 'room_images.url', 'rooms.is_booked')->groupBy('no')->get();

    return Inertia::render('Service', ['rooms' => $rooms]);
  }

  public function detailService($room_no)
  {
    $room = Room::where('rooms.no', $room_no)->first();
    $images = RoomImage::where('room_no', $room_no)->get();

    return Inertia::render('DetailService', ['room' => $room, 'images' => $images]);
  }

  public function payment()
  {
    return Inertia::render('Payment', []);
  }

  public function toCheckout(Request $request)
  {
    $request->validate([
      'amount' => 'required|in:3,6,12'
    ]);

    $cookie = [
      "roomId" => $request->roomId,
      "amount" => $request->amount,
      "voucher" => $request->voucher
    ];
    setcookie("dataCheckout", json_encode($cookie));
    return redirect('/service/checkout');
  }



  public function checkout(Request $request)
  {
    $discount = 0;
    $data = json_decode($request->cookie("dataCheckout"));

    if ($data == null) {
      return redirect('/services')->with("message", "Pilih dulu atuh kamarnya");
    }
    $room = Room::join('room_images', 'rooms.no', '=', 'room_images.room_no')->select('rooms.no', 'room_images.url', 'price')->groupBy('no')->where('no', $data->roomId)->first();
    $voucher = Voucher::where('voucher_name', $data->voucher)->where('voucher_limit', ">", 0)->select("discount_amount")->first();

    $order_id = uniqid('TR-');

    if ($voucher) {
      $discount = $voucher->discount_amount / 100;
    }



    $amount = $data->amount;
    $price = $room->price * $amount;
    $discountPrice = $price * $discount;
    $totalPrice = $price - $discountPrice;


    return Inertia::render('Checkout', [
      "order_id" => $order_id,
      "amount" => $amount,
      "price" => $price,
      "discount" => $discountPrice,
      "room_no" => $room->no,
      "roomUrl" => $room->url,
      "totalPrice" => $totalPrice,
    ]);
  }

  public function postPayment(Request $request)
  {

    $client = new Client([
      "headers" => [
        "Accept" => "application/json",
        "Content-Type" => "application/json",
        "Authorization" => base64_encode('SB-Mid-server-cxHsqHyzBbhHzgk8-zWGGhJ0')
      ]
    ]);

    $charge = $client->request('POST', 'https://api.sandbox.midtrans.com/v2/charge', [
      "body" => json_encode([
        "payment_type" => "bank_transfer",
        "transaction_details" => [
          "order_id" => $request->order_id,
          "gross_amount" => $request->totalPrice
        ],
        "bank_transfer" => [
          "bank" => $request->bank
        ]
      ])
    ]);

    $response = json_decode($charge->getBody());
    $today = strtotime(date('Y-m-d', time()));
    $bookedUntil = strtotime("+{$request->amount} month", $today);

    $payment = new Payment();
    $payment->id = $response->order_id;
    $payment->user_id = auth()->id();
    $payment->transaction_id = $response->transaction_id;
    $payment->room_no = $request->room_no;
    $payment->amount = $response->gross_amount;
    $payment->va_number = $response->va_numbers[0]->va_number;
    $payment->status = TransactionStatusEnum::PENDING;
    $payment->booked_at = $today;
    $payment->booked_until = $bookedUntil;

    if (!$payment->save()) {
      return false;
    }
    return redirect()->route('detailPayment', ['transactionId' => $response->order_id]);
  }

  public function notifHandle(Request $request)
  {
    try {

      $notification = json_decode($request->getContent(), true);

      $orderId = $notification['order_id'];
      $transactionId = $notification['transaction_id'];
      $statusCode = $notification['status_code'];



      $order = Payment::where('transaction_id', $transactionId)->where('id', $orderId)->first();

      if (!$order) {
        return response()->json(["message" => "Failed"], 400);
      }
      switch ($statusCode) {
        case '200':
          $order->status = TransactionStatusEnum::SUCCESS;
          break;
        case '201':
          $order->status = TransactionStatusEnum::PENDING;
          break;
        case '202':
          $order->status = TransactionStatusEnum::CANCEL;
          break;
      }
      $order->save();


      $room = Room::where('no', $order->room_no)->first();
      if ($room->is_booked) {
        return response()->json([
          "message" => "Kamar sudah dibooking orang, mohon hubungi admin untuk pengembalian dana"
        ]);
      }
      if ($order->status == TransactionStatusEnum::SUCCESS) {
        // $room->is_booked = true;
        // $room->update(['is_booked' => true]);
        Room::where('no', $order->room_no)->update(['is_booked' => true]);
      }
      // $room->save();
      return response()->json(['message' => "OK"], 200);
    } catch (Exception $e) {
      return response()->json(['message' => "Error", $e->getMessage()], 500);
    }
  }

  public function detailHistory($transactionId)
  {
    $transaction = Payment::where('id', $transactionId)->first();
    return Inertia::render('HistoryTransactionDetail', ['transaction' => $transaction]);
  }
}
