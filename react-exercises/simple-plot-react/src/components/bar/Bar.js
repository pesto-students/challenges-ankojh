import React from 'react';
import './Bar.css'

const Bar = (props) => {
  return (
    <div className="AppBar">
      <div className="AppBar-pillar" style={{ width: '50px', height: props.datum[props.yKey], backgroundColor: props.fill }}></div>
      <span> {props.datum[props.xKey]} </span>
    </div>
  );
};

export default Bar;