import React from "react";
import { toast } from "react-toastify";

const AddServices = () => {
  const serviceAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const newService = {
      serviceName: form.serviceName.value,
      photo: form.photo.value,
      price: form.price.value,
      detail: form.detail.value,
    };
    fetch("http://localhost:5000/service", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        form.reset();
        toast.success("Success fully add service", {
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
    <div>
      <h1 className="text-4xl lg:text-5xl font-semibold my-5">
        Add some Services
      </h1>
      <div className="w-5/6 mx-auto">
        <form onSubmit={serviceAdd}>
          <input
            type="name"
            name="serviceName"
            placeholder="Service Name"
            className="input input-bordered w-full my-5"
          />
          <br />
          <input
            type="photo"
            name="photo"
            placeholder="PhotoURL"
            className="input input-bordered w-full my-5"
          />
          <br />
          <input
            type="price"
            name="price"
            placeholder="Price"
            className="input input-bordered w-full my-5"
          />
          <br />
          <textarea
            type="text"
            name="detail"
            placeholder="Detail"
            className="input input-bordered w-full h-28 my-5"
          ></textarea>
          <br />
          <button className="bg-orange-500 w-60 p-3 rounded-lg text-lg font-semibold text-white mb-10">
            Add Service
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddServices;
