import React from 'react';
import './App.css';
import Crypto from './Crypto'
import Heading from './components/Heading';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading />
      </header>
      <Crypto />
    </div>
  );
}

export default App;
