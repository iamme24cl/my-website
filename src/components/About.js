import React from 'react';
import "./About.css";

const About = () => {
  return (
     <div className="about-container w3-content w3-text-light-grey" id="about">
      <h2 className='w3-center'>About Me</h2>
        <hr style={{ width:"100%" }} className="w3-opacity"/>
        <section className="w3-text-light-grey">
          <p>
          As a software engineer, I specialize in building scalable, user-centric applications. 
          My experience in engineering and problem-solving has allowed me to develop robust 
          solutions that blend technical efficiency with a deep understanding of user needs. 
          Having worked extensively in fast-paced, customer-driven environments, I bring a unique
          ability to bridge technology and real-world usability. I’m passionate about developing 
          high-impact software and am eager to contribute to a team that values innovation and 
          seamless user experiences. Let’s connect!
          </p>
        </section>
    </div>
  );
}

export default About;