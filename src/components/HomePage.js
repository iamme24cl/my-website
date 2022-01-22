import React from 'react';
import "./HomePage.css";

const HomePage = () => {
  return (
    <div id="home" className="w3-padding-large">
      <header className="w3-container w3-padding-32 w3-center w3-black" id="home">
        <h1 className="w3-jumbo main-header"><span>Hi!<span className="wave"> 👋</span> I'm</span> Chandra Lama.<span>&#128512;</span></h1>
        <p>Your expert partner for deluxe Web Development experiences.</p>

        <img src="images/software-engineers-vector.png" alt="chandra lama" className="w3-image my-image" width="450" height="650" />
      </header>
    </div>
  );
}

export default HomePage;