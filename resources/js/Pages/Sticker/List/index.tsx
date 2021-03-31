import React from "react";

import { InertiaLink } from "@inertiajs/inertia-react"



import Layout from "../../../components/general/layout"



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
                return <li className="list-group-item" key={index}>

                  
                  <p>Title: {sticker.title}</p>


                 </li>
              })}
          </ul>
        </div>
      </div>

    </Layout>
)

};


export default StickerListPage;