<?php

namespace App\Models;

use App\Models\Sticker;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    use HasFactory;


    protected $guarded = [];


     public function stickers()
    {
        return $this->morphedBy(Sticker::class, 'taggable');
    }
}
