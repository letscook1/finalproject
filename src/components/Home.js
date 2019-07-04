import React, {Component} from 'react';
import logo from '../images/bg.png';
import wpLogo from '../images/wpLogo.png';
import nav from '../images/nav.png';
import '../App.css';

class Home extends Component {

    render() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
              <div className="App-logo">
                <img src={wpLogo} className="App-logoImg" alt="logo"/>            
              </div>
              <div className="App-Nav">
                <nav>
                  <a href="/#/">About Us</a> |
                  <a href="/#/">Reviews</a> |
                  <a href="/#/">Services</a> |
                  <a href="/#/">Sign Up</a>
                </nav>
                
              </div>
            <div className="App-HomeText">
              <p>We care for your furry little loved ones while you're away</p>
            </div>
            
             <a href="/About">
            <button type="button" className="btn btn-light">Book a Service</button>
            </a>
          
          </header>
        </div>
      );
    }
  }




export default Home;



