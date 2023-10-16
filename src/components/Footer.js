import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer>
        <address>
          <p>Valencia, Spain</p>  
          <a href="tel:722735321">722735321</a> | <a href="mailto:marpreal97@gmail.com">marpreal97@gmail.com</a>
        </address>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/martapretel/" target="_blank" rel="noopener noreferrer" className="linkedin-link">LinkedIn</a>
          <a href="https://github.com/MartaPre" target="_blank" rel="noopener noreferrer" className="github-link">GitHub</a>
        </div>
    </footer>
  );
}

export default Footer;
