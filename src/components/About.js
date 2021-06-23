import React from 'react';

const About = () => {
  return (
    <div>
      {/* <!-- About Section --> */}
      <div className="w3-content w3-justify w3-text-grey w3-padding-64" id="about">
        <h2 className="w3-text-light-grey">About Me</h2>
        <hr style={{ width:"200px" }} className="w3-opacity"/>
        <p>
          Full Stack Software Developer brought up on JavaScript and Ruby on Rails. Background in Food and Wine Industry with strong interpersonal skills and rigorous positivity.
          Excellent at analyzing and assessing customer needs and delivering products and services clients love. Passionate problem solver. 
          A big believer of positive company culture, inclusive kindness and innovative thinking.
          I take great pleasure in learning new technologies, debugging errors, exploring new ideas & solutions, and sincerely dedicating myself to bringing the idea to life.
        </p>
        <h3 className="w3-padding-16 w3-text-light-grey">My Skills</h3>
        <p className="w3-wide">Photography</p>
        <div className="w3-white">
          <div className="w3-dark-grey" style={{height:"28px", width:"95%"}}></div>
        </div>
        <p className="w3-wide">Web Design</p>
        <div className="w3-white">
          <div className="w3-dark-grey" style={{height:"28px", width:"85%"}}></div>
        </div>
        <p className="w3-wide">Photoshop</p>
        <div className="w3-white">
          <div className="w3-dark-grey" style={{height:"28px", width:"80%"}}></div>
        </div><br/>
        
        <div className="w3-row w3-center w3-padding-16 w3-section w3-light-grey">
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">11+</span><br/>
            Partners
          </div>
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">55+</span><br/>
            Projects Done
          </div>
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">89+</span><br/>
            Happy Clients
          </div>
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">150+</span><br/>
            Meetings
          </div>
        </div>

        <button className="w3-button w3-light-grey w3-padding-large w3-section">
          <i className="fa fa-download"></i> Download Resume
        </button>
        
        {/* <!-- Grid for pricing tables --> */}
        <h3 className="w3-padding-16 w3-text-light-grey">My Price</h3>
        <div className="w3-row-padding" style={{margin:"0 -16px"}}>
          <div className="w3-half w3-margin-bottom">
            <ul className="w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off">
              <li className="w3-dark-grey w3-xlarge w3-padding-32">Basic</li>
              <li className="w3-padding-16">Web Design</li>
              <li className="w3-padding-16">Photography</li>
              <li className="w3-padding-16">5GB Storage</li>
              <li className="w3-padding-16">Mail Support</li>
              <li className="w3-padding-16">
                <h2>$ 10</h2>
                <span className="w3-opacity">per month</span>
              </li>
              <li className="w3-light-grey w3-padding-24">
                <button className="w3-button w3-white w3-padding-large w3-hover-black">Sign Up</button>
              </li>
            </ul>
          </div>

          <div className="w3-half">
            <ul className="w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off">
              <li className="w3-dark-grey w3-xlarge w3-padding-32">Pro</li>
              <li className="w3-padding-16">Web Design</li>
              <li className="w3-padding-16">Photography</li>
              <li className="w3-padding-16">50GB Storage</li>
              <li className="w3-padding-16">Endless Support</li>
              <li className="w3-padding-16">
                <h2>$ 25</h2>
                <span className="w3-opacity">per month</span>
              </li>
              <li className="w3-light-grey w3-padding-24">
                <button className="w3-button w3-white w3-padding-large w3-hover-black">Sign Up</button>
              </li>
            </ul>
          </div>
        {/* <!-- End Grid/Pricing tables --> */}
        </div>
        
        {/* <!-- Testimonials --> */}
        <h3 className="w3-padding-24 w3-text-light-grey">My Reputation</h3>  
        <img src="/w3images/bandmember.jpg" alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{width:"80px"}}/>
        <p><span className="w3-large w3-margin-right">Chris Fox.</span> CEO at Mighty Schools.</p>
        <p>John Doe saved us from a web disaster.</p><br/>
        
        <img src="/w3images/avatar_g2.jpg" alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{width:"80px"}}/>
        <p><span className="w3-large w3-margin-right">Rebecca Flex.</span> CEO at Company.</p>
        <p>No one is better than John Doe.</p>
      {/* <!-- End About Section --> */}
    </div>  
  </div>
  );
}

export default About;