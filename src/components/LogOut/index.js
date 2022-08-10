import React from "react";
import { Link } from "react-router-dom";
import "../Orders/Orders.scss";
import Avatar from "../Orders/img/armChair.png";
import logo from "../Navbar/images/logoMix.png";
import NoteCatd from "../NoteCard/index";
import logout from "../../assets/imgs/logout.png";

const LogOut = () => {
  const info = {
    text: "Вы уверено что хотите выйти?",
    info: "что бы яохранить товаров за лайкните",
    img: logout,
  };
  return (
    <div className="Profile Logout">
      <div className="wrapper">
        <div className="progile-title">
          <Link to="/">
            <img src={logo} alt="..." />
          </Link>

          <h1> Выйти</h1>
        </div>{" "}
        <NoteCatd text={info.text} img={info.img} info={info.info} />
     
        <div className="button-cont">
                    <button>  отмена</button>
                    <button>  Выйти</button>  
                    </div>
      </div>
    </div>
  );
};

export default LogOut;
