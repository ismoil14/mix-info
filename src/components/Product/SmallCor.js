import React, { useEffect, useState } from "react";
import "./Scss/Prod.scss";
import { Link } from "react-router-dom";
import Slider from "react-slick";
// import Img1 from "../Navbar/images/Hero baner.png";
// import Img2 from "../Header/images/Componentone.png";
// import Img3 from "../Header/images/ComponentTwo.png";
import slidOne from "../Header/images/slidOne.png";
import slidTwo from "../Header/images/slidTwo.png";
import slidThree from "../Header/images/slidThree.png";
export default function SmallCor({ img1, img2, img3 }) {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const [padding, setPadding] = useState("200px");
  // const dataSlider = [
  //   {
  //     id: 1,
  //     name: "WELL DESIGNED FURNITURES HERE! Up to 20% discount",
  //     desc: "Bizni kompaniyamiz siz uchun g'aroyib aksiya boshladi. Endi hamma matolar 99.000 so'mdan",
  //     img: slidThree,
  //   },
  //   {
  //     id: 2,
  //     name: "WELL DESIGNED FURNITURES HERE! Up to 20% discount",
  //     desc: "Bizni kompaniyamiz siz uchun g'aroyib aksiya boshladi. Endi hamma matolar 99.000 so'mdan",
  //     img: Img2,
  //   },
  //   {
  //     id: 3,
  //     name: "WELL  DESIGNED FURNITURES HERE! Up to 20% discount",
  //     desc: "Bizni kompaniyamiz siz uchun g'aroyib aksiya boshladi. Endi hamma matolar 99.000 so'mdan",
  //     img: Img3,
  //   },
  //   {
  //     id: 4,
  //     name: "WELL  DESIGNED FURNITURES HERE! Up to 20% discount",
  //     desc: "Bizni kompaniyamiz siz uchun g'aroyib aksiya boshladi. Endi hamma matolar 99.000 so'mdan",
  //     img: Img1,
  //   },
  // ];
  useEffect(() => {
    if (window.innerWidth < 1100) {
      setPadding("100px");
    }
    if (window.innerWidth < 767) {
      setPadding("0px");
    }
  }, []);

  const settings = {
    className: "center",
    //   dots: true,
    infinite: true,
    speed: 1000,
    // centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    //   autoplay: true,
    // centerPadding: padding,
    autoplaySpeed: 3000,
    // cssEase: "linear"
  };
  return (
    <div className="mix-modal">
      {" "}
      <Slider
        {...settings}
        asNavFor={nav2}
        ref={(slider1) => setNav1(slider1)}
        className="slider RightLinkSlid"
      >
        {/* {dataSlider.map((data) => {
      return ( */}
        <div className="slider-page">
          <img src={img1} alt="..." />
        </div>
        <div className="slider-page">
          <img src={img2} alt="..." />
        </div>{" "}
        <div className="slider-page">
          <img src={img3} alt="..." />
        </div>
        {/* );
    })} */}
      </Slider>
      <Slider
        asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
        className="leftLinkSlidT"
      >
        <div className="cardTo" style>
          <img src={img1} alt="" />
        </div>
        <div className="cardTo" style>
          <img src={img2} alt="" />
        </div>
        <div className="cardTo" style>
          <img src={img3} alt="" />
        </div>
      </Slider>
    </div>
  );
}
