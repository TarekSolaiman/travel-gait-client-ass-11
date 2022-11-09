import React from "react";

const ReviowCart = ({ revw }) => {
  return (
    <div className="flex justify-between items-center my-5 p-5 rounded-lg bg-slate-100">
      <div className="flex justify-between items-center">
        <img
          className="w-10 h-10 rounded-full mr-10"
          src={revw.userImg}
          alt=""
        />
        <div className="text-start">
          <p className="text-lg font-semibold text-gray-700">{revw.reviow}</p>
          <p className="text-sm text-gray-400">{revw.title}</p>
        </div>
      </div>
      <div>
        <p>
          Rating : {revw.rating}{" "}
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
    </div>
  );
};

export default ReviowCart;
