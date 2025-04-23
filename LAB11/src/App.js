import React, { useState } from 'react';
import './App.css';

function App() {
  const [clickText, setClickText] = useState('');

  const handleClick = () => {
    setClickText(prev => prev + '被點了 ');
  };

  return (
    <div className="App" onClick={handleClick}>
      <h1 style={{ color: 'red', fontSize: '60px' }}>
        hello CGU!! {clickText}
      </h1>
    </div>
  );
}

export default App;