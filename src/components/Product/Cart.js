import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { t } from "i18next";
import {
  Cached,
  Check,
  Close,
  LocalShippingOutlined,
  VerifiedUserOutlined,
  Visibility,
} from "@material-ui/icons";
import NoteCatd from "../NoteCard";
import note from "../NoteCard/img/note.png";
import minus from "./images/Minus.png";
import plas from "./images/Plas.png";
import Bin from "./images/Bin.png";
import bass from "../../assets/imgs/bass.png";

import { increament, decrement, clear } from "../../Redux/Reducer/cartSlice";
import { cartTotalPriceSelector } from "../../Redux/Reducer/selectors";

const info = {
  text: "У вас нет заказов",
  info: "чтобы закасать переходите кудата и нажмите что то",
  img: note,
};

const Cart = ({uzbek, english, russian}) => {
  const dispatch = useDispatch();
  const totalPrice = useSelector(cartTotalPriceSelector);
  const cart = useSelector((state) => state.cart);
console.log(cart,'cart')
  const [buyModal, setBuymodal] = useState(false);

  function openModal(item) {
    setBuymodal(item);
    // console.log(item);
  }
  
  return (
    <>
      {true &&
        (cart.length > 0 ? (
          <div className="col-12 card-modal">
            <h1 className="title text-white">{t("my")}</h1>

            {cart.map((item) => (
              <div
                className={`col-12 one-prod  my_happyless`}
                key={item.id}
              >
                <div className="col-2 img">
                  <img src={item.image1} alt="" />
                </div>
                <div className="col-4 name-div ">
                  <h3 className="d-flex justify-content-between">
                    {english && item.name_en} {russian && item.name_ru}{" "}
                    {uzbek && item.name_uz}
                  </h3>

                  <div className="tools tools-price">
                    <h4>
                      {t("68")} : <span>{item.price} $</span>{" "}
                    </h4>
                  </div>
                  {/* <h4>{console.log(countProd,'countProd')} d{countProd.length != 0 ? countProd.map((cl) => countProd.indexOf(cl) + 1 == item.id && cl.num * item.price) : item.count}</h4> */}
                  {/* <h3 className="d-flex justify-content-between">{english && item.name_en} {russian && item.name_ru} {uzbek && item.name_uz} <p className="h6">$ {item.price}</p></h3> */}

                  {/* <h4>{t("total")}: ${countProd.length != 0 ? countProd.map((cl) => countProd.indexOf(cl) + 1 == item.id && cl.num * item.price) : item.count}</h4>    */}
                </div>
                {/* <div className="col-5 middle col-5 middle">
                    <div className=" d-flex">
                      <div
                        className="col-3 dec"
                        onClick={() => decProd(item.id)}
                      >
                        -
                      </div>
                      <div className="col-6 result">
                        {item.id}
                        {countProd.length != 0
                          ? countProd.map(
                              (cl) =>
                                countProd.indexOf(cl) + 1 == item.id &&
                                cl.num
                            )
                          : item.count}
                      </div>
                      <div
                        className="col-3 inc"
                        onClick={() => incProd(item.id)}
                      >
                        +
                      </div>
                    </div>
                  </div> */}

                <div className="col-2 middle piliusMInus">
                  <div className="tools">
                    <div className="d-flex col-4">
                      <div
                        className=" dec"
                        onClick={() => {
                          dispatch(decrement(item.quantity>1 && item.id));
                        }}
                      >
                       { console.log(item.quantity,'quantity')}
                        <p>-</p> {/* <img src={minus} alt="" /> */}
                      </div>
                      <div className="col-6 result">{item.quantity}</div>
                      <div
                        className=" inc"
                        onClick={() => {
                          dispatch(increament(item.id));
                        }}
                      >
                        <p>+</p>
                        {/* <img src={plas} alt="" /> */}
                      </div>
                    </div>
                    <h4>
                      {t("101")}:
                      {/* ${countProd.length != 0 ? countProd.map((cl) => countProd.indexOf(cl) + 1 == item.id && cl.num * item.price) : item.count} */}
                    </h4>
                  </div>
                </div>
                <div className="col-2 middle priceI">
                  <div className="tools">
                    <div className="d-flex col-4">
                      {item.quantity * item.price}
                      <span>$</span>
                    </div>
                    <h4>
                      {t("68")}:
                      {/* ${countProd.length != 0 ? countProd.map((cl) => countProd.indexOf(cl) + 1 == item.id && cl.num * item.price) : item.count} */}
                    </h4>
                  </div>
                </div>
                <div className="col-2 like-delet">
                  {/* {likes.toString().includes(item.id) && (
                      <input
                        type="checkbox"
                        checked
                        onChange={() => unlikes(item.id)}
                        className={`checkbox`}
                        id={item.id + 1}
                      />
                    )}
                    {!likes.toString().includes(item.id) && (
                      <input
                        type="checkbox"
                        onChange={() => getLikes(item.id)}
                        className={`checkbox`}
                        id={item.id + 1}
                      />
                    )} */}
                  {/* <label htmlFor={item.id + 1}>
                      <i
                        onClick={() => addCountLike(item.id)}
                        className={`fa fa-heart-o`}
                      ></i>
                      <i
                        onClick={() => deletCountLike(item.id)}
                        className={`fa fa-heart`}
                      ></i>
                    </label> */}
                  {/* {addProducts.toString().includes(item.id) && (
                    <input
                      type="checkbox"
                      className="addedProduct"
                      id={1 - item.id}
                      onChange={() => deleteCard(item.id)}
                      checked
                    />
                  )}
                  {!addProducts.toString().includes(item.id) && (
                    <input
                      type="checkbox"
                      id={`${1 - item.id}`}
                      onChange={() => getAdd(item.id)}
                      className={`addedProduct`}
                    />
                  )} */}
                  <label
                    htmlFor=""
                    className="add-btn 
                     d_flex"
                  >
                    <div className="icon"
                    //  onClick={() => filterData(value.id)}
                    >
                      {" "}
                      <Visibility className="eye" />{" "}
                    </div>
                  </label>
                  <label
                    // onClick={() => addCountAdd()}
                    htmlFor={`${1 - item.id}`}
                    className="add-btn ghl"
                  >
                    Hoziroq xarid qilish
                  </label>
                  <label
                    // onClick={() => deletCountAdd()}
                    htmlFor={`${1 - item.id}`}
                    className="add-btn dfl"
                  >
                    {/* <i className="fa fa-trash-o"></i> */}
                    <img className=" bin_new" src={Bin} alt="..." />
                  </label>
                </div>
              </div>
            ))}

            <h3 className="mt-5 text-white">
              {/* {t("total")}: $ {nbm} */}
            </h3>

            <div className="info-calc">
              <hr />
              <div className="info-text">
                <div className="left">
                  <i className="fa fa-gift" aria-hidden="true"></i>
                  <h1>
                    {t("100")}
                    {/* закажите прямо сейчас и получите бесплатную доставку в
                    подарок */}
                  </h1>
                </div>
                <div className="right">
                  <span> {t("59")}:</span>{" "}
                  <h1>{totalPrice > 0 && totalPrice}$</h1>
                </div>
              </div>
            </div>

            <div className="col-md-12 buy-all">
              <Link to="/">
                <button className="clous btn-buy">
                  <i className="fa fa-long-arrow-left"></i>
                  {/* Назад */}
                  {t("69")}
                </button>
              </Link>

              {/* <button className="btn" onClick={() => openModal(true)}>
              {t("buyall")}
            </button> */}
              <Link to="/payment">
                <button className=" btn-buy btn-big">
                  {/* <i className="fa fa-gift" aria-hidden="true"></i> */}
                  <img className="fa fa-gift bass" src={bass} alt="" />
                  {/* Покупать все */}
                  {t("71")}
                </button>
              </Link>
              {/* <button
              className=" btn-buy btn-big"
              onClick={() => openModal(true)}
            >
              <i className="fa fa-gift" aria-hidden="true"></i> Покупать все
            </button> */}
            </div>
            {/* <div className={`col-12 row checkout ${!buyModal && "d-none"}`}>
              <i className="fa fa-times" onClick={() => openModal(false)}></i>
              <div className="col-md-6">
                <label className="form-label" htmlFor="">
                  {t("name")}
                </label>
                <input
                  className={`${redName && "red-line"} form-control`}
                  value={nameValue}
                  onChange={(e) => handleChange1(e.target.value)}
                  type="text"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label" htmlFor="">
                  {t("location")}
                </label>
                <input
                  className={`${redText && "red-line"} form-control`}
                  value={value}
                  onChange={(e) => handleChange3(e.target.value)}
                  type="text"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label" htmlFor="">
                  {t("date")}
                </label>
                <input
                  className={`${redDate && "red-line"} form-control`}
                  value={date}
                  onChange={(e) => handleChange4(e.target.value)}
                  type="date"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label" htmlFor="">
                  {t("phone")}
                </label>
                <input
                  className={`${redNumber && "red-line"} form-control`}
                  value={numberValue}
                  onChange={(e) => handleChange2(e.target.value)}
                  type="number"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label" htmlFor="">
                  {t("email")}
                </label>
                <input
                  className={`${redEmail && "red-line"} form-control`}
                  value={email}
                  onChange={(e) => handleChange5(e.target.value)}
                  type="email"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label" htmlFor="">
                  {t("user")}
                </label>
                <input
                  className={`${redPosition && "red-line"} form-control`}
                  value={userPosition}
                  onChange={(e) => handleChange6(e.target.value)}
                  type="text"
                />
              </div>
              <div className="col-md-12">
                <button className="btn" onClick={() => sendMessage()}>
                  {t("check")}
                </button>
              </div>
            </div> */}
            <div
              className={`contr-card ${!buyModal && "d-none"}`}
              onClick={() => openModal(false)}
            ></div>
          </div>
        ) : (
          <NoteCatd text={info.text} img={info.img} info={info.info} />
        ))}
    </>
  );
};

export default Cart;
