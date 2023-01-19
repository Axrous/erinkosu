<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Voucher extends Model
{
  use HasFactory;

  protected $fillable = [
    'voucher_name',
    'discount_amount',
    'voucher_limit',
    'expires_at'
  ];
}
