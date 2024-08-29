import React from 'react';
import "./About.css";

const About = () => {
  return (
     <div className="about-container w3-content w3-text-light-grey" id="about">
      <h2 className='w3-center'>About Me</h2>
        <hr style={{ width:"100%" }} className="w3-opacity"/>
        <section className="w3-text-light-grey">
          <p>
            With over 15 years of professional experience, transitioning from hospitality to software engineering has been a thrilling journey. 
            The customer-facing skills I've developed over the years uniquely position me to understand user needs and deliver intuitive, 
            user-friendly software solutions. Now, I’m looking to bring this combination of technical and interpersonal skills to a forward-thinking company. 
            If you're searching for a software engineer who brings a unique perspective to the table, let's connect!
          </p>
        </section>
    </div>
  );
}

export default About;