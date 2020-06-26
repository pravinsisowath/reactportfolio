import React from 'react'
import Jumbotron from '../../components/Jumbotron'
import Media from '../../components/Media'
import Navbar from '../../components/Navbar'

const PageTwo = () => {
  return (
    <>
    <Navbar />
    <div className="container">
      <div classname="row">
        <br></br>
    <Jumbotron />
    <Media />
      </div>
    </div>
    </>
  )
}

export default PageTwo