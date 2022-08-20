import React from "react";
import "./Scss/Footer.scss";
// import { useTranslation } from 'react-i18next';
import Img from "./images/footer-logo.png";
import portners from "./images/click.png";
import Payme from "./images/Payme.png";
import MasterCard from "./images/MasterCard.png";
import Visa from "./images/Visa.png";

const Footer = () =>
  // { english, arabian, uzbek, russian }
  {
    // const { t } = useTranslation()

    return (
      <div className="Footer">
        <div className="wrapper">
          <div className="f1 row">
            <div className="col-3 col-sm-2 c1 longText">
              {/* <img src={Img} className="w-5" alt="..." /> */}
              <p>
                Funking is the a popular Ecommerce site. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
              </p>
              <div className="icons">
                <a href="/">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="/">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="/">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="/">
                  <i className="fa fa-youtube-play"></i>
                </a>
              </div>
            </div>
            <div className="col-3 col-sm-2 c2">
              <ul>
              





                <li className="title">Help</li>
                <li className="nav-link">Privacy Policy</li>
                <li className="nav-link">Shipping & Delivery</li>
                <li className="nav-link">Refund Policy</li>
                <li className="nav-link">Track Your  Order</li>
              </ul>
            </div>
            <div className="col-3 col-sm-2 c2">
              <ul>
                <li className="title">Store</li>
                <li className="nav-link">Furniture</li>
                <li className="nav-link">Tabble</li>
                <li className="nav-link">Sofa</li>
                <li className="nav-link">Other</li>
             
                



              </ul>
            </div>
            <div className="col-3  col-sm-2 c2">
              <ul>
              




                <li className="title">Supports</li>
                <li className="nav-link">Feedbcak</li>
                <li className="nav-link">Contact us</li>
                <li className="nav-link">Download app</li>
                <li className="nav-link">Terms conditins</li>
              </ul>
            </div>
          </div>
          <div className="col-md-12 footer-bottom">
            <p>© 2021 Funking - All rights reserved.</p>
            <div className="partnersCont">
              <a href="http://www.facebookarchive">
                {" "}
                <img src={portners} alt="" />
              </a>
              <a href="http://www.facebookarchive">
                {" "}
                <img src={Payme} alt="" />
              </a>
              <a href="http://www.facebookarchive">
                {" "}
                <img src={MasterCard} alt="" />
              </a>
              <a href="http://www.facebookarchive">
                {" "}
                <img src={Visa} alt="" />
              </a>
            </div>
          

            <ul className="">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Privacy
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Security
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

export default Footer;
