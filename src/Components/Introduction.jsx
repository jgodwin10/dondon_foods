import React from "react";
import Intro from "../../public/Intro.jpg";
import Intros from "../../public/intros.jpg";

const Introduction = () => {
  return (
    <div id="intro" className="bg-[#bc1823] pb-16 ">
      <div className="max-w-[1300px] py-16 grid lg:grid-cols-2 mx-auto">
        <img
          className="md:max-w-[700px] lg:max-w-full px-8 md:px-0 mx-auto hero rounded-lg"
          src={Intro}
          alt=""
        />
        <div className="flex flex-col pt-10 px-6 md:px-16 pb-6 text-center text-white justify-end items-center">
          <h2 className="md:text-[66px] text-[30px] pb-10 font-semibold">
            Introducing
          </h2>
          <p className="md:text-[25px] font-bold text-[20px] pb-2">
            DON-DON SOYA BEANS: A Nutritional ​Powerhouse !
          </p>
          <p className="md:text-[20px] font-bold">
            Are you looking for a superfood that's ​packed with nutrients and
            can transform ​your health ? Look no further ! DON-DON ​SOYA BEANS
            WITH DATES AND ALMOND ​POWDER is a game-changer !
          </p>
        </div>
      </div>
      <div className="text-white px-6 text-[18px] md:text-[24px] font-bold">
        <p className="">
          Dondon global is rich in Omega-3 Fatty Acids: The Healthy Fats Your
          Body Needs
        </p>
        <p className=" py-4">
          Our bodies can't produce Omega-3 fatty acids on their own, but DON-DON
          SOYA BEANS has got you covered! These healthy fats support heart
          health, reduce inflammation, and promote brain function.
        </p>

        <p className=" py-4">This incredible blend is also enriched with:</p>
        <p>- Protein to build and repair muscles</p>
        <p>- Vitamins for energy and vitality</p>
        <p>- Calcium for strong bones and teeth</p>
        <p>- Minerals for optimal bodily functions</p>

        <p className="py-5">Upgrade Your Health with DON-DON SOYA BEANS</p>
        <p className="">
          Experience the incredible benefits of DON-DON SOYA BEANS for yourself.
          Try it today and discover a healthier, happier you
        </p>
        <p className="py-6">
          DonDon global food is good for babies from 6month old up, and also
          rich for adults.
        </p>
        <img
          className=" px-8 max-w-[1200px] border-[#fab919] object-cover border-8 my-8 md:px-0 mx-auto hero rounded-[50px]"
          src={Intros}
          alt=""
        />
        <div className="flex justify-center items-center w-full">
          <button className="uppercase hover:scale-[1.1] shadow-2xl duration-500 bg-black py-[12px] px-[16px] w-[205px] rounded-[99px] font-semibold text-white ">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
