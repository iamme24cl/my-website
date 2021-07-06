import React from 'react';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import About from './components/About';
import Projects from './components/Projects'
import Contact from './components/Contact'
import './styles.css'

class App extends React.Component {

  render () {
    return (
      <div>
        <NavBar />
        <HomePage />
        <About />
        <Projects />
      </div>
    );
  }
}



export default App;
