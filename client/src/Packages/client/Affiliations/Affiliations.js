import React from 'react'
import './affiliations.css'

const Affiliations = () => {
  return (
    <section className="affiliations">
      <ul className="aff">
      <div className="vendors">
        <h1>
          <span style={{ borderBottom: '1px solid black', fontSize: '3rem' }}>Aff</span>
          <span style={{ fontSize: '3rem' }}>iliations and Vendors</span>
        </h1>
      </div>
        <li>
          <a href="https://www.ncsf.org/" target="_blank">
            <div className="banner1">
              <img src="/Pictures/NCSF-National-Council-on-Strength-Fitness-1024x387-removebg-preview.png" alt="" />
            </div>
          </a>
        </li>
        <li>
          <a href="https://www.fbafitness.com/" target="_blank">
            <div className="banner2">
              <img src="/Pictures/fba.png" alt="" />
            </div>
          </a>
        </li>
        <li>
          <a href="https://www.ihrsa.org/" target="_blank">
            <div className="banner3">
              <img src="/Pictures/ihrsa.png" alt="" />
            </div>
          </a>
        </li>
        <li>
          <a href="https://www.roguefitness.com/" target="_blank">
            <div className="banner4">
              <img src="/Pictures/rogue-og-removebg-preview.png" alt="" />
            </div>
          </a>
        </li>
        <li>
          <a href="https://www.lifefitness.com/en-us" target="_blank">
            <div className="banner5">
              <img src="/Pictures/lifefitness.png" alt="" />
            </div>
          </a>
        </li>
        <li>
          <a href="https://www.precor.com/" target="_blank">
            <div className="banner6">
              <img src="/Pictures/pecor.png" alt="" />
            </div>
          </a>
        </li>
        <li>
          <a href="https://eleiko.com/en" target="_blank">
            <div className="banner7">
              <img src="/Pictures/eleiko.png" alt="" />
            </div>
          </a>
        </li>
        <li>
          <a href="/getstarted" target="_blank" className="getStartedLink">
            <button className="seeAll">Get Started Now</button>
          </a>
        </li>
      </ul>

      <div className="logos"></div>
    </section>
  )
}

export default Affiliations
