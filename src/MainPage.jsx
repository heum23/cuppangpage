import "./App.css";
import { useState, useEffect } from "react";
import Bigimg from "./BigImg";
import ShowImg from "./ShowImg";
import SlideImg from "./Slide";
import gray from "./img/cuppang2.jpg";
import gray1 from "./img/cupang3.jpg";
import blue from "./img/cuppang1.jpg";
import blue1 from "./img/cuppang4.jpg";
import Left from "./Left";
import Right from "./Right";
const option1 = [gray, gray1];
const option2 = [blue, blue1];
const Main = () => {
  const [bigimg, setBigimg] = useState(gray);
  const [show, setShow] = useState(option1);
  return (
    <>
      <div className="container">
        <div className="leftContainer">
          <Left
            bigimg={bigimg}
            setBigimg={setBigimg}
            show={show}
            setShow={setShow}
          />
        </div>
        <div className="rightContainer">
          <Right
            bigimg={bigimg}
            setBigimg={setBigimg}
            show={show}
            setShow={setShow}
          />
        </div>
      </div>
      <SlideImg />
    </>
  );
};

export default Main;
