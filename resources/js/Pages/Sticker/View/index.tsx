import { Inertia } from "@inertiajs/inertia"

import React, { useState } from "react"

import Layout from "../../../components/general/layout"



interface Props {
  sticker: any
}



const StickerViewPage: React.FC<Props> = ({ sticker }) => {

  const handleSave = (event: React.MouseEvent) => {

    event.preventDefault()
   
    Inertia.post('/sticker/make-active', {id: sticker.id})

  }
  

  return (


  <Layout>

   <div className="row">



   <div className="col-md-6">

      

      {sticker.title && (

      
      <div className="card">


       <div className="card-header">{sticker.title}</div>


      <p>Url: {sticker.url}</p>

       <div className="card-body">


       <p>{sticker.description}</p>



       <img src={sticker.img_url} alt={sticker.title} width="100%"/>

       <button className="btn btn-primary" onClick={handleSave}>Save</button>

      </div>


      </div>


      )}







   </div>


   </div>





  </Layout>

 
  )

}

export default StickerViewPage

























































