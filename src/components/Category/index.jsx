import React from "react";
import "./Scss/Categories.scss";
import Img1 from "./images/b1.png";
import Img3 from "../../assets/imgs/slid.png";
import Img2 from "./images/b3.png";
import { Link } from "react-router-dom";
import { ArrowForward } from "@material-ui/icons";
import Slider from 'react-slick';
const Category = ({ uzbek, russian, english, changeCategories }) => {
  const dataCategories = [
    {
      id: 1,
      image: Img3,
      name_uz: "Modern Furniture Collections",
      name_ru: "Modern Furniture Collections",
      name_en: "Modern Furniture Collections",
      description_uz: "Starting from $500",
      description_ru: "Starting from $500",
      description_en: "Starting from $500",
    },
    {
      id: 2,
      image: Img2,
      name_uz: "Modern Furniture Collections",
      name_ru: "Modern Furniture Collections",
      name_en: "Modern Furniture Collections",
      description_uz: "Starting from $500",
      description_ru: "Starting from $500",
      description_en: "Starting from $500",
    },
    {
      id: 3,
      image: Img3,
      name_uz: "Modern Furniture Collections",
      name_ru: "Modern Furniture Collections",
      name_en: "Modern Furniture Collections",
      description_uz: "Starting from $500",
      description_ru: "Starting from $500",
      description_en: "Starting from $500",
    },
    {
      id: 4,
      image: Img1,
      name_uz: "Modern Furniture Collections",
      name_ru: "Modern Furniture Collections",
      name_en: "Modern Furniture Collections",
      description_uz: "Starting from $500",
      description_ru: "Starting from $500",
      description_en: "Starting from $500",
    },
    {
      id: 5,
      image: Img2,
      name_uz: "Modern Furniture Collections",
      name_ru: "Modern Furniture Collections",
      name_en: "Modern Furniture Collections",
      description_uz: "Starting from $500",
      description_ru: "Starting from $500",
      description_en: "Starting from $500",
    },
    {
      id: 6,
      image: Img3,
      name_uz: "Modern Furniture Collections",
      name_ru: "Modern Furniture Collections",
      name_en: "Modern Furniture Collections",
      description_uz: "Starting from $500",
      description_ru: "Starting from $500",
      description_en: "Starting from $500",
    },
    {
      id: 7,
      image: Img2,
      name_uz: "Modern Furniture Collections1",
      name_ru: "Modern Furniture Collections",
      name_en: "Modern Furniture Collections",
      description_uz: "Starting from $500",
      description_ru: "Starting from $500",
      description_en: "Starting from $500",
    },
    {
      id: 8,
      image: Img3,
      name_uz: "Modern Furniture Collections2",
      name_ru: "Modern Furniture Collections",
      name_en: "Modern Furniture Collections",
      description_uz: "Starting from $500",
      description_ru: "Starting from $500",
      description_en: "Starting from $500",
    },
  ];

  const settings = {
    // centerMode: true,
    centerPadding: '160px',
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '140px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '80px',
          slidesToShow: 1
        }
      }
    ]
};


  return (
    <div className="Category">
      <div className="wrapper">
        <h1 className="title">
          Our Production <i className={`fa fa-heart-o`}></i>
        </h1>

        <div className="col-md-12 row myDesctopProd">
          {dataCategories.slice(0, 1).map((data, index) => (
            <div className="col-md-6 one" key={index}>
              <Link
                to={`/products`}
                onClick={() => changeCategories(data.id)}
                className="body nav-link"
              >
                <img src={data.image} alt="" />
                <h3 className="name">
                  {english && data.name_en} {russian && data.name_ru}{" "}
                  {uzbek && data.name_uz}
                </h3>
                <h3 className="desc">
                  {english && data.description_en}{" "}
                  {russian && data.description_ru}{" "}
                  {uzbek && data.description_uz}
                </h3>
                <div className="nav-link" to={`/products`}>
                  Read More <ArrowForward className="icon" />
                </div>
              </Link>
            </div>
          ))}
          <div className="col-md-6 two">
            {dataCategories.slice(1, 3).map((data, index) => (
              <div className="col-md-12" key={index}>
                <Link
                  to={`/products`}
                  className="body nav-link"
                  onClick={() => changeCategories(data.id)}
                >
                  <img src={data.image} alt="" />
                  <h3 className="name">
                    {english && data.name_en} {russian && data.name_ru}{" "}
                    {uzbek && data.name_uz}
                  </h3>
                  <h3 className="desc">
                    {english && data.description_en}{" "}
                    {russian && data.description_ru}{" "}
                    {uzbek && data.description_uz}
                  </h3>
                  <div className="nav-link" to={`/products`}>
                    Read More <ArrowForward className="icon" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="col-md-6 two">
            {dataCategories.slice(4, 6).map((data, index) => (
              <div className="col-md-12" key={index}>
                <Link
                  to={`/products`}
                  onClick={() => changeCategories(data.id)}
                  className="body nav-link"
                >
                  <img src={data.image} alt="" />
                  <h3 className="name">
                    {english && data.name_en} {russian && data.name_ru}{" "}
                    {uzbek && data.name_uz}
                  </h3>
                  <h3 className="desc">
                    {english && data.description_en}{" "}
                    {russian && data.description_ru}{" "}
                    {uzbek && data.description_uz}
                  </h3>
                  <div className="nav-link" to={`/products`}>
                    Read More <ArrowForward className="icon" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
          {dataCategories.slice(3, 4).map((data, index) => (
            <div className="col-md-6 one" key={index}>
              <Link
                to={`/products`}
                onClick={() => changeCategories(data.id)}
                className="body nav-link"
              >
                <img src={data.image} alt="" />
                <h3 className="name">
                  {english && data.name_en} {russian && data.name_ru}{" "}
                  {uzbek && data.name_uz}
                </h3>
                <h3 className="desc">
                  {english && data.description_en}{" "}
                  {russian && data.description_ru}{" "}
                  {uzbek && data.description_uz}
                </h3>
                <div className="nav-link" to={`/products`}>
                  Read More <ArrowForward className="icon" />
                </div>
              </Link>
            </div>
          ))}
          {dataCategories.slice(6).map((data, index) => (
            <div className="col-md-6 two" key={index}>
              <div className="col-md-12">
                <Link
                  to={`/products`}
                  onClick={() => changeCategories(data.id)}
                  className="body nav-link"
                >
                  <img src={data.image} alt="" />
                  <h3 className="name">
                    {english && data.name_en} {russian && data.name_ru}{" "}
                    {uzbek && data.name_uz}
                  </h3>
                  <h3 className="desc">
                    {english && data.description_en}{" "}
                    {russian && data.description_ru}{" "}
                    {uzbek && data.description_uz}
                  </h3>
                  <div className="nav-link" to={`/products`}>
                    Read More <ArrowForward className="icon" />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-12 row mySliderMile">
          
          
          
           <Slider {...settings}>
        {dataCategories.map((data, index) => (
          
            <div className="col-md-6 one" key={index}>
              <Link
                to={`/products`}
                onClick={() => changeCategories(data.id)}
                className="body nav-link"
              >
                <img src={data.image} alt="" />
                <h3 className="name">
                  {english && data.name_en} {russian && data.name_ru}{" "}
                  {uzbek && data.name_uz}
                </h3>
                <h3 className="desc">
                  {english && data.description_en}{" "}
                  {russian && data.description_ru}{" "}
                  {uzbek && data.description_uz}
                </h3>
                <div className="nav-link" to={`/products`}>
                  Read More <ArrowForward className="icon" />
                </div>
              </Link>
            </div>
          ))}
                </Slider></div>
       


      </div>
    </div>
  );
};

export default Category;
