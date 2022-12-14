import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import { toast } from "react-toastify";
import MyReviowCart from "./MyReviowCart";
import useTitle from "../../../hooks/useTitle";

const MyReviow = () => {
  useTitle("Myreviow");
  const { user, logOut } = useContext(AuthContext);
  const [allreviows, setAllreviows] = useState([]);
  const [loadAgin, setLoadAgin] = useState(false);
  const [loader, setLoader] = useState(true);

  // loade all reviow data in db
  useEffect(() => {
    fetch(
      `https://travel-gait-srever-tareksolaiman.vercel.app/allreviows?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("travel-token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          logOut()
            .then(() => {})
            .catch((e) => {
              toast.error(e.message, {
                autoClose: 1000,
              });
            });
        }
        return res.json();
      })
      .then((data) => {
        setAllreviows(data);
        setLoader(false);
        console.log(data);
      })
      .catch((e) => {
        toast.error(e.message, {
          autoClose: 1000,
        });
      });
  }, [loadAgin, user.email]);
  // console.log(reviows);

  // delete data function
  const deleteReviow = (id) => {
    // console.log(id);
    fetch(
      `https://travel-gait-srever-tareksolaiman.vercel.app/reviowdlt/${id}`,
      {
        method: "DELETE",
      }
    )
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
  if (loader) {
    return (
      <div className="w-16 h-16 mx-auto my-60 border-4 border-dashed rounded-full animate-spin border-orange-400"></div>
    );
  }

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
