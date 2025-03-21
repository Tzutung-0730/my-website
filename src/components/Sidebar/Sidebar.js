import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.scss';

function Sidebar({ isOpen, toggleSidebar }) {
  const [activeSubMenu, setActiveSubMenu] = useState(null); // 預設子選單為關閉狀態

  // 切換子選單顯示/隱藏
  const toggleSubMenu = (menu) => {
    setActiveSubMenu(activeSubMenu === menu ? null : menu); // 如果點擊同一個子選單，則收起它，否則顯示該子選單
  };

  return (
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-content">
          <ul>
            {/* 主選單項目 */}
            <li><NavLink to="/home" onClick={() => setActiveSubMenu(null)}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={() => setActiveSubMenu(null)}>About</NavLink></li>
            <li>
              <div onClick={() => toggleSubMenu('portfolio')}>
                <NavLink to="/portfolio">Portfolio</NavLink>
              </div>

              {/* 子選單 */}
              {activeSubMenu === 'portfolio' && (
                <ul className="submenu">
                  <li><NavLink to="/portfolio/project1">Project 1</NavLink></li>
                  <li><NavLink to="/portfolio/project2">Project 2</NavLink></li>
                  <li><NavLink to="/portfolio/project3">Project 3</NavLink></li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
  );
}

export default Sidebar;
