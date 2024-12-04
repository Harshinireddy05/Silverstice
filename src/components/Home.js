import React from 'react';
import backgroundVideo from '../assets/background.mp4';
import Story from './Story';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTshirt, faGlasses, faPaintBrush, faCode } from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <>
      <section id="home" className="hero-section">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="background-video"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-content">
          <h1>Predicting Sustainable Fashion with Advanced Stoichiometry</h1>
          <h2>Redefining fashion by making every garment smarter, more sustainable, and eco-friendly.</h2>
        </div>
      </section>
      
      <Story />

      <section className="services-section">
        <div className="services-container">
          <p style={{fontSize: "1.8rem", color: "dark-grey"}}><h1>OUR SERVICES</h1></p>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <FontAwesomeIcon icon={faTshirt} />
              </div>
              <h3>Virtual Try-On for Apparel</h3>
              <p>Our flagship service lets customers virtually try on clothing before purchasing. Using AI and AR, we create accurate and realistic representations of how apparel will fit and look on any individual, eliminating size-related guesswork and ensuring a perfect fit every time.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <FontAwesomeIcon icon={faGlasses} />
              </div>
              <h3>Virtual Try-On for Accessories</h3>
              <p>Fit.me Labs also offers a virtual try-on service for accessories like shoes, eyewear, and watches. Customers can visualize how these items will look on them, reducing returns and enhancing satisfaction, all from the comfort of their own homes.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <FontAwesomeIcon icon={faPaintBrush} />
              </div>
              <h3>Virtual Try-On for Makeup</h3>
              <p>Our AR-powered makeup try-on service allows users to experiment with different cosmetics virtually. They can see how various shades of lipstick, foundation, and eyeshadow will look on their skin tone, making the shopping experience more personalized and fun.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <FontAwesomeIcon icon={faCode} />
              </div>
              <h3>Custom E-commerce Integration</h3>
              <p>We provide e-commerce platforms with easy-to-integrate APIs that bring our virtual try-on solutions directly to their websites and mobile apps. Retailers can seamlessly incorporate this technology into their existing platforms, offering a more interactive and engaging shopping experience for their customers.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home; 