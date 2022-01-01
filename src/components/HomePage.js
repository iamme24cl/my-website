import React from 'react';
import "./HomePage.css";

const HomePage = () => {
  return (
    <div id="home" className="w3-padding-large">
      <header className="w3-container w3-center w3-black w3-row" id="home">
        <h1 className="w3-jumbo w3-mobile" id="greeting"><span>Hi!<span className="wave"> 👋</span> I'm</span> Chandra Lama.<span>&#128512;</span></h1>
        <p>FullStack Software Developer.</p>
        <img src="images/software-engineers-vector.png" alt="chandra lama" className="w3-image my-image" width="450" height="650" />
      </header>
    </div>
  );
}

export default HomePage;