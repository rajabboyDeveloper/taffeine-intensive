import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import style from "./StatiSlide.module.css";
import axios from "axios";
import Scard from "./sCard/Scard";
function StatiSlide() {
  const [val, setVal] = React.useState([]);
  React.useEffect(() => {
    axios.get("https://admin.taffeine.com/api/stati").then((res) => {
      setVal(res.data.data);
    });
  }, []);
  return (
    <div className="slide">
      <div className="container">
        <h1 className={style.title}>Cтатьи</h1>
        <OwlCarousel className="owl-theme" items={3} loop margin={10} nav>
          {val.map((item, index) => {
            return (
              <Scard
                key={index}
                img={item.url}
                title={item.title}
                text={item.content}
              />
            );
          })}
        </OwlCarousel>
      </div>
    </div>
  );
}

export default StatiSlide;
