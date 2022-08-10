import React from "react";
import "./scss/style.scss";
import Avatar from "./img/sadulla.png";
import { Link } from "react-router-dom";
export default function Modal({openModal}) {
    // console.log("Modal",openModal);
  return (
    <>
    {openModal && <div className="modal-big">
        <div className="modal-container">
          <div className="triangle"></div>
          <div className="modal-rel">
            <div className="modal-img-cont">
              <div className="img-cont">
                <img src={Avatar} alt="..." />
              </div>
              <div className="text-cont">
                <h1 className="full-name">Sadulla Kobiljonov</h1>
                <h3 className="number-tel">+998 99 011 89 34</h3>
              </div>
            </div>
            <div className="button-cont">
              <Link to="/profile"> <button>
                <i className="fa fa-cog" aria-hidden="true"></i> Profil
              </button></Link>  
                 
              <Link to="/orders">  <button>
                <i className="fa fa-history" aria-hidden="true"></i> History
                buys
              </button></Link>
              <Link to="/logout"> <button>
                <i className="fa fa-sign-out" aria-hidden="true"></i> Log out
              </button></Link>
            
             
            </div>
          </div>
        </div>
      </div>}
     
    </>
  );
}
