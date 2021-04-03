import React, { useState } from "react"
import { Inertia } from "@inertiajs/inertia"



import Layout from "../../../components/general/layout"


interface Props {
  
  

}





const StickerAddPage: React.FC<Props> = () => {


   const [state, setState] = useState({

   link: " ",

   title: 'title'
      

   })


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

     setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value
    })

   }


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    Inertia.post("/sticker/preview", state)
  }

  return (


  <Layout>


    <div className="row">
        <div className="col-sm-8">



           <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="link">Link</label>
                <input
                  type="text"
                  className="form-control"
                  name="link"
                  onChange={handleChange}
                 
                  placeholder="Enter your link here"
                />
              </div>
            </form>
       
        </div>
      </div>



   </Layout>

 
  )

}

export default StickerAddPage
