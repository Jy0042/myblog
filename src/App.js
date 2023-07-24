import React, { useState } from 'react';
import './App.css';

function App() {
  
  let [글제목,글제목변경] = useState(['리액트 공부', '재밌어요', '블로그 빨리 만들어야하는데..']);
  let [like, likeIncrease] = useState(0);
  let posts = '블로그 만들기 시작';

  // function changeTitle() {
  //   var newArray = [...글제목];
  //   newArray[0] = 'React Study';
  //   글제목변경(newArray);
  // }

  // function arrange() {
  //   var newArray = [...글제목];
  //   newArray.sort();
  //   글제목변경(newArray);
  // }
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      {/* <button onClick={ changeTitle }>버튼</button>
      <button onClick={ arrange }>버튼</button> */}
      <div className="list">
        <h3> { 글제목[0] } <span onClick={ () => { likeIncrease(like + 1) } }>❤️</span> { like } </h3>
        <p>23년 7월 25일</p>
        <hr />
      </div>
      <div className="list">
        <h3> { 글제목[1] } </h3>
        <p>23년 7월 26일</p>
        <hr />
      </div>
      <div className="list">
        <h3> { 글제목[2] } </h3>
        <p>23년 7월 27일</p>
        <hr />
      </div>
      
      <Modal></Modal>

    </div>
  );
}

function Modal () {
  return (
    <div className='modal'>
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>        
    </div>
  )
}

export default App;
