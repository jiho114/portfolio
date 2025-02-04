import React from 'react';
import { icondata } from '../data/imgdata'

const About = () => {
  return (
    <section id='about' className='about'>
      <div className="container">
				<h2 className="en title">ABOUT</h2>
				<div className="info-area">
					<div className="left">
						<div className="picture">
							<div className="img-box" style={{
								 background: 'url(/img/prof.png) no-repeat center center', 
								 backgroundSize: 'cover' 
							}}></div>
						</div>
						<div className="info-text">
							<div className="info name">
								<h2 className="en">name</h2>
								<span className="ko">이지호</span>
							</div>
							<div className="info contact">
								<h2 className="en">contact</h2>
								<div>
									<p className="ko">010  3683  9402</p>
									<p className="ko">wlghek0418@gmail.com</p>
								</div>
							</div>
							<div className="info license">
								<h2 className="en">main skills</h2>
								<div>
									<p className="ko">React</p>
									<p className="ko">JavaScript</p>
								</div>
							</div>
						</div>
					</div>
					<div className="right">
						<div className="introduce">
							<div className="introduce-text">
								<h3>흐르는 물과 같다.</h3>
								<p>나는 멈추지 않는다. 고여 짙어지는 어둠 속에서 썩어가는 웅덩이가 되지 않으리. 흐르지 않는 물은 언젠가 사라지고 흐르는 물만이 길을 내어 강이 되고, 바다가 되리라. 바위에 부딪혀도 갈라질 뿐, 길을 잃지 않는 것이 물이다. 좁은 골짜기를 지나며 때론 거친 여울에 휩쓸려도 결국 넓은 품으로 나아가는 것이 물이다. 나는 물과 같다. 주어진 틀에 갇히지 않고 모든 모양을 감싸 안으며 때로는 바람을 품고, 때로는 하늘을 품고 흘러가는 것이 나의 길이다. 멈춘 순간, 나의 시간도 썩으리라. 나는 오직 흘러갈 뿐. 강이 되어, 마침내 바다에 닿을 때까지.</p>
							</div>
						</div>
						<div className="skill">
							<div className="text">
								<div className="box1">
									<h2 className="en">skill</h2>
									<p>
									Adobe Photoshop | Pigma | HTML | CSS | JavaScript | jQuery | React | TypeScript | Node.js | Next.js | Scss | Bootstrap | SupaBase | Gsap |  GitHub
										</p>
								</div>
								<div className="box2">
									<div className="text-box">
										<svg id="speech-bubble" data-name="speech-bubble" className="speech-bubble" viewBox="0 0 286.5 69.34">
											<path className="cls-1" d="m258.84.5H27.66c-15,0-27.16,12.16-27.16,27.16h0c0,15,12.16,27.16,27.16,27.16h29.44s-7.32,13.32-7.32,13.32l25.8-13.32h183.26c15,0,27.16-12.16,27.16-27.16h0c0-15-12.16-27.16-27.16-27.16Z"/>
										</svg>
										<h4>이런거 할 수 있어요!</h4>
									</div>
								</div>
							</div>
							<div className="icons">
								{icondata.map((item,idx) => (
									<div className='icon' key={idx}>
										<img src={item.url} alt={item.art} />
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
    </section>
  );
};

export default About;