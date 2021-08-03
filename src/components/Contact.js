import React, { useState } from 'react';
import emailjs, { init } from 'emailjs-com';
import CONSTANTS from '../utils/constants'

const { TOKENS: { SID, TID, UID } } = CONSTANTS;
init(UID);

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceID = SID;
    const templateID = TID;
    const userID = UID;
 
    emailjs.sendForm(serviceID, templateID, e.target, userID)
     .then((result) => {
       alert("Message Sent! Chandra will get back to you..")
     }, (err) => {
       alert(JSON.stringify(err));
     });
     
    setName("");
    setEmail("");
    setMessage("");
  }
  
  return (
    <div className="w3-padding-64 w3-content w3-text-grey" id="contact">
      <h2 className="w3-text-light-grey">Contact Me</h2>
      <hr style={{width: "200px"}} className="w3-opacity" />

      <div className="w3-section">
        <p><a href="https://goo.gl/maps/34WYWkCg2B83qCPc8" target="_blank" rel="noreferrer"><i className="fa fa-map-marker fa-fw w3-text-white w3-xxlarge w3-margin-right w3-hover-opacity"></i></a> Palo Alto, California, US</p>
        <p><i className="fa fa-phone fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> Phone: 206-422-8846</p>
        <p><i className="fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right"> </i> Email: iamme24cl@gmail.com</p>
        <a href="https://www.linkedin.com/in/chandralama/" target="_blank" rel="noreferrer">
          <i 
            className="fa fa-linkedin-square w3-text-white w3-xxlarge w3-margin-right w3-hover-opacity" 
            style={{marginLeft: "5px"}}>
          </i>
        </a>
          <a href="https://github.com/iamme24cl/" target="_blank" rel="noreferrer"><i className="fa fa-github-square w3-text-white w3-xxlarge w3-hover-opacity"></i></a>
      </div><br />
      <p className="w3-text-light-grey">Let's get in touch. Send me a message:</p>

      <form id="contact-form" onSubmit={handleSubmit}>
        <p><input value={name} onChange={e => setName(e.target.value)} className="w3-input w3-padding-16" type="text" placeholder="Name" required name="from_name" /></p>
        <p><input value={email} onChange={e => setEmail(e.target.value)} className="w3-input w3-padding-16" type="text" placeholder="Email" required name="from_email" /></p>
        <p><textarea value={message} onChange={e => setMessage(e.target.value)} className="w3-input w3-padding-16" placeholder="Message" required name="message" ></textarea></p>
        <p>
          <button type="submit" className="w3-button w3-light-grey w3-padding-large">
            <i className="fa fa-paper-plane"></i> SEND MESSAGE
          </button>
        </p>
      </form>
    </div>
  )
}

export default Contact;