<?php

namespace App\Services;

use App\Models\Tag;

class StickerService
{
    public function receiveStickerData(string $url)
    {
        $showdata = \OpenGraph::fetch($url, true);

        $showdata['title'] = $this->receiveInfoData('title', $showdata);
        $showdata['description'] = $this->receiveInfoData('description', $showdata);
        $showdata['image'] = $this->receiveInfoData('image', $showdata);

        return $showdata;
    }

    private function receiveInfoData(string $name, array $showdata)
    {
        if ($showdata[$name] === '' &&
            isset($showdata["twitter:{$name}"]) &&
            $dshowdata["twitter:{$name}"] !== '') {
                return $showdata["twitter:{$name}"];
        }

        return $showdata[$name];
    }


       public function handleStickerTags(array $tags)
    {
        $newTags = collect();
        $existingTagNames = collect();

        foreach ($tags as $tag) {
            if (isset($tag['__isNew__'])) {
                $tag = Tag::create(['name' => $tag['value']]);
                $newTags->push($tag);
            } else {
                $existingTagNames->push(['name' => $tag['value']]);
            }
        }

      



         $existingTags = Tag::whereIn('name', $existingTagNames->pluck('name'))->get();
        
        return $existingTags->merge($newTags)->pluck('id');
    }

   
}






































































