import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

function HomePage() {
  const imageContext = require.context('../assets', false, /\.jpg$/);
  const images = imageContext.keys().map(imageContext);
  const [currentImage, setCurrentImage] = React.useState(images[0]);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isPopupVisible, setPopupVisible] = useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images, images.length]);

  React.useEffect(() => {
    setCurrentImage(images[currentIndex]);
  }, [images, currentIndex]);

  return (
    <header className="App-header">
      <div className="draggable-icon">
        <img src={currentImage} alt="Icon" />
      </div>
      <h1>MARTA PRETEL</h1>
      <button className="discover-button" onClick={() => setPopupVisible(true)}>
        <FaSearch className="lens-icon" />
        Discover technology used for this website!
      </button>
      {isPopupVisible && (
        <div className="popup">
          <h2>Welcome to My Creation!</h2>
          <p>This platform is intricately crafted, showcasing a harmonious blend of SASS, JavaScript, and a touch of retro style aesthetics. It's an embodiment of passion and creativity, inspired by lain images.</p>
          
          <p>If you're intrigued by the technicalities behind this web, the complete source code is available. Dive into the <a className="custom-link" href="https://github.com/MartaPre/mylab" target="_blank" rel="noopener noreferrer">GitHub repository</a>. Feel free to use it as a blueprint for your projects or derive inspiration from it.</p>
        
<p>Want to chat? Whether it's feedback, collaboration, or just a casual talk about web development, I'd love to hear from you. Drop me an email at <a className="custom-link" href="mailto:marpreal97@gmail.com">marpreal97@gmail.com</a>.</p>
          
          <button onClick={() => setPopupVisible(false)}>Close</button>
        </div>

      )}
    </header>
  );
}

export default HomePage;