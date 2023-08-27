import React, { useState } from "react";
import { BiAlbum } from "react-icons/bi";
import { BiLock } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import Hero from "../portfolio-component/Hero";
import Companies from "../portfolio-component/Companies";
import Courses from "../portfolio-component/Courses";
import Achievement from "../portfolio-component/Achievement";
import Categories from "../portfolio-component/Categories";
import Categorycard from "../portfolio-component/CategoryCard";
import Feedback from "../portfolio-component/Feedback";
import Cta from "../portfolio-component/CTA";
import Footer from "../portfolio-component/footer";


const Portfolio = () => {
  const [toogle, setToogle] = useState(false);
  const handleClick = () => setToogle(!toogle);

  return (
    <div className="w-full h-[80px] bg-white  ">
      {/* added by goodluck */}

      <div
        className="md:max-w-[1400px] max-w-[600px]  
            m-auto w-full h-full flex border-b-2 justify-between items-center"
      >
        <BiAlbum className="mt-3 m-4  text-5xl text-success " />
        <div className="hidden md:flex  items-center">
          <a href=""></a>
          <ul className="flex gap-4 text-md ">
            <li>  <a href="/">Home</a>  </li>
            <li>  <a href="">About</a></li>
            <li>  <a href="">Support</a></li>
            <li>  <a href="">Plaftorm</a></li>
            <li>  <a href="">Pricing</a></li>
          </ul>
        </div>

        <div className="hidden md:flex">
          <button
            className="flex justify-between items-center
         bg-transparent px-5 gap-2 "
          >
            {" "}
            <BiLock className="text-xl" /> Login
          </button>
          <button className="px-5 py-4 rounded-md bg-[#20B486] text-white font-bold">
            sign up for free
          </button>
        </div>

        <div className="md:hidden " onClick={handleClick}>
          {/* <AiOutlineClose />  */}
          {toogle ? (
            <AiOutlineClose
              className="mx-3 items-center 
           text-3xl font-semibold hover:text-red-500 cursor-pointer"
            />
          ) : (
            <BiMenu className="flex text-4xl mx-3 item-center cursor-pointer " />
          )}
        </div>
      </div>

    
      
      <div 
        className= {
          toogle
          ? "absolute z-10 p-4 bg-gainsboro-500 m-auto px-10 md:hidden "
          : "hidden"
        }
        >
        <ul className="bg-gray-200 rounded-lg">
          {/* my own branch */}
          <li className="p-4 hover:bg-gray-300 rounded-md cursor-pointer"> 
           <a href="hero.jsx">Home</a> </li>
          <li className="p-4 hover:bg-gray-300 rounded-md cursor-pointer">  
          <a href="">About</a></li>
          <li className="p-4 hover:bg-gray-300 rounded-md cursor-pointer">  
          <a href="">Support</a></li>
          <li className="p-4 hover:bg-gray-300 rounded-md cursor-pointer">  
          <a href="">Plaftorm</a></li>
          <li className="p-4 hover:bg-gray-300 rounded-md cursor-pointer">  
          <a href="">Pricing</a></li>

          <div className="flex flex-col my-4 gap-4 ">
            <button
              className="border border[#20B486] 
              flex justify-center 
              items-center bg-transparent px-5 gap-2 py-4 rounded-md
              hover:bg-[#20B486] hover:text-white"
              >
              <BiLock className="text-2xl font-bold" />  <a href="">Login</a>
            </button>

            <button
              className="px-20 py-5 rounded-md bg-[#20B486]
              text-white font-bold "
              >
              <a href="/website.relative_link2.html"> sign up for free</a>
            </button>
          </div>
        </ul>
      </div>
      
      <Hero />

      <Companies />

      <Courses />

    <Achievement />

    <Categories />

    <Feedback />

    <Cta />

   <Footer />      
    </div>
  );
};

export default Portfolio;
