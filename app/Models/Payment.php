<?php

namespace App\Models;

use App\Enum\TransactionStatusEnum;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
  use HasFactory;

  protected $table = "payments";

  protected $cast = [
    'status' => TransactionStatusEnum::class
  ];
}
