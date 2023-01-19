<?php

namespace App\Http\Controllers;

use App\Models\Voucher;
use Illuminate\Http\Request;

class VoucherController extends Controller
{
  public function createVoucher(Request $request)
  {
    $date = strtotime($request->expires_at);

    $voucher = Voucher::create([
      'voucher_name' => $request->voucher_name,
      'discount_amount' => $request->discount_amount,
      'voucher_limit' => $request->voucher_limit,
      'expires_at' => $date,
    ]);

    return response()->json($voucher, 200);
  }

  public function checkVoucher(Request $request)
  {

    $voucher = Voucher::where('voucher_name', $request->voucher)->first();


    if (!$voucher) {
      // return response()->json(["message" => "Voucher tidak ada", "voucher" => $request->voucher], 200);
      return redirect()->back()->with("message", "Voucher tidak ada!");
    }
    if ($voucher->voucher_limit < 1) {
      // return response()->json(["message" => "Voucher sudah habis/tidak bisa digunakan"], 200);
      return redirect()->back()->with("message", "Voucher sudah habis/tidak bisa digunakan");
    }

    // return response()->json(["message" => "Voucher siap digunakan"], 200);
    return redirect()->back()->with("message", "Voucher siap digunakan!");
  }
}
