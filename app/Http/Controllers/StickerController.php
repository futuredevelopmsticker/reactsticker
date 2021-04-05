<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Sticker;
use App\Models\Tag;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

use App\Services\StickerService;

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

      public function detailspreview(Request $request, StickerService $stickerService)
    {
        $sendData = $this->validate($request, [
            'link' => ['required'],
        ]);


        $showdata = $stickerService->receiveStickerData($sendData['link']);

       // $showdata = \OpenGraph::fetch($sendData['link'], true);


       $sticker = Sticker::create([


        'title' => $showdata['title'],

         'description' => $showdata['description'],



         'type' => $showdata['type'],


         'url' => $sendData['link'],

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


    // public function view(Sticker $sticker)
    // {
       

    //    return $sticker;
    // }


    public function view(Sticker $sticker)
    {


      if (Auth::user()->id !== $sticker->user_id) {
            abort(401, 'You are not allowed to view this sticker');
        }
        

        $sticker->load(['tags']);

        return Inertia::render('Sticker/View/index', [
            'sticker' => $sticker
        ]);
    }



    public function makeActive(Request $request)
    {
        $sendData = $this->validate($request, [
          
            'id' => ['required', 'exists:stickers,id']
        ]);

        $sticker = Sticker::find($sendData['id']);

        if (Auth::user()->id !== $sticker->user_id) {
            abort(401, 'You are not allowed to make this bookmark active');
        }

    


        $sticker->is_active = 1;



        $sticker->save();


        return redirect()->route('sticker.index');
    }

     

      public function handleTagUpdate(Request $request, StickerService $stickerService)
    {
        $sendData = $this->validate($request, [
            'tags' => ['required', 'array'],
            'id' => ['required', 'exists:stickers,id']
        ]);

        $sticker = Sticker::find($sendData['id']);

        if (Auth::user()->id !== $sticker->user_id) {
            abort(401, 'You are not allowed to make this bookmark active');
        }



         $ids = $stickerService->handleStickerTags($sendData['tags']);

         $sticker->tags()->sync($ids);


          return redirect()->route('sticker.view', ['sticker' => $sticker->id]);
       
    }


}

























