import React from "react";
import Intro from "../../public/Nafdac.jpg";

const NAFDAC = () => {
  return (
    <div id="nafdac" className="bg-[#bc1823] px-6 pb-16 ">
      <div className="max-w-[1300px] py-16 grid lg:grid-cols-2 mx-auto">
        <img
          className="md:max-w-[700px] w-full border-[#fab919] object-cover border-8 lg:max-w-full  md:mx-auto hero rounded-[50px]"
          src={Intro}
          alt=""
        />
        <div className="flex flex-col pt-10 md:px-16 pb-6 text-center text-white justify-end items-center">
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
      <div className="text-white  text-[18px] md:text-[24px] font-bold text-center max-w-[1300px] mx-auto">
        <p className="text-[#eee] text-center mx-auto py-4">
          NAFDAC approval is a seal of quality and safety from the Nigerian
          government agency responsible for regulating food, drugs, and
          cosmetics. Our product, DON-DON SOYA BEANS, has undergone rigorous
          testing and evaluation to ensure it meets the highest standards of
          safety, quality, and efficacy.
        </p>
        <p className="font-bold text-[18px] md:text-[24px] py-4">
          Benefits of NAFDAC approval Include:
        </p>
        <div className="list">
          <li>Safety Assurance</li>
          <li>Quality Guarantee</li>
          <li>Efficacy Confirmation</li>
          <li>Regulatory Compliance</li>
          <li>Trust and Credibility</li>
        </div>

        <p className="text-[#eee] text-center mx-auto py-4">
          Choose NAFDAC-approved DON-DON SOYA BEANS for peace of mind, knowing
          our product has been tested and verified to meet international
          standards. Join thousands of satisfied customers and experience the
          difference for yourself!
        </p>

        <p className=" text-center pt-8 pb-8 mx-auto">
          Join the thousands of satisfied customers who trust our
          NAFDAC-approved DON-DON SOYA BEANS. Try it today and experience the
          difference for yourself!* products for our customers.
        </p>
      </div>
    </div>
  );
};

export default NAFDAC;
