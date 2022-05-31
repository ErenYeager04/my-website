
import './App.css';

import React, {Component} from 'react'
import {
    BrowserRouter  as Router,
    Routes,
    Route,
    
} from 'react-router-dom'
import Home from './Pages/Home'
import Contact from "./Pages/Contact"
import Portfolio from "./Pages/Portfolio"
import ErrorPage from "./Pages/ErrorPage"
function App(){
  return(
    <Router>
      <nav>
        <div class="wrapper">
          <ul>
            <li><a href="/">Home page</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </Router>
  )
}


export default App;
