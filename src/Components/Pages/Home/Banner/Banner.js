import React from "react";
import { NavLink } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import banner1 from "../../../Images/banner (1).jpg";
import banner2 from "../../../Images/banner (2).jpg";
import banner3 from "../../../Images/banner (3).jpg";
import banner4 from "../../../Images/banner (4).jpg";

const Banner = () => {
  return (
    <div className="relative">
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        showStatus={false}
      >
        <div>
          <img src={banner1} alt="" />
        </div>
        <div>
          <img src={banner2} alt="" />
        </div>
        <div>
          <img src={banner3} alt="" />
        </div>
        <div>
          <img src={banner4} alt="" />
        </div>
      </Carousel>
      <div className="absolute bottom-0 left-0 w-full h-full flex justify-center items-center">
        <div className="text-center ">
          <h1 className="text-2xl md:text-5xl">Buy Your Favourite Drones </h1>
          <h4 className="text-md md:mt-7 md:text-xl">
            We provides best drones in worldwide
          </h4>
          <NavLink to="/explore">
            <button className="inline-block mt-3 px-5 py-4 font-semibold text-white rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-700 lg:px-8 md:transform md:-translate-y-2">
              Explore More
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Banner;
