import React from "react";
import {BiStar} from 'react-icons/bi'


const StarRating = ({ratings}) => {
    return(
        <div className="flex py-3 items-center">
        {/* <BiStar className="text-yellow-500 text-2xl" />
        <BiStar className="text-yellow-500 text-2xl" />
        <BiStar className="text-yellow-500 text-2xl" />
        <BiStar className="text-yellow-500 text-2xl" />
        <BiStar className="text-yellow-500 text-2xl" />
        <BiStar className="text-gray-500 text-2xl" /> */}

        {[...Array(ratings)].map(() => 
        <BiStar className="text-yellow-500 text-2xl" />
        ) }
      {[...Array(5-ratings)].map(() => 
        <BiStar className="text-gray-500 text-2xl" />
        ) }
        <p className="ml-2 text-xl">(15)</p>
   
       </div>
    )
}

export default StarRating