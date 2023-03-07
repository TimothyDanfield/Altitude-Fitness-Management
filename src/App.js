import React from 'react'
import { Routes, Route } from 'react-router-dom'
import "./App.css"
import NavBar from './Packages/client/NavBar/NavBar'
import AboutUs from "./Packages/client/About/AboutUs"
import Home from "./Packages/client/Home/Home"
import BusinessConsultation from './Packages/client/BusinessConsultation/BusinessConsultation'
import Services from './Packages/client/Services/Services'

const App = () => {

  


  return (
    <div>
    <NavBar />
     <Routes>
      <Route exact path='home' element={<Home />}/>
      <Route exact path='about' element={<AboutUs />}/>
      <Route exact path='businessconsultation' element={<BusinessConsultation />}/>
      <Route exact path='sercives' element={<Services />}/>
     </Routes>
    </div>
  )
}

export default App
