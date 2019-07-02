import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import About from './About';
import Login from './Login';
import Home from './Home';


const Main = () => (
  <BrowserRouter>
      <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/About' component={About} />
      </Switch>
  </BrowserRouter>

)



export default Main;