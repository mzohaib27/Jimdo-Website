import React from "react";

const CommonBtn = ({ btn }) => {
  return (
    <>
      <div>
        <button className="text-white hover:bg-blue-700 hover-effect px-12 py-4 bg-blue-600">
          {btn}
        </button>
      </div>
    </>
  );
};

export default CommonBtn;
