import React from 'react';
import './App.css';
import Keypad from './components/Keypad';
import Lock from './components/Lock';

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <Lock />
        <Keypad />
      </header>
    </div>
  );
}

export default App;
