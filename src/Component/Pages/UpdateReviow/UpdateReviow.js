import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateReviow = () => {
  //   const { id } = useParams();
  //   const [newreviow, setNewreviow] = useState([]);
  //   useEffect(() => {
  //     fetch(`http://localhost:5000/upreviow/${id}`, {
  //       method: "PATCH",
  //       headers: {
  //         "content-type": "application",
  //       },
  //       body: JSON.stringify(),
  // //     });
  //   }, [id]);
  return (
    <div>
      <h1 className="text-5xl font-bold">This is update page</h1>
    </div>
  );
};

export default UpdateReviow;
