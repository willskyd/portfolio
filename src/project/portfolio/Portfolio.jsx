import React, { useState } from "react";
import {BiAlbum} from 'react-icons/bi'
import {BiLock} from 'react-icons/bi'
import {BiMenu}   from 'react-icons/bi'
import {AiOutlineClose}   from 'react-icons/ai'
import Hero from "../portfolio-component/Hero";


 const Portfolio = () =>{

    const [toogle, setToogle] = useState(false)
   const handleClick = () => setToogle(!toogle)

    return(
        <div className='w-full h-[80px] bg-white border-b'>
        
            <div className="md:max-w-[1600px] max-w-[600px]  
            m-auto w-full h-full flex justify-between items-center">
           <BiAlbum className="mt-3 m-4  text-5xl text-success " />    
            <div className="hidden md:flex  items-center">
                <ul className="flex gap-4 text-md ">
                    <li>Home </li>
                    <li>About</li>
                    <li>Support</li>
                    <li>Plaftorm</li>
                    <li>Pricing</li>
                </ul>
            </div>
  
             <div className="hidden lg:flex">
        <button className="flex justify-between items-center
         bg-transparent px-5 gap-2 "> <BiLock className="text-xl"/> Login</button>
        <button className="px-5 py-4 rounded-md bg-[#20B486] text-white font-bold">
            sign up for free</button>
             </div>

             <div className="md:hidden" onClick={handleClick}>
                 {/* <AiOutlineClose />  */}
           {toogle?<AiOutlineClose className="mx-3 items-center 
           text-3xl font-semibold hover:text-red-500" />:
           <BiMenu className="flex text-4xl mx-3 item-center "/>}
             </div>



            </div>
            
            <div className={toogle?"absolute z-10 p-4 bg-gainsboro-500 m-auto px-10 md:hidden ":'hidden'}>
                <ul>
                    <li className="p-4 hover:bg-gray-300 rounded-md">Home </li>
                    <li className="p-4 hover:bg-gray-300 rounded-md">About</li>
                    <li className="p-4 hover:bg-gray-300 rounded-md">Support</li>
                    <li className="p-4 hover:bg-gray-300 rounded-md">Plaftorm</li>
                    <li className="p-4 hover:bg-gray-300 rounded-md">Pricing</li>
                   
                   <div className="flex flex-col my-4 gap-4 ">
                   <button className="border border[#20B486] 
                   flex justify-center 
                   items-center bg-transparent px-5 gap-2 py-4 rounded-md
                    hover:bg-[#20B486] hover:text-white"> 
             <BiLock className="text-2xl font-bold"/> Login</button>

            <button className="px-20 py-5 rounded-md bg-[#20B486]
             text-white font-bold ">
            sign up for free</button>
                   </div>
                </ul>
            </div>

          
            <Hero />
         
              
              

        </div>
    )
}

export default Portfolio