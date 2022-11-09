import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import ReviowCart from "../OneService/ReviowCart";

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
      .catch((e) => console.log(e.message));
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
        alert(data.message);
      })
      .catch((e) => console.log(e.message));
  };
  return (
    <div className="container mx-auto my-20">
      <h1 className="text-5xl font-bold">My All Reviow</h1>
      <div className="lg:w-3/4 mx-auto my-20">
        {allreviows.length === 0 ? (
          <h1 className="text-2xl font-bold text-yellow-400">
            Please Add some reviow
          </h1>
        ) : (
          allreviows.map((revw) => (
            <ReviowCart
              key={revw._id}
              revw={revw}
              deleteReviow={deleteReviow}
            ></ReviowCart>
          ))
        )}
      </div>
    </div>
  );
};

export default MyReviow;
