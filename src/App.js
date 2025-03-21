import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';

import Login from './components/Login/Login';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Porfolio/Portfolio';

function App() {
  const [isOpen, setIsOpen] = useState(true); // 控制側邊欄的開關狀態

  // 切換側邊欄顯示/隱藏
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // 當視窗尺寸改變時，根據臨界值自動調整側邊欄狀態
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 960) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);

    // 初始化
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        {/* 傳遞 isOpen 和 toggleSidebar 給 Sidebar */}
        <button className={`hamburger-menu ${isOpen ? 'open' : 'closed'}`} onClick={toggleSidebar}>        
          &#9776; {/* 三條線 */}
        </button>
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <div className={`content ${isOpen ? 'open' : 'closed'}`}>
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
