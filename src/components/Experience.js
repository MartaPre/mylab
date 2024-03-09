import React from 'react';

function Experience() {
  return (
    <section className="cv-section">
      <h2>Experience</h2>

      <h3>Frontend developer - Capgemini, Client Openbank</h3>
      <p className="date-info">Valencia, Valencia - 11/2023 to Current</p>
      <p>
        Member of Openbank Cobranded WEB team. 
        <br />
        Environment: Amazon Web Services (AWS)
        <br />
        Technologies: TypeScript, React.
        <br />
        Project version controller with GIT, QuickSilver, Bamboo & Bitbucket. Development of new functionalities of a web applications 
        and creations of components in our storybook storybook.
      </p>
      
      <h3>Frontend developer - Sopra Steria, Client BBVA</h3>
      <p className="date-info">Valencia, Valencia - 11/2021 to 11/2023</p>
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

      <h3>Frontend developer - Sopra Steria, Intern Application</h3>
      <p className="date-info">Valencia, Valencia - 03/2021 to 11/2021</p>
      <p>
        Developing the frontend part of an application focused on reserving jobs in the different offices, with the objective of making 
        work from the office compatible with work from home. Developed in ReactJS.
        <br />
        Technologies used: ReactJS, TypeScript, Redux thunk, Material-UI, React testing-library, GIT - InnerSource and GitHub-.
      </p>
    </section>
  );
}

export default Experience;
