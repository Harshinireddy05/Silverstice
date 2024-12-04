import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faUsers, faLeaf, faHandshake } from '@fortawesome/free-solid-svg-icons';
import aboutImage from '../assets/grey.png';

function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-illustration">
          <img src={aboutImage} alt="Fit.me Labs Illustration" />
        </div>
        <div className="about-content">
          <div className="company-tag">Fit.me Labs</div>
          <h1>About Us</h1>
          <p>
            Fit.me Labs is an innovative technology start-up that combines 
            Artificial Intelligence (AI), Augmented Reality (AR), and Machine 
            Learning (ML) to create groundbreaking solutions for the e-commerce 
            industry. We specialize in developing virtual try-on experiences 
            that allow customers to see how clothing, accessories, and makeup 
            will look on them before making a purchase.
          </p>
          <p>
            Our mission is to make online shopping more efficient, enjoyable, 
            and customer-centric, while reducing return rates and helping 
            retailers increase customer retention. We're a passionate team of 
            innovators focused on using technology to solve real-world problems 
            and create a more sustainable, personalized shopping experience.
          </p>
        </div>
      </div>

      <section className="core-values-section">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">
              <FontAwesomeIcon icon={faLightbulb} />
            </div>
            <h3>Innovation</h3>
            <p>
              We are driven by creativity and a passion for pushing the boundaries of technology. At Fit.me Labs, we constantly strive to create innovative solutions that redefine the online shopping experience. Our commitment to innovation ensures that we stay ahead of the curve and provide cutting-edge services for the e-commerce industry.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <FontAwesomeIcon icon={faUsers} />
            </div>
            <h3>Customer-Centricity</h3>
            <p>
              Our customers are at the heart of everything we do. We prioritize their needs, feedback, and satisfaction, creating products and services that empower them to make confident purchasing decisions. By understanding their pain points, we work towards delivering an unparalleled, personalized shopping experience.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <FontAwesomeIcon icon={faLeaf} />
            </div>
            <h3>Sustainability</h3>
            <p>
              At Fit.me Labs, we believe in creating solutions that contribute to a more sustainable future. Our virtual try-on technology helps reduce the environmental impact of returns, waste, and overproduction in the fashion industry, aligning with our commitment to eco-friendly practices.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <FontAwesomeIcon icon={faHandshake} />
            </div>
            <h3>Collaboration</h3>
            <p>
              We believe that the best results come from working together—whether it's within our team or with our partners. Collaboration fosters creativity, accelerates growth, and enables us to solve complex challenges more effectively. We are committed to building strong relationships and working as a unified force to transform the e-commerce landscape.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
