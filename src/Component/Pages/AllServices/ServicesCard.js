import React from "react";
import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
  const { photo, _id, serviceName, price, detail } = service;
  //   console.log(service);
  return (
    <div className="flex justify-between items-center my-5 p-5 shadow-xl rounded-xl">
      <div>
        <img className="w-60 rounded-lg" src={photo} alt="" />
      </div>
      <div className="w-80">
        <p className="text-3xl mb-5 font-bold">{serviceName}</p>
        <p>{detail?.length <= 100 ? detail : detail.slice(2, 100) + "...."}</p>
      </div>
      <div>
        <p className="text-xl mb-5 font-semibold text-red-600">
          Price : {price} $
        </p>
        <Link to={`/oneservices/${_id}`}>
          <button className="px-10 py-2 bg-orange-500 rounded text-lg font-bold text-white">
            Veow
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServicesCard;
