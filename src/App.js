import React from 'react';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import About from './components/About';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import './App.css';

class App extends React.Component {
  
  render () {
    return (
      <div>
        <NavBar />
        <div id="main">
          <HomePage />
          <About />
          <Projects />
          <Blogs />
          <Contact />
        </div>
      </div>
    );
  }
}



export default App;