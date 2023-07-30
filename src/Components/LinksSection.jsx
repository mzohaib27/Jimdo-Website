import React from "react";
import { Links } from "./Constants";
const LinksSection = () => {
  return (
    <div>
      <div className="py-12 bg-gray-200">
        {Links.map((link, i) => (
          <div key={i} className="grid grid-cols-4 gap-8  px-20">
            <div className="px-6 py-1">
              <ul>
                <li className="hover:text-blue-600 font-medium text-lg cursor-pointer hover-effect">
                  {link.link1}
                </li>
              </ul>
            </div>
            <div className="px-6 py-1">
              <ul>
                <li className="hover:text-blue-600 font-medium text-base cursor-pointer hover-effect">
                  {link.link2}
                </li>
              </ul>
            </div>
            <div className="px-6 py-1">
              <ul>
                <li className="hover:text-blue-600 font-medium text-lg cursor-pointer hover-effect">
                  {link.link3}
                </li>
              </ul>
            </div>
            <div className="px-6 py-1">
              <ul>
                <li className="hover:text-blue-600 font-medium text-lg cursor-pointer hover-effect">
                  {link.link4}
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
      {/* Blue section */}

      <div className="bg-des flex flex-col py-12 items-center justify-center space-x-4">
        <h1 className="text-white py-8 text-2xl font-medium">
          Love your Website from Day One
        </h1>
        <div>
          <button className="text-white hover:bg-blue-700 hover-effect px-12 py-4 bg-blue-600">
            Let's get started
          </button>
        </div>
      </div>
      {/*  End */}
    </div>
  );
};

export default LinksSection;
