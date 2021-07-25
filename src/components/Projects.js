import React from 'react';

const Projects = () => {
  return (
    <div className="w3-padding-64 w3-content" id="projects">
      <h2 className="w3-text-light-grey w3-center">My Projects</h2>
      <hr style={{width: "100%"}} className="w3-opacity"/>

      {/* Grid for projects */}
      <div className="w3-row-padding" style={{margin: "0 -16px"}}>
        <div className="w3-half w3-card-4">
          <div className="project-image-container">
            <a href="https://iamme24cl.github.io/expense-tracker-frontend/" target="_blank"><img src="Screen Shot 2021-07-25 at 12.16.10 PM.png" style={{width: "100%"}} /></a>
            <div className="w3-container">
              <p className="w3-center">Keep track of your income and expenses! This is a small 
              one page application. The front end is built with vanilla JavaScript and fetches data 
              from api built with Ruby on Rails.</p>
            </div>
          </div>
          <hr style={{width: "100%"}} className="w3-opacity"/>
          <div className="project-image-container">
            <a href="https://www.youtube.com/watch?v=i3Q8Ns4z11o" target="_blank"><img src="Screen Shot 2021-07-25 at 1.25.15 PM.png" style={{width: "100%"}} /></a>
            <div className="w3-container">
              <p className="w3-center">This application manages recipes and ingredients for an account. User is also able to review and rate other recipes.</p>
            </div>
          </div>
          <hr style={{width: "100%"}} className="w3-opacity"/>
        </div>

        <div className="w3-half w3-card-4">
          <div className="project-image-container">
            <a href="https://my-invoices.netlify.app/" target="_blank"><img src="Screen Shot 2021-07-25 at 12.17.48 PM.png" style={{width: "100%"}} /></a>
            <div className="w3-container">
              <p className="w3-center">This application creates and manages Invoices for an account.</p>
            </div>
          </div>
          <hr style={{width: "100%"}} className="w3-opacity"/>
          <div className="project-image-container">
            <a href="https://www.youtube.com/watch?v=0dTVA8qC5XM" target="_blank"><img src="Screen Shot 2021-07-25 at 1.32.21 PM.png" style={{width: "100%"}} /></a>
            <div className="w3-container">
              <p className="w3-center">This is an app that lets you take notes of your 
              favorite wines. Take notes of wines in a pattern that sommeliers 
              or individuals in similar fields generally use.</p>
            </div>
          </div>
          <hr style={{width: "100%"}} className="w3-opacity"/>
        </div>
      {/* End photo grid  */}
      </div>
    </div>
  )
}

export default Projects;