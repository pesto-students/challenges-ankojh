import React, { Component } from 'react';
import './Chart.css'

class Chart extends Component { 
  //stateless?
  render() {
    const {data, children, xLabel, yLabel} = this.props;
    return (
      <div className="AppChart-container">
        <div className="chart-x-axis">
          <span>{xLabel}</span>
        </div>
        <div className="chart-y-axis">
          <span>{yLabel}</span>
        </div>
        <div className="AppChart">
          {data.map((datum, index)=>
              React.Children.map(children, child=>
                React.cloneElement(child,{datum, previousDatum: data[index-1]})) 
              )}
        </div>
      </div>
    );
  }
}

export default Chart;