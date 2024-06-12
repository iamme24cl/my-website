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

      <div className="w3-row-padding" style={{margin: "0 -16px"}}>
        <div className="w3-half w3-card-4">
          <h3 className='w3-center project-header'>E-Commerce Fashion Store</h3>
          <a href="https://github.com/iamme24cl/three-fashion" target="_blank" rel="noreferrer">
            <img className="project-image" src="images/three-fashion-home.png" style={{width: "100%", height: "300px"}} alt="three-fashion store" />
          </a>
          <div className="w3-container">
            <p className="w3-center">
              E-commerce Shopify Fashion store with fully customized and interactive store theme.
            </p>
          </div>
        </div>

        <div className="w3-half w3-card-4">
          <h3 className='w3-center project-header'>Chat Application</h3>
          <a href="https://github.com/iamme24cl/messenger-6483" target="_blank" rel="noreferrer">
            <img className="project-image" src="images/chat.png" style={{width: "100%", height: "300px"}} alt="chat application" />
          </a>
          <div className="w3-container">
            <p className="w3-center">
              Live chat application with friends list and real-time notification features. 
            </p>
          </div>
        </div>
      </div>

      <hr style={{width: "100%"}} className="w3-opacity"/>
    </div>
  )
}

export default Projects;
