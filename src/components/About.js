import React from 'react';
import "./About.css";

const About = () => {
  return (
      <div className="w3-content w3-text-light-grey" id="about">
        <h2 className='w3-center'>About Me</h2>
        <hr style={{ width:"100%" }} className="w3-opacity"/>
        <section className="w3-text-light-grey">
          <p>
            Full Stack Web Developer brought up on JavaScript and Ruby on Rails.
            Background in Food and Wine Industry with strong interpersonal skills and rigorous positivity.
          </p>
          <p>
            Excellent at analyzing and assessing customer needs and delivering products and services clients love. 
            I am a passionate problem solver and a big believer of positive company culture, inclusive kindness and
            innovative thinking.
          </p>
          <p>
            I take great pleasure in learning new technologies, debugging errors,
            exploring new ideas & solutions, and sincerely dedicating myself to bringing the idea to life.
          </p>
        </section>
        <hr style={{width: "100%"}} className="w3-opacity"/>
    </div>  
  );
}

export default About;