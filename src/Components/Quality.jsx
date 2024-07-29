import React from "react";
import Intro from "../../public/ano.mp4";
import Second from "../../public/second.mp4";

const Quality = () => {
  return (
    <div id="quality" className="bg-[#fab919] px-6 md:px-8">
      <div className="max-w-[1300px] pb-10 mx-auto">
        <h3 className="md:text-[66px] text-[30px] pb-10 text-center pt-12 md:pt-28 capitalize font-semibold">
          our products are Carefully ​produced
        </h3>
        <video
          className="md:w-[1200px] md:h-[800px] w-full h-[400px] object-cover border-[#bc1823] border-[10px] md:px-0 mx-auto hero rounded-[50px]"
          src={Intro}
          controls
        ></video>
        <video
          className="md:w-[1200px] md:h-[800px] w-full h-[400px] mt-6 object-cover border-[#bc1823] border-[10px] md:px-0 mx-auto hero rounded-[50px]"
          controls
          src={Second}
        ></video>
      </div>
    </div>
  );
};

export default Quality;
