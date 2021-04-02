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
            ->where('is_active', 1)
            ->get();

        return Inertia::render('Sticker/List/index', [
            'stickers' => $stickers,
        ]);
    }



      public function detailspreview(Request $request)
    {
        $sendData = $this->validate($request, [
            'link' => ['required'],
        ]);

       $showdata = \OpenGraph::fetch($sendData['link']);




      $sticker = Sticker::create([


        'title' => $showdata['title'],

         'description' => $showdata['description'] || '',



         'type' => $showdata['type'] || '',


         'url' => $sendData['link'] || '',

         'img_url' => $showdata['image'],

         'user_id' => $request->user()->id,

        ]);

          return redirect()
            ->route('sticker.view', ['sticker' => $sticker->id]);

          return $showdata;
    }

        public function add()
    {
        return Inertia::render('Sticker/Add/index');
    }




      public function view(Sticker $sticker)


      {

        return $sticker;
      }




























}
