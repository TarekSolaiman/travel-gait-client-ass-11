import React from "react";
import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
  const { photo, _id, rating, serviceName, price, detail } = service;
  //   console.log(service);
  return (
    <div className="flex justify-between items-center my-5 p-5 shadow-xl rounded-xl">
      <div>
        <img className="w-60 rounded-lg" src={photo} alt="" />
      </div>
      <div className="w-80">
        <p className="text-3xl mb-5 font-bold">{serviceName}</p>
        <p>{detail?.length <= 100 ? detail : detail.slice(2, 100) + "...."}</p>
        <p className="text-xl font-semibold text-gray-500">
          Rating : {rating}{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 inline mb-2 text-yellow-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
        </p>
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
