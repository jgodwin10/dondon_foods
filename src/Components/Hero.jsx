import React from "react";
import HeroImg from "../Images/hero.svg";
import Boy from "../Images/Boy.jpg";

const Hero = () => {
  return (
    <div id="home" className="bg-[#fab919] mt-5 w-full">
      <div className="lg:max-w-[1300px] md:max-w-[769px] text-center grid lg:grid-cols-2 py-16 px-6 md:px-8 mx-auto">
        <div className="flex-col lg:items-start items-center gap-10">
          <div className="w-full md:pl-[50px] pb-10 md:pb-28">
            <img className="size-[50px]" src={HeroImg} alt="" />
          </div>
          <div className="hero">
            <h1 className="flex text-[10vw] lg:text-[6vw] xl:text-[4vw] md:pl-7 font-medium flex-col items-center">
              DonDon global <span className="pt-2">​Foods</span>
            </h1>
            <p className="para text-xl md:text-2xl py-3 pb-6">
              NUTRITIONAL POWERHOUSE !
            </p>
            <div className="w-full">
              <a
                href="https://wa.me/+2349034237629"
                className="uppercase hover:scale-[1.1] duration-500 shadow-2xl bg-[#bc1823] py-[12px] px-[16px] w-[175px] h-[48px] rounded-[99px] font-semibold text-white "
              >
                Order Now
              </a>
            </div>
          </div>
        </div>
        <div className="sm:max-w-[600px] image mx-auto pt-9 lg:pt-0">
          <img
            className="size-[100%] rounded-full object-cover"
            src={Boy}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
