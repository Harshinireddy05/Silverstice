import React from 'react';

function Services() {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="services-grid">
        <div className="service-card">
          <h3>Cloud Solutions</h3>
          <p>Enterprise-grade cloud infrastructure and migration services</p>
        </div>
        <div className="service-card">
          <h3>Data Analytics</h3>
          <p>Transform your data into actionable insights</p>
        </div>
        <div className="service-card">
          <h3>Digital Transformation</h3>
          <p>Modernize your business with cutting-edge technology</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
