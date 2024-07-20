import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#bc1823] fixed top-0 left-0 flex items-center w-full h-[50px]">
      <ul className="flex-1 hidden md:before:flex justify-end text-white gap-8 px-6 md:text-[15px]  font-semibold items-center">
        <li>Home</li>
        <li>Introduction</li>
        <li>Promo</li>
        <li>Vendor Page</li>
        <li>Quality Assurance</li>
        <li>NAFDAC Approved</li>
        <li>Payment Link</li>
        <li>Reach Us</li>
      </ul>
    </div>
  );
};

export default Navbar;
