import React from "react";

import { InertiaLink } from "@inertiajs/inertia-react"



import Layout from "../../../components/general/layout"

import route from "ziggy-js"


import StickerItem from "../../../components/sticker/StickerItem"

import ISticker from "../../../Records/ISticker"

interface Props {
	
   stickers: Array<any>

}




const StickerListPage: React.FC<Props> = ({ stickers }) => {


  return (

<Layout>


    <div className="row">
        <div className="col-sm-8">
          <ul className="list-group">
            {stickers.length > 0 &&
              stickers.map((sticker, index) => {
               

               return (

                 <StickerItem sticker={sticker} /> 

                 )



              })}
          </ul>
        </div>
      </div>

    </Layout>
)

};


export default StickerListPage;