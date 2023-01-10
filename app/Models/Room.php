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
    'is_booked',
    'price'
  ];

  // protected $cast = [
  //   'status' => RoomStatusEnum::class
  // ];

  public function images()
  {
    return $this->hasMany(RoomImage::class, 'room_no');
  }
}
