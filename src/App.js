import React from 'react';
import './App.scss';

function App() {
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
    <div className="App">
    <div className="images-container">
      {images.map((img, index) => (
        <div key={index} className="draggable-icon">
      <img src={img} alt={`Lain ${index}`} />        
    </div>
      ))}
    </div>
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
      <main>
        <section className="cv-section">
          <h2>Professional Summary</h2>
          <p>
            Always willing to learn new technologies and renew myself. I'm passionate about the world of free software and in
            my day to day, both for work and personal use I choose Linux, specifically Fedora.
          </p>
        </section>
        <section className="cv-section">
          <h2>Skills</h2>
          <ul>
            <li>React</li>
            <li>CSS</li>
            <li>TypeScript</li>
            <li>Scrum</li>
            <li>Agile</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>GIT</li>
            <li>Bitbucket</li>
          </ul>
        </section>
        <section className="cv-section">
          <h2>Experience</h2>
          <h3>Frontend developer - Sopra Steria, Client BBVA</h3>
          <p className="date-info">Valencia, Valencia - 11/2021 to Current</p>
          <p>
            Member of the BBVA C-FIT team in the Corporate & Investment Banking division. Maintenance and development of new functionalities 
            of a web application in charge of carrying out prices and calibrations of underlying assets in real time, integrated with Bloomberg, 
            for use by BBVA merchants. Use of agile methodologies.
            <br />
            Environment: Amazon Web Services (AWS)
            <br />
            Technologies: TypeScript, React.
            <br />
            Project version controller with GIT & Bitbucket.
          </p>

          <h3>Frontend developer - Sopra Steria</h3>
          <p className="date-info">Valencia, Valencia - 03/2021 to 11/2021</p>
          <p>
            Developing the frontend part of an application focused on reserving jobs in the different offices, with the objective of making 
            work from the office compatible with work from home. Developed in ReactJS.
            <br />
            Technologies used: ReactJS, TypeScript, Redux thunk, Material-UI, React testing-library, GIT - InnerSource and GitHub-.
          </p>
        </section>
        <section className="cv-section">
          <h2>Educational Background</h2>
          <h3>Web Application Developer</h3>
          <p className="date-info">IES Font de Sant Lluis – Valencia, Valencia - 2019-2021</p>

          <h3>Assembly and repair of microcomputer systems</h3>
          <p className="date-info">AITEX – UT Valenciaa – Valencia, Valencia - 2018-2019</p>
          <p>
            Installation and configuration of base software and operating systems. Assembly of microcomputer equipment and components. 
            Installation of peripherals. Repair of equipment and hardware components.
          </p>

          <h3>English Studies</h3>
          <p className="date-info">Universitat de València - Valencia, Valencia - 2016-2018</p>
          <p>120 credits completed.</p>

          <h3>High school diploma</h3>
          <p>IES Tirant lo Blanc – Gandía, Valencia - 2014-2016</p>
        </section>
      </main>
    </div>
  );
}

export default App;
