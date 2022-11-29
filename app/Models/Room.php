<?php

namespace App\Models;

use App\Enum\RoomStatusEnum;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
  use HasFactory;

  protected $fillable = [
    'no',
    'status',
    'price'
  ];

  protected $cast = [
    'status' => RoomStatusEnum::class
  ];
}
