import { useEffect, useState } from "react";
import gray from "./img/cuppang2.jpg";
import gray1 from "./img/cupang3.jpg";
import blue from "./img/cuppang1.jpg";
import blue1 from "./img/cuppang4.jpg";
const option1 = [gray, gray1];
const option2 = [blue, blue1];
const ColorImg = (props) => {
  const [preimg, setPreimg] = useState(""); // 이전 이미지 저장용
  const [text, setText] = useState("gray"); // 색깔 색상 텍스트
  const [pretext, setPretext] = useState(""); // 이전 색깔 텍스트 저장용
  const { show, setShow, bigimg, setBigimg } = props;

  useEffect(() => {
    setPreimg(bigimg);
    setPretext(text);
  }, []);
  return (
    <>
      <div>{text}</div>
      <div className="miniImg">
        <img
          style={{ width: 150, height: 150, cursor: "pointer" }}
          src={gray}
          alt={"image"}
          onMouseEnter={() => {
            setBigimg(gray);
            setText("gray");
          }}
          onMouseLeave={() => {
            setBigimg(preimg);
            setText(pretext); // 🔥 이전 이미지로 복원
          }}
          onClick={() => {
            setBigimg(gray);
            setPreimg(gray);
            setText("gray");
            setPretext("gray");
            setShow(option1);
          }}
        />
        <img
          style={{ width: 150, height: 150, cursor: "pointer" }}
          src={blue}
          alt={"image"}
          onMouseEnter={() => {
            setBigimg(blue);
            setText("blue");
          }}
          onMouseLeave={() => {
            setBigimg(preimg);
            setText(pretext);
            // 🔥 이전 이미지로 복원
          }}
          onClick={() => {
            setBigimg(blue);
            setPreimg(blue);
            setPretext("blue");
            setShow(option2);
          }}
        />
      </div>
    </>
  );
};
export default ColorImg;
