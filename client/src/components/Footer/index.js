import React from 'react'
// , { useState }
import './footer.css'



export default function Footer () {

  return (
    <footer>
      <div className="container-wrapper">
        <div className="github-link">
          <h4 className="title-sm">GitHub Code</h4>
          {/* <Link to="URL" target="_blank"></Link> */}
          <a 
           // link to hw
            href="https://github.com/awwmicky"
            // href="https://github.com/books-search"
            // target="_blank" 
            title="GitHub Profile" 
            className="github-icon"
          ><i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );

}