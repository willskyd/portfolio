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
    <div className="w-full bg-red-400 py-[50px] min-h-[300px] ">
      <div className="">
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
