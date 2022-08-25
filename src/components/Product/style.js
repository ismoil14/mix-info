import styled from "styled-components";

import { ReactComponent as burger } from "../../assets/icons/burgerblack.svg";
import { ReactComponent as heart } from "../../assets/icons/heart.svg";
import { ReactComponent as arrowHr } from "../../assets/icons/arrowHr.svg";

export const Icon = styled.div``;

Icon.ArrowHr = styled(arrowHr)``;

export const Container = styled.div`  
  margin: 0;
  padding: 0;
  width: 100%;
`;
export const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
Wrap.Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 1.8229166666666667vw;
  line-height: 2.4739583333333335vw;
  letter-spacing:0.009114583333333334vw;
  color: #1b1d21;
`;
Wrap.Burger = styled(burger)``;

export const CategoryTitles = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

CategoryTitles.Card = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  :active {
    transform: scale(0.97);
  }
`;

export const ProductTitles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
ProductTitles.Card = styled.div`
  width: max-content;
  height:2.6041666666666665vw;
  background: #ffffff;
  border-radius: 1.3020833333333333vw;
  border: 1px solid #1de3cc;
  padding:0.5208333333333334vw  1.3020833333333333vw;
  margin:0.5208333333333334vw 0.5208333333333334vw ;
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  :active {
    background: linear-gradient(128.77deg, #1de3cc 14.64%, #18e789 85.07%);
    transform: scale(0.97);
  }
`;

export const CardCont = styled.div`
  align-items: center;  
`;

export const Card = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap; */
  /* width: 263px; */
  /* height: 298px; */
  box-sizing: border-box;
  /* border: 3px solid teal; */
`;

Card.Header = styled.div`
  width: 100%;    
  display: flex;
  flex-direction: column;
  align-items: center;  
`;

Card.Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top:0.9765625vw;
`;

Card.Off = styled.div`
  width: max-content;
  height: 1.8229166666666667vw;
  background: #de3618;
  border-radius:0.3255208333333333vw;
  font-style: normal;
  font-weight: 400;
  font-size:1.0416666666666667vw;
  line-height:1.171875vw;
  text-align: center;
  color: #ffffff;
  padding:0.3255208333333333vw;
`;

Card.Heart = styled(heart)``;

Card.Img = styled.img`
  // margin-top: 20%;
  // width: 100%
`;

Card.Footer = styled.div`

@media(max-width:410px){
    height: 23%;
  }
  display: flex;
  flex-direction: column;
  // align-items: flex-start;
  padding:0.6510416666666666vw 0.6510416666666666vw ;

  p {
    font-style: normal;
    font-weight: 800;
    font-size:1.171875vw;
    color: #959ead;
    padding:0;
    margin:0;
  }
  h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 1.3020833333333333vw;
    color: white;
    margin-top: 1.3020833333333333vw;
    font-family: 'Rubik';
font-style: normal;
font-weight: 400;
/* font-size: 20px; */
line-height: 120%;
/* or 24px */

letter-spacing: 0.005em;

color: #555555;
  }
  h3 {
    font-style: normal;
    font-weight: 300;
    font-size: 1.3020833333333333vw;
    color: white;
  }
  span {
    font-style: normal;
    font-weight: 300;
    font-size:0.9114583333333334vw;
    color: white;
  }
`;

export const Button = styled.button`
  // background: #1ae287;
  font-style: normal;
  font-weight: 700;
  font-size:1.171875vw;
  text-align: center;
  color: #ffffff;
  border: none;
  cursor: pointer;
  user-select: none; 
`;

export const Show = styled.button`
  // width: 444px;
  margin: 0 auto;
  height:3.6458333333333335vw;
  background: #ffffff;
  border-radius: 1.8229166666666667vw;
  color: #1b1d21;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border:0.13020833333333334vw solid #18e789;
  cursor: pointer;
  user-select: none;
  transition: 0.3s;
  :active {
    background: linear-gradient(128.77deg, #1de3cc 14.64%, #18e789 85.07%);
    transform: scale(0.97);
    color: #faffff;
    border: 1px solid linear-gradient(128.77deg, #1de3cc 14.64%, #18e789 85.07%);
  }
`;
Show.Title = styled.h2`
  padding-right:0.6510416666666666vw ;
  font-style: normal;
  font-weight: 400;
  font-size: 1.8229166666666667vw;
  line-height:1.4973958333333333vw;
`;
