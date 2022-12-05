import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../SharedCompo/Footer/Footer";
import Header from "../SharedCompo/Header/Header";

const Main = () => {
  return (
    <div>
      <section className="sticky top-0 w-full">
        <Header />
      </section>
      <section>
        <Outlet />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Main;
