import React from "react";
import Banner from "./HomeCompo/Banner/Banner";

const Home = () => {
  return (
    <div>
      <section className="container mx-auto">
        <Banner />
      </section>
      <section>
        <h1>Services Section</h1>
      </section>
    </div>
  );
};

export default Home;
