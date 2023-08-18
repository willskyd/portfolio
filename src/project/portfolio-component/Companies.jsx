import React from "react";
import {BiAlarm,BiBadge,BiLogo500Px,BiDesktop} from 'react-icons/bi'

const Companies = () => {
    return(
        <div className="w-full bg-white py-[50px]">
        <div className="md:max-w-[1480px] m-auto max-w-[600px]">
            <h1 className="text-center text-2xl font-bold text-[#536E96]">
                Trusted by over 25,000 t eams around in the world</h1>
         <p className="text-center text-xl text-[#536E96]"> Learning companies use the same courses to help 
            emplooyees keep their skills fresh </p>

           <div className="flex justify-center py-6 md:gap-10 gap-6 text-6xl">
            <BiAlarm />
            <BiBadge />
            <BiLogo500Px />
            <BiDesktop />

           </div>


        </div>
        </div>
    )
}
export default Companies