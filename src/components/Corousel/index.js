import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import Macp1 from "../../assets/imgs/imgN.png" 
import "./index.css"
export default function Corousel() {

  return (
    <div className="responsev">
        <Carousel className="caruselfull">
           
            <div className="macimg">
              <img src={Macp1} alt="" />
            </div>
            <div className="macimg">
              <img src={Macp1} alt="" />
            </div>
            <div className="macimg">
              <img src={Macp1} alt="" />
            </div>
          </Carousel>
    </div>
  )
}





