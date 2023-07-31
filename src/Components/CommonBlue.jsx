import React from "react";
import CommonBtn from "./CommonBtn";

const CommonBlue = ({ heading }) => {
  return (
    <>
      <div className="bg-des flex flex-col py-12 items-center justify-center space-x-4">
        <h1 className="text-white py-8 text-2xl font-medium">{heading}</h1>
        {/* <div>
          <button className="text-white hover:bg-blue-700 hover-effect px-12 py-4 bg-blue-600">
            {btn}
          </button>
        </div> */}
        <CommonBtn btn="Let's Get Started" />
      </div>
    </>
  );
};

export default CommonBlue;
