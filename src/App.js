import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목,글제목변경] = useState(['리액트 공부', '리액트 재밌어요']);

  let posts = '블로그 만들기 시작';

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3> { 글제목[0] } </h3>
        <p>23년 7월 25일</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
