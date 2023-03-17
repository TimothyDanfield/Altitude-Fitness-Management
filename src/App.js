import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './index.scss'
import NavBar from './Packages/client/NavBar/NavBar'
import AboutUs from "./Packages/client/About/AboutUs"
import Home from "./Packages/client/Home/Home"
import BusinessConsultation from './Packages/client/BusinessConsultation/BusinessConsultation'
import Services from './Packages/client/Services/Services'
import PodCast from './Packages/client/PodCast/PodCast'
import Team from './Packages/client/Team/Team'
import Marketing from './Packages/client/Marketing/Marketing'
import Footer from './Packages/client/Footer/Footer'

const App = () => {

  


  return (
    <div>
    <NavBar />
     <Routes>
      <Route exact path='/' element={<Home />}/>
      <Route exact path='/home' element={<Home />}/>
      <Route exact path='/about' element={<AboutUs />}/>
      <Route exact path='/podcast' element={<PodCast />}/>
      <Route exact path='/businessconsultation' element={<BusinessConsultation />}/>
      <Route exact path='/marketing' element={<Marketing />}/>
      <Route exact path='/services' element={<Services />}/>
      <Route exact path='/ourteam' element={<Team />}/>
     </Routes>
     <Footer />
    </div>
  )
}

export default App
