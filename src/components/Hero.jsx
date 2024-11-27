import React from "react";
import Button from "./common/Button";
import { NavLink } from "react-router-dom";

const Hero = () => {
  
  return (
    <>
      <div className="w-[100%] h-[87vh] bg-[#F2F0F1]">
        <div className="max-w-[1200px] h-[87vh] mx-auto px-5 flex">
          <div className="w-[50%] flex flex-col justify-center">
            <h1 className="font-extrabold text-[64px] w-[577px] leading-[64px]">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p className="w-[545px] text-[16px] leading-5 mt-7 ">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <NavLink to="/product"><Button text="Shop Now"/></NavLink> 
          </div>
          <div className="overflow-hidden">
            <img src="./assets/image/heroImage.jpg" alt="" className="w-[663px] h-[150%] " />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
