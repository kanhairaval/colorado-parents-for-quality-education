import React from 'react';
import "../style/AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="container">
        <h2 className="section-heading">Colorado Parents for Quality Education: Empowering Low-Income Parents</h2>
        <p className="section-description">Imagine: A parent standing outside their child's school, yearning to be involved in their education but feeling lost in a system they don't understand. Lack of resources and financial constraints may further limit their ability to provide essential support. This is where Colorado Parents for Quality Education (CPQE) steps in, bringing hope and opportunity to low-income families across Colorado Springs.</p>
        <p className="section-description">Founded in 2022, CPQE is a non-profit organization with a noble mission: to empower low-income parents and equip them with the knowledge and resources needed to actively participate in their children's education. We believe that every child deserves an equal chance to succeed, regardless of their circumstances.</p>
        
        <h3 className="sub-heading">Bridging the Knowledge Gap:</h3>
        <ul className="bullet-points">
          <li>Limited understanding of the education system: Navigating complex policies, curriculum standards, and communication from schools can be overwhelming.</li>
          <li>Lack of access to resources: Essential learning materials, technology, and after-school opportunities may be out of reach for many families.</li>
          <li>Feeling intimidated or isolated: Parents might hesitate to engage with educators or feel disconnected from other families due to social or economic differences.</li>
        </ul>

        <h3 className="sub-heading">CPQE's Programs and Initiatives:</h3>
        <ul className="bullet-points">
          <li><strong>Free Book Give-Away Programs:</strong> We distribute age-appropriate books to children from low-income families, nurturing a love for reading and fostering literacy skills.</li>
          <li><strong>C.A.R.E. Program:</strong> This innovative program provides financial assistance to help families cover the cost of after-school tutoring and enrichment activities, unlocking access to valuable learning opportunities.</li>
          <li><strong>Workshops and Training:</strong> We organize informative workshops and training sessions, empowering parents to advocate for their children's needs, understand their rights, and navigate the education system effectively.</li>
          <li><strong>Community Building Initiatives:</strong> We facilitate parent support groups and networking events, creating a sense of belonging and fostering collaboration among families.</li>
        </ul>

        <h3 className="sub-heading">More Than Just Resources:</h3>
        <p className="section-description">At CPQE, we go beyond simply providing resources. We build relationships, offer emotional support, and empower parents to become confident advocates for their children. We work alongside them, celebrating their successes and providing guidance through challenges. Our goal is to cultivate a community of engaged, informed parents who are equipped to champion their children's educational journeys.</p>

        <h3 className="sub-heading">The Impact We Create:</h3>
        <ul className="bullet-points">
          <li>Gain a deeper understanding of their child's education and become active participants in their academic journey.</li>
          <li>Access learning opportunities and resources that would otherwise be out of reach.</li>
          <li>Develop the skills and confidence to advocate for their children's needs and ensure they receive a quality education.</li>
          <li>Connect with other parents and build a supportive network, breaking down feelings of isolation.</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutUs;