import React from "react";
import FootImg from "../Images/Foots.jpg";

const Footer = () => {
  return (
    <div className="bg-black overflow-hidden text-white px-6">
      <div className="max-w-[1300px] mx-auto grid lg:grid-cols-2">
        <img src={FootImg} alt="" />
        <div className="md:p-20 py-16 space-y-8 md:text-[16px] text-[14px]">
          <div>
            <h2 className="text-[16px] md:text-[22px]">LOCATION</h2>
            <p>
              <a
                className="underline"
                href="https://maps.app.goo.gl/aHSzqHfFC1ZfMkqn6"
              >
                113, ago palace way marcity Bus stop lagos.
              </a>
            </p>
          </div>
          <div>
            <h2 className="text-[16px] md:text-[22px]">CONTACT</h2>
            <p>08132311740</p>
            <p>0​903423762</p>
          </div>
          <div className="text-[16px] md:text-[22px]">
            <a className="underline" href="mailto:dondon.food2022@gmail.com">
              dondon.food2022@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
