import React from 'react'
import {
  Switch,
  Link,
  Route,
  BrowserRouter as Router
} from 'react-router-dom'
import PageOne from './pages/PageOne'
import PageTwo from './pages/PageTwo'
import PageThree from './pages/PageThree'
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
