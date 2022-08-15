import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

import {
  Card,

} from "./style";
import "./Scss/Prod.scss";
import Shop from "./images/bag.png";
import { t } from "i18next";
import { Electronics, ProdName, CardData } from "../../utils/electronics";
import {
  Cached,
  Check,
  Close,
  LocalShippingOutlined,
  VerifiedUserOutlined,
  Visibility,
} from "@material-ui/icons";
import { Rating } from "@mui/material";
import { Box } from "@material-ui/core";
import FAQ from '../FAQ/FAQ';
import MonandItIs from '../MonandItIs/MonandItIs';
import Blog from '../Blog/Blog';




export default function AllCard({
  allResult,
  addCountAdd,
  addCountLike,
  deletCountLike,
  dataBlogs ,
  subTips,
  english,
  russian,
  uzbek,
  changeModal,
  all,
  image,
  image1,
  image2,
}) {
    
  const [allCat, setAllCat] = useState(false);

  let radio = document.querySelectorAll(".radio");

  for (let i = 0; i < radio.length; i++) {
    radio[0].setAttribute("checked", "true");
  }
  const {open}=useSelector(({sideBar})=>sideBar)
  console.log("open",open)

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
    const url = `https://api.madeinuzb.com/addlike/${item}`;
    setLike(!like);
    axios.get(url);
    setAddProducts([...addProducts, item]);
    localStorage.setItem("added", [addProducts, item]);
    setshowSuc(true);
    setTimeout(() => {
      setshowSuc(false);
    }, 1500);
    addCountAdd();
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

  function filterData(item) {
    const newOneData = oneData.filter((data) => data.id == item);
    setOneData(newOneData);
    setIsModal(true);
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

  return (
    <div 
    
    className={`AllProd ${open && "prod-pedding"}`}
    // style={open === true ? {paddingLeft:"400px"}:{}}  className="AllProd"
    >
      {all && (
        <div className="products allCard row">
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
                    <a className="nav-link navigator">
                      <img src={value.image} alt="errCard" className="img" />
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
                          <Cached className="cache" />
                        </div>
                        <div
                          className="icon"
                          onClick={() => filterData(value.id)}
                        >
                          <Visibility className="eye" />
                        </div>
                      </div>
                    </a>
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
                          $ {value.aksiya}{" "}
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

<FAQ english={english} russian={russian} uzbek={uzbek} />
<MonandItIs english={english} russian={russian} uzbek={uzbek} />
<Blog dataBlogs={dataBlogs} main={true} one={false} english={english} russian={russian} uzbek={uzbek} />
    </div>
  );
}
