import React from 'react';
import "./Projects.css"

const Projects = () => {
  return (
    <div className="w3-padding-64 w3-content" id="projects">
      <h2 className="w3-text-light-grey w3-center">A Few Things I Built</h2>
      <hr style={{width: "100%"}} className="w3-opacity"/>

      {/* Grid for projects */}
      <div className="w3-row-padding" style={{margin: "0 -16px"}}>
        <div className="w3-half w3-card-4">
          <div className="project-image-container">
            <a href="https://iamme24cl.github.io/expense-tracker-frontend/" target="_blank" rel="noreferrer"><img className="project-image" src="Screen Shot 2021-07-25 at 12.16.10 PM.png" style={{width: "100%"}} alt="expense-tracker" /></a>
            <div className="w3-container">
              <p className="w3-center">Keep track of your income and expenses! This is a small 
              one page application. The front end is built with vanilla JavaScript and fetches data 
              from api built with Ruby on Rails.</p>
            </div>
          </div>
          <hr style={{width: "100%"}} className="w3-opacity"/>
          <div className="project-image-container">
            <a href="https://www.youtube.com/watch?v=i3Q8Ns4z11o" target="_blank" rel="noreferrer"><img className="project-image" src="Screen Shot 2021-07-25 at 1.25.15 PM.png" style={{width: "100%"}} alt="recipe-manager" /></a>
            <div className="w3-container">
              <p className="w3-center">Recipe manager app with user account functionality that lets you rate and review recipes and filter recipes.
                User has many recipes and can create new or add an existing recipe and manage their recipes list.</p>
            </div>
          </div>
          <hr style={{width: "100%"}} className="w3-opacity"/>
        </div>

        <div className="w3-half w3-card-4">
          <div className="project-image-container">
            <a href="https://my-invoices.netlify.app/" target="_blank" rel="noreferrer"><img className="project-image" src="Screen Shot 2021-07-25 at 12.17.48 PM.png" style={{width: "100%"}} alt="invoices" /></a>
            <div className="w3-container">
              <p className="w3-center">A single page application with React and Redux front end that creates and manages Invoices for an Account. 
                User can also filter their invoices by Client name and Invoice description.</p>
            </div>
          </div>
          <hr style={{width: "100%"}} className="w3-opacity"/>
          <div className="project-image-container">
            <a href="https://www.youtube.com/watch?v=0dTVA8qC5XM" target="_blank" rel="noreferrer"><img className="project-image" src="Screen Shot 2021-07-25 at 1.32.21 PM.png" style={{width: "100%"}} alt="mero-wine-notes" /></a>
            <div className="w3-container">
              <p className="w3-center">Ruby application built on Sinatra framework. This is a wine journal app that lets you take notes on your favorite wines and save them to your account. 
                You are also able to view other members wines and see what they are drinking and what they think about those wines. Account authentication is implemented using gem 'bcrypt'</p>
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