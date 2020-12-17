import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { db } from './firebase';
import { Button } from '@material-ui/core';

const Edit = ({ match }) => {

  const id = match.params.id;

  const history = useHistory();

  const [post, setPost] = useState(null);
  const [header, setHeader] = useState('');
  const [paragraph, setParagraph] = useState('');

  useEffect(() => {
    db.collection("posts").doc(id).get()
    .then((result) => setPost(result.data()));
  }, [])


  const submit = (header, paragraph) => {
    db.collection("posts").doc(post.id).set({
      header: header,
      paragraph: paragraph
    }, {merge: true}).then(() => history.push('/'));
  }
  

  

  if (post) {
    return (
      <div className="edit__post">
      <label htmlFor="header">Header</label>
      <input id="header" type="text" className="createpost__input" value={header} onChange={e => setHeader(e.target.value)}/>
      <label htmlFor="paragraph">Content</label>
      <input id="paragraph" type="text" className="createpost__input" value={paragraph} onChange={e => setParagraph(e.target.value)}/>
      <Button onClick={() => submit(header, paragraph)} size="small" variant="contained">Edit</Button>
      <div className="edit">
        <h1 className="edit__h1">{post.header}</h1>
        <p className="edit__paragraph">{post.paragraph}</p>
      </div>
    </div>
      
    )
  } else {
    return (
      <div className="loading">Loading...</div>
    )
  }
  
};

export default Edit;