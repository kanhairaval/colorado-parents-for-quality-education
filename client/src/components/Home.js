import React from "react";
import "../style/Home.css";

const Home = () => {

    return (
        <section className = "home-section">
            <img className = "home-bg-image" alt = "family-doing-homework" src = "family-doing-homework-img.jpg"/>
            <div className="overlay-text">Colorado Parents for Quality Education - Informed Parents, Thriving Children</div>
            <div className="button-container">
                <button className = "homepage-buttons">Donate</button>
                <h1 className = "home-heading">Welcome to Colorado Parents for Quality Education</h1>
                <h3>Founded in 2022, CPQE™ is more than an organization—it's a promise of opportunity. We envision a Colorado where every child, no matter their circumstances, has the chance to succeed. We work tirelessly to bridge the gap, offering support, resources, and a sense of community to families across Colorado Springs.</h3>
                <h1 className = "home-heading">The Issue</h1>
                <h3>Education should be a basic human right for every person, not a luxury for the few.</h3>
                <button className = "homepage-buttons">Learn More</button>
            </div>
        </section>
    )
};

export default Home;