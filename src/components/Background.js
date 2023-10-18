import React from 'react';

function Background() {
  return (
    <section className="cv-section">
      <h2>Educational Background</h2>
      
      <h3>Web Application Developer</h3>
      <p className="date-info">IES Font de Sant Lluis – Valencia, Valencia</p>
      <p>
        This comprehensive vocational training in web application development provided a deep dive into both front-end and back-end development, including:
      </p>
      <ul>
        <li>Design and development of user interfaces using HTML5, CSS3, and JavaScript.</li>
        <li>Application of responsive design techniques and mobile-first development approaches.</li>
        <li>Integration of client-side frameworks and libraries such as React and Vue.js.</li>
        <li>Design, creation, and management of relational databases using SQL.</li>
        <li>Server-side development using technologies like Node.js, Express, and PHP.</li>
        <li>Implementation of RESTful APIs and web services.</li>
        <li>Understanding of web security principles, including authentication and authorization.</li>
        <li>Version control with tools like Git and collaborative platforms like GitHub.</li>
        <li>Deployment and maintenance of web applications on cloud platforms and hosting services.</li>
        <li>Soft skills training, including teamwork, project management, and agile methodologies like Scrum.</li>
      </ul>
      <h3>Assembly and repair of microcomputer systems</h3>
      <p className="date-info">AITEX – UT Valenciaa – Valencia, Valencia</p>
      <p>
        Installation and configuration of base software and operating systems. Assembly of microcomputer equipment and components. 
        Installation of peripherals. Repair of equipment and hardware components.
      </p>

      <h3>Psychology</h3>
      <p className="date-info">Universitat de Castellón - Castellón, Valencia</p>
      <p>Completed one year of psychology studies.</p>

      <h3>English Philology - English Studies</h3>
      <p className="date-info">Universitat de València - Valencia, Valencia</p>
      <p>Studied English as the primary language and German as a secondary language. 120 credits completed.</p>

      <h3>Bachellor</h3>
      <p className="date-info">IES Tirant lo Blanc – Gandía, Valencia</p>
      <p>Focused on literature with subjects including ancient Greek and Latin.</p>
    </section>
  );
}

export default Background;