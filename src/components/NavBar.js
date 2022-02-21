import React from 'react';
import "./NavBar.css"

const NavBar = () => {
  return (
    <div>
      {/* <!-- Icon Bar (Sidebar - hidden on small screens) --> */}
      <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
        {/* <!-- Avatar image in top left corner --> */}
        <img src="images/chandra-red-shirt.png" className="nav-bar-img" alt="user-avatar"/>
        <a href="#home" className="w3-bar-item w3-button w3-padding-large w3-black">
          <i className="fa fa-home w3-xxlarge"></i>
          <p>HOME</p>
        </a>
        <a href="#about" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
          <i className="fa fa-user w3-xxlarge"></i>
          <p>ABOUT</p>
        </a>
        <a href="#projects" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
          <i className="fa fa-eye w3-xxlarge"></i>
          <p>Projects</p>
        </a>
        <a href="#blogs" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
          <i className="fa fa-newspaper-o w3-xxlarge"></i>
          <p>Blogs</p>
        </a>
        <a href="#contact" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
          <i className="fa fa-envelope w3-xxlarge"></i>
          <p>CONTACT</p>
        </a>
      </nav>

      {/* <!-- Navbar on small screens (Hidden on medium and large screens) --> */}
      <div className="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
        <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
          <a href="#home" className="w3-bar-item w3-button" style={{ width: "20%"}}>HOME</a>
          <a href="#about" className="w3-bar-item w3-button" style={{width:'20%'}}>ABOUT</a>
          <a href="#projects" className="w3-bar-item w3-button" style={{width:'20%'}}>PROJECTS</a>
          <a href="#blogs" className="w3-bar-item w3-button" style={{width:'20%'}}>Blogs</a>
          <a href="#contact" className="w3-bar-item w3-button" style={{width:'20%'}}>CONTACT</a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;