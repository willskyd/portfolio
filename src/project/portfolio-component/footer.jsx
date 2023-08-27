import React from "react";
import {BiAlbum} from 'react-icons/bi'
import {FaFacebookF,FaDribbble,FaLinkedinIn,FaInstagram,FaBehance} from 'react-icons/fa'
const Footer = () =>{
    return(
        <div className="w-full bg-white py-24">
        <div className="md:max-w-[1480px] m-auto grid 
        md:grid-cols-5 max-w-[600px]  max-[780px]:cols-2  ">
         
         <div className=" col-span-2">
          <BiAlbum className="mt-3 m-4  text-7xl text-success "/>
          <h3 className="mt-10 font-bold text-2xl">
            Contact Us
          </h3> 

          <h3 className="py-2 mt-4 text-[#6D737A]"> 
          Call : +123 400 123 </h3>

         <h3 className="py-2  text-[#6D737A]"> 
           Lorem ipsum dolor sit amet consectetur <br /> 
           adipisicing elit. Laboriosam, possimus!
           </h3>
           <h3 className="py-2 text-[#6D737A]"> 
             Email: programmer@gmail.com
             </h3>
             <a href="">
             <div className="flex gap-4 py-5">

             <div className="p-4 rounded-lg bg-[#E9F8F3]">
                <FaFacebookF 
                size={25}
                style={{color:'#4DC39E'}} 
                />
             </div>
             <div className="p-4 rounded-lg bg-[#E9F8F3]">
                <FaDribbble 
                size={25}
                style={{color:'#4DC39E'}} 
                />
             </div>
             <div className="p-4 rounded-lg bg-[#E9F8F3]">
                <FaLinkedinIn 
                size={25}
                style={{color:'#4DC39E'}} 
                />
             </div>
             <div className="p-4 rounded-lg bg-[#E9F8F3]">
                <FaInstagram 
                size={25}
                style={{color:'#4DC39E'}} 
                />
             </div>
             <div className="p-4 rounded-lg bg-[#E9F8F3]">
                <FaBehance 
                size={25}
                style={{color:'#4DC39E'}} 
                />
             </div>

                </div></a>
         </div>
  
          <div>
            <h3 className="text-2xl font-bold mt-6"> Explore</h3>
            <a href="">
            <ul className="py-4 text-lg text-[#363A3D]">
                <li className="py-2"> Home </li>
                <li className="py-2"> About </li>
                <li className="py-2"> Course </li>
                <li className="py-2"> Blog </li>
                <li className="py-2"> Contact </li>            
            </ul>
            </a>
          </div>

          <div>
            <h3 className="text-2xl font-bold mt-6"> Category</h3>
            <a href="">
            <ul className="py-4 text-lg text-[#363A3D]">
                <li className="py-2"> Design </li>
                <li className="py-2"> Development </li>
                <li className="py-2"> Marketing </li>
                <li className="py-2"> Business </li>
                <li className="py-2"> Lifestyle</li>
                <li className="py-2"> Photography</li>
                <li className="py-2"> Music</li>         
            </ul></a>
          </div>

          <div className=" max-[780px]:col-span-2 ">
            <h3 className="text-2xl font-bold mt-6"> Subscribe</h3>
            <h3 className="py-2 md:py-7 text-[#6D737A]"> 
           Lorem ipsum dolor sit amet consectetur <br /> 
           adipisicing elit. Laboriosam, possimus!
           </h3>
           <form className="py-4">
             <input className="bg-[#F2F3F4] p-4 w-full rounded-lg" 
             placeholder="Email here" />
              <a href="">
              <button className="md:flex md:flex-col md:justify-start md:gap-4
                max-[780px]:w-full my-4 text-2xl px-5 py-4 md:text-lg m
                 rounded-md bg-[#20B486] text-white font-bold">
                  Subscribe Now         
             </button>
             </a>

           </form>

          </div>
    
         </div>
        </div>
    )
}
export default Footer