import React, {useState} from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { auth } from './firebase';

const Login = () => {

  const history = useHistory();

  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const login = (mail, password) => {
    auth.signInWithEmailAndPassword(mail, password)
    .then(() => history.push('/'))
    .catch(err => alert(err))
  }


  return (
    <div className="login">
      <h1 className="login__h1">Sign In</h1>
      <input type="mail" className="login__input" placeholder="Email" value={mail} onChange={e => setMail(e.target.value)}/>
      <input type="password" className="login__input" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
      <Button onClick={() => login(mail,password)}variant="contained" size="small">Submit</Button>
    </div>
  );
  
};

export default Login;