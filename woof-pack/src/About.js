import React from 'react';
import ReactDOM from 'react-dom';
import dog from './img/dog_01.png';
import './App.css';


const logo ={
    backgroundImage: `url(${dog})`,
    height: '50vh',
    
};
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
  
 ReactDOM.render(<App />, document.getElementById('root'));