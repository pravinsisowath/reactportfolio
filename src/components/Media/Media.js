import React from 'react'

const Media = () => {
    return (
    <ul className="list-unstyled">
    <li className="media">
    <div className="media-body">
      <h5 className="mt-0 mb-1">Project #1: eSPACE</h5>
      A space education app dedicated to giving you the latest updates, news, and data about the universe.
      <br></br>
      <a href='https://liemnguyen0111.github.io/eSPACE/'>Check out eSPACE here.</a>
    </div>
    </li>
    <li className="media my-4"> 
    <div className="media-body">
      <h5 className="mt-0 mb-1">Project #2: notFacebook</h5>
      A social media app that lets your fellow classmates post updates, comments, and images to stay in touch with each other.
      <br></br>
      <a href='https://n0tfacebook.herokuapp.com/'>Sign up for notFacebook here.</a>
    </div>
    </li>
    <li className="media">
    <div className="media-body">
      <h5 className="mt-0 mb-1">Project #3: ErrorFlow</h5>
      An error forum that lets you post code that you're having trouble with, and lets people provide you with solutions.
      <br></br>
      Link coming soon!
    </div>
  </li>
</ul>
    )
}

export default Media