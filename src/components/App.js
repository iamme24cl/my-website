import React from 'react';
import NavBar from './NavBar';
import HomePage from './HomePage';
import About from './About';
import Projects from './Projects'
import Contact from './Contact'
import './App.css'

class App extends React.Component {
  
  render () {
    return (
      <div>
        <NavBar />
        <div id="main">
          <HomePage />
          <About />
          <Projects />
          <Contact />

        </div>
      </div>
    );
  }
}



export default App;
