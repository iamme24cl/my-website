import React from 'react';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import About from './components/About';
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timer: null
    }
  }
  
  componentDidMount() {
    this.state.timer = setTimeout(() => {
      window.scrollTo({
        top: 500,
        left: 0,
        behavior: 'smooth'
      });
    }, 3000)
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

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
