import React from "react";
import Intro from "../../public/Foot.jpg";

const Promo = () => {
  return (
    <div id="promo" className="bg-[#ac4d49] px-6 py-6">
      <div className="max-w-[1300px] grid lg:grid-cols-2 mx-auto">
        <img
          className="md:max-w-[700px] border-[#fab919] object-cover border-[10px] lg:max-w-full md:px-0 mx-auto hero rounded-[50px]"
          src={Intro}
          alt=""
        />
        <div className="promo flex flex-col pt-10 md:px-16 pb-6 text-white justify-center items-start">
          <h3 className="font-semibold text-[25px] md:text-[60px]">
            Promo ! Promo !
          </h3>
          <p className="md:text-[27px] text-[20px] py-7">
            "Affordability meets quality with our Dondon ​soya beans!
          </p>
          <div className="md:text-[20px] text-[15px]">
            <li>1 jar: ₦3,500 (great value!)</li>
            <li>2 jars: ₦6,400 (save ₦200!)</li>
            <li>5 jars: ₦15,000 (save a whopping ₦2,500!)</li>
          </div>
          <p className="md:text-[24px] py-8 text-[20px]">
            Stock up and enjoy the savings!"
          </p>
          <div className="flex justify-center items-center w-full">
            {/* <button className="uppercase hover:scale-[1.1] shadow-2xl duration-500 bg-black py-[12px] px-[16px] w-[205px] rounded-[99px] font-semibold text-white ">
              Order Now
            </button> */}
            <a
              href="https://wa.me/+2349034237629"
              className="uppercase hover:scale-[1.1] text-center button duration-500 shadow-2xl bg-black py-[12px] px-[16px] w-[175px] h-[48px] rounded-[99px] font-semibold text-white "
            >
              Order Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;
