import { Button } from '@material-ui/core';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Posts from './Posts';
import Signup from './Signup';
import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Login from './Login';
import { auth } from './firebase';
import { login, logout } from './features/users/usersSlice';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        dispatch(login({
          email: user.email
        }));
      } else {
        dispatch(logout());
      }
    })
  }, [dispatch])

  return (
    <Router>
      <div className="app">
      <Switch>
        <Route exact path="/">
            <Navbar />
            <Posts />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
      </div>
    </Router>
    
  );
}

export default App;
