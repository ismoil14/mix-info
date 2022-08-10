import React from "react";
import "./style.scss";
export default function NoteCard({text,info,img}) {
  return (
    <div className="note-Cont">
      <div className="wrapper">
        <div className="img-cont">
          <img src={img} alt="" />
        </div>
        <div className="text-cont">
          <h1>{text}</h1>
          <p>{info}</p>
        </div>
      </div>
    </div>
  );
}
