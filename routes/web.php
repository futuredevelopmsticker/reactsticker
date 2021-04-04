<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\HomeController;

use App\Http\Controllers\IndexController;

use App\Http\Controllers\StickerController;

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
//     return view('welcome');
// });

Route::get('/', [IndexController::class, 'index'])->name('index');

Auth::routes();

// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/home', [HomeController::class, 'index'])->name('home');

Route::group(['middleware' => ['auth']], function () {

Route::get('/stickers', [StickerController::class, 'index'])->name('sticker.index');


Route::get('/sticker/add', [StickerController::class, 'add'])->name('sticker.add');



Route::post('/sticker/preview', [StickerController::class, 'detailspreview'])
        ->name('sticker.preview');


Route::get('/sticker/view/{sticker}', [StickerController::class, 'view'])->name('sticker.view');


Route::post('/sticker/make-active', [StickerController::class, 'makeActive'])->name('sticker.active');



});