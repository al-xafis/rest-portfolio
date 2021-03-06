import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { db } from './firebase';
import { Button } from '@material-ui/core';
import LButton from './components/Button';

const Posts = () => {

  const [posts, setPosts] = useState('');
  const user = useSelector(state => state.user.user);
  

  useEffect(() => {
    const getPosts = db.collection("posts")
    .onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()))
    });

    return () => {
      getPosts();
    };
    
  }, []);

  const onDeleteHandler = (id) => {
    db.collection("posts").doc(id).delete();
  }

  let renderPosts = null;
  if (posts) {
     renderPosts = posts.map(post => {
      return (
        <div className="post" key={post.id}>
            <p className="post__username">{post.user.displayName}</p>
            <h1 className="post__header">{post.header}</h1>
            <p className="post__paragraph">{post.paragraph}</p>
            { user ? (post.user.uid === user.uid) ? 
              <div className="post__button">
                <LButton to={post.id} size="small" variant="contained">edit</LButton>
                <Button onClick={() => onDeleteHandler(post.id)} size="small" variant="contained" color="secondary">delete</Button>
              </div>
             : null : null}
          </div>
      )
    })
  }
  

  return (
    <div className="posts__container">
      <div className="posts">
        {renderPosts}
      </div>
    </div>
  )
};

export default Posts;