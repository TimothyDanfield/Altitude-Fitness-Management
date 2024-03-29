import React from 'react'
import './affiliations.css'
import { useMediaQuery } from 'react-responsive';

const Affiliations = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1023px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });


  return (
    <div className={`affiliations ${isMobile ? 'mobile' : ''} ${isTablet ? 'tablet' : ''} ${isDesktop ? 'desktop' : ''}`}>
      <div className="vendors">
        <h1 className='affiliations-title'>
          <div>
            <span style={{ borderBottom: '1px solid white', fontSize: '2.5rem' }}>Aff</span>
            <span style={{ fontSize: '2.5rem' }}>iliations</span>
          </div>
          <div>
            <span style={{ fontSize: '2.5rem' }}>&ensp;and&ensp;Vendors</span>
          </div>
        </h1>
      </div>
      <ul className="aff">
        <li>
          <a href="https://www.ncsf.org/" target="_blank" rel="noopener noreferrer">
            <div className="banner1">
              <img src="/Pictures/NCSF-National-Council-on-Strength-Fitness-1024x387-removebg-preview.png" alt="" />
            </div>
          </a>
        </li>
        <li>
          <a href="https://www.fbafitness.com/" target="_blank" rel="noopener noreferrer">
            <div className="banner2">
              <img src="/Pictures/fba.png" alt="" />
            </div>
          </a>
        </li>
        <li>
          <a href="https://www.ihrsa.org/" target="_blank" rel="noopener noreferrer">
            <div className="banner3">
              <img src="/Pictures/ihrsa.png" alt="" />
            </div>
          </a>
        </li>
        <li>
          <a href="https://www.roguefitness.com/" target="_blank" rel="noopener noreferrer">
            <div className="banner4">
              <img src="/Pictures/rogue-og-removebg-preview.png" alt="" />
            </div>
          </a>
        </li>
        <li>
          <a href="https://www.lifefitness.com/en-us" target="_blank" rel="noopener noreferrer">
            <div className="banner5">
              <img src="/Pictures/lifefitness.png" alt="" />
            </div>
          </a>
        </li>
        <li>
          <a href="https://www.precor.com/" target="_blank" rel="noopener noreferrer">
            <div className="banner6">
              <img src="/Pictures/pecor.png" alt="" />
            </div>
          </a>
        </li>
        <li>
          <a href="https://eleiko.com/en" target="_blank" rel="noopener noreferrer">
            <div className="banner7">
              <img src="/Pictures/eleiko.png" alt="" />
            </div>
          </a>
        </li>
        <li>
          <a href="/getstarted" target="_blank" className="getStartedLink" rel="noopener noreferrer">
            <button className="seeAll">Get Started Now</button>
          </a>
        </li>
      </ul>

      <div className="logos"></div>
    </div>
  )
}

export default Affiliations
