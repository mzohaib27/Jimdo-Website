import React from "react";
import { BiSolidMessageRoundedCheck } from "react-icons/bi";
import { websiteDesign } from "./Constants";
import { motion } from "framer-motion";
const Design = () => {
  return (
    <>
      <div className="pt-20 px-32 bg-gray-200">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "tween", delay: 1, duration: 2 }}
          className="text-center space-y-4"
        >
          <h1 className="text-5xl font-medium">
            <span className="text-blue-600">Website</span>
            {websiteDesign.heading}
          </h1>
          <p className="text-lg">{websiteDesign.paragraph}</p>
        </motion.div>
        <div className="flex mt-12">
          <div className="w-[50%]">
            <img src={websiteDesign.img} alt="" className="shadow-lg" />
          </div>
          <div className="w-[50%] pt-16 px-12">
            {websiteDesign.links.map((link, i) => (
              <>
                <div>
                  <div key={i}>
                    <ul className="">
                      <li className="flex text-xl py-2 items-center">
                        <BiSolidMessageRoundedCheck className="w-5 h-5 mr-2 text-blue-600" />
                        {link}
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            ))}
            <div>
              <button className="underline pt-20 hover:text-blue-600">
                How to create a website
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Design;
