import React from 'react';
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import Media from './components/Media'
import './App.css';

function App() {
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

export default App;
