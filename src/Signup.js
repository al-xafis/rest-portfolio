import { Button } from '@material-ui/core';
import React from 'react';

const Signup = () => {
  return (
    <div className="signup">
      <h1>Sign Up</h1>
      <input type="text"/>
      <input type="password"/>
      <input type="password"/>
      <Button>Submit</Button>
    </div>
  )
  
}

export default Signup;