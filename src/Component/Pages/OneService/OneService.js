import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const OneService = () => {
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/oneservice/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
        console.log(data);
      })
      .catch((e) => console.log(e.message));
  }, [id]);

  console.log(id);
  return (
    <div>
      <h1>One Services</h1>
      <div>
        <img src={details?.photo} alt="" />
      </div>
    </div>
  );
};

export default OneService;
