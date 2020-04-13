import React, { useState } from 'react';
import './App.css';
import { Clock } from './Clock';

function App() {
  const [ isClockHidden, setIsClockHidden ] = useState(false)
  
  if (isClockHidden) {
    return <h1>Clock is hidden</h1>
  }

  return (
    <div>
      <button onClick={() => setIsClockHidden(true)}>Hide Clock</button>
      <Clock />
    </div>
  );
  
}

export default App;
