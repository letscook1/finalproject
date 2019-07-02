import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import Login from './Login';
import Home from './Home';


const Main = () => (
  <main>
      <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/About' component={About} />
      </Switch>
  </main>

)



export default Main;