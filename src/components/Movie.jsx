import React from 'react';

const Movie = () => {
  return (
    <div className="project-make project-make3 project-make-top">
    <div className="container">
      <div className="project-num">
        <span className="numFont">03</span>
        <span className="en">PROJECT</span>
      </div>
    </div>
    <div className="top_bg">
      <div className="imgbg imgbg3"></div>
    </div>
    <div className="container">
      <div className="title">
        <p className="en">Movie Site</p>
        <p className="ko">영화 사이트</p>
      </div>
      <div className="top-area">
        <div className="text">
          <div className="project-info">
            <p>작업 기여도 : 100%</p>
            <p>작업 기간 : 1주일</p>
            <p className="program">사용한 프로그램 : Adobe Photoshop | Pigma | REACT | Axios | TMDB</p>
          </div>
          <div className="info-buttom">
            <p>TMDB API를 활용한 영화 웹사이트를 제작하고, 웹과 모바일 환<br/>
            경에 맞춰 반응형 디자인을 적용했습니다. 직관적인 UI와 검색<br/>
            필터를 통해 사용자 경험을 극대화했습니다.
            </p>
              <a href="https://movieapi-steel-eta.vercel.app/" target="_blank" className="site">
                <span className="ko">사이트 보러가기</span>
              </a>
          </div>
        </div>
        <div className="img-area img-area3">	
          <img src="/img/movie1.png" alt="freitag02"/>
        </div>
      </div>
    </div>
    <div className="img-section movie">
				<div className="imgcontainer container">
					<div className="bar"></div>
					<p className="en">DESIGN</p>
					<img className="web" src="/img/movie3.png" alt="movie"/>
				</div>
			</div>
    <div className="img-section movie">
				<div className="imgcontainer container">
					<div className="bar"></div>
					<p className="en">RESPONSIVE</p>
					<img className="web" src="/img/movie4.png" alt="movie"/>
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
								<li className="color6">#535353</li>
								<li className="color7">#FFD700</li>
								<li className="color8">#1B1B1B</li>
							</ul>
						</div>
					</div>
					<div className="concept-bottom">
						<div className="reson">
							<div className="yellow-title">
								<p className="en">DESIGN CONCEPT</p>
							</div>
							<div className="reson-text">
								<p className="ko">이번 프로젝트에서 저는 미디어 쿼리를 활용하여 반응형 사이트를 제작하는 데 주력했습니다. 다양한 화면 크기에서 최적화된 사용자 경험을 제공하기 위해, 각 디바이스의 화면 크기에 맞춰 사이트 레이아웃과 스타일을 세심하게 조정했습니다. 이를 통해 모바일, 태블릿, 데스크탑 등 다양한 환경에서도 사용자가 불편함 없이 사이트를 이용할 수 있도록 했습니다.</p>
							</div>
						</div>
            <div className="reson">
              <div className="yellow-title title2">
                <p className="en">FUNCTION</p>
              </div>
              <div className="reson-text">
                <p className="ko">
                TMDB의 영화 데이터를 Axios로 불러와 동적으로 렌더링하며, 영화와 배우 정보가 반응형으로 잘 표시되도록 구현했습니다. 이 과정에서 반응형 디자인의 중요성을 깨달았고, 코드의 효율성을 높이기 위한 지속적인 리팩토링을 통해 최적화된 결과물을 도출할 수 있었습니다.
                </p>
              </div>
            </div>
					</div>
				</div>
			</div>
  </div>
  );
};

export default Movie;