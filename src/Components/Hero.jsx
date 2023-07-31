import React from "react";
import { Heroimgage } from "./Constants";
import { Herotext } from "./Constants";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { FadeIn, slideIn } from "./utils/motion";
import CommonBtn from "./CommonBtn";

const HeroSection = () => {
  return (
    <div className="bg-gray-100">
      <div className="flex">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "tween", delay: 1, duration: 2 }}
          className="w-[50%] grid items-center justify-center  text-6xl font-medium h-[20rem] pl-24"
        >
          <h1>{Herotext.heading}</h1>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "tween", delay: 1, duration: 2 }}
          className="w-[50%] flex flex-col items-start  space-y-8 pt-24 pl-12"
        >
          <p className="text-xl font-light">{Herotext.paragraph}</p>
          {/* <div className="flex">
            <button className="px-28 py-4 bg-blue-600 hover:bg-blue-700 hover-effect text-white">
              {Herotext.btn}
            </button>
          </div> */}
          <CommonBtn btn="Start Free" />
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "tween", delay: 3, duration: 2 }}
      >
        <img src={Heroimgage} alt="Hero-image" className="" />
      </motion.div>
    </div>
  );
};

export { HeroSection };
