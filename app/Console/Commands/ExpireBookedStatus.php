<?php

namespace App\Console\Commands;

use App\Models\Payment;
use App\Models\Room;
use Illuminate\Console\Command;

class ExpireBookedStatus extends Command
{
  /**
   * The name and signature of the console command.
   *
   * @var string
   */
  protected $signature = 'command:expire-booked-status';

  /**
   * The console command description.
   *
   * @var string
   */
  protected $description = 'Command description';

  /**
   * Execute the console command.
   *
   * @return int
   */
  public function handle()
  {
    // return Command::SUCCESS;
    $today = time();
    $idRoom = Payment::select('room_no')->where('booked_until', $today)->get();

    //json to array
    $idPaymentArray = json_decode($idRoom);
    //get room_no
    $id = array_column($idPaymentArray, 'room_no');

    Room::whereIn('no', $id)->update([
      'is_booked' => false
    ]);
  }
}
