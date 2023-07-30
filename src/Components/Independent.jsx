import React from "react";
import image from "../assets/indep.webp";
import { Independent } from "./Constants";

const IndependentSection = () => {
  return (
    <>
      <div className="bg-white p-12 flex space-x-10">
        <div className="w-[50%]">
          <img src={image} alt="" className="w-full h-auto" />
        </div>

        <div className="w-[50%] px-6 py-64 h-auto bg-gray-100 space-y-6">
          <h1 className="text-5xl font-medium">
            <span className="text-blue-600">Independent</span> but not alone
          </h1>
          <p className="text-xl ">{Independent.prg}</p>
        </div>
      </div>
    </>
  );
};

export default IndependentSection;
