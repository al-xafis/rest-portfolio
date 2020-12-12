import { Button } from '@material-ui/core';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Posts from './Posts';
import Signup from './Signup';
import React from 'react';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
      <Navbar />
      <Posts />
      <Switch>
        <Route exact path="/signup" component={<Signup />} />
      </Switch>
      </div>
    </Router>
    
  );
}

export default App;
