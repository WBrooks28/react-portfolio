import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
  return (
        <Router>
          <Header />
          <Routes>
            <Route exact path='/' component={About} />
            <Route exact path='/portfolio' component={Portfolio} />
            <Route exact path='/resume' component={Resume} />
            <Route exact path='/contact' component={Contact} />
          </Routes>
        </Router>
  );
}

export default App;
