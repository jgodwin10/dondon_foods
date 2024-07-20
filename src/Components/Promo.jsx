import React from "react";
import Intro from "../../public/Intro.jpg";

const Promo = () => {
  return (
    <div className="bg-[#ac4d49] px-8 py-6">
      <div className="max-w-[1300px] grid lg:grid-cols-2 mx-auto">
        <img
          className="md:max-w-[700px] lg:max-w-full px-8 md:px-0 mx-auto hero rounded-lg"
          src={Intro}
          alt=""
        />
        <div className="promo flex flex-col pt-10 px-16 pb-6 text-white justify-center items-start">
          <h3 className="font-semibold text-[30px] md:text-[60px]">
            Promo ! Promo !
          </h3>
          <p className="text-[27px] py-7">
            "Affordability meets quality with our Dondon ​soya beans!
          </p>
          <li>1 jar: ₦3,500 (great value!)</li>
          <li>2 jars: ₦6,400 (save ₦200!)</li>
          <li>5 jars: ₦15,000 (save a whopping ₦2,500!)</li>
          <p className="md:text-[24px] py-8 text-[20px]">
            Stock up and enjoy the savings!"
          </p>
          <button className="uppercase hover:scale-[1.1] duration-500 bg-black py-[12px] px-[16px] w-[205px] rounded-[99px] font-semibold text-white ">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Promo;
