import React from "react";
import Card from "../../public/card-1.png";
import Ussd from "../../public/ussd.png";
import Bank from "../../public/bank.png";

const Payment = () => {
  return (
    <div className="flex flex-col items-center px-8 gap-8 py-10">
      <button className="uppercase hover:scale-[1.1] shadow-2xl duration-500 bg-black py-[12px] px-[16px] w-[205px] rounded-[99px] font-semibold text-white ">
        Make Payment
      </button>

      <p className="text-[15px] text-center md:text-[20px]">
        We have various payment options to suit your needs
      </p>

      <div className="md:flex lg:w-[500px] grid items-center gap-5 justify-between">
        <div className="bg-neutral-50 w-[80vw] md:w-full flex items-center gap-8 justify-start py-3 px-4 rounded-lg">
          <img className="size-20 md:mx-auto" src={Card} alt="" />
          <p className="pt-3 md:text-base text-[14px]">Card Payment</p>
        </div>
        <div className="bg-neutral-50 w-[80vw] md:w-full flex items-center gap-8 justify-start py-3 px-4 rounded-lg">
          <img className="size-20 md:mx-auto" src={Ussd} alt="" />
          <p className="pt-3 md:text-base text-[14px]">USSD Payment</p>
        </div>
        <div className="bg-neutral-50 w-[80vw] md:w-full flex items-center gap-8 justify-start py-3 px-4 rounded-lg">
          <img className="size-20 md:mx-auto" src={Bank} alt="" />
          <p className="pt-3 md:text-base text-[14px]">Bank Transfer</p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
