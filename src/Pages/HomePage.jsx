import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Introduction from "../Components/Introduction";
import Promo from "../Components/Promo";
import Vendor from "../Components/Vendor";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Introduction />
      <Promo />
      <Vendor />
    </div>
  );
};

export default HomePage;
