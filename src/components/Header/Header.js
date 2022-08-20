import React, { useEffect, useState } from "react";
import "./Scss/Header.scss";
import { Link } from "react-router-dom";
import Img1 from "../Navbar/images/Hero baner.png";
import Img2 from "./images/Componentone.png";
import Img3 from "./images/ComponentTwo.png";
import slidOne from "./images/slidOne.png";
import slidTwo from "./images/slidTwo.png";
import slidThree from "./images/slidThree.png";
// import { useTranslation } from 'react-i18next';
import Slider from "react-slick";

const Header = () => {
  // carousel methods

  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const [padding, setPadding] = useState("200px");

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
    dots: true,
    infinite: true,
    speed: 1000,
    // centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // centerPadding: padding,
    autoplaySpeed: 3000,
    // cssEase: "linear"
  };

  // i18 nexus

  // const { t } = useTranslation()

  const dataSlider = [
    {
      id: 1,
      name: "WELL DESIGNED FURNITURES HERE! Up to 20% discount",
      desc: "Bizni kompaniyamiz siz uchun g'aroyib aksiya boshladi. Endi hamma matolar 99.000 so'mdan",
      img: Img1,
    },
    {
      id: 2,
      name: "WELL DESIGNED FURNITURES HERE! Up to 20% discount",
      desc: "Bizni kompaniyamiz siz uchun g'aroyib aksiya boshladi. Endi hamma matolar 99.000 so'mdan",
      img: Img2,
    },
    {
      id: 3,
      name: "WELL  DESIGNED FURNITURES HERE! Up to 20% discount",
      desc: "Bizni kompaniyamiz siz uchun g'aroyib aksiya boshladi. Endi hamma matolar 99.000 so'mdan",
      img: Img3,
    },
    {
        id: 4,
        name: "WELL  DESIGNED FURNITURES HERE! Up to 20% discount",
        desc: "Bizni kompaniyamiz siz uchun g'aroyib aksiya boshladi. Endi hamma matolar 99.000 so'mdan",
        img: Img1,
      },
   
  ];

  return (
    <div className="Header">
      <div className="wrapper">
        <div className="carousel-slide">
          <Slider
            {...settings}
            asNavFor={nav2}
            ref={(slider1) => setNav1(slider1)}
            className="slider"
          >
            {dataSlider.map((data) => {
              return (
                  <div key={data.id} className="slider-page">
                  <div className="body">
                    <img src={data.img} alt="..." />
                    <div className="col-6 title">
                      <h2>{data.name}</h2>
                    </div>

                    <div className="col-6 link">
                      <Link to={`/product/${data.id}`} className="nav-link shop">
                        SHOP NOW
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
          <Slider
            asNavFor={nav1}
            ref={(slider2) => setNav2(slider2)}
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}
            className="leftLinkSlid"
          >
            <div className="cardTo" style>
                <img src={slidOne} alt="" />
                <h2>$180</h2>
             <p> Office Desk Chair</p>
            </div>
            <div className="cardTo" style>
                <img src={slidTwo} alt="" />
                <h2>$180</h2>
             <p> Office Desk Chair</p>
            </div>
            <div className="cardTo" style>
                <img src={slidThree} alt="" />
                <h2>$180</h2>
             <p> Office Desk Chair</p>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Header;
