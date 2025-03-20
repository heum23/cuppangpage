import { useState, useEffect } from "react";
import gray from "./img/cuppang2.jpg";
import gray1 from "./img/cupang3.jpg";
import blue from "./img/cuppang1.jpg";
import blue1 from "./img/cuppang4.jpg";
import "./showImg.css";
const option1 = [gray, gray1];
const option2 = [blue, blue1];
const ShowImg = (props) => {
  const { show, setShow, bigimg, setBigimg } = props;
  useEffect(() => {}, [show]);
  return (
    <>
      <div className="showImg">
        {show.map((x, i) => {
          return (
            <div key={i} className="miniImg">
              <img
                style={{ width: 150, height: 150, cursor: "pointer" }}
                src={x}
                alt={`image-${i}`}
                onMouseEnter={() => setBigimg(x)}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default ShowImg;
