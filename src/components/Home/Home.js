import React from "react";
import "./Home.scss";
import home_image from '../../assets/home_image.png';

function Home() {
    return (
        <div className="home-container">
            <h1>曾紫彤 TZU-TUNG, TSENG</h1>
            <h3>我是一個愛笑也熱愛冒險的人，相信勇敢的人先享受世界！</h3>
            {/* <img src={home_image} alt="Description" className="photo" /> */}
            <p>
                <span class="flag-icon flag-icon-tw"></span>
                <span class="flag-icon flag-icon-jp"></span>
                <span class="flag-icon flag-icon-kr"></span>
                <span class="flag-icon flag-icon-th"></span>
                <span class="flag-icon flag-icon-in"></span>
                <span class="flag-icon flag-icon-nl"></span>
                <span class="flag-icon flag-icon-be"></span>
                <span class="flag-icon flag-icon-lu"></span>
                <span class="flag-icon flag-icon-fr"></span>
            </p>
            <p>A smile is the most charming part of a person forever.</p>    
        </div>
    );
}

export default Home;