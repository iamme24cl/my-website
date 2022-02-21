const Blogs = (props) => {
  return (
    <div id="blogs" className="w3-padding-16 w3-content" >
      <h2 className="w3-text-light-grey w3-center">Here are some of my writing for you.</h2>
      <hr style={{width: "100%"}} className="w3-opacity"/>

      <div className="w3-row-padding" style={{margin: "0 -16px"}}>
        <div className="w3-half w3-card-4">
          <a href="https://medium.com/@iamme24cl/what-is-rest-80b7250c9ade" target="_blank" rel="noreferrer"><img className="project-image" src="images/rest-api.png" style={{width: "100%", height: "300px"}} alt="REST api" /></a>
          <div className="w3-container">
            <a href="https://medium.com/@iamme24cl/what-is-rest-80b7250c9ade" target="_blank" rel="noreferrer">
              <h4 className="w3-center">
                What is REST Architecture?
              </h4>
            </a>
          </div>
        </div>

        <div className="w3-half w3-card-4">
          <a href="https://medium.com/@iamme24cl/javascript-promises-4b8e6d4315fe" target="_blank" rel="noreferrer"><img className="project-image" src="images/promises.png" style={{width: "100%", height: "300px"}} alt="javascript promises" /></a>
          <div className="w3-container">
          <a href="https://medium.com/@iamme24cl/javascript-promises-4b8e6d4315fe" target="_blank" rel="noreferrer">
            <h4 className="w3-center">
              An Overview on JavaScript Promises...
            </h4>
          </a>
          </div>
        </div>     
      </div>

      <hr style={{width: "100%"}} className="w3-opacity"/>

      <div className="w3-row-padding" style={{margin: "0 -16px"}}>
        <div className="w3-half w3-card-4">
          <a href="https://medium.com/@iamme24cl/a-quick-glance-at-depth-first-search-ba3aef09a2c0" target="_blank" rel="noreferrer"><img className="project-image" src="images/dfs.png" style={{width: "100%", height: "300px"}} alt="depth first search" /></a>
          <div className="w3-container">
            <a href="https://medium.com/@iamme24cl/a-quick-glance-at-depth-first-search-ba3aef09a2c0" target="_blank" rel="noreferrer">
              <h4 className="w3-center">
                A Quick Glace at Depth First Search.
              </h4>
            </a>
          </div>
        </div>

        <div className="w3-half w3-card-4">
          <a href="https://medium.com/@iamme24cl/the-four-basic-functions-crud-743cf2071db8" target="_blank" rel="noreferrer"><img className="project-image" src="images/crud.png" style={{width: "100%", height: "300px"}} alt="CRUD functions" /></a>
          <div className="w3-container">
          <a href="https://medium.com/@iamme24cl/the-four-basic-functions-crud-743cf2071db8" target="_blank" rel="noreferrer">
            <h4 className="w3-center">
              CRUD. The Four Basic Functions...
            </h4>
          </a>
          </div>
        </div>     
      </div>
      <hr style={{width: "100%"}} className="w3-opacity"/>
    </div>
  )
}

export default Blogs;