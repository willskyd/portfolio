import React from "react";
// import favicoin from '../portfolio/favicoin.png'
import Made from '../portfolio/Made.jpg'
import StarRating from "./Star-Rating";
const Card = () => {
    return(
        <div className="bg-white drop-shadow-lg 
        md:w-[50rem] overflow-hidden rounded-2xl ">
         <img src={Made} 
          className="h-40 w-full object-cover "
         />
            <div className="p-5">
            <h1> Phython Programming</h1>
              <StarRating ratings={4}/>
            </div>
            <h3 className="p-5 border border-b text-2xl">
                $500
            </h3>
            <div className="absolute top-0 bg-white 
            m-3 text-xl px-2 py-[2.5px] rounded-md font-bold">   
                HTML
            </div>

        </div>
    )
}

export default Card