import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.scss';

function Sidebar({ isOpen }) {
  const [activeSubMenu, setActiveSubMenu] = useState(null); // 預設子選單為關閉狀態

  // 靜態的 sidebar 項目
  const sidebarItems = [
    { sidebarId: 1, title: '個人主頁', url: '/home', icon: 'pi-home' },
    { sidebarId: 2, title: '學習歷程', url: '/education', icon: 'pi-book' },
    { sidebarId: 3, title: '工作經歷', url: '/work', icon: 'pi-briefcase' },
    { sidebarId: 4, title: '我的作品', url: '/portfolio', icon: 'pi-pencil' },
    { sidebarId: 5, title: '系統設定', url: '/setting', icon: 'pi-cog' },
  ];

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-content">
        <ul>
          {sidebarItems.map((item) => (
            <li key={item.sidebarId}>
              <NavLink to={item.url} onClick={() => setActiveSubMenu(null)}>
                <i className={`pi ${item.icon}`}></i>
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
