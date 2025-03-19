import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Login from './components/Login/Login';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Porfolio/Portfolio';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        
        <div className="content">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
