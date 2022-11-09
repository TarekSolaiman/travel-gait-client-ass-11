import React from "react";
import { Link } from "react-router-dom";

const ServiceCart = ({ service }) => {
  const { photo, _id, serviceName, price, detail, rating } = service;
  // console.log(service);
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <img className="h-52 rounded-t-xl" src={photo} alt="" />
        <div className="card-body">
          <h2 className="card-title">{serviceName}</h2>
          <p className="text-start">
            {detail?.length <= 100 ? detail : detail.slice(2, 100) + "...."}
          </p>
          <div className="card-actions justify-between items-center">
            <p className="text-start text-xl font-semibold text-gray-500">
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
            <Link
              to={`/oneservices/${_id}`}
              className="bg-orange-500 p-2 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCart;
