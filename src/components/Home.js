import React from 'react';
import backgroundVideo from '../assets/background.mp4'; // Make sure your video is in this path

function Home() {
  return (
    <section id="home" className="hero-section">
      <video autoPlay loop muted playsInline className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <h1>Predicting Sustainable Fashion with Advanced Stoichiometry</h1>
        <h2>Redefining fashion by making every garment smarter, more sustainable, and eco-friendly.</h2>
        {/* <button className="cta-button">Get Started</button> */}
      </div>
    </section>
  );
}

export default Home; 