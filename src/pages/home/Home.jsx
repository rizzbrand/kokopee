import React from "react";
import Transition from "../../components/transition/Transition";

import "./Home.css";

const Home = () => {
  return (
    <div className="page home">
      <section className="hero">
        <div className="hero-img">
          <img src="/home/hero.jpg" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Transition(Home);
