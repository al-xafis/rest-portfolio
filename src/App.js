import { Button } from '@material-ui/core';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Posts from './Posts';
import Signup from './Signup';
import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Login from './Login';
import { auth } from './firebase';
import { login, logout } from './features/users/usersSlice';
import CreatePost from './features/posts/CreatePost';
import Edit from './Edit';

function App() {

  const dispatch = useDispatch();

  const user = useSelector(state => state.user.user);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(login({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName
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
            {user ? <CreatePost /> : null}
            <Posts />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/:id" component={Edit} />
      </Switch>
      </div>
    </Router>
    
  );
}

export default App;
