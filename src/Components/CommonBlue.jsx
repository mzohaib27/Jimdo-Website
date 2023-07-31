import React from "react";

const CommonBlue = ({ heading, btn }) => {
  return (
    <>
      <div className="bg-des flex flex-col py-12 items-center justify-center space-x-4">
        <h1 className="text-white py-8 text-2xl font-medium">{heading}</h1>
        <div>
          <button className="text-white hover:bg-blue-700 hover-effect px-12 py-4 bg-blue-600">
            {btn}
          </button>
        </div>
      </div>
    </>
  );
};

export default CommonBlue;
