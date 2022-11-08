import React from "react";

const ServicesCard = ({ service }) => {
  const { photo, _id, serviceName, price, detail } = service;
  //   console.log(service);
  return (
    <div className="flex justify-between items-center my-5 p-5 shadow-xl rounded-xl">
      <div>
        <img className="w-60" src={photo} alt="" />
      </div>
      <div>
        <p className="text-3xl mb-5 font-bold">{serviceName}</p>
        <p>{detail}</p>
      </div>
      <div>
        <p className="text-xl mb-5 font-semibold text-red-600">
          Price : {price} $
        </p>
        <button className="px-10 py-2 bg-orange-500 rounded text-lg font-bold text-white">
          Veow
        </button>
      </div>
    </div>
  );
};

export default ServicesCard;
