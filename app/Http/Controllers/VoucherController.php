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
}
