import React from 'react';
import NavBar from './NavBar';
import Background from './Background';
import HomePage from './HomePage';
import About from './About';
import Projects from './Projects'
import Contact from './Contact'
import './App.css'

class App extends React.Component {
  
  componentDidMount() {
    setTimeout(() => {
      window.scrollTo({
        top: 500,
        left: 0,
        behavior: 'smooth'
      });
    }, 3000)
  }

  render () {
    return (
      <div>
        <NavBar />
        <div id="main">
          <Background />
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
