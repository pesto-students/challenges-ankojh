import React from 'react';
import logo from './logo.svg';
import './App.css';
import useHover from './hooks/useHover';

function App() {

  const [ref, isHovered] = useHover();
  return (
    <div className="App">
      <div ref={ref} style={{width:'100px', height: '100px', background:`${isHovered ? 'red' : 'blue'}`}}></div>
    </div>
  );
}

export default App;
