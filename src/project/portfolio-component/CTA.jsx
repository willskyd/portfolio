import React from "react";
import lovely from '../portfolio/lovely.jpg'
const Cta = () => {
    return(
        <div className="w-full bg-[#E9F8F3] py-24">
        <div className="md:max-w-[1480px] m-auto grid 
        md:grid-cols-2 max-w-[600px]">

             <img src={lovely} className="flex  h-[500px] w-[25rem]  rounded-lg
     md:mx-20 mx-auto my-4 lg:h-[500px] lg:w-[25rem] lg:mx-52 
         " />
        <div> 
            <h1 className="lg:text-6xl lg:py-[7rem] text-3xl mx-1 font-bold">
                Join  <span className="text-[#20B486]">World's Largest </span> 
                 Learning Plaftorm today</h1> 
            <p className="text-2xl text-gray-600 py-4 ">
                Start Learning by registering for free
                </p>
                <button className="md:flex md:flex-col md:justify-start md:gap-4
                md:w-[10rem] 
                max-[780px]:w-full my-4 px-5 py-4 rounded-md bg-[#20B486]
                 text-white font-bold">
            sign up for free
          </button>

        </div>
        

       

        
        </div>
      
    </div>
    )
}

export default Cta