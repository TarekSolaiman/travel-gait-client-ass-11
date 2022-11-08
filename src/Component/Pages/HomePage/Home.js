import React from "react";
import Banner from "./HomeCompo/Banner/Banner";
import Service from "./HomeCompo/Service/Service";

const Home = () => {
  return (
    <div>
      <section className="container mx-auto">
        <Banner />
      </section>
      <section>
        <Service />
      </section>
    </div>
  );
};

export default Home;
