import React from 'react';
import "../style/GetInvolved.css";

const GetInvolved = () => {
    return (
        <section className="get-involved-section">
            <h1 className="get-involved-title"><strong>Join Our Mission</strong></h1>
            <div className="join-mission">
                <p>We believe that every parent has the potential to make a difference in their child's education.</p>
                <p>If you resonate with our mission and want to see an equitable future for all children, there are numerous ways to get involved with CPQE:</p>
                <ul>
                    <li>&#8226; <strong>Donate:</strong> Your financial contribution allows us to continue providing essential programs and resources to low-income families.</li>
                    <li>&#8226; <strong>Volunteer:</strong> Share your time and expertise by participating in our workshops, events, or book distribution programs.</li>
                    <li>&#8226; <strong>Spread the Word:</strong> Help us raise awareness about our mission and the needs of low-income families by sharing our story with your network.</li>
                </ul>
                <p>Together, we can create a brighter future for Colorado Springs children, ensuring that every student has the opportunity to thrive, regardless of their background.</p>
                <p>Visit our website <a href="https://coloradoparentsforqualityeducation.org">coloradoparentsforqualityeducation.org</a> today to learn more about our programs, volunteer opportunities, and how you can make a difference!</p>
            </div>
        </section>
    );
};

export default GetInvolved;