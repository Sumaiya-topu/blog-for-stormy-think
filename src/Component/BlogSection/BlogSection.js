import React from "react";
import cardPic1 from "../../assets/Rectangle 25.png";
import cardPic2 from "../../assets/Rectangle 25 (1).png";
import cardPic3 from "../../assets/Rectangle 25 (4).png";
import cardPic4 from "../../assets/Rectangle 25 (5).png";
import cardPic5 from "../../assets/Rectangle 25 (6).png";
import cardPic6 from "../../assets/Rectangle 25 (n).png";
import Card from "./Card";

const BlogSection = () => {
  const blogs = [
    {
      id: "1",
      title: "Calculate The Cost Of Rent A Bus",
      details:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia there live the blind texts. Separated they live...",
      thumb: cardPic1,
    },
    {
      id: "2",
      title: "Calculate The Cost Of Rent A Bus",
      details:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia there live the blind texts. Separated they live...",
      thumb: cardPic2,
    },
    {
      id: "3",
      title: "Calculate The Cost Of Rent A Bus",
      details:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia there live the blind texts. Separated they live...",
      thumb: cardPic3,
    },
    {
      id: "4",
      title: "Calculate The Cost Of Rent A Bus",
      details:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia there live the blind texts. Separated they live...",
      thumb: cardPic4,
    },
    {
      id: "5",
      title: "Calculate The Cost Of Rent A Bus",
      details:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia there live the blind texts. Separated they live...",
      thumb: cardPic5,
    },
    {
      id: "6",
      title: "Calculate The Cost Of Rent A Bus",
      details:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia there live the blind texts. Separated they live...",
      thumb: cardPic6,
    },
  ];
  return (
    <div className="w-3/4 mx-auto mt-20">
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-y-20 gap-x-3">
        {blogs.map((blog) => (
          <Card key={blog.id} blog={blog}></Card>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
