import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Introduction from "../Components/Introduction";
import Promo from "../Components/Promo";
import Vendor from "../Components/Vendor";
import Quality from "../Components/Quality";
import NAFDAC from "../Components/NAFDAC";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Introduction />
      <Promo />
      <Vendor />
      <Quality />
      <NAFDAC />
    </div>
  );
};

export default HomePage;
