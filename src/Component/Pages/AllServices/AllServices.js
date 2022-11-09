import React, { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const AllServices = () => {
  const [allservices, setAllservices] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/services`)
      .then((res) => res.json())
      .then((data) => setAllservices(data))
      .catch((e) => console.log(e.message));
  }, []);
  return (
    <div className=" container mx-auto my-20">
      <h1 className="text-5xl font-bold my-10">Ther is my all services</h1>
      <div className="w-3/4 mx-auto">
        {allservices.map((service) => (
          <ServicesCard key={service._id} service={service}></ServicesCard>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
