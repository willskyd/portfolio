import React from "react";
import Nice from '../portfolio/Nice.jpg' 
import {SlGraduation} from 'react-icons/sl'
import {FiVideo} from 'react-icons/fi'
import {SlPeople} from 'react-icons/sl'


const Achievement = () => {
    return(
        <div className="w-full bg-white py-24">
        <div className="md:max-w-[1480px] m-auto grid 
        md:grid-cols-2 max-w-[600px]">
        <div className="justify-center flex flex-col placeholder:"> 
            <h1 className=" text-3xl mx-1 font-bold">Our <span className="text-[#20B486]"><a href="">Achievement</a></span>  
             </h1> 
            <p className="text-lg py-3 text-gray-600">Various versions have evolved over the years,
               sometimes by accident</p>
             
             <div className="grid grid-cols-2 py-16">
                <div className="flex py-6">
                    <div className="p-4 border bg-[#E9F8F3] rounded-lg">
                 <SlGraduation 
                  size={40}
                  style={{color:'#1A906B'}}
                 />   
                    </div>
                    <div className="px-3">
                        <h1 className="text-3xl font-semibold"><a href="">300</a></h1>
                        <p className="text-[#6D737A]">Instructor</p>
                    </div>
                </div>
                  
                 <div className="flex py-6">
                    <div className="p-4 border bg-[#FFFAF5] rounded-lg">
                 <FiVideo 
                  size={40}
                  style={{color:'#FFC27A'}}
                 />   
                    </div>
                    <div className="px-3">
                        <h1 className="text-3xl font-semibold"><a href="">10,000+</a></h1>
                        <p className="text-[#6D737A]">Videos</p>
                    </div>
                </div>

                <div className="flex py-6">
                    <div className="p-4 border bg-[#FFEEF0] rounded-lg">
                 <SlGraduation 
                  size={40}
                  style={{color:'#ED4459'}}
                 />   
                    </div>
                    <div className="px-3">
                        <h1 className="text-3xl font-semibold"><a href="">20,000+</a></h1>
                        <p className="text-[#6D737A]">Students</p>
                    </div>
                </div>

                <div className="flex py-6">
                    <div className="p-4 border bg-[#F0F7FF] rounded-lg">
                 <SlPeople 
                  size={40}
                  style={{color:'#0075FD'}}
                 />   
                    </div>
                    <div className="px-3">
                        <h1 className="text-3xl font-semibold"><a href="">100,000</a></h1>
                        <p className="text-[#6D737A]">Users</p>
                    </div>
                </div>

             </div>
            
        </div>

        <img src={Nice} className="flex  h-[300px] w-[15rem]  rounded-lg m-auto
       md:mx-20 mx-20 my-4 lg:h-[400px] lg:w-[300px] lg:mx-52 md:order-last order-first  " />

        
        </div>
      
    </div>
    )
}
export default Achievement