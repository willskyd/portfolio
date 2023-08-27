import React from "react";
import Happy from '../portfolio/Happy.png' 
import {BiSearch} from "react-icons/bi"

const Hero = () => {
    return(
        <div className="w-full bg-white py-24">
            <div className="md:max-w-[1480px] m-auto grid 
            md:grid-cols-2 max-w-[600px]">
            <div> 
                <p className="text-2xl py-2 mx-3 text-[#20B486] font-medium">START TO SUCCESS</p>
                <h1 className="lg:text-[100px] text-5xl mx-1">Access to 
                <a href="http://www.codingforeverybody.com/" className="text-[#20B486]">5000+</a>  
                    Courses from <span className="text-[#20B486]"><a href="/">300</a></span> Instructors & institution</h1> 
                <p className="text-lg text-gray-600">Various versions have evolved over the years,
                   sometimes by accident</p>
                <form className="max-w-[700px] p-4 shadow-lg rounded-md my-2 flex justify-between">
                    <input type="text" 
                    className="bg-white p-3 "
                    placeholder="Search Anything"
                    />
                    <button>
                    <BiSearch 
                    size={30}
                    className="icon"
                    style={{color:'black'}}
                    />
                    </button>
                </form>
            </div>

            <img src={Happy} className="flex  h-[300px] w-[15rem]  rounded-lg
           md:mx-20 mx-20 my-4 lg:h-[400px] lg:w-[300px] lg:mx-52 
           md:order-last order-first  " />

            
            </div>
          
        </div>
    )
}
export default Hero