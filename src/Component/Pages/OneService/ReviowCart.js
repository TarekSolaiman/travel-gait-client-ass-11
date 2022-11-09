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
        <p className="text-lg font-semibold text-gray-500">{revw.reviow}</p>
      </div>

      <div>
        <button className="w-8 h-8 mx-5 rounded bg-slate-200 text-center">
          X
        </button>
        <button className="w-8 h-8 mx-5 rounded bg-slate-200 text-center">
          E
        </button>
      </div>
    </div>
  );
};

export default ReviowCart;
