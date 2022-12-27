<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\Room;
use App\Enum\RoomStatusEnum;

class RoomIsBooked
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next, $room_no)
    {
        $room = Room::where('no', '=', $room_no)->first();
        if($room->status == RoomStatusEnum::BOOKED) {
            return $next($request);
        }
        return route('dashboard');
    }
}

