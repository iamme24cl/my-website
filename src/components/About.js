import React from 'react';
import "./About.css";

const About = () => {
  return (
      <div className="w3-content w3-justify w3-text-grey w3-padding-16" id="about">
        <h2 className="w3-text-light-grey">About Me</h2>
        <hr style={{ width:"200px" }} className="w3-opacity"/>
        <section className="css-typing w3-text-light-grey">
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
          <div className="w3-dark-grey" style={{height:"28px", width:"93%"}}></div>
        </div>
        <p className="w3-wide">Problem Soving</p>
        <div className="w3-white">
          <div className="w3-dark-grey" style={{height:"28px", width:"95%"}}></div>
        </div><br/>
        {/* skill incon badges */}
        <div id="badges" style={{fontSize: "60px"}} class="w3-container w3-black">
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
        

       
        {/* <!-- Testimonials --> */}
        {/* <h3 className="w3-padding-24 w3-text-light-grey">My Reputation</h3>  

        <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{width:"80px"}}/>
        <p><span className="w3-large w3-margin-right">Chris Fox.</span><small>CEO at Mighty Schools.</small></p>
        <p>Chandra saved us from a web disaster.</p><br/>
        
        <img src="https://randomuser.me/api/portraits/women/19.jpg" alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{width:"80px"}}/>
        <p><span className="w3-large w3-margin-right">Rebecca Flex.</span><small>CEO at Company.</small></p>
        <p>No one is better than Chandra Lama.</p> */}
      {/* <!-- End About Section --> */}
    </div>  
  );
}

export default About;