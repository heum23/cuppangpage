import { useState } from "react";
import gray from "./img/cuppang2.jpg";
import gray1 from "./img/cupang3.jpg";
import blue from "./img/cuppang1.jpg";
import blue1 from "./img/cuppang4.jpg";
const Bigimg = (props) => {
  const { bigimg, SetBigimg } = props;
  return (
    <>
      <img
        style={{
          border: "1px solid black",
          width: "400px",
          height: "400px",
        }}
        src={bigimg}
      />
    </>
  );
};

export default Bigimg;
