import React from 'react'
import './App.css';
import Navbar from './components/Navbar/index.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages'
import About from './pages/about.js'
import Service from './pages/service.js'
import Contact from './pages/contact.js'
import SignUp from './pages/signup.js'
import SignIn from './pages/signin.js'

function App() {
  return (
  <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/service' component={Service}/>
        <Route path='/contact-us' component={Contact}/>
        <Route path='/sign-up' component={SignUp}/>
        <Route path='/sign-in' component={SignIn}/>
      </Switch>
  </Router>
  );
}

export default App;