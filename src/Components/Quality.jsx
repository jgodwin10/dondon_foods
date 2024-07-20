import React from "react";
import Intro from "../../public/Intro.jpg";

const Quality = () => {
  return (
    <div id="quality" className="bg-[#fab919] px-6 md:px-8">
      <div className="max-w-[1300px] pb-10 grid lg:grid-cols-2 mx-auto">
        <h3 className="md:text-[66px] text-[30px] pb-10 text-center pt-12 md:pt-28 capitalize font-semibold">
          our products are Carefully ​produced
        </h3>
        <img
          className="md:max-w-[700px] lg:max-w-full  px-6 md:px-0 mx-auto hero rounded-lg"
          src={Intro}
          alt=""
        />
      </div>
    </div>
  );
};

export default Quality;
