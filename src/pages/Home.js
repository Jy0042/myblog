import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const posts = [
    { id: 1, title: '첫 번째 포스트', content: '포스트 1의 내용입니다.' },
    { id: 2, title: '두 번째 포스트', content: '포스트 2의 내용입니다.'  }
  ];

  return (
    <div>
      <h1>블로그 홈페이지</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
