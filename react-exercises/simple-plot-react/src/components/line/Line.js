import React from 'react';
import './Line.css'

const WIDTH="100";
const HEIGHT="500"

const Line = (props) => {
  console.log(props);
  return (
    <div className="AppLine">
      <svg width={WIDTH} height={HEIGHT}>
        <line 
          x1='0' 
          x2={WIDTH} 
          y1={props.previousDatum ? HEIGHT - props.previousDatum[props.yKey] :HEIGHT - props.datum[props.yKey]} 
          y2={HEIGHT -props.datum[props.yKey]}
          strokeWidth="2"
          stroke="#000000"/>
      </svg>

      <span className="">{props.datum[props.xKey]}</span>
    </div>
  );
};

export default Line;