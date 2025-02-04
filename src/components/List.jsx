import React from 'react';

const List = () => {
  const listData = [
    {num: 1, title: "에어부산", description: "웹 디자인 | 메인페이지 | 로그인 + 로그아웃 페이지"},
    {num: 2, title: "에잇세컨즈", description: "웹 디자인 | 메인페이지 | 로그인 + 로그아웃 | 마이페이지 | 공지사항 페이지 | 구글 지도 API | NODE.JS"},
    {num: 3, title: "영화 사이트", description: "웹 디자인 | 메인페이지 | 상세페이지 | 검색 기능 + 검색 상세 페이지 | TMDB API "},
    {num: 4, title: "레시피 사이트", description: "웹 디자인 | 메인페이지 | 공공 데이터 API"},
  ]

  const handleScroll = (event) => {
    event.preventDefault(); // 기본 링크 동작 방지
    const targetId = event.currentTarget.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id='list' className='project-list'>
      <div className="container">
				<h2 className="en title">project</h2>
				<ul className="list">
          {listData.map((item, idx) => (
            <li className='item' key={idx}>
              <a onClick={handleScroll} href={ item.title === "에어부산" ? "#airbusan" : item.title === "에잇세컨즈" ? "#eight" : item.title === "영화 사이트" ? "#movie" : item.title === "레시피 사이트" ? "#cook" : "#" } title="에어부산" className='airbusan'>
                <span className='numFont'>{item.num}</span>
                <h3 className='project-title'>{item.title}</h3>
                <span className='project-info'>{item.description}</span>
                <span className="btn">
								<img className="flower" src="/img/flowerBtn.png" alt="btn"/>
								<div className="arrow"></div>
							</span>
              </a>
            </li>
          ))}
				</ul>
			</div>
    </section>
  );
};

export default List;