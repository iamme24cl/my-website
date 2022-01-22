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
          <a href="https://my-invoices.netlify.app/" target="_blank" rel="noreferrer"><h3 className='w3-center project-header'>Invoice Manager</h3></a>
          <a href="https://my-invoices.netlify.app/" target="_blank" rel="noreferrer"><img className="project-image" src="images/invoices.jpg" style={{width: "100%", height: "300px"}} alt="invoices" /></a>
          <div className="w3-container">
            <p className="w3-center">A single page application with React and Redux front end that creates and manages Invoices for an Account.
              User can also filter their invoices by Client name and Invoice description.</p>
          </div>
        </div>

        <div className="w3-half w3-card-4">
          <a href="https://iamme24cl.github.io/expense-tracker-frontend/" target="_blank" rel="noreferrer"><h3 className='w3-center project-header'>Expense Tracker</h3></a>
          <a href="https://iamme24cl.github.io/expense-tracker-frontend/" target="_blank" rel="noreferrer"><img className="project-image" src="images/expense-tracker.jpg" style={{width: "100%", height: "300px"}} alt="expense-tracker" /></a>
          <div className="w3-container">
            <p className="w3-center">Keep track of your income and expenses! This is a small
            one page application. The front end is built with vanilla JavaScript and fetches data
            from api built with Ruby on Rails.</p>
          </div>
        </div>
      </div>

      <div className="w3-row-padding" style={{margin: "0 -16px"}}>
        <div className="w3-half w3-card-4">
          <a href="https://my-recipes-2020.herokuapp.com/" target="_blank" rel="noreferrer"><h3 className='w3-center project-header'>Customer Relationship Manager</h3></a>
          <a href="https://my-recipes-2020.herokuapp.com/" target="_blank" rel="noreferrer"><img className="project-image" src="images/crm.png" style={{width: "100%", height: "300px"}} alt="recipe-manager" /></a>
          <div className="w3-container">
            <p className="w3-center">Recipe manager app with user account functionality that lets you rate and review recipes and filter recipes.
            User has many recipes and can create new or add an existing recipe and manage their recipes list.</p>
          </div>
        </div>

        <div className="w3-half w3-card-4">
          <a href="https://www.youtube.com/watch?v=0dTVA8qC5XM" target="_blank" rel="noreferrer"><h3 className='w3-center project-header'>Chat Application</h3></a>
          <a href="https://www.youtube.com/watch?v=0dTVA8qC5XM" target="_blank" rel="noreferrer"><img className="project-image" src="images/chat.png" style={{width: "100%", height: "300px"}} alt="wine-notes" /></a>
          <div className="w3-container">
            <p className="w3-center">Ruby application built on Sinatra framework. This is a wine journal app that lets you take notes on your favorite
              wines and save them to your account. You are also able to view other members wines and see what they are
              drinking.
            </p>
          </div>
        </div>
      </div>


      <div className="w3-row-padding" style={{margin: "0 -16px"}}>
        <div className="w3-half w3-card-4">
          <a href="https://my-recipes-2020.herokuapp.com/" target="_blank" rel="noreferrer"><h3 className='w3-center project-header'>Recipe Manager</h3></a>
          <a href="https://my-recipes-2020.herokuapp.com/" target="_blank" rel="noreferrer"><img className="project-image" src="images/recipes.png" style={{width: "100%", height: "300px"}} alt="recipe-manager" /></a>
          <div className="w3-container">
            <p className="w3-center">Recipe manager app with user account functionality that lets you rate and review recipes and filter recipes.
            User has many recipes and can create new or add an existing recipe and manage their recipes list.</p>
          </div>
        </div>

        <div className="w3-half w3-card-4">
          <a href="https://www.youtube.com/watch?v=0dTVA8qC5XM" target="_blank" rel="noreferrer"><h3 className='w3-center project-header'>Wine Notes</h3></a>
          <a href="https://www.youtube.com/watch?v=0dTVA8qC5XM" target="_blank" rel="noreferrer"><img className="project-image" src="images/wine-notes.png" style={{width: "100%", height: "300px"}} alt="wine-notes" /></a>
          <div className="w3-container">
            <p className="w3-center">Ruby application built on Sinatra framework. This is a wine journal app that lets you take notes on your favorite
              wines and save them to your account. You are also able to view other members wines and see what they are
              drinking.
            </p>
          </div>
        </div>
      </div>

      <hr style={{width: "100%"}} className="w3-opacity"/>
    </div>
  )
}

export default Projects;
