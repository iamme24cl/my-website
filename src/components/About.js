import React from 'react';
import "./About.css";

const About = () => {
  return (
      <div className="w3-content w3-justify w3-text-grey" id="about">
        <h2 className="w3-text-light-grey">About Me</h2>
        <hr style={{ width:"200px" }} className="w3-opacity"/>
        <section className="css-typing w3-text-light-grey w3-padding-16">
          <p>Full Stack Software Developer brought up on JavaScript and Ruby on Rails.</p> 

          <p>
            Background in Food and Wine Industry with strong interpersonal skills and rigorous positivity.
          </p>

          <p>
            Excellent at analyzing and assessing customer needs and delivering products and services clients love.
          </p> 

          <p>
            Passionate problem solver. A big believer of positive company culture, inclusive kindness and
          </p> 
          
          <p>
            innovative thinking.I take great pleasure in learning new technologies, debugging errors,
          </p>
          
          <p>
            exploring new ideas & solutions, and sincerely dedicating myself to bringing the idea to life.
          </p>
        </section>

        {/* Display only in screens smaller than 600 px */}
        <section className="about-section-small w3-text-light-grey">
          <p>
            Full Stack Software Developer brought up on JavaScript and Ruby on Rails. Background in Food and Wine Industry with strong interpersonal skills and rigorous positivity.
          </p>
          <p>
            Excellent at analyzing and assessing customer needs and delivering products and services clients love. Passionate problem solver. 
            A big believer of positive company culture, inclusive kindness and innovative thinking.
          </p>
          <p>
            I take great pleasure in learning new technologies, debugging errors, exploring new ideas & solutions, and sincerely dedicating myself to bringing the idea to life.
          </p>
        </section>

        <h3 className="w3-padding-16 w3-text-light-grey">My Skills</h3>
        <p className="w3-wide">Frontend Programming</p>
        <div className="w3-white">
          <div className="w3-dark-grey" style={{height:"28px", width:"95%"}}></div>
        </div>
        <p className="w3-wide">Backend Programming</p>
        <div className="w3-white">
          <div className="w3-dark-grey" style={{height:"28px", width:"95%"}}></div>
        </div>
        <p className="w3-wide">Problem Soving</p>
        <div className="w3-white">
          <div className="w3-dark-grey" style={{height:"28px", width:"95%"}}></div>
        </div>
        <p className="w3-wide">Work Ethic & Communication Skills</p>
        <div className="w3-white">
          <div className="w3-dark-grey" style={{height:"28px", width:"100%"}}></div>
        </div><br/>
        
        {/* skill icon badges */}
        <div id="badges" style={{fontSize: "60px"}} class="w3-container w3-black w3-padding-16">
          <div  className="w3-row">
            <div className="w3-half w3-container">
              <i class="devicon-ruby-plain-wordmark colored"></i>
              <i class="devicon-rails-plain-wordmark colored"></i>
              <i class="devicon-javascript-plain colored"></i>
              <i class="devicon-html5-plain-wordmark colored"></i>
            </div>
            <div className="w3-half w3-container">
              <i class="devicon-postgresql-plain-wordmark"></i>
              <i class="devicon-graphql-plain-wordmark colored"></i>
              <i class="devicon-css3-plain-wordmark colored"></i>
              <i class="devicon-react-original-wordmark colored"></i>
            </div>
          </div>
          <div  className="w3-row">
            <div className="w3-half w3-container">
              <i class="devicon-redux-original colored"></i>
              <i class="devicon-git-plain-wordmark colored"></i>
              <i class="devicon-github-original-wordmark"></i>
              <i class="devicon-nodejs-plain-wordmark"></i>
            </div>
            <div className="w3-half w3-container">
              <i class="devicon-jest-plain colored"></i>
              <i class="devicon-materialui-plain colored"></i>
            </div>
          </div>
        </div>
    </div>  
  );
}

export default About;