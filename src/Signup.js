import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from './firebase';

const Signup = () => {

  const history = useHistory();

  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');


  const signup = (email,password) => {
    if (password === password2) {
      auth.createUserWithEmailAndPassword(email, password)
      .then(() => history.push('/'))
      .catch(err => alert(err))
    } else {
      alert("passwords do not match");
    }
    
  }

  return (
    <div className="signup">
      <h1 className="signup__h1">Sign Up</h1>
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