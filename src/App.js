import React  from 'react';
import ProtectedRoute from './ProtectedRoute'
import {BrowserRouter as Router , Switch ,Route } from 'react-router-dom'


import NavBar from './components/NavBar'
import LandingPage from './components/LandingPage'
import Profile from './components/Profile'
import SingIn from './components/SingIn'
import SingUp from './components/SingUp'

const App = () => (
  <div>
  <Router>
    <NavBar/>
    <Switch>
      <Route exact path = '/singin' component = {SingIn}/>
      <Route exact path = '/singup' component = {SingUp}/>
      <ProtectedRoute exact path = '/' component = {LandingPage}/>
      <ProtectedRoute exact path = '/profile' component = {Profile}/>
    </Switch>
  </Router>
</div>
)


export default App;
