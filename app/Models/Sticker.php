<?php

namespace App\Models;

use App\Models\Tag;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sticker extends Model
{
    use HasFactory;


    protected $guarded = [];


     public function tags()
    {
        return $this->morphToMany(Tag::class, 'taggable');
    }
}
