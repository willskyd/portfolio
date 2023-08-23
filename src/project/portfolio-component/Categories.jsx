import React from "react";
import Categorycard from "../portfolio-component/CategoryCard";
import {BsVectorPen} from 'react-icons/bs'
import {TiHtml5,TiMicrophone,TiBusinessCard,TiLightbulb} from 'react-icons/ti'
import {BiCamera,BiDollar,BiMusic,BiBuildingHouse,BiCoinStack} from 'react-icons/bi'

export default function Categories(){
    return(
        <div className="w-full bg-[#F0FBF7] py-24">
        <div className="md:max-w-[1480px] m-auto max-w-[600px]">
                        <h1 className=" text-3xl mx-1 font-bold">Most <span 
                        className="text-[#20B486]">Popular Categories</span>  
             </h1> 
            <p className="text-lg py-3 text-gray-600">
                Various versions have evolved over the years,
               sometimes by accident</p>

               <div className="grid grid-cols-2 lg:grid-cols-4 py-12 gap-4">
                <Categorycard 
                icons={ <BsVectorPen size={30}/>}
                title= {'Design'}
                />

                 <Categorycard 
                icons={ <TiHtml5 size={30}/>}
                title= {'Document'}
                />

                  <Categorycard 
                icons={ <TiMicrophone size={30}/>}
                title= {'Marketing'}
                />
                  <Categorycard 
                icons={ <TiBusinessCard size={30}/>}
                title= {' Business'}
                />

                  <Categorycard 
                icons={ <TiLightbulb size={30}/>}
                title= {'Lifestyle'}
                />

                  <Categorycard 
                icons={ <BiCamera size={30}/>}
                title= {'Photography'}
                />

                  <Categorycard 
                icons={ <BiMusic size={30}/>}
                title= {'Music'}
                />

                  <Categorycard 
                icons={ <BiCoinStack size={30}/>}
                title= {'Data Science'}
                />

                  <Categorycard 
                icons={ <TiHtml5 size={30}/>}
                title= {'Personal Develop'}
                />
                
                <Categorycard 
                icons={ <TiHtml5 size={30}/>}
                title= {'Health & Fitness'}
                />

                  <Categorycard 
                icons={ <BiDollar size={30}/>}
                title= {'Finance'}
                />

                  <Categorycard 
                icons={ <BiBuildingHouse size={30}/>}
                title= {'Teaching'}
                />


               </div>


            </div>

            </div>
    )
}