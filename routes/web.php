<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\ServiceController;
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
Route::get('/', [HomeController::class,  'index']);
Route::get('/about', [HomeController::class,  'about']);
Route::get('/services', [ServiceController::class,  'index']);
Route::get('/services/{room_no}', [ServiceController::class,  'detailService']);
Route::post('/services/{room_no}/payment', [ServiceController::class,  'postPayment'])->name('postPayment')->middleware(['auth']);
// Route::post('/services/payment', [ServiceController::class,  'postPayment']);
Route::post('services/notification-handle', [ServiceController::class, 'notifHandle']);
Route::get('transaction', [HomeController::class, 'historyTransactionCustomer']);
Route::post('admin/create-room', [RoomController::class, 'addRoom']);
Route::get('/transaction/detail', [ServiceController::class, 'detailHistory']);


// Route::post('try/services/{room_no}/payment', [ServiceController::class,  'getFormData']);
