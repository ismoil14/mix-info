import React, { useEffect, useState } from "react";
import { Card, CategoryTitles } from "./style";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Scss/Prod.scss";
import axios from "axios";
import Shop from "./images/bagZB.png";
import ShopT from "./images/bagZT.png";
import { t } from "i18next";
import {
  Electronics,
  // CardData
} from "../../utils/electronics";
import {
  Cached,
  Check,
  Close,
  LocalShippingOutlined,
  VerifiedUserOutlined,
  Visibility,
} from "@material-ui/icons";

// import ShareIcon from '@mui/icons-material/Share';
import ShareIconImg from "./images/share.png";
import commit from "../../assets/imgs/commit.png";

import { Rating } from "@mui/material";
import { Box } from "@material-ui/core";
import Corousel from "../Corousel";
import SmallCor from "./SmallCor";

import {
  addToCart,
  increament,
  decrement,
  clear,
} from "../../Redux/Reducer/cartSlice";
import { cartTotalPriceSelector } from "../../Redux/Reducer/selectors";
import Cart from "./Cart";

export const Products = ({
  allResult,
  addCountAdd,
  addCountLike,
  deletCountLike,
  deletCountAdd,
  changeTips,
  subTips,
  english,
  russian,
  uzbek,
  urlLikes,
  changeModal,
  all,
  saved,
  top,
  card,
  oneProd,
  id,
  name,
  image,
  image1,
  image2,
  image3,
  desc,
  code,
  description_uz,
  description_ru,
  description_en,
  price,
  category,
}) => {
  let countParams = 0;
  // console.log('image3',image3)
  // Electronics, ProdName, CardData,//

  const dispatch = useDispatch();
  const totalPrice = useSelector(cartTotalPriceSelector);
  const cart = useSelector((state) => state.cart);

  const [CardData, setProductInfo] = useState([]);

  useEffect(() => {
    axios
      .get("https://api-mixinfo.abba.uz/products/")
      .then(({ data }) => {
        // console.log(data, "ProductInfoCardData");
        setProductInfo(data);
      })
      .catch((err) => {
        console.log(err, "err");
      });
  }, []);

  // console.log(CardData[2], "CardData");
  // categories

  const { pathname } = useLocation();
  const [allCat, setAllCat] = useState(false);

  let radio = document.querySelectorAll(".radio");

  for (let i = 0; i < radio.length; i++) {
    radio[0].setAttribute("checked", "true");
  }
  // localStorage.setItem("category", 0);

  // tips of products

  const [allSub, setAllSub] = useState(false);

  // const [subTips, setSubTips] = useState(localStorage.getItem("category") ? localStorage.getItem("category") : 1)

  // function changeTips(item){          // categoriyalardan birortasini tanlaganda subCategoriyalar o'zgarishi
  //     setSubTips(item)
  //     localStorage.setItem("category", item)
  // }

  let tipology = document.querySelectorAll(".tipology");

  for (let i = 0; i < tipology.length; i++) {
    tipology[0].setAttribute("checked", "true");
  }

  // products

  const [prods, setProds] = useState(
    localStorage.getItem("subcategory")
      ? localStorage.getItem("subcategory")
      : 1
  );

  function changeProducts(item) {
    // subcategoriyalardan birortasini tanlaganda productlar o'zgarishi
    setProds(item);
    localStorage.setItem("subcategory", item);
  }

  // like algorithms

  const [numberLikes, setNumberLikes] = useState(
    localStorage.getItem("like") ? localStorage.getItem("like").split(",") : 0
  );
  const [like, setLike] = useState(false);
  let likesArray = [];
  let checkbox = document.querySelectorAll(".checkbox");
  const [likes, setLikes] = useState(
    localStorage.getItem("lk") ? localStorage.getItem("lk").split(",") : []
  );

  function getLikes(item) {
    const url = `https://api.madeinuzb.com/addlike/${item}`;
    setLike(!like);
    axios.get(url);
    setLikes([...likes, item]);
    localStorage.setItem("lk", [likes, item]);
  }

  function unlikes(item) {
    const arrLk = likes.filter((inc) => inc != item);
    setLikes(arrLk);
    localStorage.setItem("lk", arrLk);
    const url = `https://api.madeinuzb.com/deletelike/${item}`;
    axios.get(url);
  }

  // console.log(likes, "LK");

  window.addEventListener("load", () => {
    setNumberLikes(
      localStorage.getItem("like") ? localStorage.getItem("like").split(",") : 0
    );
  });

  // add to card

  const [addedProds, setAddedProds] = useState(
    localStorage.getItem("added") ? localStorage.getItem("added").split(",") : 0
  );
  const [numCount, setNumCount] = useState(
    localStorage.getItem("countProd")
      ? localStorage.getItem("countProd").split(",")
      : 0
  );
  const [countProd, setCountProd] = useState(
    numCount != 0
      ? numCount.map((i) => ({ id: numCount.indexOf(i), num: Number(i) }))
      : CardData.map((p) => ({ id: p.id - 1, num: p.count }))
  ); //{id: item.id, num: item.count}
  const [showSuc, setshowSuc] = useState(false);
  const [addProducts, setAddProducts] = useState(
    localStorage.getItem("added")
      ? localStorage.getItem("added").split(",")
      : []
  );
  let cardsArray = [];
  let addedProduct = document.querySelectorAll(".addedProduct");

  function getAdd(item) {
    // const url = `https://api.madeinuzb.com/addlike/${item}`;
    // setLike(!like);
    // axios.get(url);
    // setAddProducts([...addProducts, item]);
    // localStorage.setItem("added", [addProducts, item]);
    // setshowSuc(true);
    // setTimeout(() => {
    //   setshowSuc(false);
    // }, 1500);
    // addCountAdd();
  }

  function deleteCard(item) {
    // savatchadan o'chirib tashlash funksiyasi
    const arrAD = addProducts.filter((inc) => inc != item);
    setAddedProds(arrAD);
    setAddProducts(arrAD);
    localStorage.setItem("added", arrAD);
  }

  window.addEventListener("load", () => {
    setAddedProds(
      localStorage.getItem("added")
        ? localStorage.getItem("added").split(",")
        : 0
    );
  });

  window.addEventListener("load", () => {
    return localStorage.setItem(
      "countProd",
      countProd.map((c) => c.num)
    );
  });
  // const [addProdColk, setAddProdColk] = useState(0);
  // console.log(countProd,'countProd')
  function incProd(item) {
    setCountProd(
      countProd.map((c) => ({
        id: c.id,
        num: countProd.indexOf(c) + 1 == item ? c.num + 100 : c.num,
      }))
    ); //---
    localStorage.setItem(
      "countProd",
      countProd.map((c) => c.num + (item == countProd.indexOf(c) + 1 ? 100 : 0))
    );
  }

  function decProd(item) {
    setCountProd(
      countProd.map((c) => ({
        id: c.id,
        num: c.num > 0 && countProd.indexOf(c) + 1 == item ? c.num - 1 : c.num,
      }))
    );
    localStorage.setItem(
      "countProd",
      countProd.map((c) => c.num - (item == countProd.indexOf(c) + 1 ? 1 : 0))
    );
  }

  // carousel for top products

  const [carousel, setCarousel] = useState(0);
  const [activeCar, setActiveCar] = useState(false);
  let getCarousel = document.querySelectorAll(".get-carousel");

  function increment() {
    if (carousel < 0) {
      setCarousel(carousel + 4);
      setActiveCar(true);
    }
  }

  function decrement() {
    if (carousel >= -CardData.length - 8 && getCarousel.length > 4) {
      setCarousel(carousel - 4);
      setActiveCar(false);
    }
  }

  // carousel for recommend products

  const [slick, setSlick] = useState(0);
  const [activeSlick, setActiveSlick] = useState(false);
  let getSlick = document.querySelectorAll(".get-slick");

  function increment1() {
    if (slick < 0) {
      setSlick(slick + 4);
      setActiveSlick(true);
    }
  }

  function decrement1() {
    if (slick >= -getSlick.length - 8 && getSlick.length > 4) {
      setSlick(slick - 4);
      setActiveSlick(false);
    }
  }

  // buy modal and bot methods

  const [buyModal, setBuymodal] = useState(false);

  function openModal(item) {
    setBuymodal(item);
    // console.log(item);
  }

  const [nameValue, setNameValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [value, setValue] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [userPosition, setUserPosition] = useState("");

  const [redName, setRedName] = useState(false);
  const [redNumber, setRedNumber] = useState(false);
  const [redText, setRedText] = useState(false);
  const [redDate, setRedDate] = useState(false);
  const [redEmail, setRedEmail] = useState(false);
  const [redPosition, setRedPosition] = useState(false);

  function handleChange1(item) {
    setNameValue(item);
    setRedName(false);
  }
  function handleChange2(item) {
    setNumberValue(item);
    setRedNumber(false);
  }
  function handleChange3(item) {
    setValue(item);
    setRedText(false);
  }
  function handleChange4(item) {
    setDate(item);
    setRedDate(false);
  }
  function handleChange5(item) {
    setEmail(item);
    setRedEmail(false);
  }
  function handleChange6(item) {
    setUserPosition(item);
    setRedPosition(false);
  }

  let newPro = [];
  let newPrice = [];
  let nbm = 0;

  addedProds != 0 &&
    addedProds.forEach((data) => {
      newPro.push(CardData.filter((item) => item.id == data && item.name_en)); // sotib olinayotgan mahsulotlar nomi
      newPrice.push(
        CardData.map((item) =>
          countProd.map((cl) => cl.id + 1 == item.id && cl.num * item.price)
        )
      ); // sotib olinayotgan mahsulotlar narxlari
    });

  countProd.filter((i) => {
    newPro.map((c) => {
      c.map((k) => {
        nbm += countProd.indexOf(i) + 1 == k.id && k.price * i.num; // umumiy summani hisoblash
      });
    });
  });

  let bot = {
    TOKEN: "5500966862:AAFWxVHRtMUeL4gr5NhS_OHkA9CWfIRW18o",
    chatID: "-1001566786338",
    message: `Kompaniya nomi: ${nameValue};|| Kompaniya Joylashuvi: ${value};|| Kompaniya ochilgan sana: ${date};|| Kompaniya telefon raqami: ${numberValue};|| Kompaniya emaili: ${email};|| To'ldiruvchining lavozimi: ${userPosition}. <---------> Umumiy summa: $ ${nbm}; || Sotib olayotgan mahsulotlari: ${countProd.map(
      (i) =>
        newPro.map((c) =>
          c.map((k) =>
            countProd.indexOf(i) + 1 == k.id
              ? `${k.name_en} dan ${i.num} ta`
              : ""
          )
        )
    )}`,
  };

  function sendMessage(e) {
    if (nameValue === "") {
      setRedName(true);
    } else if (value === "") {
      setRedText(true);
    } else if (date === "") {
      setRedDate(true);
    } else if (numberValue === "") {
      setRedNumber(true);
    } else if (email === "") {
      setRedEmail(true);
    } else if (userPosition === "") {
      setRedPosition(true);
    } else {
      fetch(
        `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${bot.message} `,
        {
          method: "GET",
        }
      ).then(
        (success) => {
          // console.log("send message");
        },
        (error) => {
          // console.log(error);
        }
      );

      setNameValue("");
      setNumberValue("");
      setValue("");
      setDate("");
      setEmail("");
      setUserPosition("");
      openModal(false);
      changeModal();
    }
  }

  // one product

  const [oneData, setOneData] = useState(CardData);
  const [isModal, setIsModal] = useState(false);

  if (isModal) {
    document.body.classList.add("is-modal");
  } else {
    document.body.classList.remove("is-modal");
  }
  function filterData(item) {
    const newOneData = oneData.filter((data) => data.id == item);
    setOneData(newOneData);
    setIsModal(true);
    console.log(isModal, "isModal");
    if (isModal === true) {
      document.body.classList.add("is-modal");
    }
  }

  function backFilter() {
    setOneData(CardData);
    setIsModal(false);
    setLike(false);
  }

  const [indexImg1, setIndexImg1] = useState(0);

  const img = oneData.map((d) => d.image);
  const img1 = oneData.map((d) => d.image1);
  const img2 = oneData.map((d) => d.image2);

  const otherImages1 = [img, img1, img2];

  function changeImg1(c, e) {
    // modalning ichidagi rasmlarni o'zgartirish funksiyasi
    setIndexImg1(c.indexOf(e));
  }

  // one prod images

  const [indexImg, setIndexImg] = useState(0);

  const otherImages = [image, image1, image2];

  function changeImg(c, e) {
    // modalning ichidagi rasmlarni o'zgartirish funksiyasi
    setIndexImg(c.indexOf(e));
  }

  // const cartT = useSelector((state) => state.cart);
  // const cardCont = cartT.map((d) => d.id);
  // const cardContInfo = CardData.map((d) => d.id);

  // console.log(cardContInfo, "cardContInfo", cardCont, "cardCont");
  return (
    <>
      <div
        // className="Prod"
        className={`Prod ${pathname.slice(1, 10)}ProdMobile`}
      >
        <div
          style={pathname == "/" ? { marginTop: "0", paddingTop: "0" } : {}}
          className="wrapper"
        >
          {all && (
            <CategoryTitles>
              <div className={`col-md-12 menu-catalog d-flex`}>
                <div className="line-menu">
                  {Electronics.map((value) => {
                    return (
                      <div className="catalog-menu" key={value.id}>
                        <input
                          type="radio"
                          className="form-check-input radio"
                          onChange={() => changeTips(value.id)}
                          checked={subTips == value.id}
                          name="flexRadioDefault"
                          id={`radio${value.id + 1}`}
                        />
                        <label htmlFor={`radio${value.id + 1}`}>
                          <CategoryTitles.Card key={value.id} className="tool">
                            {english && value.name_en}
                            {russian && value.name_ru}
                            {uzbek && value.name_uz}
                          </CategoryTitles.Card>
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
            </CategoryTitles>
          )}
          {all && (
            <div className="products row">
              {CardData.map((value) => {
                return (
                  <Card
                    key={value.id}
                    className={`col-3 prod ${
                      value.category == subTips && !allResult && "d-block"
                    } ${allResult && "d-block"}`}
                  >
                    <div className="body">
                      <div className="header">
                        <div className="nav-link navigator">
                          <img
                            src={value.image1}
                            alt="errCard"
                            className="img"
                          />
                          <div className="top-left">
                            {value.sale ? "New" : "Sale"}
                          </div>
                          <Link
                            to={`product/${value.id}`}
                            className="nav-link contr-navigator"
                          ></Link>
                          <div className="left-tools">
                            <div className="icon">
                              {likes.toString().includes(value.id) && (
                                <input
                                  type="checkbox"
                                  checked
                                  onChange={() => unlikes(value.id)}
                                  className={`checkbox`}
                                  id={value.id + 1}
                                />
                              )}
                              {!likes.toString().includes(value.id) && (
                                <input
                                  type="checkbox"
                                  onChange={() => getLikes(value.id)}
                                  className={`checkbox`}
                                  id={value.id + 1}
                                />
                              )}
                              <label htmlFor={value.id + 1}>
                                <i
                                  onClick={() => addCountLike(value.id)}
                                  className={`fa fa-heart-o`}
                                ></i>
                                <i
                                  onClick={() => deletCountLike(value.id)}
                                  className={`fa fa-heart`}
                                ></i>
                              </label>
                            </div>
                            <div className="icon">
                              {addProducts.toString().includes(value.id) && (
                                <input
                                  type="radio"
                                  className="addedProduct"
                                  id={1 - value.id}
                                  onChange={() => deleteCard(value.id)}
                                  checked
                                />
                              )}
                              {!addProducts.toString().includes(value.id) && (
                                <input
                                  type="radio"
                                  id={`${1 - value.id}`}
                                  onChange={() => getAdd(value.id)}
                                  className={`addedProduct`}
                                />
                              )}
                              <label
                                htmlFor={`${1 - value.id}`}
                                className="add-btn"
                              >
                                <img src={Shop} />
                              </label>
                            </div>
                            <div className="icon">
                              <img
                                src={ShareIconImg}
                                alt="..."
                                className="cache"
                              />

                              {/* <ShareIconImg className="cache" /> */}
                            </div>
                            <div
                              className="icon"
                              onClick={() => filterData(value.id)}
                            >
                              <Visibility className="eye" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <Card.Footer className="footer">
                        <h2>
                          {english && value.name_en}
                          {russian && value.name_ru}
                          {uzbek && value.name_uz}
                        </h2>
                        <div className="card-bottom">
                          {value.aksiya ? (
                            <h3>
                              $ {value.price}{" "}
                              <s className="old-price">$ {value.price}</s>
                            </h3>
                          ) : (
                            <h3>$ {value.price}</h3>
                          )}
                          <Box sx={{ "& > legend": { mt: 2 } }}>
                            <Rating
                              className="rating"
                              name="read-only"
                              value={value.rate}
                              readOnly
                            />
                          </Box>
                        </div>
                      </Card.Footer>
                    </div>
                  </Card>
                );
              })}
            </div>
          )}

          {saved && (
            <>
              <h1 className="text-dark">
                {/* <i className="fa fa-heart"></i> */}
                За лайконные товары
              </h1>
              <p>что бы яохранить товаров за лайкните</p>
            </>
          )}

          {saved && (
            <div className="products row mb-5 pb-5">
              {CardData.map((value) => {
                console.log(
                  likes.toString().includes(value.id) === true
                    ? countParams + 1
                    : "",
                  "likes.toString().includes(value.id)"
                );
                return (
                  <Card
                    key={value.id}
                    className={`col-3 prod ${
                      likes.toString().includes(value.id) && "d-block"
                    }`}
                  >
                    <div className="body">
                      <div className="header">
                        <div className="nav-link navigator">
                          <img
                            src={value.image1}
                            alt="errCard"
                            className="img"
                          />
                          <div className="top-left">
                            {value.sale ? "New" : "Sale"}
                          </div>
                          <Link
                            to={`/product/${value.id}`}
                            className="nav-link contr-navigator"
                          ></Link>
                          <div className="left-tools">
                            <div className="icon">
                              {likes.toString().includes(value.id) && (
                                <input
                                  type="checkbox"
                                  checked
                                  onChange={() => unlikes(value.id)}
                                  className={`checkbox`}
                                  id={value.id + 1}
                                />
                              )}
                              {!likes.toString().includes(value.id) && (
                                <input
                                  type="checkbox"
                                  onChange={() => getLikes(value.id)}
                                  className={`checkbox`}
                                  id={value.id + 1}
                                />
                              )}
                              <label htmlFor={value.id + 1}>
                                <i
                                  onClick={() => addCountLike(value.id)}
                                  className={`fa fa-heart-o`}
                                ></i>
                                <i
                                  onClick={() => deletCountLike(value.id)}
                                  className={`fa fa-heart`}
                                ></i>
                              </label>
                            </div>
                            <div className="icon">
                              {addProducts.toString().includes(value.id) && (
                                <input
                                  type="radio"
                                  className="addedProduct"
                                  id={1 - value.id}
                                  onChange={() => deleteCard(value.id)}
                                  checked
                                />
                              )}
                              {!addProducts.toString().includes(value.id) && (
                                <input
                                  type="radio"
                                  id={`${1 - value.id}`}
                                  onChange={() => getAdd(value.id)}
                                  className={`addedProduct`}
                                />
                              )}
                              <label
                                htmlFor={`${1 - value.id}`}
                                className="add-btn"
                              >
                                <img src={Shop} />
                              </label>
                            </div>
                            <div className="icon">
                              {/* <ShareIconImg className="cache" /> */}
                              <img
                                src={ShareIconImg}
                                alt="..."
                                className="cache"
                              />
                            </div>
                            <div
                              className="icon"
                              onClick={() => filterData(value.id)}
                            >
                              <Visibility className="eye" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <Card.Footer className="footer">
                        <h2>
                          {english && value.name_en}
                          {russian && value.name_ru}
                          {uzbek && value.name_uz}
                        </h2>
                        <div className="card-bottom">
                          <h3>
                            $ {value.price}{" "}
                            <s className="old-price">$ {value.price}</s>
                          </h3>
                          <Box sx={{ "& > legend": { mt: 2 } }}>
                            <Rating
                              className="rating"
                              name="read-only"
                              value={value.rate}
                              readOnly
                            />
                          </Box>
                        </div>
                      </Card.Footer>
                    </div>
                  </Card>
                );
              })}
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
          )}

          {top && (
            <h1 id="hotsale" className="hot">
              {/* HOT SALES */}
              {t("126")}
            </h1>
          )}

          {top && (
            <CategoryTitles>
              <div className={`col-md-12 menu-catalog d-flex`}>
                <div className="line-menu">
                  {Electronics.map((value, index) => {
                    return (
                      <div className="catalog-menu" key={index}>
                        <input
                          type="radio"
                          className="form-check-input radio"
                          onChange={() => changeTips(value.id)}
                          checked={subTips == value.id}
                          name="flexRadioDefault"
                          id={`radio${value.id + 1}`}
                        />
                        <label htmlFor={`radio${value.id + 1}`}>
                          <CategoryTitles.Card key={value.id} className="tool">
                            {english && value.name_en}
                            {russian && value.name_ru}
                            {uzbek && value.name_uz}
                          </CategoryTitles.Card>
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
            </CategoryTitles>
          )}

          {top && (
            <div className="products row mt-3">
              {CardData.map((value) => {
                // console.log(CardData,'opp',value)
                return (
                  <Card
                    key={value.id}
                    className={`col-3 prod d-block
                   
                    `}
                    // ${
                    //   value.category == subTips && !allResult && "d-block"
                    // }
                    style={{ transform: `translateX(${carousel * 50}%)` }}
                  >
                    <div className="body">
                      <div className="header">
                        <div className="nav-link navigator">
                          <img
                            src={value.image1}
                            alt="errCard"
                            className="img"
                          />
                          <div className="top-left">
                            {value.sale ? "New" : "Sale"}
                          </div>
                          <Link
                            to={`/product/${value.id}`}
                            className="nav-link contr-navigator"
                          ></Link>
                          <div className="left-tools">
                            <div className="icon">
                              {likes.toString().includes(value.id) && (
                                <input
                                  type="checkbox"
                                  checked
                                  onChange={() => unlikes(value.id)}
                                  className={`checkbox`}
                                  id={value.id + 1}
                                />
                              )}
                              {!likes.toString().includes(value.id) && (
                                <input
                                  type="checkbox"
                                  onChange={() => getLikes(value.id)}
                                  className={`checkbox`}
                                  id={value.id + 1}
                                />
                              )}
                              <label htmlFor={value.id + 1}>
                                <i
                                  onClick={() => addCountLike(value.id)}
                                  className={`fa fa-heart-o`}
                                ></i>
                                <i
                                  onClick={() => deletCountLike(value.id)}
                                  className={`fa fa-heart`}
                                ></i>
                              </label>
                            </div>
                            <div className="icon">
                              {addProducts.toString().includes(value.id) && (
                                <input
                                  type="radio"
                                  className="addedProduct"
                                  id={1 - value.id}
                                  onChange={() => deleteCard(value.id)}
                                  checked
                                />
                              )}
                              {!addProducts.toString().includes(value.id) && (
                                <input
                                  type="radio"
                                  id={`${1 - value.id}`}
                                  onChange={() => getAdd(value.id)}
                                  className={`addedProduct`}
                                />
                              )}
                              <label
                                // onClick={() => addCountAdd()}
                               
                                htmlFor={`${1 - value.id}`}
                                className="add-btn"
                              >
                                {cart?.some((ct) => ct.id === value.id) ? (
                                  <img  onClick={() => {
                                    cart?.some((ct) => ct.id === value.id)? {}: dispatch(addToCart( cart?.some((ct) => ct.id === value.id)-value));
                                  }} src={ShopT} />
                                ) : (
                                  <img  onClick={() => {
                                    cart?.some((ct) => ct.id === value.id)? {}: dispatch(addToCart(value));
                                  }} src={Shop} />
                                )}
                              </label>
                            </div>
                            <div className="icon">
                              {/* <ShareIconImg className="cache" /> */}
                              <img
                                src={ShareIconImg}
                                alt="..."
                                className="cache"
                              />
                            </div>
                            <div
                              className="icon"
                              onClick={() => filterData(value.id)}
                            >
                              <Visibility className="eye" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <Card.Footer className="footer">
                        <h2>
                          {english && value.name_en}
                          {russian && value.name_ru}
                          {uzbek && value.name_uz}
                        </h2>
                        <div className="card-bottom">
                          <h3>
                            $ {value.price}{" "}
                            <s className="old-price">$ {value.price}</s>
                          </h3>
                          <Box sx={{ "& > legend": { mt: 2 } }}>
                            <Rating
                              className="rating"
                              name="read-only"
                              value={value.rate}
                              readOnly
                            />
                          </Box>
                        </div>
                      </Card.Footer>
                    </div>
                  </Card>
                );
              })}
            </div>
          )}
          {/* {console.log(addedProds.length,'card.length')} */}
          {/* {addedProds.length > 1 ?   */}

          {card && <Cart uzbek={uzbek} english={english} russian={russian} />}

          {oneProd && (
            <div className="one-product col-md-12">
              <Link to="/products">
                <button className="ToBack">
                  {" "}
                  <i
                    className="fa fa-long-arrow-left"
                    aria-hidden="true"
                  ></i>{" "}
                  {t("135")}
                </button>
              </Link>

              <div className="row col-md-12">
                <div className="col-md-6 img">
                  {console.log(image1, "image1")}
                  {/* <div className="body">
                    {otherImages
                      .slice(indexImg, indexImg + 1)
                      .map((c, index) => (
                        <img key={index} src={c} />
                      ))}
                  </div> */}

                  <Corousel img1={image1} img2={image2} img3={image3} />
                  {/* {console.log(image3,'image3')} */}
                </div>
                <div className="col-md-6 g0">
                  <div className="images">
                    {otherImages.map((c, index) => (
                      <div
                        key={index}
                        className="col-3"
                        onClick={() => changeImg(otherImages, c)}
                      >
                        <img src={c} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-md-6 text">
                  <div className="body">
                    <h1 className="name">{name}</h1>
                    <h1 className="price">$ {price}</h1>
                    <div className="deliver">
                      <div className="col-md-8">
                        <div className="bod">
                          <LocalShippingOutlined className="truck" />
                          <h4 className="about">
                            Bepul yetkazib berish <br />{" "}
                            <Link to="/" className="link">
                              Yetkazib berish xizmati bepul
                            </Link>
                          </h4>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="bod">
                          <VerifiedUserOutlined className="truck" />
                          <h4 className="about">
                            Qaytib olish shartlari <br />{" "}
                            <Link to="/" className="link">
                              Learn More
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between one-blog">
                      {/* {addProducts.toString().includes(id) && (
                        <input
                          type="checkbox"
                          className="addedProduct"
                          id={1 - id}
                          onChange={() => deleteCard(id)}
                          checked
                        />
                      )}
                      {!addProducts.toString().includes(id) && (
                        <input
                          type="checkbox"
                          id={`${1 - id}`}
                          onChange={() => getAdd(id)}
                          className={`addedProduct`}
                        />
                      )} */}
                      <Link to="/payment" className="add-btn ghl">
                        <label
                        // onClick={() => addCountAdd()}
                        // onClick={() => openModal(true)}
                        // htmlFor={`${1 - id}`}
                        // className="add-btn ghl"
                        >
                          {/* {t("cart")} */}
                          Hoziroq xarid qilish
                        </label>
                      </Link>

                      <div
                        className={`col-12 row checkout ${
                          !buyModal && "d-none"
                        }`}
                      >
                        <i
                          className="fa fa-times"
                          onClick={() => openModal(false)}
                        ></i>
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
                            className={`${
                              redNumber && "red-line"
                            } form-control`}
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
                            className={`${
                              redPosition && "red-line"
                            } form-control`}
                            value={userPosition}
                            onChange={(e) => handleChange6(e.target.value)}
                            type="text"
                          />
                        </div>
                        <div className="col-md-12">
                          <button
                            className="add-btn ghl"
                            onClick={() => sendMessage()}
                          >
                            SUBMIT INFORMA
                          </button>
                        </div>
                      </div>
                      <div
                        className={`contr-card ${!buyModal && "d-none"}`}
                        onClick={() => openModal(false)}
                      ></div>
                      {/* <label
                        onClick={() => deletCountAdd()}
                        htmlFor={`${1 - id}`}
                        className="add-btn dfl"
                      >
                        {t("added")} <Check />{" "}
                      </label> */}
                      {/* {likes.toString().includes(id) && (
                        <input
                          type="checkbox"
                          onChange={() => unlikes(id)}
                          className={`checkbox`}
                          id={id + 1}
                          checked
                        />
                      )}
                      {!likes.toString().includes(id) && (
                        <input
                          type="checkbox"
                          onChange={() => getLikes(id)}
                          className={`checkbox`}
                          id={id + 1}
                        />
                      )} */}
                      {/* <label htmlFor={id + 1}>
                        <i
                          onClick={() => addCountLike(id)}
                          className={`fa fa-heart-o`}
                        ></i>
                        <i
                          onClick={() => deletCountLike(id)}
                          className={`fa fa-heart`}
                        ></i>
                      </label> */}
                    </div>
                  </div>
                </div>
                {/* {pathname !== "/product/1" ? (
                  <div className="col-md-6 g1">
                    <div className="images">
                      {otherImages.map((c, index) => (
                        <div
                          key={index}
                          className="col-3"
                          onClick={() => changeImg(otherImages, c)}
                        >
                          <img src={c} />
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  ""
                )} */}
                <label className="post-love">
                  <i className={`fa fa-heart-o`}></i>
                  <i className={`fa fa-heart`}></i>
                </label>
                <label className="post-love post-tocommit">
                  <img src={commit} alt="" />
                </label>
                <div className="discription"></div>
                <h3 className="description mt-5">Description</h3>
                {/* <p>
                  YEcophon Solo™ Rectangle Akutex HS акустическое решение,
                  применяемое в тех случаях когда затруднена установка потолка
                  "от стены до стены". Панель звукопоглощающая, без обрамления,
                  крепиться с использованием аксессуаров Connect™ имеющих класс
                  коррозионной стойкости С4.
                </p>
                <p>
                  Панель выпускается в различных размерах с весом около 7–14 кг.
                  Панель изготовлена из стекловолокна высокой плотности с
                  покрытием Akutex™ HS с обеих сторон. Кромки прямые, окрашены.
                  Ecophon Solo™ Rectangle Akutex HS подходит для применения в
                  бассейнах, помещениях с высокой влажностью и коррозионной
                  активностью,панели не бояться прямого попадания брызг.
                </p>
                <p>
                  YEcophon Solo™ Rectangle Akutex HS акустическое решение,
                  применяемое в тех случаях когда затруднена установка потолка
                  "от стены до стены". Панель звукопоглощающая, без обрамления,
                  крепиться с использованием аксессуаров Connect™ имеющих класс
                  коррозионной стойкости С4.
                </p>
                <p>
                  Панель выпускается в различных размерах с весом около 7–14 кг.
                  Панель изготовлена из стекловолокна высокой плотности с
                  покрытием Akutex™ HS с обеих сторон. Кромки прямые, окрашены.
                  Ecophon Solo™ Rectangle Akutex HS подходит для применения в
                  бассейнах, помещениях с высокой влажностью и коррозионной
                  активностью,панели не бояться прямого попадания брызг.
                </p> */}

                <p>
                  {" "}
                  {english && description_en} {russian && description_ru}{" "}
                  {uzbek && description_uz}
                </p>
              </div>
              <h3 className="recommend text-white mobileNone">
                {t("recommend")}:
              </h3>
              {/* <div className="col-12 slide-tools  mobileNone">
                <div className="d-flex c2">
                  <i
                    className={`fa fa-angle-left ${activeSlick && "active"}`}
                    onClick={() => increment1()}
                  ></i>
                  <i
                    className={`fa fa-angle-right mx-3 ${
                      !activeSlick && "active"
                    }`}
                    onClick={() => decrement1()}
                  ></i>
                </div>
              </div> */}
              <div className="products row top mobileNone">
                {CardData.map((value) => {
                  return (
                    value.id != id && (
                      <Card
                        key={value.id}
                        className={`col-3 prod d-block ${
                          value.category == category && "get-slick"
                        } ${value.category != category && "d-none"}`}
                        style={{ transform: `translateX(${slick * 50}%)` }}
                      >
                        <div className="body">
                          <div className="header">
                            <div className="nav-link navigator">
                              <img
                                src={value.image1}
                                alt="errCard"
                                className="img"
                              />
                              <div className="top-left">
                                {value.sale ? "New" : "Sale"}
                              </div>
                              <Link
                                to={`/product/${value.id}`}
                                className="nav-link contr-navigator"
                              ></Link>
                              <div className="left-tools">
                                <div className="icon">
                                  {likes.toString().includes(value.id) && (
                                    <input
                                      type="checkbox"
                                      checked
                                      onChange={() => unlikes(value.id)}
                                      className={`checkbox`}
                                      id={value.id + 1}
                                    />
                                  )}
                                  {!likes.toString().includes(value.id) && (
                                    <input
                                      type="checkbox"
                                      onChange={() => getLikes(value.id)}
                                      className={`checkbox`}
                                      id={value.id + 1}
                                    />
                                  )}
                                  <label htmlFor={value.id + 1}>
                                    <i
                                      onClick={() => addCountLike(value.id)}
                                      className={`fa fa-heart-o`}
                                    ></i>
                                    <i
                                      onClick={() => deletCountLike(value.id)}
                                      className={`fa fa-heart`}
                                    ></i>
                                  </label>
                                </div>
                                <div className="icon">
                                  {addProducts
                                    .toString()
                                    .includes(value.id) && (
                                    <input
                                      type="radio"
                                      className="addedProduct"
                                      id={1 - value.id}
                                      onChange={() => deleteCard(value.id)}
                                      checked
                                    />
                                  )}
                                  {!addProducts
                                    .toString()
                                    .includes(value.id) && (
                                    <input
                                      type="radio"
                                      id={`${1 - value.id}`}
                                      onChange={() => getAdd(value.id)}
                                      className={`addedProduct`}
                                    />
                                  )}
                                  <label
                                    onClick={() => addCountAdd()}
                                    htmlFor={`${1 - value.id}`}
                                    className="add-btn"
                                  >
                                    <img src={Shop} />
                                  </label>
                                </div>
                                <div className="icon">
                                  {/* <ShareIconImg className="cache" /> */}
                                  <img
                                    src={ShareIconImg}
                                    alt="..."
                                    className="cache"
                                  />
                                </div>
                                <div
                                  className="icon"
                                  onClick={() => filterData(value.id)}
                                >
                                  <Visibility className="eye" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <Card.Footer className="footer">
                            <h2>
                              {english && value.name_en}
                              {russian && value.name_ru}
                              {uzbek && value.name_uz}
                            </h2>
                            <div className="card-bottom">
                              <h3>
                                $ {value.price}{" "}
                                <s className="old-price">$ {value.price}</s>
                              </h3>
                              <Box sx={{ "& > legend": { mt: 2 } }}>
                                <Rating
                                  className="rating"
                                  name="read-only"
                                  value={value.rate}
                                  readOnly
                                />
                              </Box>
                            </div>
                          </Card.Footer>
                        </div>
                      </Card>
                    )
                  );
                })}
              </div>
            </div>
          )}

          {oneData.map((data) => (
            <div
              key={data.id}
              className={`prod-info col-md-12 row ${!isModal && "d-none"}`}
            >
              {console.log("oneData8", oneData)}

              <Close className="close-icon" onClick={() => backFilter()} />
              <div className="col-md-6 img  modal-fix">
                {/* {otherImages1
                  .slice(indexImg1, indexImg1 + 1)
                  .map((c, index) => (
                    <img key={index} src={c} />
                  ))} */}

                {/* <Corousel /> */}
                <SmallCor
                  img1={data.image1}
                  img2={data.image2}
                  img3={data.image3}
                />

                {/* modal  */}
              </div>
              <div className="col-md-5 text text-modal">
                <h1>
                  {/* Stul kakoyto */}
                  {english && data.name_en} {russian && data.name_ru}{" "}
                  {uzbek && data.name_uz}
                </h1>
                <p>
                  {/* Stul kakoyto */}
                  {english && data.description_en}{" "}
                  {russian && data.description_ru}{" "}
                  {uzbek && data.description_uz}
                </p>
                <p>Minimal iconic chair</p>

                <div className="card-info">
                  <p>Hi-Tech usulida ishlangan</p>
                  <p>boyi 1m 20sm</p>
                  <p>eni 70sm</p>
                </div>
                {/* <h3 className="name">
                  {english && data.name_en} {russian && data.name_ru}{" "}
                  {uzbek && data.name_uz}
                </h3>
                <p className="desc">
                  {english && data.description_en}{" "}
                  {russian && data.description_ru}{" "}
                  {uzbek && data.description_uz}
                </p>
                <h3 className="price">$ {data.price}</h3> */}
                <Card.Footer>
                  {/* <div className="images">
                    {otherImages1.map((c, index) => (
                      <div
                        key={index}
                        className="col-3"
                        onClick={() => changeImg(otherImages1, c)}
                      >
                        <img src={c} />
                      </div>
                    ))}
                  </div> */}
                  {/* <Card.Block className="card-block">
                    {addProducts.toString().includes(data.id) && (
                      <input
                        type="checkbox"
                        className="addedProduct1"
                        id={`${1 - data.id}a`}
                        onChange={() => deleteCard(data.id)}
                        checked
                      />
                    )}
                    {!addProducts.toString().includes(data.id) && (
                      <input
                        type="checkbox"
                        id={`${1 - data.id}a`}
                        onChange={() => getAdd(data.id)}
                        className={`addedProduct1`}
                      />
                    )}
                    <label
                      // onClick={() => addCountAdd(data.id)}
                      htmlFor={`${1 - data.id}a`}
                      className="add-btn ghl"
                    >
                      {t("cart")}
                    </label>
                    <label
                      onClick={() => deletCountAdd(data.id)}
                      htmlFor={`${1 - data.id}a`}
                      className="add-btn dfl"
                    >
                      {t("added")} <Check />{" "}
                    </label>
                    {likes.toString().includes(data.id) && (
                      <input
                        type="checkbox"
                        checked
                        onChange={() => unlikes(data.id)}
                        className={`checkbox1`}
                        id={data.id + 1}
                      />
                    )}
                    {!likes.toString().includes(data.id) && (
                      <input
                        type="checkbox"
                        onChange={() => getLikes(data.id)}
                        className={`checkbox1`}
                        id={data.id + 1}
                      />
                    )}
                    <label htmlFor={data.id + 1}>
                      <i
                        onClick={() => addCountLike(data.id)}
                        className={`fa fa-heart-o`}
                      ></i>
                      <i
                        onClick={() => deletCountLike(data.id)}
                        className={`fa fa-heart`}
                      ></i>
                    </label>
                  </Card.Block> */}
                </Card.Footer>
              </div>
            </div>
          ))}

          <div
            className={`contr-info ${!isModal && "d-none"}`}
            onClick={() => backFilter()}
          ></div>
        </div>
      </div>
      <div className={`succesfull ${showSuc && "show-success"}`}>
        <h1>
          {t("succes")} <Check />
        </h1>
      </div>
    </>
  );
};

export default Products;
