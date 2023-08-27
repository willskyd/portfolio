import React from "react";

import {Route, 
  createBrowserRouter,
   createRoutesFromElements, 
   Link, 
   Outlet,
   RouterProvider
  } from "react-router-dom"
// import './new react.css';   

 import "./App.css";
 import { Root } from "postcss";

import {Home} from './Home.jsx'
import {App2} from './App2,jsx'
import {Contact } from './Contact.jsx'




// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import AuthsApp from './project/AuthsApp/AuthsApp';
// import RegForm from './project/Form-validation/RegForm';
// import Wills from './project/more';
//  import Portfolio from "./project/portfolio/Portfolio";
//  import Navbar from './project/portfolio/Navbar';

// import CompoundRate from './project/Compound-rate-calculator/CompoundRate.jsx/CompoundRate';
// import Progress from './project/progress-Bars/progress-Bars';
// import Popup from './project/magicPopup/Popup';

//  import SlideToUnlock from './project/Slide-to-unlock/SlideToUnlock';
// import Temperature from './project/Temperature Controler/Temperature';
//  import AlertsApp from './project/alerts/AlertsApp';
// import TestimonialApp from './project/Testimonial/TestimonialApp'
// import Botton from './assets/components/Botton'
// import {BsFillFileEarmarkPostFill} from 'react-icons/bs'
// import {FaUserAlt} from 'react-icons/fa'
// import {BiCommentDetail} from 'react-icons/bi'
// import Title from './project/Newreact';

// import Randomize from './project/randomizecolors/randomise';
// import LikePhotoApp from './project/like-my-photo/like-photo';

// import Title from './project/Newreact'

// import Wills from './project/more'
// import East from './project/same'

export default function App(props) { 
  
  const router = createBrowserRouter(
    createRoutesFromElements(
    
      <Route path="/" element={ <Root />}>
           <Route index element={ <Home />} />
           <Route element={ <App2 />} />
           <Route element={ <Contact />} />

      </Route>
      
    )
  ) 
     
  
  return ( 
  
      <div>
      <RouterProvider router={router} />
      
  </div>
      
  );
}
  
 

