import React from "react";
import Slider from "react-slick";
import Card from "./Card";
import Feedbackcard from "./FeedbackCard";

const Feedback = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsiveness: [
          {
            breakpoint: 1024,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: false,
            dots: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: false,
            dots: true,
            }
          },
        ]
      };
      return (
        <div className="w-full bg-[#dcdcdc] py-[50px] min-h-[300px] 
        overflow-hidden ">
            <h1 className="py-3 text-3xl font-bold mx-5">Student' 
             <span className="text-[#20B486]"> <a href="">Feedback</a></span></h1>
             <p className="text-[#6D737A] mx-5 ">Various version have evolved over the years, sometimes by accident.</p>
          <div className=" -mx-8 md:m-20 md:mx-30 gap-0 md:px-20 md:grid grid-cols-2 px-9">
            <Slider {...settings} className="">

                <Feedbackcard />
                 <Feedbackcard />
                 <Feedbackcard />
              {/* <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card /> */}
            </Slider>
          </div>
        </div>
      );
    };


export default Feedback