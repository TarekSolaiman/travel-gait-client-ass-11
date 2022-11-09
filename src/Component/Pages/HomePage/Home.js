import React from "react";
import Banner from "./HomeCompo/Banner/Banner";
import Service from "./HomeCompo/Service/Service";
import ladak from "../../../images/travelPlase/ladakh.jpg";
import kasmir from "../../../images/travelPlase/kasmir.jpg";

const Home = () => {
  return (
    <div>
      <section className="container mx-auto">
        <Banner />
      </section>
      <section className="my-20">
        <Service />
      </section>
      <section className="my-20">
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold my-5">
            Some Special Places
          </h1>
          <p className="text-lg font-semibold text-gray-500">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            <br />
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div>
          <div className="hero my-40">
            <div className="hero-content flex-col lg:flex-row">
              <img src={ladak} alt="" className="rounded-lg shadow-2xl w-1/2" />
              <div className="w-1/2">
                <h1 className="text-3xl lg:text-5xl font-bold">Pangong Lake</h1>
                <p className="py-6 text-justify">
                  Pangong Lake, one of the most famous lakes in Leh Ladakh,
                  derives its name from the Tibetan word, “Pangong Tso”, which
                  means “high grassland lake”. You could spend hours in
                  contemplation here, and still not have enough of its beauty.
                  Pangong Lake is also known to change colors, appearing blue,
                  green and red at different times. If you have decided to go on
                  a trip to Ladakh anytime soon, don't forget to visit the
                  Pangong Lake. The beauty which awaits you there cannot be
                  described in words. It has to be seen, felt and absorbed
                  within yourself.
                </p>
              </div>
            </div>
          </div>

          <div className="hero my-40">
            <div className="hero-content flex-col lg:flex-row">
              <div className="w-1/2">
                <h1 className="text-xl lg:text-3xl font-bold">
                  These valleys in Kashmir are breathtakingly beautiful!
                </h1>
                <p className="py-6 text-justify">
                  More often than not, we associate paradise with a place of
                  rest, something blissful and a place that fills the heart with
                  delight. So, when somebody first called Kashmir, the Paradise
                  on Earth, they must have felt such pure joy being there, in
                  the presence of immensely beautiful nature. It's true, nature
                  has been very kind to Kashmir.
                </p>
              </div>
              <img
                src={kasmir}
                alt=""
                className="rounded-lg shadow-2xl w-1/2"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
