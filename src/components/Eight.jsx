import React from 'react';

const Eight = () => {
  return (
    <div className="project-make project-make2 project-make-top">
    <div className="container">
      <div className="project-num">
        <span className="numFont">02</span>
        <span className="en">PROJECT</span>
      </div>
    </div>
    <div className="top_bg">
      <div className="imgbg imgbg2"></div>
    </div>
    <div className="container">
      <div className="title">
        <p className="en">8 Seconds</p>
        <p className="ko">에잇세컨즈</p>
      </div>
      <div className="top-area">
        <div className="text">
          <div className="project-info">
            <p>작업 기여도 : 100%</p>
            <p>작업 기간 : 1달</p>
            <p className="program">사용한 프로그램 : Adobe Photoshop | Pigma | REACT | Node.js | SQLite</p>
          </div>
          <div className="info-buttom">
            <p>에잇세컨즈(8SECONDS) 는 트렌디한 디자인과 합리적인 가격<br/>
            으로 빠르게 변화하는 패션을 선도하는 SPA 브랜드입니다.<br/>
            웹 프론트는 REACT로, 로그인 회원가입 구현은 Node.js와 <br/>
            SQLite를 활용하여 작업하였습니다.
            </p>
              <a href="https://8secondes-react.vercel.app/" target="_blank" className="site">
                <span className="ko">사이트 보러가기</span>
              </a>
          </div>
        </div>
        <div className="img-area img-area2">	
          <img src="/img/8seconds1.png" alt="freitag02"/>
        </div>
      </div>
    </div>
    <div className="img-section">
				<div className="imgcontainer container">
					<div className="bar"></div>
					<p className="en">RE DESIGN</p>
					<img className="web" src="/img/8seconds3.png" alt="8secconds"/>
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
								<li className="color4">#F62F2F</li>
								<li className="color5">#B3B3B3</li>
								<li className="color9">#2B2B2B</li>
							</ul>
						</div>
					</div>
					<div className="concept-bottom">
						<div className="reson">
							<div className="yellow-title">
								<p className="en">DESIGN CONCEPT</p>
							</div>
							<div className="reson-text">
								<p className="ko">8seconds 프로젝트를 진행한 이유는 사용자들에게 잘 알려진 의류 사이트에서 정적인 느낌을 탈피하고, 다양한 이미지를 매치하여 잡지를 보는 듯한 동적인 경험을 제공하고 싶었기 때문입니다. 공지사항이나 기타 페이지는 사용자가 푸터까지 스크롤을 내려야만 접근할 수 있어 불편함이 있었는데, 이를 해결하기 위해 픽스 메뉴를 구현하여 사용자가 보다 편리하게 다른 페이지로 이동할 수 있도록 개선했습니다.</p>
							</div>
						</div>
            <div className="reson">
              <div className="yellow-title title2">
                <p className="en">FUNCTION</p>
              </div>
              <div className="reson-text">
                <p className="ko">
                8seconds 프로젝트는 리액트를 학습한 후 처음으로 작업한 웹사이트로, 리액트의 페이지 전환 속도와 컴포넌트 재활용을 활용하여 코드 효율성을 높였습니다. 또한, Node.js를 사용하여 로그인 및 회원가입 기능을 구현하고, 사용자 정보를 데이터베이스에 연동하는 작업을 성공적으로 완료했습니다. 스와이퍼를 사용하여 슬라이드를 구현하여 사용자 경험을 향상시켰습니다.
                </p>
              </div>
            </div>
					</div>
				</div>
			</div>
  </div>
  );
};

export default Eight;