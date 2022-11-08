import React from "react";
import "./Slider.css";

const Slider = ({ data }) => {
  const { image, id, prev, next } = data;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="caruselImg ">
        <img src={image} alt="" className="w-full rounded-xl" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-20 top-1/3">
        <h1 className="text-white text-6xl font-bold">
          Affordable <br /> Price For Car <br /> Servicing
        </h1>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-20 top-1/2">
        <h1 className="text-white text-lg font-semibold">
          There are many variations of passages of available,
          <br />
          but the majority have suffered alteration in some form
        </h1>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-20 top-3/4">
        <button className="btn btn-outline btn-warning mr-3">
          Discover More
        </button>
        <button className="btn btn-outline btn-warning">Latest Project</button>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-1">
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
