// import React from 'react';

// function Footer() {
//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         <div className="footer-section">
//           <h3>Sustainable Fashion AI</h3>
//           <p style={{ color: 'white', marginTop: '1rem' }}>
//             An AI-powered fashion technology startup dedicated to revolutionizing sustainable garment production.
//           </p>
//         </div>
//         <div className="footer-section">
//           <h3>Resources</h3>
//           <ul>
//             <li><a href="#platform">AI Platform</a></li>
//             <li><a href="#sustainability">Sustainability Guidelines</a></li>
//             <li><a href="#research">Research Papers</a></li>
//             <li><a href="#eco">Eco-Friendly Practices</a></li>
//           </ul>
//         </div>
//         <div className="footer-section">
//           <h3>Quick Links</h3>
//           <ul>
//             <li><a href="#investors">Investors</a></li>
//             <li><a href="#careers">Careers</a></li>
//             <li><a href="#faqs">FAQs</a></li>
//           </ul>
//         </div>
//         <div className="footer-section">
//           <h3>Follow On</h3>
//           <div className="social-links">
//             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-linkedin"></i>
//             </a>
//             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-instagram"></i>
//             </a>
//           </div>
//         </div>
//       </div>
//       <div className="footer-bottom">
//         <p>© 2024 Sustainable Fashion AI. All Rights Reserved</p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Fit.me Labs</h3>
          <p style={{ color: 'white', marginTop: '1rem' }}>
            An AI-powered fashion technology startup dedicated to revolutionizing sustainable garment production.
          </p>
        </div>
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li><a href="#platform">AI Platform</a></li>
            <li><a href="#sustainability">Sustainability Guidelines</a></li>
            <li><a href="#research">Professional</a></li>
            <li><a href="#eco">Eco-Friendly Practices</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Industries</h3>
          <ul>
            <li><a href="#investors">Financial</a></li>
            <li><a href="#careers">E-Commerce</a></li>
            <li><a href="#faqs">Media</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow us On</h3>
          <div className="social-links">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p style={{ color: 'white' }}>© 2024 Fit.me Labs. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
