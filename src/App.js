import React from 'react';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import About from './components/About';

class App extends React.Component {

  render () {
    return (
      <div>
        <NavBar />
        <HomePage />
        <About />
      </div>
    );
  }
}



export default App;
