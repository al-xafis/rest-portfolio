import React from 'react';

const Posts = () => {
  return (
    <div className="posts__container">
      <div className="posts">
        <div className="post">
          <p>user name</p>
          <h1>I am a post</h1>
          <p>I am a long paragraph post</p>
          <div className="post__button">
            <Button size="small" variant="contained" color="tertiary">edit</Button>
            <Button size="small" variant="contained" color="secondary">delete</Button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Posts;