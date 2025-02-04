import React from 'react';

const Cook = () => {
  return (
    <div id="cook" className="project-make project-make2 project-make-top" style={{marginBottom:"50px"}}>
    <div className="container">
      <div className="project-num">
        <span className="numFont">04</span>
        <span className="en">PROJECT</span>
      </div>
    </div>
    <div className="top_bg">
      <div className="imgbg imgbg4"></div>
    </div>
    <div className="container">
      <div className="title">
        <p className="en">Cook Site</p>
        <p className="ko">레시피 사이트</p>
      </div>
      <div className="top-area">
        <div className="text">
          <div className="project-info">
            <p>작업 기여도 : 100%</p>
            <p>작업 기간 : 1주일</p>
            <p className="program">사용한 프로그램 : Adobe Photoshop | Pigma | REACT | Axios | 공공 데이터 포털</p>
          </div>
          <div className="info-buttom">
            <p>음식 레시피를 한눈에 보기 쉽고 사용자에게 편리하게 제공할 수<br/>
            있는 요리책 사이트를 만들었습니다. 웹과 반응형 사이트를 고려하<br/>
            여 제작하였습니다.
            </p>
              <a href="https://cooksite.vercel.app/" target="_blank" className="site">
                <span className="ko">사이트 보러가기</span>
              </a>
          </div>
        </div>
        <div className="img-area img-area4">	
          <img src="/img/cook1.png" alt="freitag02"/>
        </div>
      </div>
    </div>
    <div className="img-section">
				<div className="imgcontainer container">
					<div className="bar"></div>
					<p className="en">DESIGN</p>
					<img className="web" src="/img/cook3.png" alt="8secconds"/>
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
								<span className="font">Pretendard</span>
							</div>
						</div>
						<div className="color">
							<div className="yellow-title">
								<p className="en">COLOR</p>
							</div>
							<ul className="color-box">
								<li className="color10">#6C584C</li>
								<li className="color11">#D6CCC2</li>
								<li className="color12">#535353</li>
							</ul>
						</div>
					</div>
					<div className="concept-bottom">
						<div className="reson">
							<div className="yellow-title">
								<p className="en">DESIGN CONCEPT</p>
							</div>
							<div className="reson-text">
								<p className="ko">사용자가 레시피를 쉽게 찾을 수 있도록 추천 레시피를 강조하여 구성하였으며, 차분하고 세련된 분위기를 위해 브라운 계열의 색상을 활용했습니다. 또한, 레시피 카드를 전반적으로 둥글게 디자인하여 친근하고 따뜻한 느낌을 더했습니다.</p>
							</div>
						</div>
            <div className="reson">
              <div className="yellow-title title2">
                <p className="en">FUNCTION</p>
              </div>
              <div className="reson-text">
                <p className="ko">
                음식 레시피를 한눈에 보기 쉽고 사용자에게 편리하게 제공할 수 있는 요리책 사이트를 만들었습니다. 이 사이트는 웹 환경과 반응형 디자인을 고려하여, 어떤 기기에서든지 레시피를 쉽게 찾아볼 수 있도록 구성되었습니다. 공공 데이터 포털에서 제공하는 음식 레시피 API를 활용하여 다양한 요리 정보를 실시간으로 불러와 사용자에게 제공합니다.
                </p>
              </div>
            </div>
					</div>
				</div>
			</div>
  </div>
  );
};

export default Cook;