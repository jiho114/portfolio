import React from "react";

const Header = () => {

  const handleScroll = (event) => {
    event.preventDefault(); // 기본 링크 동작 방지
    const targetId = event.currentTarget.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header id="header">
      <div className="cover-img-box">
       <img className="cover_gif cover1" src="/img/maincdcover.png" alt="cover_gif" />
       <img className="cover_gif cover2" src="/img/maincd.png" alt="cover_gif" />
      </div>
      <div className="cover-text-area">
        <div className="container">
          <div className="header-nav">
            <p className="en portfolio">portfolio</p>
          </div>
          <div className="header-main">
            <div className="header-main-left">
              <div className="top">
                <div className="top-top">
                  <h2 className="en top-text publisher">Front-End</h2>
                </div>
                <h2 className="en top-text web">Developer</h2>
              </div>
              <div className="bottom">
                <p className="introduce">
                  &nbsp;만나서 반갑습니다.
                  <br />
                  &nbsp;프론트엔드 개발자를 희망하는 이지호입니다.
                </p>
                <div className="text-box text-box1">
                  <svg
                    id="speech-bubble"
                    data-name="speech-bubble"
                    className="speech-bubble"
                    viewBox="0 0 286.5 69.34"
                  >
                    <path
                      className="cls-1"
                      d="m258.84.5H27.66c-15,0-27.16,12.16-27.16,27.16h0c0,15,12.16,27.16,27.16,27.16h29.44s-7.32,13.32-7.32,13.32l25.8-13.32h183.26c15,0,27.16-12.16,27.16-27.16h0c0-15-12.16-27.16-27.16-27.16Z"
                    />
                  </svg>
                  <h4>저에 관하여 궁금하시다면?</h4>
                </div>
                <div className="text-box text-box2">
                  <svg
                    id="speech-bubble"
                    data-name="speech-bubble"
                    className="speech-bubble"
                    viewBox="0 0 286.5 69.34"
                  >
                    <path
                      className="cls-1"
                      d="m258.84.5H27.66c-15,0-27.16,12.16-27.16,27.16h0c0,15,12.16,27.16,27.16,27.16h29.44s-7.32,13.32-7.32,13.32l25.8-13.32h183.26c15,0,27.16-12.16,27.16-27.16h0c0-15-12.16-27.16-27.16-27.16Z"
                    />
                  </svg>
                  <h4>저의 작품이 궁금하시다면?</h4>
                </div>
              </div>
            </div>
            <div className="header-main-right">
              <ul>
                <li>
                  <a href="#about" onClick={handleScroll} title="info">
                    <h3 className="en info">INFO</h3>
                    <span className="btn">
                      <img className="flower" src="/img/flowerBtn.png" alt="btn" />
                      <div className="arrow"style={{
                         backgroundImage: 'url(/img/btnArrow.png)',
                         backgroundRepeat: 'no-repeat',
                         backgroundPosition: 'center center',
                         backgroundSize: 'contain',
                      }}></div>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#list" onClick={handleScroll} title="project">
                    <h3 className="en project">project</h3>
                    <span className="btn">
                      <img className="flower" src="/img/flowerBtn.png" alt="btn" />
                      <div className="arrow"style={{
                         backgroundImage: 'url(/img/btnArrow.png)',
                         backgroundRepeat: 'no-repeat',
                         backgroundPosition: 'center center',
                         backgroundSize: 'contain',
                      }}></div>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
