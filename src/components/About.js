import React from 'react';
import "./About.css";

const About = () => {
  return (
     <div className="w3-content w3-text-light-grey" id="about">
      <h2 className='w3-center'>About Me</h2>
        <hr style={{ width:"100%" }} className="w3-opacity"/>
        <section className="w3-text-light-grey">
          <p>
          Detail-oriented and highly motivated full stack software developer. Proficient in Python for rapid implementation and iteration, 
          experienced in React for building interactive front-ends, and skilled in web programming. 
          </p>
          <p>Adept at backend system design and implementation with a passion for continuous learning and skill expansion.</p>
        </section>
    </div>
  );
}

export default About;