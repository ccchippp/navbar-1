import React from 'react'
import './App.css';
import Navbar from './components/Navbar/index.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages'
import About from './pages/about.js'

function App() {
  return (
  <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' component={About}/>
      </Switch>
  </Router>
  );
}

export default App;
