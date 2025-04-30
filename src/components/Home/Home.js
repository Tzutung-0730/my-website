import React, { useState } from 'react';
import './Home.scss';

function Home() {
const [currentPage, setCurrentPage] = useState(0);

// 假設你的作品或經歷資料，圖片放在 public/assets 目錄下
const works = [
    { 
    title: 'Project 1', 
    description: 'A detailed description of Project 1.', 
    image: '/assets/project1.jpg' 
    },
    { 
    title: 'Project 2', 
    description: 'A detailed description of Project 2.', 
    image: '/assets/project2.jpg' 
    },
    { 
    title: 'Project 3', 
    description: 'A detailed description of Project 3.', 
    image: '/assets/project3.jpg' 
    }
];

const handleNext = () => {
    if (currentPage < works.length - 1) {
    setCurrentPage(currentPage + 1);
    }
};

const handlePrev = () => {
    if (currentPage > 0) {
    setCurrentPage(currentPage - 1);
    }
};

return (
    <div className="home-page">
        {/* 個人介紹區塊 */}
        <div className="intro-block">
            <div className="profile-photo">
            <img src="/assets/my-photo.jpg" alt="Profile" />
            </div>
            <div className="intro-text">
            <h1>曾紫彤 Miya</h1>
            <p>Brief introduction about yourself, your background, and what you do.</p>
            <a href="/about" className="view-more">View More</a>
            </div>
        </div>

        {/* 作品/經歷區塊 */}
        <div className="works-block">
            <h2>My Works</h2>
            <div className="works-carousel">
            <div className="work-item">
                <img src={works[currentPage].image} alt={works[currentPage].title} />
                <h3>{works[currentPage].title}</h3>
                <p>{works[currentPage].description}</p>
            </div>
            <div className="arrows">
                <button onClick={handlePrev} className="arrow-prev">&#8592;</button>
                <button onClick={handleNext} className="arrow-next">&#8594;</button>
            </div>
            </div>
        </div>
        </div>
    );
}

export default Home;
