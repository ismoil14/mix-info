import React, {
  // useEffect, useRef,
  useState,
} from "react";
import "./Scss/Navbar.scss";
import { Link, useLocation } from "react-router-dom";
// import Img1 from './images/logo.png'
// import { useTranslation } from 'react-i18next';
import {
  Close,
  KeyboardArrowDown,
  LocalMallOutlined,
} from "@material-ui/icons";
import Modal from "../Modal";
import logo from "./images/logoMix.png";
import menu from "../Footer/images/menu.png";
import home from "./images/home.png";
const Navbar = ({
  seeAll,
  changeCategories,
  countLike,
  countAdd,
  english,
  uzbek,
  russian,
  change1,
  change2,
  change3,
  langTitle,
  dataProducts,
  inputValue,
  filterData,
  allCategories,
  dataCategories,
  dataSubCategories,
}) => {
  // scroll effect
  const { pathname } = useLocation();
  const [innnerWidthI, setInnerWidthI] = useState(false);

  function openMobile() {
    if (window.innerWidth < 850) {
      setInnerWidthI(true);
      console.log("Mobile alreadyOpen ");
    }
  }
  // console.log("dataProducts", dataProducts);
  window.addEventListener("scroll", function () {
    let navScroll = document.getElementById("nav");
    let All = document.getElementById("category-tools");
    // navScroll.classList.toggle("fixed", window.scrollY > 100);
    if (window.scrollY < 300) {
      // All.style.background='red';
      // console.log("All.style.background = " )
      setOpen(true);
      // console.log("All.style.background = ",All )
    } else {
      setOpen(false);
    }
  });

  // responsive navbar-nav show modal

  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  // language functions

  const [language, setLanguage] = useState(false);

  function changeHandle1() {
    change1(true);
    setLanguage(!language);
  }
  function changeHandle2() {
    change2(true);
    setLanguage(!language);
  }
  function changeHandle3() {
    change3(true);
    setLanguage(!language);
  }

  // category bar

  const [catBar, setCatBar] = useState(false);
  const [catBar1, setCatBar1] = useState(false);
  const [searchBar, setSearchBar] = useState(false);

  function openCategory(item) {
    setCatBar(!catBar);
    setSearchBar(!item);
    setCatBar1(!item);
  }

  function openCategory1(item) {
    setCatBar1(!catBar1);
    setSearchBar(!item);
    setCatBar(!item);
  }

  // search input methods

  // const [dataProd, setDataProd] = useState(dataProducts)

  function clickedSearch(item, post) {
    setSearchBar(item);
    setCatBar(post);
    setCatBar1(post);
    // setLanguage(false)
  }

  function typeInput(e) {
    filterData(e);
    clickedSearch(true, false);
  }

  function localId(item, post) {
    localStorage.setItem("category", item);
    localStorage.setItem("subcategory", post);
    clickedSearch(false);
  }

  // like

  // const [numberLikes, setNumberLikes] = useState(localStorage.getItem("like") ? localStorage.getItem("like").split(',') : 0)

  // add

  // const [addedProds, setAddedProds] = useState(localStorage.getItem("added") ? localStorage.getItem("added").split(',') : 0)

  // const { t } = useTranslation()

  return (
    <>
      <div className={`Navbar`}>
        <nav className="navbar navbar-expand justify-content-between align-items-center">
          <div className="navbar-info">
            <h1>Welcome to our online shop</h1>
            <li className="nav-item" onClick={() => clickedSearch(false)}>
              <div className="d-flex align-items-center justify-content-between">
                <div className="language d-flex align-items-center justify-content-between">
                  <div
                    className={`change-language`}
                    onClick={() => clickedSearch(false)}
                  >
                    <input
                      type="checkbox"
                      id="language"
                      checked={language}
                      onChange={() => setLanguage(!language)}
                    />
                    <label htmlFor="language">
                      {
                        langTitle === "EN"
                          ? `English (USD)`
                          : langTitle === "RU"
                          ? `Russian(${langTitle})`
                          : "Uzbek (UZ)"
                        //  || langTitle === "RU"
                        // ? `Russian(${langTitle})`
                        // : "RU"
                      }

                      <KeyboardArrowDown className="icon" />
                    </label>
                    <ul className={`language-menu ${!language && "d-none"}`}>
                      <li onClick={() => changeHandle1()} className="nav-link">
                        English (USD)
                      </li>
                      <li onClick={() => changeHandle2()} className="nav-link">
                        Russian (Ru)
                      </li>
                      <li onClick={() => changeHandle3()} className="nav-link">
                        Uzbek (Uz)
                      </li>
                    </ul>
                  </div>
                </div>
                |
                <Link to="/login" className="nav-link login">
                  Login or Sign up
                </Link>
              </div>
            </li>
          </div>
          {pathname !== "/profile" &&
          pathname !== "/orders" &&
          pathname !== "/logout" ? (
            <>
              {" "}
              <div className="navbar-top">
                <ul className={`navbar-nav`}>
                  <li
                    className="nav-item img"
                    onClick={() => clickedSearch(false)}
                  >
                    <Link to="/" className="nav-link">
                      <img src={logo} alt="..." />
                      {/* <h1 className="text-dark">MIXINFO</h1> */}
                    </Link>
                  </li>
                  <li className="nav-item header-menu">
                    <div className="search-bar">
                      <input
                        type="search"
                        className={`${searchBar && "active"}`}
                        value={inputValue}
                        onChange={(e) => typeInput(e)}
                        placeholder="Search..."
                      />
                      <div
                        className="category-menu1"
                        onClick={() => openCategory1(true)}
                      >
                        <span>Categories</span>{" "}
                        <i className={`fa fa-angle-down d-block mx-2`}></i>
                        <div
                          className={`category-tools ${!catBar1 && "d-none"}`}
                        >
                          {allCategories.map((data,index) => (
                            <Link
                              to="/products"
                              key={index}
                              className="result nav-link px-0"
                              onClick={() => localId(data.id)}
                            >
                              <p>
                                {english && data.name_en}{" "}
                                {uzbek && data.name_uz}{" "}
                                {russian && data.name_ru}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                      {/* <select className="category" name="navbar" id="">
                                      <option value="category">category</option>
                                    </select> */}

                      <i className="fa fa-search"></i>
                      <div
                        className={`search-filter ${
                          inputValue === "" && "d-none"
                        }`}
                      >
                        {dataProducts.map((data,index) => (
                          <Link
                            to={`/product/${data.id}`}
                            key={index}
                            className="result nav-link px-0"
                            onClick={() => clickedSearch(false)}
                          >
                            {english && data.name_en} {russian && data.name_ru}{" "}
                            {uzbek && data.name_uz}
                            <i
                              className="fa fa-long-arrow-right"
                              aria-hidden="true"
                            ></i>
                          </Link>
                        ))}
                        {dataCategories.map((data,index) => (
                          <Link
                            to="/products"
                            key={index}
                            className="result nav-link px-0"
                            onClick={() => localId(data.id)}
                          >
                            {english && data.name_en} {russian && data.name_ru}{" "}
                            {uzbek && data.name_uz}
                            <i
                              className="fa fa-long-arrow-right"
                              aria-hidden="true"
                            ></i>
                          </Link>
                        ))}
                        {dataSubCategories.map((data,index) => (
                          <Link
                            to="/products"
                            key={index}
                            className="result nav-link px-0"
                            onClick={() => localId(data.category, data.id)}
                          >
                            {english && data.name_en} {russian && data.name_ru}{" "}
                            {uzbek && data.name_uz}
                            <i
                              className="fa fa-long-arrow-right"
                              aria-hidden="true"
                            ></i>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </li>
                  {/* <li className="nav-item" onClick={() => clickedSearch(false)}>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="language d-flex align-items-center justify-content-between">
                    <div
                      className={`change-language`}
                      onClick={() => clickedSearch(false)}
                    >
                      <input
                        type="checkbox"
                        id="language"
                        checked={language}
                        onChange={() => setLanguage(!language)}
                      />
                      <label htmlFor="language">
                        {langTitle} <KeyboardArrowDown className="icon" />
                      </label>
                      <ul className={`language-menu ${!language && "d-none"}`}>
                        <li
                          onClick={() => changeHandle1()}
                          className="nav-link"
                        >
                          RU
                        </li>
                        <li
                          onClick={() => changeHandle2()}
                          className="nav-link"
                        >
                          ENG
                        </li>
                        <li
                          onClick={() => changeHandle3()}
                          className="nav-link"
                        >
                          UZ
                        </li>
                      </ul>
                    </div>
                  </div>
                  |
                  <Link to="/login" className="nav-link login">
                    Login or Sign up
                  </Link>
                </div>
              </li> */}
                  <ul
                    // className="navbar-nav icons"
                    className={`navbar-nav icons ${open === false && "stickyT"}
              `}
                  >
                    <li className="nav-item">
                      <Link to="/saved" className="nav-link">
                        <i className="fa fa-heart-o">
                          <span>{countLike}</span>
                        </i>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/cart" className="nav-link mall">
                        <LocalMallOutlined className="local" />
                        <span>{countAdd}</span>
                      </Link>
                    </li>
                    <li
                      className="nav-item"
                      // onMouseDown={()=>setOpenModal(!openModal)}
                      onClick={() => setOpenModal(!openModal)}
                    >
                      <Link to="/" className="nav-link">
                        <i className="fa fa-user-o"></i>
                      </Link>
                      <Modal openModal={openModal} />
                    </li>
                  </ul>
                </ul>
              </div>
              <div onLoad={openMobile}></div>
              {/* {innnerWidthI === true ? <div >
salom
</div>:''} */}
              <div
                className={`bottom-navbar ${open === false && "fixed"}
                `}
                id={`nav`}
              >
                <div
                  className="category-menu"
                  onClick={() => openCategory(true)}
                >
                  {/* {console.log(catBar, "catBar")} */}
                  {/* <i
                className={`fa fa-bars d-block mx-2 ${catBar && "d-none"}`}
              ></i>{" "} */}
                  <img src={menu} alt="" />

                  {/* <Close className={`times d-block mx-2 ${!catBar && "d-none"}`} />{" "} */}
                  <span>ALL COLLECTIONS</span>
                  <div
                    className={`category-tools ${
                      ((window.innerWidth >870)&(open === true) & (pathname === "/") && "d-block") ||
                      (!catBar && "d-none")
                    }
                `}
                  >
                    <Link
                      to="/products"
                      className="result nav-link px-0 border-0"
                      onClick={() => seeAll()}
                    >
                      <p>All</p>
                    </Link>
                    <a
                      href="/#hotsale"
                      className="result nav-link px-0"
                      onClick={() => changeCategories(1)}
                    >
                      <p>Hot Sale</p>
                    </a>
                    {allCategories.map((data,index) => (
                      <Link
                        to="/products"
                        key={index}
                        className="result nav-link px-0"
                        onClick={() => changeCategories(data.id)}
                      >
                        <p>
                          {english && data.name_en} {uzbek && data.name_uz}{" "}
                          {russian && data.name_ru}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
                <ul
                  className={`navbar-nav main-menu ${show && "show"}`}
                  onClick={() => clickedSearch(false)}
                >
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      HOME
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/products" className="nav-link">
                      SHOP
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/blog" className="nav-link">
                      BLOG
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/aboutus" className="nav-link">
                      ABOUT
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/profile" className="nav-link">
                      CONTACT US
                    </Link>
                  </li>
                  <Close
                    className="fa fa-times"
                    onClick={() => setShow(false)}
                  />
                </ul>

                <ul className="mobile_bottom">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                    <img src={home} alt="" />
                      HOME
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/saved" className="nav-link">
                      <i className="fa fa-heart-o">
                        <span>{countLike}</span>
                      </i>
                      LIKE
                    </Link>
                  </li>



                  <li className="nav-item">
                    <Link to="/" className="nav-link toMobile">
                    <img src={logo} alt="" />
                   
                    </Link>
                  </li>


                  <li className="nav-item">
                    <Link to="/cart" className="nav-link mall">
                      <LocalMallOutlined className="local" />
                      <span>{countAdd}</span>
                      BASKET
                    </Link>
                  </li>
                  <li
                    className="nav-item"
                    // onMouseDown={()=>setOpenModal(!openModal)}
                    onClick={() => setOpenModal(!openModal)}
                  >
                    <Link to="/" className="nav-link">
                      <i className="fa fa-user-o"></i>
                      HOME
                    </Link>
                    <Modal openModal={openModal} />
                   
                    
                  </li>
                </ul>
              </div>
            </>
          ) : (
            ""
          )}
        </nav>
      </div>
      <div
        className={`contr-lang ${!language && "d-none"}`}
        onClick={() => setLanguage(false)}
      ></div>
      <div
        className={`contr-nav ${!show && "d-none"}`}
        onClick={() => setShow(false)}
      ></div>
      <div
        className={`contr-search ${!searchBar && "d-none"}`}
        onClick={() => clickedSearch(false, false)}
      ></div>
      <div
        className={`contr-category ${!catBar && "d-none"}`}
        onClick={() => openCategory(true)}
      ></div>
      <div
        className={`contr-category1 ${!catBar1 && "d-none"}`}
        onClick={() => openCategory1(true)}
      ></div>
    </>
  );
};

export default Navbar;











