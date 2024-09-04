import React from "react";
import style from "./Scard.module.css";
function Scard(props) {
  return (
    <div className={style.card}>
      <img src={props.img} alt="" />
      <h2> {props.title}</h2>
      <p>{props.text}</p>
    </div>
  );
}

export default Scard;
