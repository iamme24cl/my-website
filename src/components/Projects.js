import React from 'react';
import "./Projects.css"

const Projects = () => {
  return (
    <div className="w3-padding-16 w3-content" id="projects">
      <h2 className="w3-text-light-grey w3-center">Some of my Work</h2>
      <hr style={{width: "100%"}} className="w3-opacity"/>

      {/* Grid for projects */}
      <div className="w3-row-padding" style={{margin: "0 -16px"}}>
        <div className="w3-half w3-card-4">
          <a href="https://github.com/iamme24cl/invoices-frontend" target="_blank" rel="noreferrer"><h3 className='w3-center project-header'>Invoice Manager</h3></a>
          <a href="https://my-invoices.netlify.app/" target="_blank" rel="noreferrer"><img className="project-image" src="images/invoices.jpg" style={{width: "100%", height: "300px"}} alt="invoices" /></a>
          <div className="w3-container">
            <p className="w3-center">
              Manage all your Invoices and Clients with this easy to use Invoice Manager web application.
            </p>
          </div>
        </div>

        <div className="w3-half w3-card-4">
          <a href="https://github.com/iamme24cl/messenger-6483" target="_blank" rel="noreferrer"><h3 className='w3-center project-header'>Chat Application</h3></a>
          <a href="https://github.com/iamme24cl/messenger-6483" target="_blank" rel="noreferrer"><img className="project-image" src="images/chat.png" style={{width: "100%", height: "300px"}} alt="wine-notes" /></a>
          <div className="w3-container">
            <p className="w3-center">
              Live chat application with friends list and real-time notification features. 
            </p>
          </div>
        </div>
      </div>

      <div className="w3-row-padding" style={{margin: "0 -16px"}}>
        <div className="w3-half w3-card-4">
          <a href="https://github.com/iamme24cl/rails-react-crm-front-end" target="_blank" rel="noreferrer"><h3 className='w3-center project-header'>Customer Relationship Manager</h3></a>
          <a href="https://rails-react-crm.netlify.app/" target="_blank" rel="noreferrer"><img className="project-image" src="images/crm.png" style={{width: "100%", height: "300px"}} alt="customer-realtionship-manager" /></a>
          <div className="w3-container">
            <p className="w3-center">
              Gracefully manage Prospects and Sale flow with this Full Stack Customer Relationship Management application. 
            </p>
          </div>
        </div>

        <div className="w3-half w3-card-4">
          <a href="https://github.com/iamme24cl/expense-tracker-frontend" target="_blank" rel="noreferrer"><h3 className='w3-center project-header'>Expense Tracker</h3></a>
          <a href="https://iamme24cl.github.io/expense-tracker-frontend/" target="_blank" rel="noreferrer"><img className="project-image" src="images/expense-tracker.jpg" style={{width: "100%", height: "300px"}} alt="expense-tracker" /></a>
          <div className="w3-container">
            <p className="w3-center">
              Keep track of your income and expenses with this simple one page application.</p>
          </div>
        </div>
      </div>


      <div className="w3-row-padding" style={{margin: "0 -16px"}}>
        <div className="w3-half w3-card-4">
          <a href="https://github.com/iamme24cl/Recipes" target="_blank" rel="noreferrer"><h3 className='w3-center project-header'>Recipe Manager</h3></a>
          <a href="https://my-recipes-2020.herokuapp.com/" target="_blank" rel="noreferrer"><img className="project-image" src="images/recipes.png" style={{width: "100%", height: "300px"}} alt="recipe-manager" /></a>
          <div className="w3-container">
            <p className="w3-center">
              Save & Keep track of all your favorite Recipes in one place using this Recipe Manager application.
            </p>
          </div>
        </div>

        <div className="w3-half w3-card-4">
          <a href="https://github.com/iamme24cl/mero-winenotes" target="_blank" rel="noreferrer"><h3 className='w3-center project-header'>Wine Notes</h3></a>
          <a href="https://www.youtube.com/watch?v=0dTVA8qC5XM" target="_blank" rel="noreferrer"><img className="project-image" src="images/wine-notes.png" style={{width: "100%", height: "300px"}} alt="wine-notes" /></a>
          <div className="w3-container">
            <p className="w3-center">
              Tired of trying to remember what your favorite wines tasted like?
              Store all your tasting notes and easily access them all in one place with this Wine Notes application.
            </p>
          </div>
        </div>
      </div>

      <hr style={{width: "100%"}} className="w3-opacity"/>
    </div>
  )
}

export default Projects;
