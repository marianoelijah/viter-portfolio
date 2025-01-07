import { imgPath } from "@/components/helpers/functions-general";
import React from "react";

const Banner = () => {
  return (
    <section className="bg-green-900 py-16">
      <div className="container">
        <div className="introduction-wrapper flex justify-between">
          <div className="introduction-text text-light   justify-center flex flex-col max-w-[800px]">
            <h1 className="mb-5">
              Whats Up Madlang People! <br />
              I'm Yours Trully "Elijah"
            </h1>
            <p className="text-xl leading-relaxed text-justify ">
              Hello, I'm Zhanne Elijah B. Mariano. I'm currently a 4th year
              college student at Laguna State Polytechnic University. I was born
              in Makati Medical Center but now currently living in the Tiaong
              Quezon Province. you can call me "Elii" for short.
            </p>
          </div>
          <div className="mb-4 relative group">
            <p className="absolute left-3 top-3 bg-primary px-4 py-1 rounded-full text-[10px] font-bold z-20 group-hover:opacity-0 transition-opacity">
              I Want You
            </p>
            <img
              src={`${imgPath}/about-2.jpg`}
              alt=""
              className="transition-opacity group-hover:opacity-1"
            />
            <img
              src={`${imgPath}/about-2.jpg`}
              alt=""
              className="transition-opacity absolute left-0 top-0 group-hover:opacity-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
