<?php

use App\Http\Controllers\Admin\HomeController as AdminHomeController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\VoucherController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// require __DIR__.'/auth.php';

Route::post('/register', [AuthController::class, 'postRegister'])->name('postRegister');
Route::get('/register', [AuthController::class, 'register'])->name('register')->middleware(['guest']);
Route::post('/login', [AuthController::class, 'postLogin'])->name("postLogin");
Route::get('login', [AuthController::class, 'login'])->name('login')->middleware(['guest']);
Route::get('/logout', [AuthController::class, 'logout'])->middleware(['auth']);
Route::get('/', [HomeController::class,  'index'])->name('dashboard');
Route::get('/about', [HomeController::class,  'about'])->name('about');
Route::get('/services', [ServiceController::class,  'index']);
Route::get('/services/transaction-history', [HomeController::class, 'historyTransactionCustomer'])->name('transactionPage')->middleware(['auth']);
Route::post('/services/transaction', [ServiceController::class,  'postPayment'])->name('postPayment')->middleware(['auth']);
Route::get('/services/{room_no}', [ServiceController::class,  'detailService'])->middleware('isBooked');
// Route::post('/services/payment', [ServiceController::class,  'postPayment']);
Route::post('services/notification-handle', [ServiceController::class, 'notifHandle']);
Route::post('admin/create-room', [RoomController::class, 'addRoom'])->middleware('admin');
Route::post('admin/edit-room/{room_no}', [RoomController::class, 'editRoom']);
Route::get('/services/transaction-history/{transactionId}', [ServiceController::class, 'detailHistory'])->name("detailPayment");
Route::get('/user', [HomeController::class, 'userProfile']);
Route::post('/create-voucher', [VoucherController::class, 'createVoucher'])->middleware(['auth', 'admin']);
Route::post('/check-voucher', [VoucherController::class, 'checkVoucher']);
// Route::post('/service/checkout', [ServiceController::class, "checkout"]);
Route::post('/service/checkout', [ServiceController::class, "toCheckout"])->middleware(['auth']);
Route::get('/service/checkout', [ServiceController::class, "checkout"])->middleware(['auth']);
Route::delete("/admin/delete-image/{id}", [RoomController::class, "deleteRoomImage"]);


Route::get("/admin/dashboard", [AdminHomeController::class, "renderHome"]);
Route::get("/admin/room-list", [AdminHomeController::class, "renderRoomList"]);
Route::get("/admin/tenant-list", [AdminHomeController::class, "renderTenantList"]);
Route::get("/admin/create-room", [AdminHomeController::class, "renderCreateRoom"]);
// Route::post('try/services/{room_no}/payment', [ServiceController::class,  'getFormData']);
