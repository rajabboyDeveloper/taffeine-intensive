import React from "react";
import style from "./Home.module.css";
import SecThree from "./secthree/SecThree";
import SecFour from "./secfour/SecFour";
import Slide from "./slide/Slide";
import StatiSlide from "./statiSlide/StatiSlide";
function Home() {
  return (
    <div className={style.Home}>
      <Slide />
      <SecThree />
      <SecFour />
      <StatiSlide />
    </div>
  );
}

export default Home;
