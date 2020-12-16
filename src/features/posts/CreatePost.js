import React, { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import './CreatePost.css';
import { Button } from '@material-ui/core';
import { db, auth } from '../../firebase';
import { useSelector } from 'react-redux';



const CreatePost = () => {

  const user = useSelector(state => state.user.user);

  const [header, setHeader] = useState('');
  const [paragraph, setParagraph] = useState('');

  const submit = () => {
    
    const newDoc = db.collection("posts").doc();
    newDoc.set({
      header: header,
      paragraph: paragraph,
      id: newDoc.id,
      user: user,
    })
  }

  return (
    <div className="createpost">
      <label htmlFor="header">Header</label>
      <input id="header" type="text" className="createpost__input" value={header} onChange={e => setHeader(e.target.value)}/>
      <label htmlFor="paragraph">Content</label>
      <input id="paragraph" type="text" className="createpost__input" value={paragraph} onChange={e => setParagraph(e.target.value)}/>
      <Button onClick={submit} size="small" variant="contained">Post</Button>
    </div>
  )
};

export default CreatePost;