import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { Electronics, ProdName,
  //  CardData
   } from "./utils/electronics";

// components
import ToTop from "./components/ToTop";
import Profile from "./components/Profile/Profile";
import Orders from "./components/Orders";
// import About from "./components/About/About";
import Products from "./components/Product";
import Categories from "./components/Category";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/Scrolls/ScrollToTop";
import RouterHeader from "./components/RouterHeader/RouterHeader";
import Login from "./components/Login/Login";
import LogOut from "./components/LogOut";
import Payment from "./components/payment/Payment.js";
import Support from "./components/support/Support.js";
import BlogI from "./components/Blog/OneBlog";
import ProductsAll from "./components/Product/AllCard";
import About from "./components/fotoGaleriya/FotoGaliriya";

// Images

import Img1 from "./components/Blog/images/b1.png";
import Img2 from "./components/Blog/images/b2.png";
import Img3 from "./components/Blog/images/b3.png";
import Blog from "./components/Blog/Blog";

const App = () => {
  //Categories  API
  const [CardData, setProductInfo] = useState([]);
  useEffect(() => {
    axios
      .get("https://api-mixinfo.abba.uz/products/")
      .then(({data}) => {
        // console.log(data, "ProductInfoCardData");
        setProductInfo(data);
      })
      .catch((err) => {
        
        console.log(err, "err");
      });
  }, []);

  
  const [dataCategories, setDataCategories] = useState([]);
  const urlCategories = `http://93.189.40.27:3700/categories/`;

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(urlCategories);
      setDataCategories(request.data);
      return request;
    }
    fetchData();
  }, [urlCategories]);

  //SubCategories  API

  const [dataSubCategories, setDataSubCategories] = useState([]);
  const urlSubCategories = `http://93.189.40.27:3700/subcategories/`;

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(urlSubCategories);
      setDataSubCategories(request.data);
      return request;
    }
    fetchData();
  }, [urlSubCategories]);

  //Products  API

  const [dataProducts, setDataProducts] = useState([]);
  const urlProducts = `https://api-mixinfo.abba.uz/products/`;

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(urlProducts);
      setDataProducts(request.data);
      return request;
    }
    fetchData();
  }, [urlProducts]);

  //Likes  API

  // const [dataLikes, setDataLikes] = useState([]);
  const urlLikes = `http://93.189.40.27:3700/addlike/`;

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(urlLikes);
      // setDataLikes(request.data);
      return request;
    }
    fetchData();
  }, [urlLikes]);

  // blogs API

  const [dataBlogs, setDataBlogs] = useState([]);
  useEffect(() => {
    
    axios
      .get("https://api-mixinfo.abba.uz/blogs/")
      .then(({data}) => {
        // console.log(data, "BlogInfo");
        setDataBlogs(data);
      })
      .catch((err) => {
        
        console.log(err, "err");
      });
  }, []);

  // const dataBlogs = [
  //   {
  //     id: 1,
  //     image: Img1,
  //     date: "10.09.2022",
  //     name_uz: "The 9 best homes in New York",
  //     name_en: "The 9 best homes in New York",
  //     name_ru: "The 9 best homes in New York",
  //     description_uz:
  //       "Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec.",
  //     description_en:
  //       "Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec.",
  //     description_ru:
  //       "Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec.",
  //   },
  //   {
  //     id: 2,
  //     image: Img2,
  //     date: "10.09.2022",
  //     name_uz: "The 9 best homes in New York",
  //     name_en: "The 9 best homes in New York",
  //     name_ru: "The 9 best homes in New York",
  //     description_uz:
  //       "Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec.",
  //     description_en:
  //       "Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec.",
  //     description_ru:
  //       "Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec.",
  //   },
  //   {
  //     id: 3,
  //     image: Img3,
  //     date: "10.09.2022",
  //     name_uz: "The 9 best homes in New York",
  //     name_en: "The 9 best homes in New York",
  //     name_ru: "The 9 best homes in New York",
  //     description_uz:
  //       "Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec.",
  //     description_en:
  //       "Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec.",
  //     description_ru:
  //       "Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec.",
  //   },
  //   {
  //     id: 4,
  //     image: Img2,
  //     date: "10.09.2022",
  //     name_uz: "The 9 best homes in New York",
  //     name_en: "The 9 best homes in New York",
  //     name_ru: "The 9 best homes in New York",
  //     description_uz:
  //       "Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec.",
  //     description_en:
  //       "Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec.",
  //     description_ru:
  //       "Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec.",
  //   },
  //   {
  //     id: 5,
  //     image: Img3,
  //     date: "10.09.2022",
  //     name_uz: "The 9 best homes in New York",
  //     name_en: "The 9 best homes in New York",
  //     name_ru: "The 9 best homes in New York",
  //     description_uz:
  //       "Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec.",
  //     description_en:
  //       "Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec.",
  //     description_ru:
  //       "Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec.",
  //   },
  //   {
  //     id: 6,
  //     image: Img1,
  //     date: "10.09.2022",
  //     name_uz: "The 9 best homes in New York",
  //     name_en: "The 9 best homes in New York",
  //     name_ru: "The 9 best homes in New York",
  //     description_uz:
  //       "Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec.",
  //     description_en:
  //       "Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec.",
  //     description_ru:
  //       "Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec.",
  //   },
  //   {
  //     id: 7,
  //     image: Img1,
  //     date: "10.09.2022",
  //     name_uz: "The 9 best homes in New York",
  //     name_en: "The 9 best homes in New York",
  //     name_ru: "The 9 best homes in New York",
  //     description_uz:
  //       "Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec.",
  //     description_en:
  //       "Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec.",
  //     description_ru:
  //       "Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec.",
  //   },
  //   {
  //     id: 8,
  //     image: Img1,
  //     date: "10.09.2022",
  //     name_uz: "The 9 best homes in New York",
  //     name_en: "The 9 best homes in New York",
  //     name_ru: "The 9 best homes in New York",
  //     description_uz:
  //       "Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec.",
  //     description_en:
  //       "Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec.",
  //     description_ru:
  //       "Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec.",
  //   },
  // ];

  // i18nexus

  const { i18n } = useTranslation();

  // Language components

  const [english, setEnglish] = useState(
    localStorage.getItem("i18nextLng")
      ? localStorage.getItem("i18nextLng") === "en"
        ? true
        : false
      : false
  );
  const [russian, setRussian] = useState(
    localStorage.getItem("i18nextLng")
      ? localStorage.getItem("i18nextLng") === "ru"
        ? true
        : false
      : false
  );
  const [uzbek, setUzbek] = useState(
    localStorage.getItem("i18nextLng")
      ? localStorage.getItem("i18nextLng") === "uz"
        ? true
        : false
      : false
  );
  const [langTitle, setLangTitle] = useState(
    localStorage.getItem("i18nextLng")
      ? localStorage.getItem("i18nextLng").toUpperCase()
      : ""
  );

  function change1(item) {
    i18n.changeLanguage("ru");
    setLangTitle(localStorage.getItem("i18nextLng").toUpperCase());
    setRussian(item);
    setEnglish(!item);
    setUzbek(!item);
  }
  function change2(item) {
    i18n.changeLanguage("en");
    setLangTitle(localStorage.getItem("i18nextLng").toUpperCase());
    setEnglish(item);
    setRussian(!item);
    setUzbek(!item);
  }
  function change3(item) {
    i18n.changeLanguage("uz");
    setLangTitle(localStorage.getItem("i18nextLng").toUpperCase());
    setUzbek(item);
    setEnglish(!item);
    setRussian(!item);
  }

  window.addEventListener("load", () => {
    setRussian(true);
    setEnglish(false);
    localStorage.setItem("i18nextLng", "en");
    setLangTitle(localStorage.getItem("i18nextLng").toUpperCase());
  });

  // Modal methods

  const [modalOk, setModalOk] = useState(true);

  function changeModal() {
    setModalOk(false);
  }

  // scrolls

  const scrollToLocation = () => {
    const { hash } = window.location;
    if (hash !== "") {
      let retries = 0;
      const id = hash.replace("#", "");
      const scroll = () => {
        retries += 0;
        if (retries > 50) return;
        const element = document.getElementById(id);
        if (element) {
          setTimeout(() => element.scrollIntoView(), 0);
        } else {
          setTimeout(scroll, 100);
        }
      };
      scroll();
    }
  };

  scrollToLocation();

  // search filter

  const [inputValue, setInputValue] = useState("");

  function filterData(e) {
    setInputValue(e.target.value);
  }

  const search = (data) => {
    return data.filter((post) =>
      post.name_en.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  // change categories

  const [subTips, setSubTips] = useState(
    localStorage.getItem("category") ? localStorage.getItem("category") : 1
  );
  const [allResult, setAllResult] = useState(false);

  function changeCategories(item) {
    // categoriyalardan birortasini tanlaganda subCategoriyalar o'zgarishi
    setSubTips(item);
    localStorage.setItem("category", item);
    setAllResult(false);
  }

  function seeAll() {
    // barcha mahsulotlarni ko'rsatish funksiyasi
    setAllResult(true);
    setSubTips(0);
    localStorage.setItem("category", 0);
  }

  // counter for like and added cart

  const [countLike, setCountLike] = useState(
    localStorage.getItem("lk")
      ? localStorage
          .getItem("lk")
          .split(",")
          .filter((c) => c !== "" && c).length
      : 0
  );

  function addCountLike() {
    setCountLike(countLike + 1);
  }
  function deletCountLike() {
    setCountLike(countLike - 1);
  }

  const [countAdd, setCountAdd] = useState(
    localStorage.getItem("added")
      ? localStorage
          .getItem("added")
          .split(",")
          .filter((c) => c !== "" && c).length
      : 0
  );

  function addCountAdd() {
    setCountAdd(countAdd + 1);
  }
  function deletCountAdd() {
    if (countAdd > 0) {
      setCountAdd(countAdd - 1);
    }
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar
        seeAll={seeAll}
        changeCategories={changeCategories}
        countLike={countLike}
        countAdd={countAdd}
        dataCategories={search(Electronics)}
        dataSubCategories={search(ProdName)}
        dataProducts={search(CardData)}
        allCategories={Electronics}
        langTitle={langTitle}
        english={english}
        russian={russian}
        uzbek={uzbek}
        change1={change1}
        change2={change2}
        change3={change3}
        filterData={filterData}
        inputValue={inputValue}
      />
      <Switch>
        <Route exact path="/">
          <RouterHeader
            dataBlogs={dataBlogs}
            allResult={allResult}
            addCountLike={addCountLike}
            addCountAdd={addCountAdd}
            deletCountLike={deletCountLike}
            deletCountAdd={deletCountAdd}
            changeCategories={changeCategories}
            subTips={subTips}
            dataCategories={dataCategories}
            dataProducts={dataProducts}
            english={english}
            russian={russian}
            uzbek={uzbek}
            white={false}
          />
        </Route>
        <Route exact path="/profile">
          <Profile english={english}
            russian={russian}
            uzbek={uzbek}/>
        </Route>
        <Route exact path="/logout">
          <LogOut />
        </Route>
        <Route exact path="/payment">
          <Payment />
        </Route>
        <Route exact path="/support">
          <Support />
        </Route>
        <Route exact path="/orders">
          <Orders />
        </Route>
        {/* <Route exact path="/about">
          <About da />
        </Route> */}
        <Route path={`/login`}>
          <Login english={english} russian={russian} uzbek={uzbek} />
        </Route>
        {/* <Route path={`/aboutus`}>
          <About
            gallery={true}
            english={english}
            russian={russian}
            uzbek={uzbek}
          />
        </Route> */}
        <Route path={`/aboutus`}>
          <About
           
          />
        </Route>
        <Route path="/saved">
          <Products
            allResult={allResult}
            addCountLike={addCountLike}
            addCountAdd={addCountAdd}
            deletCountLike={deletCountLike}
            deletCountAdd={deletCountAdd}
            changeTips={changeCategories}
            subTips={subTips}
            english={english}
            russian={russian}
            uzbek={uzbek}
            changeModal={changeModal}
            urlLikes={urlLikes}
            CardData={dataProducts}
            Electronics={dataCategories}
            ProdName={dataSubCategories}
            all={false}
            saved={true}
            top={false}
            card={false}
            oneProd={false}
          />
        </Route>
        <Route path={`/cart`}>
          <Products
            allResult={allResult}
            addCountLike={addCountLike}
            addCountAdd={addCountAdd}
            deletCountLike={deletCountLike}
            deletCountAdd={deletCountAdd}
            changeTips={changeCategories}
            subTips={subTips}
            english={english}
            russian={russian}
            uzbek={uzbek}
            changeModal={changeModal}
            urlLikes={urlLikes}
            CardData={dataProducts}
            Electronics={dataCategories}
            ProdName={dataSubCategories}
            all={false}
            saved={false}
            top={false}
            card={true}
            oneProd={false}
          />
        </Route>
        <Route path="/aaa">
          <Products
            allResult={allResult}
            addCountLike={addCountLike}
            addCountAdd={addCountAdd}
            deletCountLike={deletCountLike}
            deletCountAdd={deletCountAdd}
            changeTips={changeCategories}
            subTips={subTips}
            english={english}
            russian={russian}
            uzbek={uzbek}
            changeModal={changeModal}
            urlLikes={urlLikes}
            CardData={dataProducts}
            Electronics={dataCategories}
            ProdName={dataSubCategories}
            all={true}
            saved={false}
            top={false}
            card={false}
            oneProd={false}
          />
        </Route>
        <Route path="/products">
          <ProductsAll
           seeAll={seeAll}
          dataBlogs={dataBlogs}
            allResult={allResult}
            addCountLike={addCountLike}
            addCountAdd={addCountAdd}
            deletCountLike={deletCountLike}
            deletCountAdd={deletCountAdd}
            changeTips={changeCategories}
            subTips={subTips}
            english={english}
            russian={russian}
            uzbek={uzbek}
            changeModal={changeModal}
            urlLikes={urlLikes}
            CardData={dataProducts}
            Electronics={dataCategories}
            ProdName={dataSubCategories}
            all={true}
            saved={false}
            top={false}
            card={false}
            oneProd={false}
          />
        </Route>
        <Route path="/categories">
          <Categories
            english={english}
            russian={russian}
            uzbek={uzbek}
            main={false}
            all={true}
            Category={dataCategories}
          />
        </Route>
        {CardData.map((data) => {
          {console.log(data.image3,';;;;')}
          return (
            <Route key={data.id} path={`/product/${data.id}`}>

              {english && (
                <Products
                  allResult={allResult}
                  english={english}
                  russian={russian}
                  uzbek={uzbek}
                  addCountLike={addCountLike}
                  addCountAdd={addCountAdd}
                  deletCountLike={deletCountLike}
                  deletCountAdd={deletCountAdd}
                  changeModal={changeModal}
                  urlLikes={urlLikes}
                  id={data.id}
                  category={data.category}
                  name={data.name_en}
                  image={data.image}
                  image1={data.image1}
                  image2={data.image2}
                  image3={data.image3}
                  video={data.video}
                  description_en={data.description_en}
                  code={data.product_code}
                  price={data.price}
                  CardData={dataProducts}
                  Electronics={dataCategories}
                  ProdName={dataSubCategories}
                  all={false}
                  saved={false}
                  top={false}
                  card={false}
                  oneProd={true}
                />
              )}
              {russian && (
                <Products
                  allResult={allResult}
                  english={english}
                  russian={russian}
                  uzbek={uzbek}
                  addCountLike={addCountLike}
                  addCountAdd={addCountAdd}
                  deletCountLike={deletCountLike}
                  deletCountAdd={deletCountAdd}
                  changeModal={changeModal}
                  urlLikes={urlLikes}
                  id={data.id}
                  category={data.category}
                  name={data.name_ru}
                  image={data.image}
                  image1={data.image1}
                  image2={data.image2}
                  video={data.video}
                  description_ru={data.description_ru}
                  code={data.product_code}
                  price={data.price}
                  CardData={dataProducts}
                  Electronics={dataCategories}
                  ProdName={dataSubCategories}
                  all={false}
                  saved={false}
                  top={false}
                  card={false}
                  oneProd={true}
                />
              )}
              {uzbek && (
                <Products
                  allResult={allResult}
                  english={english}
                  russian={russian}
                  uzbek={uzbek}
                  addCountLike={addCountLike}
                  addCountAdd={addCountAdd}
                  deletCountLike={deletCountLike}
                  deletCountAdd={deletCountAdd}
                  changeModal={changeModal}
                  urlLikes={urlLikes}
                  id={data.id}
                  category={data.category}
                  name={data.name_uz}
                  image={data.image}
                  image1={data.image1}
                  image2={data.image2}
                  video={data.video}
                  description_uz={data.description_uz}
                  code={data.product_code}
                  price={data.price}
                  CardData={dataProducts}
                  Electronics={dataCategories}
                  ProdName={dataSubCategories}
                  all={false}
                  saved={false}
                  top={false}
                  card={false}
                  oneProd={true}
                />
              )}
            </Route>
          );
        })}
        {dataBlogs.map((data) => (
          <Route key={data.id} path={`/blog/${data.id}`}>
            {english && (
              <Blog
                dataBlogs={dataBlogs}
                english={english}
                russian={russian}
                uzbek={uzbek}
                id={data.id}
                name={data.name_en}
                photo={data.photo}
                desc={data.text_en}
                main={false}
                one={true}
              />
            )}
            {russian && (
              <Blog
                dataBlogs={dataBlogs}
                english={english}
                russian={russian}
                uzbek={uzbek}
                id={data.id}
                name={data.name_ru}
                photo={data.photo}
                desc={data.text_ru}
                main={false}
                one={true}
              />
            )}
            {uzbek && (
              <Blog
                dataBlogs={dataBlogs}
                english={english}
                russian={russian}
                uzbek={uzbek}
                id={data.id}
                name={data.name_uz}
                photo={data.photo}
                desc={data.text_uz}
                main={false}
                one={true}
              />
            )}
          </Route>
        ))}{" "}
        {dataBlogs.map((data,index) => (
          <Route key={data.id} path={`/blog`}>
            {english && (
              <BlogI
                dataBlogs={dataBlogs}
                english={english}
                russian={russian}
                uzbek={uzbek}
                id={data.id}
                name={data.name_en}
                photo={data.photo}
                desc={data.text_en}
                main={false}
                one={true}
              />
            )}
            {russian && (
            <BlogI
                dataBlogs={dataBlogs}
                english={english}
                russian={russian}
                uzbek={uzbek}
                id={data.id}
                name={data.name_ru}
                photo={data.photo}
                desc={data.text_ru}
                main={false}
                one={true}
              />
            )}
            {uzbek && (
              
           <BlogI
                dataBlogs={dataBlogs}
                english={english}
                russian={russian}
                uzbek={uzbek}
                id={data.id}
                name={data.name_uz}
                photo={data.photo}

                desc={data.text_uz}
                main={false}
                one={true}
              />
            )}
          </Route>
        ))}
      </Switch>
      {/* <Products english={english} russian={russian} uzbek={uzbek} changeModal={changeModal} urlLikes={urlLikes} CardData={dataProducts} Electronics={dataCategories} ProdName={dataSubCategories} all={false} saved={false} top={false} card={false} oneProd={false} />                   */}
      <ToTop />
      <Footer english={english} russian={russian} uzbek={uzbek} />

      <div
        className={`contrast ${modalOk && "d-none"}`}
        onClick={() => setModalOk(true)}
      ></div>
      <div
        className={`col-md-6 offset-md-3 buy-ok row ${
          !modalOk && "show-modal"
        }`}
      >
        <i className="fa fa-times" onClick={() => setModalOk(true)}></i>
        {english && <h1>THANK YOU FOR YOUR APPEAL &#128522;</h1>}
        {russian && <h1>СПАСИБО 3A ОБРАЩЕНИЕ &#128522;</h1>}
        {uzbek && <h1>MUROJAATINGIZ UCHUN TASHAKKUR &#128522;</h1>}
        <div className="col-md-4 offset-md-2">
          {english && (
            <button className="btn btn-group" onClick={() => setModalOk(true)}>
              OK
            </button>
          )}
          {russian && (
            <button className="btn btn-group" onClick={() => setModalOk(true)}>
              OK
            </button>
          )}
          {uzbek && (
            <button className="btn btn-group" onClick={() => setModalOk(true)}>
              OK
            </button>
          )}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
