import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import './footer.css'

const Footer = () => {
  return (

    <div className='footer__container'>
      <div className='box'>
        <h1>SIGN UP FOR ALTITUDE'S NEWSLETTER</h1>
        <form>
          <input type='text' name='' placeholder='Enter email address...'></input>
          <input type='submit' name='' value='SUBSCRIBE'></input>
        </form>
      </div>

        <div className='logo_1'>
            <img src='/Pictures/Altitude Fitness Management SD1 Logo.png' alt='Logo'></img>
        </div>

        <div className='social_icons'>
        <a href="https://www.instagram.com/">
    <FontAwesomeIcon icon={faInstagram} className='social__icon--link' />
  </a>
  <a href="https://www.youtube.com/">
  <FontAwesomeIcon icon={faYoutube} className='social__icon--link' />
</a>
<a href="https://www.linkedin.com/">
  <FontAwesomeIcon icon={faLinkedin} className='social__icon--link' />
</a>
      <a href="https://twitter.com/">
  <FontAwesomeIcon icon={faTwitter}  className='social__icon--link'/>
</a> 
        </div>

        <div className='footer__link--wrapper'>
        <div className='footer__link--items'>
            <h2>About us</h2>
            <a href="/Terms.js" target="_blank" >Terms</a>
            <a href="https://payhip.com/AltitudeMgmtIntl" target="_blank">Altitude Shop</a>
            <a href="https://altitude-media-group.breezy.hr/" target="_blank">Location</a>
            <a href="https://payhip.com/AltitudeMgmtIntl" target="_blank">Privacy policy</a>
            </div>
        
        <div className="footer__link--items">
            <h2>Contact Us</h2>
            <a href="https://payhip.com/AltitudeMgmtIntl/contact" target="_blank">Contact</a>
            <a href="https://payhip.com/AltitudeMgmtIntl/contact" target="_blank">Support</a>
            <a href="https://payhip.com/AltitudeMgmtIntl/contact" target="_blank">Destinations</a>
          </div>

          <div className="footer__link--items">
            <h2>Social</h2>
            <a href="https://www.instagram.com/altitudefitmgmt/">Instagram</a>
            <a
              href="https://www.linkedin.com/company/altitudefitlife-mgmt/people/"
              >LinkedIn</a>
            <a href="https://twitter.com/AltitudeMgmtInt">Twitter</a>
            <a href="https://www.fitmolife.com/">FitMoLife</a>
          </div>
          </div>

        <div className="sponsors">
          <p>IN PARTNERSHIP WITH</p>
          <a href="https://www.fbafitness.com/content/fitness-business-association-1">
            <img className="img1" src="/Pictures/fba-logo5-1024x614.png" alt="Sponsor 2"></img>
          </a>
          <a href="https://www.ihrsa.org/">
            <img className="img2" src="/Pictures/sponor-removebg-preview.png" alt="Sponsor 1"></img>
          </a>
        </div>

        <section className="footer_p_2">
        <p className="website__rights">
          © 2023 Altitude Management International, a registered Altitudewebsite__rights
        </p>
        <p className="website__rights">
          Enterprises Company. All rights reserved
        </p>
        {/* <p class=""> Altitude Enterprises, LLC | 500 7th Avenue | Suite 12B111 | </p>
        <p class="website__rights"> New York, NY | 10018</p>
        <p class="website__rights"> Corporate: (646) 974-8678 | General: (646) 974-8677</p>
        <p class="website__rights"> FEIN: 852758695 | NYCR: 00450656</p> */}
      </section>
      </div>
  )
}

export default Footer