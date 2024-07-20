import React from "react";
import Intro from "../../public/Intro.jpg";

const NAFDAC = () => {
  return (
    <div className="bg-[#bc1823] pb-16 ">
      <div className="max-w-[1300px] py-16 grid lg:grid-cols-2 mx-auto">
        <img
          className="md:max-w-[700px] lg:max-w-full px-8 md:px-0 mx-auto hero rounded-lg"
          src={Intro}
          alt=""
        />
        <div className="flex flex-col pt-10 px-6 md:px-16 pb-6 text-center text-white justify-end items-center">
          <h2 className="md:text-[66px] text-[30px] pb-10 font-semibold">
            NAFDAC APPROVED
          </h2>
          <p className="md:text-[25px] text-[20px] pb-2">
            Your Guarantee of Safety and Quality
          </p>
          <p className="md:text-[20px] text-[14px]">
            We are proud to announce that our DON-​DON SOYA BEANS product has
            received the ​prestigious NAFDAC (National Agency for ​Food and Drug
            Administration and Control) ​approval. This esteemed certification
            is a ​testament to our commitment to providing ​safe, high-quality,
            and effective products ​for our customers
          </p>
        </div>
      </div>
      <div className="text-white px-6 text-[14px] md:text-[20px] font-normal text-center max-w-[1300px] mx-auto">
        <p className="font-semibold text-[20px]">
          What does NAFDAC approval mean?
        </p>
        <p className="text-[#eee] text-center mx-auto py-4">
          NAFDAC is the Nigerian government agency responsible for regulating
          and controlling the manufacture, importation, exportation,
          distribution, sale, and use of food, drugs, cosmetics, and other
          related products. To receive NAFDAC approval, our product has
          undergone rigorous testing, inspection, and evaluation to ensure it
          meets the highest standards of safety, quality, and efficacy.
        </p>
        <p className="font-semibold text-[18px] md:text-[22px] py-4">
          Benefits of NAFDAC approval
        </p>
        <div className="md:text-[20px] list text-[15px]">
          <li>
            <span className="font-bold">Safety Assurance:</span> NAFDAC approval
            ensures that our product is safe for consumption and use
          </li>
          <li>
            <span className="font-bold">Quality Guarantee:</span> Our product
            has been tested and verified to meet international quality
            standards.
          </li>
          <li>
            <span className="font-bold">Efficacy Confirmation: </span>NAFDAC
            approval confirms that our product delivers on its promised
            benefits.
          </li>
          <li>
            <span className="font-bold">Regulatory Compliance:</span> We have
            demonstrated compliance with all relevant regulations and
            guidelines.
          </li>
          <li>
            <span className="font-bold">Trust and Credibility:</span> NAFDAC
            approval enhances our reputation and builds trust with our
            customers.
          </li>
        </div>

        <p className="py-5">Upgrade Your Health with DON-DON SOYA BEANS</p>
        <p className="lg:w-[70%] text-[22px] text-center pb-8 mx-auto">
          Experience the incredible benefits of DON-DON SOYA BEANS for yourself.
          Try it today and discover a healthier, happier you
        </p>
        <button className="uppercase hover:scale-[1.1] shadow-2xl duration-500 bg-black py-[12px] px-[16px] w-[205px] rounded-[99px] font-semibold text-white ">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default NAFDAC;
