import React from "react";
import Slider from "./Slider";
import img1 from "../../../../../images/banner/1.jpg";
import img2 from "../../../../../images/banner/2.jpg";
import img3 from "../../../../../images/banner/3.jpg";
import img4 from "../../../../../images/banner/4.jpg";
import img5 from "../../../../../images/banner/4.jpg";
import img6 from "../../../../../images/banner/5.jpg";

const bannerData = [
  {
    image: img1,
    prev: 6,
    id: 1,
    next: 2,
  },
  {
    image: img2,
    prev: 1,
    id: 2,
    next: 3,
  },
  {
    image: img3,
    prev: 2,
    id: 3,
    next: 4,
  },
  {
    image: img4,
    prev: 3,
    id: 4,
    next: 5,
  },
  {
    image: img5,
    prev: 4,
    id: 5,
    next: 6,
  },
  {
    image: img6,
    prev: 5,
    id: 6,
    next: 1,
  },
];

const Banner = () => {
  return (
    <div className="carousel w-full my-12 h-100">
      {bannerData.map((data) => (
        <Slider key={data.id} data={data}></Slider>
      ))}
    </div>
  );
};

export default Banner;
