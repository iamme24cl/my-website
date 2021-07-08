import React from 'react';

const Projects = () => {
  return (
    <div className="w3-padding-64 w3-content" id="projects">
      <h2 className="w3-text-light-grey">My Projects</h2>
      <hr style={{width: "200px"}} className="w3-opacity"/>

      {/* Grid for projects */}
      <div className="w3-row-padding" style={{margin: "0 -16px"}}>
        <div className="w3-half">
          <img src="" style={{width: "100%"}} />
          <img src="" style={{width: "100%"}} />
          <img src="" style={{width: "100%"}} />
        </div>

        <div className="w3-half">
          <img src="" style={{width: "100%"}} />
          <img src="" style={{width: "100%"}} />
          <img src="" style={{width: "100%"}} />
          <img src="" style={{width: "100%"}} />
        </div>
      {/* End photo grid  */}
      </div>
    </div>
  )
}

export default Projects;