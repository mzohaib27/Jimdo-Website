import React, { useState } from "react";
import { logo, Icons, Footerlinks, LastLinks, Languages } from "./Constants";
import { AiFillDownCircle, AiFillUpCircle } from "react-icons/ai";

const FooterSection = () => {
  const [arrow, setArrow] = useState(true);

  const HandleArrow = () => {
    setArrow(!arrow);
  };
  return (
    <>
      <div className="flex px-12 py-6">
        <div className="flex flex-col items-start ">
          <div>
            <button>
              <img src={logo} alt="logo/image" className="h-10" />
            </button>
          </div>
          <div className="mt-8 pr-24">
            <ul className="flex space-x-4">
              <li className="hover:text-blue-600 cursor-pointer hover-effect  py-1">
                <Icons.f className="w-10 h-10" />
              </li>
              <li className="hover:text-blue-600 cursor-pointer hover-effect  py-1">
                <Icons.y className="w-10 h-10" />
              </li>
              <li className="hover:text-blue-600 cursor-pointer hover-effect  py-1">
                <Icons.i className="w-10 h-10" />
              </li>
              <li className="hover:text-blue-600 cursor-pointer hover-effect  py-1">
                <Icons.g className="w-10 h-10" />
              </li>
              <li className="hover:text-blue-600 cursor-pointer hover-effect  py-1">
                <Icons.ggl className="w-10 h-10" />
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto">
          <div className="flex space-x-20">
            <h1>Products</h1>
            <h1 className="pl-2">About Us</h1>
            <h1 className="pl-2">Service</h1>
          </div>
          {Footerlinks.map((link, i) => (
            <div className=" grid grid-cols-3 gap-6 py-1" key={i}>
              <div className="">
                <ul>
                  <li className="text-base font-medium cursor-pointer hover:text-blue-600 hover-effect">
                    {link.link1}
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className="text-base font-medium cursor-pointer hover:text-blue-600 hover-effect">
                    {link.link2}
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className="text-base font-medium cursor-pointer hover:text-blue-600 hover-effect">
                    {link.link3}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Last Section  */}
      <div className="flex justify-between mx-16 py-10">
        <div className="flex space-x-6 font-medium text-base">
          <h1 className="hover:text-blue-600 hover-effect cursor-pointer">
            {LastLinks.link1}
          </h1>
          <h1 className="hover:text-blue-600 hover-effect cursor-pointer">
            {LastLinks.link2}
          </h1>
          <h1 className="hover:text-blue-600 hover-effect cursor-pointer">
            {LastLinks.link3}
          </h1>
          <h1 className="hover:text-blue-600 hover-effect cursor-pointer">
            {LastLinks.link4}
          </h1>
        </div>

        {arrow ? (
          <div className="flex space-x-2 font-semibold text-base items-center ">
            English
            <button onClick={HandleArrow}>
              <AiFillDownCircle className="w-6 h-6 mx-2 hover:text-blue-600 hover-effect" />
            </button>
          </div>
        ) : (
          <>
            <div className="fixed bottom-16 right-16 px-6 rounded-lg shadow-md shadow-blue-600 bg-gray-300 py-2">
              {Languages.map((lan, i) => (
                <div key={i}>
                  <ul>
                    <li className="font-semibold text-lg py-1 border-b-2 border-blue-400 hover:border-blue-600 flex space-x-2 items-center hover:text-blue-600 hover-effect cursor-pointer">
                      <img src={lan.flag} alt="flag-pic" className="w-8 h-5" />
                      <h1>{lan.lang}</h1>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
            <div className="flex space-x-2 font-medium text-base  items-center ">
              English
              <button onClick={HandleArrow}>
                <AiFillUpCircle className="w-6 h-6 mx-2 hover:text-blue-600 hover-effect" />
              </button>
            </div>
          </>
        )}
      </div>
      {/* End  */}
    </>
  );
};

export default FooterSection;
