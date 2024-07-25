import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Post = () => {
  return (
    <div className="text-white">
      <Navbar />

      <div className="px-8 pt-24 pb-16 md:text-base text-[14px] bg-[#bc1823]">
        <h2 className="md:text-[48px] text-[30px] font-bold">
          {" "}
          DON-DON SOYA BEANS DISTRIBUTORSHIP TERMS AND CONDITIONS
        </h2>
        <div className="list">
          <p className="font-bold text-[24px] pt-3 md:text-[36px]">
            Introduction
          </p>
          <li>
            These Terms and Conditions ("Agreement") outline the terms under
            which individuals or entities ("Distributors") may partner with
            DON-DON SOYA BEANS ("Company") to distribute its products in
            Nigeria.
          </li>
        </div>
        <div className="list">
          <p className="font-bold text-[24px] pt-3 md:text-[36px]">
            Appointment and Acceptance
          </p>
          <li>
            The Company appoints the Distributor as a non-exclusive distributor
            of its products in Nigeria.
          </li>
          <li>
            The Distributor accepts this appointment and agrees to comply with
            these Terms and Conditions.
          </li>
        </div>
        <div className="list">
          <p className="font-bold text-[24px] pt-3 md:text-[36px]">
            Distributor Responsibilities
          </p>
          <li>
            The Distributor will: * Promote and sell Company products in Nigeria
            * Maintain high standards of customer service * Comply with all
            applicable laws and regulations * Not engage in any activity that
            may harm the Company's reputation
          </li>
        </div>
        <div className="list">
          <h2 className="font-bold text-[24px] pt-3 md:text-[36px]">
            Company Responsibilities
          </h2>
          <li>
            The Company will: * Provide comprehensive training and support *
            Offer competitive margins and incentives * Ensure timely delivery of
            products to the Distributor
          </li>
        </div>
        <div className="list">
          <h2 className="font-bold text-[24px] pt-3 md:text-[36px]">
            Product Pricing and Payment
          </h2>
          <li>
            The Company will determine product pricing, and the Distributor will
            ensure compliance.
          </li>
          <li>
            The Distributor will pay for products within the agreed payment
            terms.
          </li>
        </div>
        <div className="list">
          <h2 className="font-bold text-[24px] pt-3 md:text-[36px]">
            Intellectual Property
          </h2>
          <li>
            The Distributor acknowledges the Company's ownership of all
            intellectual property rights.
          </li>
          <li>
            The Distributor will not use Company intellectual property without
            prior written consent.
          </li>
        </div>
        <div className="list">
          <h2 className="font-bold text-[24px] pt-3 md:text-[36px]">
            Confidentiality
          </h2>
          <li>
            The Distributor will maintain confidentiality of Company information
            and trade secrets.
          </li>
        </div>
        <div className="list">
          <h2 className="font-bold text-[24px] pt-3 md:text-[36px]">
            Termination
          </h2>
          <li>
            Either party may terminate this Agreement with written notice. 8.2
            Upon termination, the Distributor will return all Company property
            and confidential information.
          </li>
        </div>
        <div className="list">
          <h2 className="font-bold text-[24px] pt-3 md:text-[36px]">
            {" "}
            Governing Law
          </h2>
          <li>
            This Agreement will be governed by and construed in accordance with
            Nigerian law.
          </li>
        </div>
        <div className="list">
          <h2 className="font-bold text-[24px] pt-3 md:text-[36px]">
            Dispute Resolution
          </h2>
          <li>
            Any disputes will be resolved through arbitration in accordance with
            Nigerian law.
          </li>
        </div>
        <div className="list">
          <h2 className="font-bold text-[24px] pt-3 md:text-[36px]">
            Entire Agreement
          </h2>
          <li>
            This Agreement constitutes the entire agreement between the parties.
          </li>
        </div>
        <div className="flex pt-20 justify-center items-center w-full">
          {/* <button className="uppercase hover:scale-[1.1] shadow-2xl duration-500 bg-black py-[12px] px-[16px] w-[205px] rounded-[99px] font-semibold text-white ">
              Order Now
            </button> */}
          <a
            href="https://wa.me/+2349034237629"
            className="uppercase hover:scale-[1.1] text-center button duration-500 shadow-2xl bg-black py-[12px] px-[16px] w-[175px] h-[48px] rounded-[99px] font-semibold text-white "
          >
            Apply Now
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Post;
