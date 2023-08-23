import React from "react";
// import {BsVectorPen} from 'react-icons/bs'
import {BsArrowUpRight} from 'react-icons/bs'

const Categorycard=({icons,title}) =>{
    return(
     <div className="category-card flex items- justify-between gap-4 bg-white 
     p-5 shadow-lg rounded-lg border border-transparent
      hover:border-[#20B486] cursor-pointer group/edit items-center" >
       <div className="flex ">

         {icons} 

        <h1 className="text-2xl font-semibold">{title}</h1> 
          </div>

          <div className="group-hover/edit:bg-[#20B486] rounded-lg 
          p-3 ">
       <BsArrowUpRight 
       size={30}
       style={{color: '#20B486',}}
       className="arrow-icon"
       />
       </div>


     </div>
    )
}

export default Categorycard