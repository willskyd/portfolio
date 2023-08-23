import React from "react";
import Slider from "react-slick";
import Card from "./Card";

const Courses = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div className="w-full bg-red-300 py-[50px] min-h-[300px] overflow-hidden">
      <div className="">
        <h1 className="py-3 text-3xl font-bold mx-5">Most Popular 
         <span className="text-[#20B486]"> Courses</span></h1>
         <p className="text-[#6D737A] mx-5 ">Various version have evolved over the years, sometimes by accident.</p>
        <Slider {...settings} className="">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Slider>
      </div>
    </div>
  );
};

export default Courses;
