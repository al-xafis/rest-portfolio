import './Button.css';

import React from 'react';

const Button = (props) => {
  return (
    <button onClick={props.onClick} className="button">
      {props.children}
    </button>
  )
};

export default Button;