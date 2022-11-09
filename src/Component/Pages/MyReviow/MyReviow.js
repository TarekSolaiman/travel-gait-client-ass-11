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
  return (
    <div className="container mx-auto my-20">
      <h1>This is My Reviow</h1>
      <div className="lg:w-3/4 mx-auto my-20">
        {allreviows.map((revw) => (
          <ReviowCart key={revw._id} revw={revw}></ReviowCart>
        ))}
      </div>
    </div>
  );
};

export default MyReviow;
