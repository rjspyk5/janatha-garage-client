import React from "react";
import ban from "../assets/images/checkout/checkout.png";

export const ServiceSection = () => {
  return (
    <div>
      <div
        className="hero h-[300px] relative my-10"
        style={{
          backgroundImage: `url(${ban})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="absolute  left-14">
          <p className="font-bold text-4xl text-white">Service Details</p>
        </div>
        <div className="absolute bg-[#FF3811] text-white p-2 bottom-0 rounded-tr-[30px] rounded-tl-[30px]">
          <p>Home/Service Details </p>
        </div>
      </div>
    </div>
  );
};
