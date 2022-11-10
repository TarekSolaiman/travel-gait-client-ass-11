import React, { useEffect, useState } from "react";
import useTitle from "../../../hooks/useTitle";
import ServicesCard from "./ServicesCard";

const AllServices = () => {
  useTitle("Allservices");
  const [allservices, setAllservices] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetch(`https://travel-gait-srever-tareksolaiman.vercel.app/services`)
      .then((res) => res.json())
      .then((data) => {
        setAllservices(data);
        setLoader(false);
      })
      .catch((e) => console.log(e.message));
  }, []);
  if (loader) {
    return (
      <div className="w-16 h-16 mx-auto my-60 border-4 border-dashed rounded-full animate-spin border-orange-400"></div>
    );
  }
  return (
    <div className=" container mx-auto my-20">
      <h1 className="text-3xl lg:text-5xl font-bold my-10">
        Ther is my all services
      </h1>
      <div className="lg:w-3/4 mx-auto">
        {allservices.map((service) => (
          <ServicesCard key={service._id} service={service}></ServicesCard>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
