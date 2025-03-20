import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import "./Slide.css";

const model = [{}];
function Responsive() {
  const settings = {
    accessibility: false, // 접근성 관련 문제 방지
    focusOnSelect: true, // 클릭 시 해당 슬라이드에 포커스 적용
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5, // 하나씩 스크롤하도록 변경
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1, // 조정
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {[...Array(16)].map((_, index) => (
          <div key={index} className="slide-item">
            <h3>{index + 1}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Responsive;
