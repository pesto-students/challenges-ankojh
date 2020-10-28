import React, { useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import useKeyPress from './hooks/useKeyPress';

function App() {
  // const ref = useRef();
  const keyPressState = useKeyPress('<enter>');
  console.log(keyPressState);

  return (
    <div className="App">
      {/* <input ref={ref}/> */}
    </div>
  );
}

export default App;
