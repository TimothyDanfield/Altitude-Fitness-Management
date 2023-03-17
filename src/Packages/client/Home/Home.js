import React from 'react'
import './home.css'
const Home = () => {
  return (
    <div class="wrapper">
      <div class="cols cols0">
    <h1 class="text">
    <span className='multiText'>ALTITUDE</span>
    </h1>
    <p class="text">
    <span className='multiText_2'>FITNESS MANAGEMENT</span>
    </p>
      <video style= {{width:"100%", height: "100%"}}  className='video' autoPlay loop muted  src="/Pictures/Gym Example Compressed mp4.mp4">
      </video>
    </div>
    </div>
  )
}

export default Home