import React from 'react';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2>About VirtueTech</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>VirtueTech is a leading technology solutions provider, specializing in digital transformation, cloud solutions, and data analytics. With years of experience and a team of expert professionals, we help businesses navigate the digital landscape and achieve their full potential.</p>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <h3>500+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>200+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Expert Team Members</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
