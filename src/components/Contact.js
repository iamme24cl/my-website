import React from 'react';

const Contact = () => {
  return (
    <div className="w3-padding-64 w3-content w3-text-grey" id="contact">
      <h2 className="w3-text-light-grey">Contact Me</h2>
      <hr style={{width: "200px"}} className="w3-opacity" />

      <div className="w3-section">
        <p><a href="https://goo.gl/maps/34WYWkCg2B83qCPc8" target="_blank"><i className="fa fa-map-marker fa-fw w3-text-white w3-xxlarge w3-margin-right"></i></a> Palo Alto, California, US</p>
        <p><i className="fa fa-phone fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> Phone: 206-422-8846</p>
        <p><i className="fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right"> </i> Email: chandralama0111@gmail.com</p>
        <a href="https://www.linkedin.com/in/chandralama/" target="_blank">
          <i 
            className="fa fa-linkedin-square w3-text-white w3-xxlarge w3-margin-right" 
            style={{marginLeft: "5px"}}>
          </i>
        </a>
          <a href="https://github.com/iamme24cl/" target="_blank"><i className="fa fa-github-square w3-text-white w3-xxlarge"></i></a>
      </div><br />
      <p>Let's get in touch. Send me a message:</p>

      <form 
        action="mailto:iamme24cl@gmail.com" 
        method="POST" 
        enctype="multipart/form-data"
        name="email-form" target="_blank">
        <p><input className="w3-input w3-padding-16" type="text" placeholder="Name" required name="Name" /></p>
        <p><input className="w3-input w3-padding-16" type="text" placeholder="Email" required name="Email" /></p>
        <p><textarea className="w3-input w3-padding-16" placeholder="Message" required name="Message" ></textarea></p>
        <p>
          <button className="w3-button w3-light-grey w3-padding-large" type="submit">
            <i className="fa fa-paper-plane"></i> SEND MESSAGE
          </button>
        </p>
      </form>
    </div>
  )
}

export default Contact;