import React from 'react';
import "./Projects.css"

const Projects = () => {
  return (
    <div className="w3-padding-16 w3-content" id="projects">
      <h2 className="w3-text-light-grey w3-center">Some Projects</h2>
      <hr style={{width: "100%"}} className="w3-opacity"/>

      {/* Grid for projects */}
      <div className="w3-row-padding" style={{margin: "0 -16px"}}>
        <div className="w3-half w3-card-4">
          <h3 className='w3-center project-header'>Portfolio</h3>
          <a href="https://portfolio-3fk.pages.dev/" target="_blank" rel="noreferrer">
            <img className="project-image" src="images/portfolio.jpg" style={{width: "100%", height: "300px"}} alt="movie land" />
          </a>
          <div className="w3-container">
            <p className="w3-center">
              An animated portfolio website created using React and Framer Motion.
            </p>
            <p className="w3-center">
              <a href="https://github.com/iamme24cl/portfolio" target="_blank" rel="noreferrer" className="github-link">
                <i className="fab fa-github"></i> GitHub Repository
              </a>
            </p>
          </div>
        </div>

        <div className="w3-half w3-card-4">
          <h3 className='w3-center project-header'>Chat App</h3>
          <a href="https://chatapp-b7p.pages.dev/" target="_blank" rel="noreferrer">
            <img className="project-image" src="images/chat-app.jpg" style={{width: "100%", height: "300px"}} alt="social media site" />
          </a>
          <div className="w3-container">
            <p className="w3-center">
              A chat application with real time notification features created using React and Google Firebase.
            </p>
            <p className="w3-center">
              <a href="https://github.com/iamme24cl/chatapp" target="_blank" rel="noreferrer" className="github-link">
                <i className="fab fa-github"></i> GitHub Repository
              </a>
            </p>
          </div>
        </div>     
      </div>

      <div className="w3-row-padding" style={{margin: "0 -16px"}}>
        <div className="w3-half w3-card-4">
          <h3 className='w3-center project-header'>MovieLand</h3>
          <a href="https://movie-land-app.pages.dev/" target="_blank" rel="noreferrer">
            <img className="project-image" src="images/movieland.jpg" style={{width: "100%", height: "300px"}} alt="movie land" />
          </a>
          <div className="w3-container">
            <p className="w3-center">
              A movie recommendation application that recommends movies based on user's movie ratings, filters movies by name and categories.
            </p>
            <p className="w3-center">
              <a href="https://github.com/yourusername/movie-recommender-app" target="_blank" rel="noreferrer" className="github-link">
                <i className="fab fa-github"></i> GitHub Repository
              </a>
            </p>
          </div>
        </div>

        <div className="w3-half w3-card-4">
          <h3 className='w3-center project-header'>sMedia</h3>
          <a href="https://smedia-app.pages.dev/" target="_blank" rel="noreferrer">
            <img className="project-image" src="images/smedia.jpg" style={{width: "100%", height: "300px"}} alt="social media site" />
          </a>
          <div className="w3-container">
            <p className="w3-center">
              A social media platform enabling users to post updates, comment on each other's posts, message other users in real-time.
            </p>
            <p className="w3-center">
              <a href="https://github.com/iamme24cl/smedia-app" target="_blank" rel="noreferrer" className="github-link">
                <i className="fab fa-github"></i> GitHub Repository
              </a>
            </p>
          </div>
        </div>     
      </div>

      <div className="w3-row-padding" style={{margin: "0 -16px"}}>
        <div className="w3-half w3-card-4">
          <h3 className='w3-center project-header'>Invoice Manager</h3>
          <a href="https://github.com/iamme24cl/invoices-backend" target="_blank" rel="noreferrer">
            <img className="project-image" src="images/invoices.jpg" style={{width: "100%", height: "300px"}} alt="invoice manager" />
          </a>
          <div className="w3-container">
            <p className="w3-center">
              Manage all your Invoices and Clients with this easy to use Invoice Manager web application.
            </p>
          </div>
        </div>

        <div className="w3-half w3-card-4">
          <h3 className='w3-center project-header'>Dynamic Job Search Site</h3>
          <a href="https://remoteokjobs.netlify.app/" target="_blank" rel="noreferrer">
            <img className="project-image" src="images/job-board.png" style={{width: "100%", height: "300px"}} alt="job search site" />
          </a>
          <div className="w3-container">
            <p className="w3-center">
              This React app fetches remote jobs from an api. You can search for jobs and apply various filters to your search.
            </p>
          </div>
        </div>     
      </div>
      <hr style={{width: "100%"}} className="w3-opacity"/>
    </div>
  )
}

export default Projects;
