import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import ReviowCart from "./ReviowCart";

const OneService = () => {
  const { user } = useContext(AuthContext);
  const [details, setDetails] = useState([]);
  const [reviows, setReviows] = useState([]);
  const [loadAgin, setLoadAgin] = useState(false);

  const { id } = useParams();

  const { photo, rating, serviceName, price, detail } = details;

  // loade services data in db
  useEffect(() => {
    fetch(`http://localhost:5000/oneservice/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
        // console.log(data);
      })
      .catch((e) => console.log(e.message));
  }, [id]);
  // console.log(user);

  // loade all reviow data in db
  useEffect(() => {
    fetch(`http://localhost:5000/reviows/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setReviows(data);
        console.log(data);
      })
      .catch((e) => console.log(e.message));
  }, [loadAgin, id]);
  console.log(reviows);

  const reviowSend = (e) => {
    e.preventDefault();
    const form = e.target;
    const comment = {
      email: user.email,
      userImg: user?.photoURL ? user.photoURL : "",
      reviow: form.reviow.value,
      itemId: id,
    };
    fetch("http://localhost:5000/reviow", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(comment),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoadAgin(!loadAgin);
        form.reset();
      })
      .catch((e) => console.log(e.message));
    console.log(comment);
  };

  // console.log(id);
  return (
    <div>
      <div>
        <img className="w-3/5 mx-auto rounded-lg" src={photo} alt="" />
        <h1 className="text-5xl font-bold  my-5">{serviceName}</h1>
        <p className="text-2xl text-red-500 font-bold my-5">
          Price : {price} $
        </p>
        <p className="text-xl font-semibold text-gray-500">
          Rating : {rating}{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 inline text-yellow-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
        </p>
        <p className="lg:w-3/5 mx-5 lg:mx-auto text-justify text-lg text-gray-600 my-5">
          {detail}
        </p>
      </div>
      <div>
        <h1 className="text-2xl font-bold  my-10">Castumer Reviow</h1>
        <div className="lg:w-3/5 mx-5 lg:mx-auto my-5">
          <div>
            {reviows.length === 0 ? (
              <h1 className="text-lg text-gray-500 font-bold  my-10">
                Ther Was No Reviow . Please add a reviow
              </h1>
            ) : (
              reviows.map((revw) => (
                <ReviowCart key={revw._id} revw={revw}></ReviowCart>
              ))
            )}

            {/* <p>{reviows.reviow}</p> */}
          </div>
          <form onSubmit={reviowSend} className="flex">
            <textarea
              type="text"
              name="reviow"
              placeholder="Type Reviow"
              className="input input-bordered w-4/5"
            ></textarea>
            <button
              className="h-10 px-5 my-auto mx-10 bg-orange-500 rounded-lg text-white font-semibold"
              type="submit"
            >
              Reviow
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OneService;
