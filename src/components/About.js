import React, {Component} from 'react';
import logo from '../images/dog_01.png';
import logo2 from '../images/Path 358.png';
import logo3 from '../images/Title Bullet Points Icon.png';
import '../About.css';

class About extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header about">
           <section className="Service">
          <div className="logo3">
          <img src={logo3} className="" alt="logo" />
          <img src={logo2} className="App-logo2" alt="logo" />
          </div>
          <div className="logo"><img src={logo} alt="logo" /></div>
          <a href="/Login">
          <button type="button" className="btn btn-secondary">Next</button>
          </a>
       
        </section>
      </header>
    </div>
    );
  }
}

export default About;
