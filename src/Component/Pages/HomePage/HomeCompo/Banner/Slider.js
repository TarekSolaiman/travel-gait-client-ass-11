import React from "react";
import "./Slider.css";

const Slider = ({ data }) => {
  const { image, id, prev, next } = data;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="caruselImg ">
        <img src={image} alt="" className="h-full rounded-xl" />
      </div>
      <div className="absolute flex justify-center transform left-5 right-5 top-1/3">
        <div>
          <h1 className="text-white text-2xl lg:text-6xl font-bold">
            Affordable Traveling With
            <br />
            Travel Gait
          </h1>
          <h1 className="text-white lg:text-lg font-semibold mt-5">
            Travel is the ideal place to test yourself,
            <br />
            It pushes people to their limits and gets them outside their comfort
            zone.
          </h1>
        </div>
      </div>
      <div className="absolute flex justify-center transform left-5 right-5 bottom-5">
        <a
          href={`#slide${prev}`}
          className="btn btn-outline btn-warning rounded-full w-12 h-12 mr-5"
        >
          ❮
        </a>
        <a
          href={`#slide${next}`}
          className="btn btn-outline btn-warning rounded-full w-12 h-12"
        >
          ❯
        </a>
      </div>
    </div>
  );
};

export default Slider;
