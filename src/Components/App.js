import React from 'react';
import AllNews from './AllNews';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='App-title'>
          My Feed
          <AllNews />
        </h1>
      </header>
    </div>
  );
}

export default App;
