import { Inertia } from "@inertiajs/inertia"

import React, { useState, useEffect } from "react"


import { OptionTypeBase, ValueType, ActionMeta } from "react-select"

import AsyncCreatableSelect from 'react-select/async-creatable'

import route from "ziggy-js"

import Layout from "../../../components/general/layout"

import ISticker from "../../../Records/ISticker"




interface Props {
  sticker: ISticker
}

interface ISelectOption extends OptionTypeBase {}


const defaultOptions: ValueType<ISelectOption, true> = [


{label: "John", value: "Doe"}

]


interface IState {
  

   tags: ValueType<ISelectOption, true>



}




const StickerViewPage: React.FC<Props> = ({ sticker }) => {

   const [state, setState] = useState<IState>({
    tags: defaultOptions
  })



 useEffect(() => {
   
   console.log("use effect")


   const stickerTags = sticker.tags.map(({ name: label }) => {

     return { label, value: label }



    })


    setState({ tags: stickerTags })

  }, [])



  const handleSave = (event: React.MouseEvent) => {

    event.preventDefault()
   
    Inertia.post('/sticker/make-active', {id: sticker.id})



      Inertia.post(route("sticker.update").url(), {
        tags: state.tags,
        id: sticker.id
      })




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


         <div className="mb-3">


       <img src={sticker.img_url} 


       alt={sticker.title}



        width="100%"


        />

     

      </div>


     <div className="mb-3">
            <div>

        <p>Tags:</p>
           <AsyncCreatableSelect


            value={state.tags}

             getOptionLabel={({ label }) => label}


             getOptionValue={({ value }) => value}


             defaultOptions={defaultOptions}


             loadOptions={value => {


              return fetch(`/api/tags?tag=${value}`)
              .then(response => response.json())
              .then((data: Array<{name: string}>) => {

                  return data.map(({name}) => {
                    
                    return {label: name, value: name}

                  })

              })

             }}


             onChange={(


             value: ValueType<ISelectOption, true>,


              action: ActionMeta<OptionTypeBase>




             ) => setState({ ...state, tags: value} )}


             isMulti


             />

            
             </div>

          </div>

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
