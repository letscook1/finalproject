import React from 'react';
import ReactDOM from 'react-dom';
import logo from './woofPack__logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Sign in with <a href="http://www.facebook.com">Facebook.</a>
        </p>
        <button type="button" class="btn btn-secondary">Book a Service</button>
      
      </header>
    </div>
  );
}

export default App;