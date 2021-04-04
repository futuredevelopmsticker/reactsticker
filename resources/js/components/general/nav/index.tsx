import { InertiaLink } from "@inertiajs/inertia-react"

import React from 'react'

import route from "ziggy-js"


const Menu = () => {
	
 return (



 <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div className="container">
                <a className="navbar-brand" href="{{ url('/') }}">Sticker</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav mr-auto">
                       
                   <li className="nav-item">
                          <InertiaLink
                            className="nav-link"
                            href={route("sticker.index").url()}
                          >
                            Stickers
                          </InertiaLink>
                        </li>



                         <li className="nav-item">
                          <InertiaLink
                            className="nav-link"
                            href={route("sticker.add").url()}
                          >
                            Sticker add
                          </InertiaLink>
                        </li>

                    </ul>


                  
                
                    <ul className="navbar-nav mr-auto">

                    </ul>

                  
                    <ul className="navbar-nav ml-auto">
                      

                      <li className="nav-item">
	                   

                        <InertiaLink
                          method="post"
                          href={route("logout").url()}
                          className="dropdown-item"
                        >
                          Logout
                        </InertiaLink>
	                </li>





                    </ul>
                </div>
            </div>
        </nav>






 )

}




export default Menu