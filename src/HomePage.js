import React from 'react';

function HomePage() {
  const imageContext = require.context('./assets', false, /\.jpg$/);
  const images = imageContext.keys().map(imageContext);
  const [currentImage, setCurrentImage] = React.useState(images[0]);
  const [currentIndex, setCurrentIndex] = React.useState(0);

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
      <address>
        Avinguda Doctor Peset Aleixandre nº5, 4º piso, puerta 8, València, Valencia 46009
        <br />
        <a href="tel:722735321">722735321</a> | <a href="mailto:marpreal97@gmail.com">marpreal97@gmail.com</a>
      </address>
    </header>
  );
}

export default HomePage;
