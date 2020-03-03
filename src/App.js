import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Navbar from './components/layout/Navbar';
import AboutPage from './components/pages/About';

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={AboutPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
