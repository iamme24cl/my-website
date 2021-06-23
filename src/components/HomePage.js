import React from 'react';

const HomePage = () => {
  return (
    <div>
      {/* <!-- Page Content --> */}
      <div className="w3-padding-large" id="main">
        {/* <!-- Header/Home --> */}
        <header className="w3-container w3-padding-32 w3-center w3-black" id="home">
          <h1 className="w3-jumbo"><span className="w3-hide-small">I'm</span> Chandra Lama.</h1>
          <p>FullStack Software Developer.</p>
          <img src="Photo_1619833647159_Processed.png" alt="boy" className="w3-image" width="992" height="1108" />
        </header>
      </div>
    </div>
  );
}

export default HomePage;