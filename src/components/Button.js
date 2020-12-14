import './Button.css';
import { Link } from 'react-router-dom';

import React from 'react';

const Button = (props) => {
  return (
    <Link to={props.to} className="button">
      {props.children}
    </Link>
  )
};

export default Button;