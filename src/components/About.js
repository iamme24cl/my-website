import React from 'react';

const About = () => {
  return (
      <div className="w3-content w3-justify w3-text-grey w3-padding-64" id="about">
        <h2 className="w3-text-light-grey">About Me</h2>
        <hr style={{ width:"200px" }} className="w3-opacity"/>
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
        <h3 className="w3-padding-16 w3-text-light-grey">My Skills</h3>
        <p className="w3-wide">Frontend Programming</p>
        <div className="w3-white">
          <div className="w3-dark-grey" style={{height:"28px", width:"95%"}}></div>
        </div>
        <p className="w3-wide">Backend Programming</p>
        <div className="w3-white">
          <div className="w3-dark-grey" style={{height:"28px", width:"85%"}}></div>
        </div>
        <p className="w3-wide">Problem Soving</p>
        <div className="w3-white">
          <div className="w3-dark-grey" style={{height:"28px", width:"95%"}}></div>
        </div><br/>
        
        <button className="w3-button w3-light-grey w3-padding-large w3-section">
          <i className="fa fa-download"></i> Download Resume
        </button>
        

        
        {/* <!-- Testimonials --> */}
        <h3 className="w3-padding-24 w3-text-light-grey">My Reputation</h3>  

        <img src="/w3images/bandmember.jpg" alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{width:"80px"}}/>
        <p><span className="w3-large w3-margin-right">Chris Fox.</span> CEO at Mighty Schools.</p>
        <p>Chandra saved us from a web disaster.</p><br/>
        
        <img src="/w3images/avatar_g2.jpg" alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{width:"80px"}}/>
        <p><span className="w3-large w3-margin-right">Rebecca Flex.</span> CEO at Company.</p>
        <p>No one is better than Chandra Lama.</p>
      {/* <!-- End About Section --> */}
    </div>  
  );
}

export default About;