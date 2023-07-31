import React from "react";
import { links, paths } from "./Constants";
const LinksSection = () => {
  return (
    <div>
      <div className=" bg-gray-200 grid grid-cols-4 gap-1 px-24 py-14">
        {links.map((link, i) => (
          <div key={i} className=" ">
            <ul>
              <a href={paths[i]}>
                <li className="hover:text-blue-600 font-medium text-lg cursor-pointer hover-effect">
                  {link}
                </li>
              </a>
            </ul>
          </div>
        ))}
      </div>

      {/*  End */}
    </div>
  );
};

export default LinksSection;
