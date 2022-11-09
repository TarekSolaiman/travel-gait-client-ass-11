import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import { toast } from "react-toastify";
import MyReviowCart from "./MyReviowCart";

const MyReviow = () => {
  const { user } = useContext(AuthContext);
  const [allreviows, setAllreviows] = useState([]);
  const [loadAgin, setLoadAgin] = useState(false);

  // loade all reviow data in db
  useEffect(() => {
    fetch(`http://localhost:5000/allreviows?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAllreviows(data);
        // console.log(data);
      })
      .catch((e) => {
        toast.error(e.message, {
          autoClose: 1000,
        });
      });
  }, [loadAgin]);
  // console.log(reviows);

  // delete data function
  const deleteReviow = (id) => {
    // console.log(id);
    fetch(`http://localhost:5000/reviowdlt/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setLoadAgin(!loadAgin);
        toast.success("Success fully Delete", {
          autoClose: 1000,
        });
      })
      .catch((e) => {
        toast.error(e.message, {
          autoClose: 1000,
        });
      });
  };
  return (
    <div className="container mx-auto my-20">
      <h1 className="text-4xl lg:text-5xl font-bold">My All Reviow</h1>
      <div className="lg:w-3/4 mx-auto my-20">
        {allreviows.length === 0 ? (
          <h1 className="text-2xl font-bold text-yellow-400">
            Please Add some reviow
          </h1>
        ) : (
          allreviows.map((revw) => (
            <MyReviowCart
              key={revw._id}
              revw={revw}
              deleteReviow={deleteReviow}
            ></MyReviowCart>
          ))
        )}
      </div>
    </div>
  );
};

export default MyReviow;
