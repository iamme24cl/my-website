import React from 'react';
import "./About.css";

const About = () => {
  return (
     <div className="about-container w3-content w3-text-light-grey" id="about">
      <h2 className='w3-center'>About Me</h2>
        <hr style={{ width:"100%" }} className="w3-opacity"/>
        <section className="w3-text-light-grey">
          <p>
          With over 15 years of professional experience, including the last 3 years as a software developer, transitioning from hospitality to software engineering 
          has been a thrilling journey. The customer-facing skills I've honed over the years uniquely position me to understand user needs and deliver intuitive, 
          user-friendly software solutions. My recent experience in software development has solidified my technical expertise, allowing me to work with Python, 
          React, Node.js, and various other technologies to build robust applications. Now, I’m looking to bring this combination of technical and interpersonal skills 
          to a forward-thinking company. If you're searching for a software engineer who brings a unique perspective to the table, let's connect!
          </p>
        </section>
    </div>
  );
}

export default About;