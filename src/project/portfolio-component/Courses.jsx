import React from "react";
import Card from "./Card";
import Slider from 'react-slick'


const Courses = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return(
        <div className="w-full bg-[#E9F8F3B2] py-[50px] ">
        <div className="md:max-w-[1480px] m-auto grid max-w-[600px]">
        <Slider {...settings} className="">
       
        <Card />
         {/* <Card /> */}
        </Slider>
        </div>   
        </div>
    )
}

export default Courses