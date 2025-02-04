import React from 'react';
import About from './About';
import List from './List';
import Project from './Project';
const Main = () => {
  return (
    <main id='main'>
      <About/>
      <List/>
      <Project/>
      <footer>
        <h3>제 작품을 감상해 주셔서 진심으로 감사드립니다. 이지호였습니다.</h3>
      </footer>
    </main>
  );
};

export default Main;