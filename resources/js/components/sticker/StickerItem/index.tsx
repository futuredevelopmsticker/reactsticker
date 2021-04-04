import { InertiaLink } from "@inertiajs/inertia-react"
import React from "react"
import route from "ziggy-js"

import ISticker from "../../../Records/ISticker"

interface Props {
  sticker: ISticker
}


const StickerItem: React.FC<Props> = ({ sticker }) => {
  return (
    <li className="list-group-item">
       <div className="row">


        {sticker.img_url != "" && (
          <div className="col-md-2">
            <img src={sticker.img_url} alt={sticker.title} width="100%" />

           </div>
        )}
     

        <div className="col-md-10">

       <span>
        
        <InertiaLink

         href={route("sticker.view", {

            sticker: sticker.id

         }).url()}



        >


        {sticker.title}

         </InertiaLink>
       </span>


       <br />


       <span>{sticker.description}</span> 

       </div>
       
      </div>

    </li>
  )
}

export default StickerItem
