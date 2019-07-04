import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import About from './About';
import Login from './Login';
import Home from './Home.js';
import Login2 from './Login2';
import PetInfo from './PetInfo';
const Main = () => (
  <BrowserRouter>
      <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/login2' component={Login2} />
          <Route exact path='/About' component={About} />
          <Route exact path='/PetInfo' component={PetInfo} />
      </Switch>
  </BrowserRouter>

)



export default Main;