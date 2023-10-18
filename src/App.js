import React, { useState, useEffect } from 'react';
import './App.scss';
import AboutMe from './components/AboutMe'; 
import Skills from './components/Skills';
import Experience from './components/Experience';
import Background from './components/Background';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer';
import ThemeContext from './ThemeContext';

function App() {
  const imageContext = require.context('./assets', false, /\.png$/);
  const images = imageContext.keys().map(imageContext);
  const imageDetails = [
    { src: images[0], hoverText: "Homepage", link: "homepage" },
    { src: images[1], hoverText: "About me", link: "about" },
    { src: images[2], hoverText: "Skills & Technologies", link: "skills" },
    { src: images[3], hoverText: "Projects", link: "projects" },
    { src: images[4], hoverText: "Educational Background", link: "background" },
    { src: images[5], hoverText: "Footer", link: "footer" }
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuRight, setIsMenuRight] = useState(false);
  const [showDevMode, setShowDevMode] = useState(false);
  const [theme, setTheme] = useState('light');

  const navigateToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  useEffect(() => {
      document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>      
      <div className="App">
        <div className="menu-container">
        <button onClick={() => setIsMenuRight(!isMenuRight)} className={`toggle-position ${isMenuRight ? 'right' : ''}`}>
          {isMenuRight ? "MENU LEFT" : "MENU RIGHT"}
        </button>
          <button 
            className={`hamburger-menu ${isMenuRight ? 'right' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
          {isMenuOpen && (
            <div className={`images-container ${isMenuRight ? 'right' : ''}`}>
              {imageDetails.map((imgDetail, index) => (
                <button 
                  key={index} 
                  className="image-button" 
                  onClick={() => navigateToSection(imgDetail.link)}
                >
                  <img src={imgDetail.src} alt={`avatar ${index}`} />
                  <span className="hover-text">{imgDetail.hoverText}</span>
                </button>
              ))}
            </div>
          )}
 
          <section id="homepage" className="cv-section">
            <HomePage 
            showDevMode={showDevMode} 
            setShowDevMode={setShowDevMode} 
          />              </section>     
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
          <footer id="footer">
            <Footer />
          </footer>

      </div>
    </ThemeContext.Provider>
  );
}

export default App;
