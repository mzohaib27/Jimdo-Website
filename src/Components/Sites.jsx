import React from "react";
import { Sites, Cauroselimages, brandpictures } from "./Constants";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import CommonBtn from "./CommonBtn";

const SitesSection = () => {
  const SplideOptions = {
    perPage: 4,
    keyboard: " global",
    type: "loop",
    permove: 1,
    rewind: true,
    gap: "0.1rem",
    pagination: false,
    padding: "0.1rem",
    breakpoints: {
      1200: { perPage: 5 },
      991: { perPage: 3.5 },
      768: { perPage: 3 },
      631: { perPage: 2.5 },
      550: { perPage: 1.5 },
    },
  };

  return (
    <>
      {/* Outer div  */}
      <div className="py-12 px-8 bg-gray-100">
        {/* 1st div  */}
        <div className="flex flex-col text-center space-y-8">
          <h1 className="text-center text-5xl font-medium">
            <span className="text-blue-600">Sites </span>
            {Sites.heading1}
          </h1>
          <p className="text-xl w-[50%] mx-auto justify-center">
            {Sites.paragraph1}
          </p>
          <div className="flex mx-auto ">
            <CommonBtn btn="More Examples" />
          </div>
        </div>
        <div>
          {" "}
          {/* 2nd div for caurosel  */}
          <div>
            <div className="flex px-3">
              <Splide options={SplideOptions}>
                {Cauroselimages.map((img, i) => (
                  <SplideSlide>
                    <div className="relative grid items-center   p-3 rounded shadow-lg shadow-slate-200 ">
                      <div key={i}>
                        <img
                          src={img.image}
                          alt="image"
                          className="w-64 h-auto object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  </SplideSlide>
                ))}
              </Splide>
            </div>
          </div>
        </div>
        <div className="text-center mx-64 my-4 py-4 space-y-4">
          {" "}
          {/* 3rd div  */}
          <h1 className="text-5xl font-medium ">
            {Sites.heading2}
            <span className="text-blue-600">memorable</span>
            <br />
          </h1>
          <h1 className="text-5xl font-medium">{Sites.heading3}</h1>
          <p className="text-lg pb-6">{Sites.paragraph2}</p>
          <button className="underline hover:text-blue-600 hover-effect">
            How to create a logo
          </button>
        </div>
        {/*  4th  div for brands  */}
        <div className="flex space-x-20 mx-32 my-12">
          {brandpictures.map((brandpic, i) => {
            return (
              <div className="p-6 bg-white">
                <img
                  src={brandpic.brand}
                  alt="image"
                  className="w-36 h-auto object-cover"
                />
              </div>
            );
          })}
        </div>
        {/* button  */}
        <div className="flex ">
          <button className="mx-auto border-black border-solid border-2 hover:border-blue-600 bg-transparent px-36 py-4 hover:text-white hover:bg-blue-600 hover-effect">
            Try it free
          </button>
        </div>

        {/* End  */}
      </div>
    </>
  );
};

export default SitesSection;
