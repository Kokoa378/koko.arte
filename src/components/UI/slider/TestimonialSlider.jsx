import React from "react";
import Slider from "react-slick";
import { url_video } from "../../../assets/fake-data/video";
import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {



  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if(!url_video) return null
  return (
    <Slider {...settings}>
        <iframe width="853" height="480" src={url_video} ></iframe>
    </Slider>
  );
};

export default TestimonialSlider;
