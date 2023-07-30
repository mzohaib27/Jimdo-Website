import React from "react";
import { logo, navlinks } from "./Constants";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "tween", delay: 1, duration: 2 }}
        className="flex justify-between px-12 py-6 text-lg shadow-lg font-semibold"
      >
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "tween", delay: 1.3, duration: 2 }}
        >
          <button type="button" className="">
            <img src={logo} alt="App Logo" className="h-10" />
          </button>
        </motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "tween", delay: 1.7, duration: 2 }}
          className="flex justify-center items-center"
        >
          {navlinks.map((link) => {
            return (
              <div>
                <div className="">
                  <ul className="">
                    <li className=" mx-4 my-2 hover:text-blue-600 cursor-pointer">
                      {link.title}
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "tween", delay: 2, duration: 2 }}
          className="space-x-8 hover:text-blue-600 cursor-pointer"
        >
          <button type="button">Help</button>
          <button type="button">Log in</button>
        </motion.div>
      </motion.div>
    </>
  );
};

export { Navbar };
