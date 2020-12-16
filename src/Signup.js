import { Button } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { auth } from './firebase';

const Signup = () => {

  const history = useHistory();

  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [username, setUsername] = useState('');


  const signup = (email,password) => {
    if (password === password2) {
      auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user.updateProfile({
          displayName: username
        });
        history.push('/');
        window.location.reload();
      })
      .catch(err => alert(err))
    } else {
      alert("passwords do not match");
    }
  }

  return (
    <div className="signup">
      <h1 className="signup__h1">Sign Up</h1>
      <input type="text" className="signup__input" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="mail" className="signup__input" placeholder="Email" value={mail} onChange={e => setMail(e.target.value)} />
      <input type="password" className="signup__input" placeholder="Password" 
      value={password} 
      onChange={e => setPassword(e.target.value)}/>
      <input type="password" className="signup__input" placeholder="Password" 
      value={password2} 
      onChange={e => setPassword2(e.target.value)}/>
      <Button onClick={() => signup(mail,password)} variant="contained" size="small">Submit</Button>
    </div>
  )
}

export default Signup;