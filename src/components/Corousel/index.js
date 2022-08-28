import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import Macp1 from "../../assets/imgs/imgN.png" 
import "./index.css"
export default function Corousel({ img1, img2, img3 }) {
console.log(img3,'img3')
  return (
    <div className="responsev">
        <Carousel className="caruselfull">
           
            <div className="macimg">
              <img src={img1} alt="" />
            </div>
            <div className="macimg">
              <img src={img2} alt="" />
            </div>
            <div className="macimg">
              <img src={img3} alt="" />
            </div>
          </Carousel>
    </div>
  )
}





