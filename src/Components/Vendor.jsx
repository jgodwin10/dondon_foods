import React from "react";
import Intro from "../../public/vendor.mp4";
import Second from "../../public/second.mp4";
import { useNavigate } from "react-router-dom";

const Vendor = () => {
  const navigate = useNavigate();

  return (
    <div id="vendor" className="bg-[#bc1823] pb-16 px-6 md:px-8">
      <div className="max-w-[1300px] py-10 mx-auto">
        <div className="flex flex-col pt-10 md:px-16 pb-6 font-bold text-center text-white justify-end items-center">
          <h2 className="md:text-[66px] text-[30px] pb-6 font-bold">
            Distributors ​needed Nationwide
          </h2>
          <p className="md:text-[25px] text-[20px] pb-2">
            Join the DON-DON SOYA BEANS Revolution ​!
          </p>
          <p className="md:text-[22px] text-[18px]">
            Become a Part of Nigeria's Fastest-Growing ​Health Food Network !
          </p>
          <p className="md:text-[22px] text-[18px]">
            We're expanding our reach and seeking ​passionate and driven
            distributors to join ​our team across all 36 states of Nigeria !
          </p>
        </div>
        <video
          className="md:w-[1200px] md:h-[800px] w-full h-[400px] object-cover border-[#fab919] border-[10px] md:px-0 mx-auto hero rounded-[50px]"
          src={Intro}
          controls
        ></video>
        <video
          className="md:w-[1200px] md:h-[800px] mt-6 object-cover border-[#fab919] border-[10px] w-full h-[400px] md:px-0 md:mx-auto hero rounded-[50px]"
          controls
          src={Second}
        ></video>
      </div>
      <div className="text-white text-[20px] md:text-[25px] font-bold text-center max-w-[1300px] mx-auto">
        <p className="font-bold">
          Be at the Forefront of the Healthy Living Movement!
        </p>
        <p className="lg:w-[70%] text-center mx-auto py-4">
          By partnering with us, you'll be part of a dynamic network that's
          changing lives with the power of DON-DON SOYA BEANS. Our product has
          been proven to transform health and wellbeing, and we're looking for
          dedicated individuals to help us share this gift with every corner of
          Nigeria.
        </p>
        <p className="font-bold  py-4">
          Benefits of Becoming a DON-DON SOYA BEANS Distributor:
        </p>

        <p>- Be part of a reputable and growing brand</p>
        <p>- Enjoy competitive margins and incentives</p>
        <p>- Receive comprehensive training and support</p>
        <p>- Tap into a vast and growing market demand</p>
        <p>- Make a real difference in people's lives!</p>

        <p className="font-bold  pt-6 pb-3">If you're:</p>

        <p>- A motivated entrepreneur looking for a new opportunity</p>
        <p>
          - A health and wellness enthusiast passionate about sharing the
          benefits of DON-DON SOYA BEANS
        </p>
        <p>- A business owner seeking to expand your product offerings</p>

        <p className="pt-7">Then we want to hear from you!</p>
        <p className="py-5">
          Join our team of distributors today and be part of the DON-DON SOYA
          BEANS success story!
        </p>
        <p className="pb-12">
          Contact us to learn more and take the first step towards a rewarding
          partnership!
        </p>
        <button
          onClick={() => navigate("/learn-more")}
          className="uppercase hover:scale-[1.1] md:text-base text-[14px] duration-500 shadow-2xl bg-black py-[12px] px-[16px] w-[205px] rounded-[99px] font-semibold text-white "
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Vendor;
