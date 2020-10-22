// presents categorical data with rectangular bars with heights or lengths proportional to the values that they represent.

import React from 'react';
import './App.css';
import Bar from './components/bar/Bar';
import Chart from './components/chart/Chart';
import Line from './components/line/Line';

function App() {

  //? How do you want data-model to be?
  const data = [
    { someKeyForLabel: 'A', someOtherKeyForValue: 120 },
    { someKeyForLabel: 'B', someOtherKeyForValue: 20 },
    { someKeyForLabel: 'C', someOtherKeyForValue: 120 },
    { someKeyForLabel: 'D', someOtherKeyForValue: 340 },
    { someKeyForLabel: 'E', someOtherKeyForValue: 120 },
    { someKeyForLabel: 'F', someOtherKeyForValue: 10 },
  ];

  return (
    
    <div className="App">
      {/* //? How do you want syntax to be?
          //! Inspired by Recharts
      */}
      <Chart name="name" xLabel="x" yLabel="y" data={data}>
        <Bar 
          fill="#ff0000"
          xKey="someKeyForLabel"
          yKey="someOtherKeyForValue"
           />
      </Chart>

      <Chart xLabel="x" yLabel="y" name="name" data={data}>
        <Line
          xKey="someKeyForLabel"
          yKey="someOtherKeyForValue"
           />
      </Chart>

      {/* <Chart xLabel="x" yLabel="y" name="name" data={data}>
        <Bar
          fill="#ff00ff"
          width="30px"
          xKey="someKeyForLabel"
          yKey="someOtherKeyForValue"
         />

        <Line fill="#ffffff"
          width="30px"
          xKey="someKeyForLabel"
          yKey="someOtherKeyForValue"
          />
      </Chart> */}
    </div>
  );
}

export default App;
