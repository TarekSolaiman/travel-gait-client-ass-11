import React, { useEffect, useState } from "react";
import ServiceCart from "./ServiceCart";
import { Link } from "react-router-dom";

const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/services?size=${3}`)
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((e) => console.log(e.message));
  }, []);
  return (
    <div>
      <h1 className="text-5xl font-bold my-5">My All Services</h1>
      <p className="text-lg font-semibold text-gray-500">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
        <br />
        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
        id nisi.
      </p>
      <div className="grid grid-cols-3 my-20 container mx-auto">
        {services.map((service) => (
          <ServiceCart key={service._id} service={service}></ServiceCart>
        ))}
      </div>
      <Link to="/services">
        <button className="bg-orange-500 w-60 h-16 rounded text-lg font-semibold text-white my-10">
          See All
        </button>
      </Link>
    </div>
  );
};

export default Service;