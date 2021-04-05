<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use Illuminate\Http\Request;

class TagController extends Controller
{
    //


      public function search(Request $request)
    {
        $sendData = $this->validate($request, [
            'tag' => ['required']
        ]);

        return Tag::query()
            ->where('name', 'like', "{$sendData['tag']}%")
            ->limit(10)
            ->get();
    }

}
