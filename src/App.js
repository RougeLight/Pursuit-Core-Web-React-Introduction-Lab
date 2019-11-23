import React from 'react';
import './App.css';
import './Components/Nav.css'
import Post from './Post'


function App() {
  return (
    <div className="App">
      <header className="Nav">
        <div id="buttons">
        <button id="que"> What is Pursuit?</button>
        <button id="reg"> Create and account</button>
        <button id="sig"> Sign In</button>
        </div>
      </header>
      <div>
        <Post />
      </div>
    </div>
    
  );
}

export default App;
