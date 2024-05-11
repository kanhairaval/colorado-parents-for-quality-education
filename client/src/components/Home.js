import React from "react";
import "../style/Home.css";

const Home = () => {
    return (
        <section className="home-section">
            <div className="hero-card">
                <img className="home-bg-image" alt="family-doing-homework" src="family-doing-homework-img.jpg" />
                <div className="overlay-text">Colorado Parents for Quality Education - Informed Parents, Thriving Children</div>
            </div>
            <div className="button-container">
                <div className="card">
                    <div className="card-top">
                        <div className="card-content">
                            <h1 className="home-heading">Welcome to Colorado Parents for Quality Education</h1>
                            <h3>
                                Founded in 2022, CPQE™ is more than an organization—it's a promise of opportunity. We envision a Colorado where every child, no matter their circumstances, has the chance to succeed. We work tirelessly to bridge the gap, offering support, resources, and a sense of community to families across Colorado Springs.
                            </h3>
                            <button className="homepage-buttons donate-button">Donate</button>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-top">
                        <div className="card-content">
                            <h1 className="home-heading">The Issue</h1>
                <h3>Education should be a basic human right for every person, not a luxury for the few.</h3>
                <button className="homepage-buttons">Learn More</button>
                </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-top">
                        <div className="card-content">
                <h1 className="home-heading">Our Mission</h1>
                <h3>
                    At Colorado Parents for Quality Education (CPQE), we believe knowledge is power. We empower parents, particularly those from low-income backgrounds, with the tools and resources they need to become active and informed participants in their children's education.
                </h3>
                <button className="homepage-buttons">Learn More</button>
                </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-top">
                        <div className="card-content">
                <h1 className="home-heading">Get Involved</h1>
                <h3>
                    With an issue like education for our future generation you cant sit on the sidelines, you can donate or ou can also get involved in oher ways.
                </h3>
                <button className="homepage-buttons">Learn More</button>
                </div>
                    </div>
                </div>
            </div>
            <div className="spacer"></div>
        </section>
    );
};

export default Home;