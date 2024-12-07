import React from 'react';
import './Service.css';  // Make sure to create and customize this CSS file to match your black-themed design

const services = [
  {
    title: "Virtual Try-On Technology",
    tagline: "Try Before You Buy",
    description: "Experience the future of online shopping with our state-of-the-art virtual try-on technology. Our advanced algorithms create realistic 3D models of customers, allowing them to see how clothes and accessories will look and fit before making a purchase. Easily integrate our virtual try-on API with your existing e-commerce platform to provide a seamless and engaging shopping experience.",
    image: require('../assets/tryon.png')
  },
  {
    title: "AI-Powered Personal Styling",
    tagline: "Your Personal Fashion Assistant",
    description: "Take the guesswork out of shopping with our AI-powered personal styling service. Using cutting-edge artificial intelligence, we analyze customer data to provide personalized style recommendations tailored to each individual’s preferences and needs. Enhance your customers' shopping experience with intelligent suggestions that feel tailor-made.",
    image: require('../assets/stylist.png')
  },
  {
    title: "Augmented Reality (AR) Integration",
    tagline: "See It in Your Space",
    description: "Immerse your customers in a new dimension of shopping with our augmented reality (AR) integration. Our AR solutions bring products to life, allowing customers to visualize items in their real-world environment. Create interactive product views and virtual fitting rooms to provide a unique and engaging shopping experience.",
    image: require('../assets/tryon.png')
  },
  {
    title: "Sustainable Fashion Analytics",
    tagline: "Empowering Eco-Friendly Choices",
    description: "Empower your business with insights into sustainable fashion practices. Our comprehensive analytics help brands understand and improve their sustainability efforts, from production to disposal. Enhance your brand’s reputation and attract eco-conscious customers by demonstrating a commitment to sustainability.",
    image: require('../assets/tryon.png')
  }
];

const Service = () => {
  return (
    <div className="service-component-container">
      <h1 className="service-component-title">Our Services</h1>
      {services.map((service, index) => (
        <div key={index} className={`service-component-card ${index % 2 === 0 ? 'left' : 'right'}`}>
          <div className="service-component-content">
            <h2 className="service-component-name">{service.title}</h2>
            <p className="service-component-tagline"><em>{service.tagline}</em></p>
            <p className="service-component-description">{service.description}</p>
          </div>
          <div className="service-component-image">
            <img src={service.image} alt={service.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Service;
