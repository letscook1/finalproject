import React, {Component} from 'react';
import logo from '../images/woofPack__logo.png';
import '../App.css';

class Home extends Component {

    render() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            Sign in with <a href="http://www.facebook.com">Facebook.</a>
            </p>
            <button type="button" className="btn btn-secondary">Book a Service</button>
            <a href="/About">test</a>
          
          </header>
        </div>
      );
    }
  }




export default Home;



