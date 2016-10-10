import React, {Component} from 'react';

const Help = ({size, onClick}) => {

  return (
    <div className="help" style={{width: size}}>
      <a href="#" className="circle-text" onClick={onClick}>
        <div style={{fontSize: "50%"}}>?</div>
      </a>
    </div>
  )
};

export default Help;