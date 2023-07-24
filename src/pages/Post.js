import React from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
  const { id } = useParams();

  const post = { id, title: `포스트 ${id} 제목`, content: `포스트 ${id} 내용입니다.` };

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;
