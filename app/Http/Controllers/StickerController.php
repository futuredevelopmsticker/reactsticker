<?php

namespace App\Http\Controllers;


use Inertia\Inertia;
use App\Models\Sticker;
use Illuminate\Support\Facades\DB;

use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;

class StickerController extends Controller
{
    //
     public function index()
    {
        $stickers = Sticker::query()
            ->where('user_id', Auth::user()->id)
            ->get();

        return Inertia::render('Sticker/List/index', [
            'stickers' => $stickers,
        ]);
    }

}
