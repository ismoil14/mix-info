import React from "react";
import "./style/style.scss";
import flags from "./img/flags.png";
import globus from "./img/Globus.png";
export default function InfoGlobal() {
  return (
    <div className="InfoGlobal-container">
      <div className="flag-cont">
        <img src={flags} alt="" />
      </div>
      <div className="global-cont">
        <h1>Biz export qiladigan davlatlar!</h1>
        <div className="global-img-container">
          <img src={globus} />
          <button className="btn btn-usa" >Tojikiston </button>
          <button className="btn btn-ge" >Qozog'iston  </button>
          <button className="btn btn-av" >Qirg'iziston</button>
          <button className="btn btn-tu" >TURKIYA</button>
          <button className="btn btn-ru" >ROSSIA</button>
          <button className="btn btn-ja" >JANUBIY KOREYA</button>
        </div>
      </div>
    </div>
  );
}
