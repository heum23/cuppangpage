import { Button, Select, Input, Alert, Rate, Space } from "antd";
import { HeartOutlined, ShareAltOutlined } from "@ant-design/icons";
import "./RightText.css";
import Rocket from "./img/image1.png";
import Credit from "./img/image.png";
import Check from "./img/cuppang_check.png";
import Calender from "./img/cuppang_cal.png";
import Deliver from "./img/cuppang_del.png";
import { useState, useEffect } from "react";
const App = () => <Rate disabled defaultValue={4} />;

const RightText = () => {
  const [value, setValue] = useState(1);

  return (
    <>
      <div className="text_container">
        <div>
          <div>ANYOU</div>
          <div>ANYOU 남성 캐주얼 슈즈 사계절 초경량 남자운동화 스니커즈</div>
          <div>
            <App />
            <span style={{ color: "blue" }}> 1400개 상품평</span>
            <Space>
              <HeartOutlined />
              <ShareAltOutlined />
            </Space>
            <hr></hr>
            <div>
              40% <span>43,000원</span>
            </div>
            <div>
              <span>25,800원</span>
              <span>즉시할인가</span>
              <span>
                <img
                  style={{
                    width: 70,
                    aspectRatio: 5 / 2,
                  }}
                  src={Rocket}
                />
              </span>
            </div>
            <div>품절임박 (5개 남음)</div>
            <hr></hr>
            <div>
              <span>이 상품은</span>
              <span>
                내일 도착, 무료 배송
                <img src={Check} />
              </span>
            </div>
            <div>
              <span>
                <img src={Calender} />
                내일(목) 3/20 도착 보장
              </span>
            </div>
            <div>
              <span>( 50분 내 주문 시 / 서울⋅경기 기준 ) </span>
              <span>| </span>
              <span>
                <img src={Deliver} />
                무료배송
              </span>
            </div>
            <Button>다른 판매자 보기(2)</Button>
            {/* 갯수 버튼 */}
            <div className="btn_container">
              <div className="counter-container">
                <span className="counter-value">{value}</span>
                <span className="counter-buttons">
                  <div
                    className="counter-btn up"
                    onClick={() => setValue((prev) => prev + 1)}
                  >
                    ▲
                  </div>
                  <div
                    style={value === 1 ? { color: "gray" } : { color: "black" }}
                    className="counter-btn down"
                    onClick={() =>
                      setValue((prev) => (prev > 1 ? prev - 1 : 1))
                    }
                  >
                    ▼
                  </div>
                </span>
              </div>
              <span>
                <Button>장바구니 담기</Button>
                <Button>바로 구매</Button>
              </span>
            </div>
            <div>
              <span>PC에서도 간편한 결제</span>
              <span>
                <img style={{ width: 210 }} src={Credit} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightText;
