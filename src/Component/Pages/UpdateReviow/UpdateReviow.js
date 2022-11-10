import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useTitle from "../../../hooks/useTitle";

const UpdateReviow = () => {
  useTitle("update");
  const { id } = useParams();
  const navigate = useNavigate();
  const [newreviow, setNewreviow] = useState([]);
  useEffect(() => {
    fetch(`https://travel-gait-srever-tareksolaiman.vercel.app/onereviow/${id}`)
      .then((res) => res.json())
      .then((data) => setNewreviow(data))
      .catch((e) => console.log(e.message));
  }, [id]);
  // console.log(newreviow);

  const reviowEdit = (e) => {
    e.preventDefault();
    const form = e.target;
    const editReviow = {
      reviow: form.reviow.value,
      rating: form.rating.value,
    };
    fetch(
      `https://travel-gait-srever-tareksolaiman.vercel.app/upreviow/${id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(editReviow),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        toast.success("Success fully Update reviow", {
          autoClose: 1000,
        });
        navigate("/reviows");
        // console.log(data);
      })
      .catch((e) => {
        toast.error(e.message, {
          autoClose: 1000,
        });
      });
    // console.log(editReviow);
  };

  return (
    <div>
      <h1 className="text-5xl font-bold my-10">This is update page</h1>

      <div className="lg:w-4/5 mx-auto my-20">
        <form onSubmit={reviowEdit} className="flex">
          <textarea
            type="text"
            name="reviow"
            placeholder="Type Reviow"
            defaultValue={newreviow.reviow}
            className="input input-bordered w-4/5 h-20"
          ></textarea>
          <div className="rating flex items-center mx-3">
            <input
              type="radio"
              name="rating"
              defaultValue="1"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating"
              defaultValue="2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating"
              defaultValue="3"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating"
              defaultValue="4"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating"
              defaultValue="5"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <button
            className="h-10 px-5 my-auto mx-10 bg-orange-500 rounded-lg text-white font-semibold"
            type="submit"
          >
            Reviow
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateReviow;
