import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import "./Scss/Login.scss";
import Img from "./images/p.png";
import { Chevron } from "../../assets/icons";
import { Backleft } from "../../assets/icons";
import logo from "../Navbar/images/logoMix.png";

import { BASE_URL } from "../../utils/configuration";
import { login } from "../../Redux/Reducer/UserSlice";
import { getUsersInfo } from "../../utils/request";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [showLogin, setShowLogin] = useState(true);
  const [hideInput, setHideInput] = useState(false);
  const [rememberPass, setrememberPass] = useState(false);

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  function handleShow(item) {
    setShowLogin(item);
  }

  const handleHideInput = () => {
    setHideInput(true);
  };

  const inputHandle = (e) => {
    setUser(() => ({
      ...user,
      [e.target.name]: e.target.value,
    }));
    console.log("---++++-----", e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("---dataForm-----", user);
    axios.post(BASE_URL + "login/", user).then(({ data }) => {
      localStorage.setItem("token", data.access);
      getUsersInfo(data.access)
        .then(({ data }) => {
          console.log("--------", data);
          dispatch(login(data));
          history.push("/");
        })
        .catch((err) => {
          console.log("err", err);
        });
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <button 
  onClick={() =>  window.clipboardData.setData("Text", 'Copy this text to clipboard')}>
 Copy
</button> */}
      <div className="Login">
        <Link to={`/`} className="logo">
          <img src={logo} alt="..." />
        </Link>
        <div className="wrapper">
          <div className="right-radius">
            <img src={Img} alt="" />
          </div>
          <div className={`login col-md-6 ${!showLogin && "d-none"}`}>
            <p className="text">
              Добро пожаловать в <Link to="/">Mixinfo</Link> <br /> если хотите
              перейти на свой профиль пожалуйста введите логин ипароль
            </p>
            <div className="col-md-12">
              <input
                className="form-control"
                type="text"
                placeholder="Номер телефона"
                name="username"
                onChange={inputHandle}
              />
            </div>
            <div className="col-md-12">
              <input
                className="form-control"
                type="password"
                name="password"
                id=""
                placeholder="Пароль"
                onChange={inputHandle}
              />
            </div>
            <h5 className="remember__password">Забыл пароль</h5>
            <div className="col-md-12">
              <button className="btn">Войти</button>
            </div>
            <p className="reg" onClick={() => handleShow(false)}>
              Register
            </p>
          </div>
          <div className={`register col-md-6 ${showLogin && "d-none"}`}>
            <h1 className="title">Registration</h1>
            <div className="col-md-12">
              <input
                className="form-control"
                type="text"
                placeholder="Имя, Фамилия"
              />
            </div>
            <div className="col-md-12 ">
              <input
                className="form-control"
                type="password"
                name=""
                id=""
                placeholder="Номер телефона"
                aria-describedby="basic-addon2"
              />
              <span className="btn_chevron" onClick={handleHideInput}>
                {hideInput ? <Backleft /> : <Chevron />}
              </span>
            </div>

            {hideInput ? (
              <div>
                <div className="col-md-12">
                  <input
                    className="form-control"
                    type="password"
                    name=""
                    id=""
                    placeholder="Код подтверждения"
                    aria-describedby="basic-addon2"
                  />
                </div>
                <p className="code">Повторно получить код можно через 00:30</p>
              </div>
            ) : (
              " "
            )}

            <div className="col-md-12">
              <button className="btn disabled">Зарегестрироваться</button>
            </div>
            <p className="reg" onClick={() => handleShow(true)}>
              Login
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
