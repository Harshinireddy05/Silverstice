import React from 'react';
import officeImage from '../assets/Team.jpg'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
function Story() {
  return (
    <section className="our-story-section">
      <div className="our-story-container">
        <div className="our-story-image">
          <img 
            src={officeImage} 
            alt="Fit.me Labs workspace" 
            className="grayscale-img"
          />
        </div>
        <div className="our-story-content">
          <h2>OUR STORY</h2>
          <div className="blue-underline"></div>
          
          <p className="story-text">
            At Fit.me Labs, we started with a vision to revolutionize online shopping. 
            In an era where online shopping is booming, one issue continues to plague 
            shoppers: sizing and fit. We wanted to create a solution that empowers 
            shoppers to make confident decisions when purchasing apparel, accessories, 
            and even makeup.
          </p>
          <p className="story-text">
            After years of research and innovation, we developed our cutting-edge 
            virtual try-on technology, designed to offer a truly personalized shopping 
            experience. We aim to minimize returns, reduce frustration, and enhance 
            satisfaction for both customers and retailers alike.
          </p>

          <h3>Why Choose Us?</h3>
          <div className="benefits-grid">
            <div className="benefit-column">
              <div className="benefit-item">
                <FontAwesomeIcon icon={faCheck} />
                <span>Personalized Shopping Experience</span>
              </div>
              <div className="benefit-item">
                <FontAwesomeIcon icon={faCheck} />
                <span>Cutting-edge AI Technology</span>
              </div>
              <div className="benefit-item">
                <FontAwesomeIcon icon={faCheck} />
                <span>Reduced Return Rates</span>
              </div>
            </div>
            <div className="benefit-column">
              <div className="benefit-item">
                <FontAwesomeIcon icon={faCheck} />
                <span>Enhanced Customer Satisfaction</span>
              </div>
              <div className="benefit-item">
                <FontAwesomeIcon icon={faCheck} />
                <span>Sustainable Shopping Solutions</span>
              </div>
              <div className="benefit-item">
                <FontAwesomeIcon icon={faCheck} />
                <span>Innovative Try-on Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;
