import React from "react";
import "./style/style.scss";

export default function Loader() {
  const [open, setOpen] = React.useState(true);
  setTimeout(() => {
    setOpen(false);
  }, 5000);

  const [number, setNumber] = React.useState(0);
  setTimeout(() => {
    setNumber(
      number < 100 ?number+1 :number
      );
  }, 20);


  if (!open) {
    return null;
  }

  return (
    <>
      {open && (
        <div className="Loader-container">
          <div className="preloader-wrapper">
            <svg
              height="100"
              stroke="#fff"
              strokeWidth="2"
              className="text-line"
              width="100%"
            >
              <text
                x="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                y="50%"
              >
                MixInfo
              </text>
            </svg>
            <p className="percent">
              <span data-target="100" className="counter">
             {number}  %
              </span>
            </p>{" "}
            <svg
              id="line"
              xmlns="http://www.w3.org/2000/svg"
              width="1920"
              height="2"
              viewBox="0 0 1920 2"
              fill="none"
            >
              <rect opacity="0.2" width="1920" height="2" fill="#C4C4C4"></rect>{" "}
              <rect opacity="0.2" width="1920" height="2" fill="#C4C4C4"></rect>
            </svg>{" "}
            <svg
              id="white-line"
              xmlns="http://www.w3.org/2000/svg"
              height="2"
              viewBox="0 0 1920 2"
              fill="none"
            >
              <rect
                opacity="0.2"
                width="1920"
                height="2"
                fill="#C4C4C4"
                className="rect"
              ></rect>
            </svg>
          </div>
        </div>
      )}
    </>
  );
}
