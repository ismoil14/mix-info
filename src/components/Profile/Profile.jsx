import React from "react";
import { Link } from "react-router-dom";
import "./Scss/Profile.scss";
import Avatar from "../Modal/img/sadulla.png";
import logo from "../Navbar/images/logoMix.png";
import photo from "./img/photo.png";
import pen from "./img/pen.png";
import uz from "./img/uz.png";
const Profile = () => {
  return (
    <div className="Profile">
      <div className="wrapper">
        <div className="progile-title">
          <Link to="/">
            <img src={logo} alt="..." />
          </Link>

          <h1> Profile</h1>
        </div>{" "}
        <div className="form">
          <div className="form-card">
            <div className="card-left">
              <div className="img-edit">
                <div className="img-cont">
                  <img src={Avatar} alt="" />
                </div>
                <p>Edit photo</p>
                <div className="photo-cont">
                  <img src={photo} alt="" />
                </div>
              </div>
              <div className="card-text">
                <h1>Sadulla Kobiljonov</h1>
                <p>
                  ID: 15648746{" "}
                  <i className="fa fa-clipboard" aria-hidden="true"></i>
                </p>
              </div>
              <div className="photo-edit">
                <img src={pen} alt="" />
              </div>
            </div>
            <div className="card-right">
              <h1>Адрес:</h1>
              <label htmlFor="">
                <input
                  className="longInput"
                  value="Uzbekistan , Tashkent, Tamarakhanum 4"
                  type="text"
                  name=""
                  id=""
                />
                <div className="card-uz">
                  <img src={uz} alt="" />
                </div>
              </label>
              <button>
                {" "}
                <img src={pen} alt="..." /> Edit adress
              </button>
            </div>
          </div>
          <div className="form-card">
            <div className="card-left">
              <div className="card-text support-text">
                <h1>
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  Telephon number
                </h1>
                <p>
                  Привязать адрес для уведомлений Для новостей и оповещений от
                  сервисов
                </p>
              </div>
            </div>
            <div className="card-right">
              <label htmlFor="">
                <input
                  className="longInput"
                  value="Uzbekistan , Tashkent, Tamarakhanum 4"
                  type="text"
                  name=""
                  id=""
                />
                <div className="card-uz">
                  <img src={uz} alt="" />
                </div>
              </label>
              <button>
                {" "}
                <img src={pen} alt="..." /> Edit adress
              </button>
            </div>
          </div>
          <div className="form-card form-card-password">
            <div className="card-left">
              <div className="card-text support-text">
                <h1>
                  <i className="fa fa-shield" aria-hidden="true"></i>
                  Password and security
                </h1>
                <p>
                  Привязать адрес для уведомлений Для новостей и оповещений от
                  сервисов
                </p>
              </div>
            </div>
            <div className="card-right">
              <label htmlFor="">
                <input
                  className="longInput"
                  value="Uzbekistan , Tashkent, Tamarakhanum 4"
                  type="text"
                  name=""
                  id=""
                />
                <div className="card-uz">
                  <img src={uz} alt="" />
                </div>
              </label>
              <button>
                {" "}
                <img src={pen} alt="..." /> Save
              </button>
            </div>
          </div>

          <div className="button-cont">
            <button>
              {" "}
              <i className="fa fa-floppy-o" aria-hidden="true"></i> Сохранить
              все данныеave
            </button>
            <Link to='/'>  <button>
              {" "}
              <i className="fa fa-times-circle" aria-hidden="true"></i> Отмена
            </button></Link>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
