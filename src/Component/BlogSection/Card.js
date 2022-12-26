import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Card = ({ blog }) => {
  const { title, details, thumb } = blog;
  // console.log(blog);
  return (
    <div>
      <div className="card rounded-lg">
        <figure>
          <img src={thumb} alt="car!" className="w-full" />
        </figure>
        <div className="p-2">
          <h2 className=" text-lg font-bold ">{title}</h2>
          <p className="text-sm text-justify mt-5 font-semibold ">{details}</p>
          <div className="">
            <button className=" mt-5 flex  items-center border border-green-700 rounded-md px-10 py-2 text-slate-800 font-semibold">
              Read More <FaArrowRight className=" ml-2 "></FaArrowRight>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
