import React from "react";
import { Link } from "react-router-dom";
import "./Orders.scss";
import Avatar from "./img/armChair.png";
import logo from "../Navbar/images/logoMix.png";
import NoteCatd from "../NoteCard/index";
import note from "../NoteCard/img/note.png";


const Orders = () => {
    const info= {
        text:'У вас нет залайкенны товаров',
        info:"чтобы закасать переходите кудата и нажмите что то",
        img:note
    }
  return (
    <div className="Profile">
      <div className="wrapper">
        <div className="progile-title">
          <Link to="/">
            <img src={logo} alt="..." />
          </Link>

          <h1> Мои заказы</h1>
        </div>{" "}
        <div className="form">
          <div className="form-card">
            <div className="card-left">
              <div className="img-edit">
                <div className="img-cont">
                  <img src={Avatar} alt="" />
                </div>
              </div>
              <div className="card-text">
                <h1>Papel 040</h1>
                <p>Hi-Tech usulida ishlangan </p>
                <p>boyi 1m 20sm</p>
                <p>eni 70sm</p>
              </div>
            </div>
            <div className="center_hr"></div>
            <div className="card-right">
              <div className="info-product">
                <h3>ID заказа</h3>
                <span></span>
                <h3 className="end-text">156456141</h3>
              </div>
              <div className="info-product">
                <h3>Тип заказа</h3>
                <span></span>
                <h3 className="end-text">Рассрочка</h3>
              </div>

              <div className="info-product">
                <h3>Времия</h3>
                <span></span>
                <h3 className="end-text">28-07-2022</h3>
              </div>
              <div className="info-product">
                <h3>Общая сумма</h3>
                <span></span>
                <h3 className="end-text">8.000.000 so‘m</h3>
              </div>
              <div className="info-product">
                <h3>Контактное лицо</h3>
                <span></span>
                <h3 className="end-text">Sadulla (id15662)</h3>
              </div>
              <div className="info-product">
                <h3>Телефон</h3>
                <span></span>
                <h3 className="end-text"> +998 99 011 89 34</h3>
              </div>
              <div className="info-product">
                <h3>Адрес</h3>
                <span></span>
                <h3 className="end-text">Uzbekistan Tashkent Tamarakhanum 4</h3>
              </div>
              <div className="cont-btn">
                <button className="btn-primary">
                  <span></span> доставлено
                </button>
              </div>
            </div>
          </div>

          <div className="button-cont">
            <Link to="/">
              <button>
                {" "}
                <i className="fa fa-long-arrow-left"></i>
                Вернутся на главную страницу
              </button>{" "}
            </Link>
          </div>
        </div>


<NoteCatd text={info.text} img={info.img} info={info.info}/>
      </div>
    </div>
  );
};

export default Orders;
