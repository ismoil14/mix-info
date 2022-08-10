import React from 'react'
import './fotoGaliriya.css'
import galeriya1 from './image/galeriya1.png'
import galeriya2 from './image/galeriya2.png'
import galeriya3 from './image/galeriya3.png'
import rightIcon from './image/rightIcon.svg'
import { Link } from 'react-router-dom'

function FotoGaliriya() {
  return (
    <div className="foto__galiriya__box">
      <div className="foto__galiriya__text">
        <p>
          For 15 years, IMT LOGISTICS has been one of the leaders in the
          delivery of various cargoes from the countries of Southeast Asia,
          Europe, the CIS, as well as exports from Uzbekistan to the states of
          the Near and Far Abroad by all means of transport.
        </p>
        <p>
          20 years of successful work in the market of Uzbekistan. International
          transportation by any means of transport: road, rail, air, sea.
          Individual approach to each client in solving any problems. Provision
          of additional services for cargo transportation: registration of
          shipping documentation. consolidation and storage of goods at transit
          terminals.
        </p>
        <p>
          20 years of successful work in the market of Uzbekistan. International
          transportation by any means of transport: road, rail, air, sea.
          Individual approach to each client in solving any problems. Provision
          of additional services for cargo transportation: registration of
          shipping documentation. consolidation and storage of goods at transit
          terminals.
        </p>
        <p>
          For 15 years, IMT LOGISTICS has been one of the leaders in the
          delivery of various cargoes from the countries of Southeast Asia,
          Europe, the CIS, as well as exports from Uzbekistan to the states of
          the Near and Far Abroad by all means of transport.
        </p>
      </div>
      <h2 className="foto__galireya__title">PHOTOGALLERRY</h2>
      <div className="foto__galireya__image">
        <div className="foto__galireya__left">
          <img src={galeriya1} alt="galeriya" className="galeriya1" />
          <img src={galeriya3} alt="galeriya" className="galeriya2" />
          <img
            src={galeriya2}
            alt="galeriya"
            className="galeriya3 galeriya_bottom"
          />
        </div>
        <div className="foto__galireya__right">
          <img src={galeriya2} alt="galeriya" className="galeriya3 " />
          <img
            src={galeriya1}
            alt="galeriya"
            className="galeriya1 galeriya_bottom"
          />
          <img src={galeriya3} alt="galeriya" className="galeriya2" />
        </div>
      </div>
      <div className="galeriya__btn">
        <Link to='/'> <div className="btn">
          <p>Back to main page</p>
          <img src={rightIcon} alt="rightIcon" />
        </div></Link>
       
      </div>
    </div>
  )
}

export default FotoGaliriya
