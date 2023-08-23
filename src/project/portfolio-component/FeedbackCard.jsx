import React from "react";
import favicoin from '../portfolio/favicoin.png'
import {SlQuestion} from 'react-icons/sl'
const Feedbackcard = () => {
    return(
       <div className="bg-white rounded-3xl  shadow-xl
        justify-between w-[35rem] mx-5 float-right 
        md:float-none md:m-4 my-4 p-8">
         <div className="flex justify-between">
         <div className="flex gap-4">
        <img src={favicoin}
        className="h-[70px]"
        />
        <div className="">
            <h1 className="font-bold">Jenny Wilson </h1>
            <p className="">UI-UX Designer</p>
        </div>
        </div>
        <SlQuestion 
        className="text-5xl mx-4 text-success"/>
        </div>
          
          <div className="py-8">
            <h3 className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Error tempore a, porro provident totam iste corporis expedita 
                ipsam sint quos reiciendis nobis magni debitis doloremque eos 
                est eius minus laborum dolor voluptatem numquam voluptatum 
                 et. Numquam, excepturi unde reiciendis quod, cum 
                facere aliquam doloribus sunt, quae molestiae sapiente soluta!
            </h3>
          </div>
       </div>
    )
}

export default Feedbackcard