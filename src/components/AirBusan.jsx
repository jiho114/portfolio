import React from "react";

const AirBusan = () => {
  return (
    <div id="airbusan" className="project-make project-make1">
      <div className="container">
        <div className="project-num">
          <span className="numFont">01</span>
          <span className="en">PROJECT</span>
        </div>
      </div>
      <div className="top_bg">
        <div className="imgbg"></div>
      </div>
      <div className="container">
        <div className="title">
          <p className="en">Air Busan</p>
          <p className="ko">에어부산</p>
        </div>
        <div className="top-area">
          <div className="text">
            <div className="project-info">
              <p>작업 기여도 : 100%</p>
              <p>작업 기간 : 1달</p>
              <p className="program">
                사용한 프로그램 :<br />
                Adobe Photoshop | Pigma | HTML | CSS | JavaScript
              </p>
            </div>
            <div className="info-buttom">
              <p>
                에어부산은 저렴한 가격에 편안한 여행을 제공하며, <br />
                부산 김해공항을 허브로 국내외
                <br />
                다양한 여행지를 손쉽게 연결하는 항공사입니다. <br />
                사용자 친화적인 디자인과 JS 기능으로 리뉴얼 하였습니다.
              </p>
              <a
                href="https://airbusan.vercel.app/"
                target="_blank"
                className="site"
              >
                <span className="ko">사이트 보러가기</span>
              </a>
            </div>
          </div>
          <div className="img-area">
            <img src="/img/airbusan2.png" alt="urban01" />
          </div>
        </div>
        <div className="img-section">
          <div className="imgcontainer">
            <div className="bar"></div>
            <p className="en">RE DESIGN</p>
            <img src="/img/airbusan3.png" alt="urban02" />
          </div>
        </div>
      </div>
      <div className="concept">
        <div className="container">
          <p className="en concept-title">CONCEPT</p>
          <div className="bar"></div>
          <div className="concept-top">
            <div className="typo">
              <div className="yellow-title">
                <p className="en">TYPOGRAPY</p>
              </div>
              <div className="typo-text">
                <span className="font"> S Core Dream</span>
                <br />
                <span className="font">Nanum Gothic</span>
              </div>
            </div>
            <div className="color">
              <div className="yellow-title">
                <p className="en">COLOR</p>
              </div>
              <ul className="color-box">
                <li className="color1">#2A3692</li>
                <li className="color2">#161C4E</li>
                <li className="color3">#515151</li>
              </ul>
            </div>
          </div>
          <div className="concept-bottom">
            <div className="reson">
              <div className="yellow-title title1">
                <p className="en">DESIGN CONCEPT</p>
              </div>
              <div className="reson-text">
                <p className="ko">
                  에어부산 사이트의 서치바와 이벤트 노출이 아쉬워 이를
                  개선했습니다. 매끄러운 디자인의 서치바를 구현하고, 핵심적인
                  이벤트를 사용자에게 효과적으로 전달할 수 있도록 작업했습니다.
                  또한, 각진 디자인 대신 전체적으로 둥글게 처리하여 더욱
                  부드럽고 세련된 느낌을 강조했습니다.
                </p>
              </div>
              </div>
            <div className="reson">
              <div className="yellow-title title2">
                <p className="en">FUNCTION</p>
              </div>
              <div className="reson-text">
                <p className="ko">
                HEADER : 자동 슬라이드를 JavaScript 코드로 작성하여 사용자에게 핵심 알림을 5초 간격으로 보여주었습니다. <br />
                BANNER : 불렛 슬라이드를 JavaScript 코드로 작성하여 사용자에게 이벤트 노출을 강조하였습니다. <br />
                SEARCH BAR : 데이트피커를 활용하여 사용자가 설정한 날짜가 화면에 표시될 수 있도록 작업하였습니다. <br />
                MAIN : 슬라이드를 JavaScript 코드로 작성하여 1개씩 오른쪽으로 넘어가게 구현하였습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirBusan;
