import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="banner h-96 flex items-center justify-center contrast-75 ">
      <div className=" text-left absolute lg:left-60">
        <h1 className=" text-white text-5xl font-bold mb-4">Blog</h1>
        <h3 className="text-white text-xl font-semibold">
          Highlighted Articles
        </h3>
        <p className="text-white mt-2">
          Here is a sneak preview of the most recent events in Cholo Jai.
        </p>
      </div>
    </div>
  );
};

export default Hero;
