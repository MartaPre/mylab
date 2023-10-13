import React from 'react';
import './App.scss';
import AboutMe from './AboutMe'; 
import Skills from './Skills';
import Experience from './Experience';
import Background from './Background';
import HomePage from './HomePage';

function App() {
  const imageContext = require.context('./assets', false, /\.jpg$/);
  const images = imageContext.keys().map(imageContext);

  const imageDetails = [
    { src: images[0], hoverText: "Homepage", link: "homepage" },
    { src: images[1], hoverText: "About me", link: "about" },
    { src: images[2], hoverText: "Skills & Technologies", link: "skills" },
    { src: images[3], hoverText: "Projects", link: "projects" },
    { src: images[4], hoverText: "Educational Background", link: "background" }
  ];

  const navigateToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="App">
      <div className="images-container">
        {imageDetails.map((imgDetail, index) => (
          <button 
            key={index} 
            className="image-button" 
            onClick={() => navigateToSection(imgDetail.link)}
          >
            <img src={imgDetail.src} alt={`Lain ${index}`} />
            <span className="hover-text">{imgDetail.hoverText}</span>
          </button>
        ))}
      </div>
      <header id="homepage" className="App-header">
        <HomePage />
      </header>
      <main>
        <section id="about" className="cv-section">
          <AboutMe />
        </section>
        <section id="skills" className="cv-section">
          <Skills />
        </section>
        <section id="projects" className="cv-section">
          <Experience />
        </section>
        <section id="background" className="cv-section">
          <Background />
        </section>
      </main>
    </div>
  );
}

export default App;
