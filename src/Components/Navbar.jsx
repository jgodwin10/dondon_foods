import React, { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { LiaTimesSolid } from "react-icons/lia";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <>
      <div className="bg-[#bc1823] z-[9999] fixed top-0 left-0 flex justify-end px-6 items-center w-full h-[50px]">
        <ul className="flex-1 hidden md:flex justify-end text-white gap-8 md:text-[15px]  font-semibold items-center">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#intro">Introduction</a>
          </li>
          <li>
            <a href="#promo">Promo</a>
          </li>
          <li>
            <a href="#vendor">Vendor Page</a>
          </li>
          <li>
            <a href="#quality">Quality Assurance</a>
          </li>
          <li>
            <a href="#nafdac">NAFDAC Approval</a>
          </li>
          <li>
            <a href="#payment">Payment</a>
          </li>
          <li>Reach Us</li>
        </ul>
        <HiOutlineMenuAlt3
          onClick={() => setNav(true)}
          className="md:hidden text-white size-7"
        />
      </div>
      <div
        className={`bg-black/50 fixed z-[99999] ${
          nav ? "translate-x-0" : "translate-x-[120vw]"
        } flex justify-end right-0 duration-700 top-0 w-[100vw] h-screen`}
      >
        <div className="bg-[#bc1823] w-[80vw] h-screen">
          <LiaTimesSolid
            onClick={() => setNav(false)}
            className={`size-8 ${!nav && "rotate-x-[360deg]"} text-white m-3`}
          />
          <ul className="p-6 text-white space-y-3 h-screen md:text-[15px]  font-semibold ">
            <li onClick={() => setNav(false)}>
              <a href="#home">Home</a>
            </li>
            <li onClick={() => setNav(false)}>
              <a href="#intro">Introduction</a>
            </li>
            <li onClick={() => setNav(false)}>
              <a href="#promo">Promo</a>
            </li>
            <li onClick={() => setNav(false)}>
              <a href="#vendor">Vendor Page</a>
            </li>
            <li onClick={() => setNav(false)}>
              <a href="#quality">Quality Assurance</a>
            </li>
            <li onClick={() => setNav(false)}>
              <a href="#nafdac">NAFDAC Approval</a>
            </li>
            <li onClick={() => setNav(false)}>
              <a href="#payment">Payment</a>
            </li>
            <li onClick={() => setNav(false)}>Reach Us</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
