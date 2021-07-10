import React from 'react';

const Projects = () => {
  return (
    <div className="w3-padding-64 w3-content" id="projects">
      <h2 className="w3-text-light-grey w3-center">My Projects</h2>
      <hr style={{width: "100%"}} className="w3-opacity"/>

      {/* Grid for projects */}
      <div className="w3-row-padding" style={{margin: "0 -16px"}}>
        <div className="w3-half w3-card-4">
          <img src="https://picsum.photos/id/0/150/150" style={{width: "100%"}} />
          <div className="w3-container">
            <p className="w3-center">This is my project.</p>
          </div>
          <hr style={{width: "100%"}} className="w3-opacity"/>
          <img src="https://picsum.photos/id/1033/150/150" style={{width: "100%"}} />
          <div className="w3-container">
            <p className="w3-center">This is my project.</p>
          </div>
          <hr style={{width: "100%"}} className="w3-opacity"/>
        </div>

        <div className="w3-half w3-card-4">
          <img src="https://picsum.photos/id/158/150/150" style={{width: "100%"}} />
          <div className="w3-container">
            <p className="w3-center">This is my project.</p>
          </div>
          <hr style={{width: "100%"}} className="w3-opacity"/>
          <img src="https://picsum.photos/id/1048/150/150" style={{width: "100%"}} />
          <div className="w3-container">
            <p className="w3-center">This is my project.</p>
          </div>
          <hr style={{width: "100%"}} className="w3-opacity"/>
        </div>
      {/* End photo grid  */}
      </div>
    </div>
  )
}

export default Projects;