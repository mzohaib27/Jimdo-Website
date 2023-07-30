import React from "react";
import { Selling } from "./Constants";
import { BiSolidMessageRoundedCheck } from "react-icons/bi";

const SellingSection = () => {
  return (
    <>
      <div className="flex">
        <div className="w-[50%] space-y-4 py-6 flex flex-col items-start justify-center pl-24">
          <h1 className="text-5xl">
            <span className="text-blue-600">Selling</span>
            {Selling.heading}
          </h1>
          <p>{Selling.text}</p>
          <div className="">
            {Selling.list.map((link, i) => (
              <div>
                <div key={i}>
                  <ul>
                    <li className="flex text-xl  py-1 space-y-4">
                      <BiSolidMessageRoundedCheck className="w-5 h-5 mr-2 text-blue-600" />
                      {link}
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <button className="bg-blue-600 px-14 py-4 text-white">
            Let's Get Started
          </button>
          <button className="underline hover:text-blue-600">
            How to create an online Store
          </button>
        </div>
        <div className="w-[50%]">
          <img src={Selling.img} alt="" className="w-full h-full bg-cover" />
        </div>
      </div>
    </>
  );
};

export default SellingSection;
