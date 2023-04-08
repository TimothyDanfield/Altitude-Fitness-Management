import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import React, { useState } from 'react'
import axios from '../../../utils/axiosConfig'
import toast, { Toaster } from 'react-hot-toast'
import './footer.css'

const Footer = () => {
  const [email, setEmail] = useState()
  const [success, setSuccess] = useState()
  const [error, setError] = useState()

  const emailChange = (e) => {
    setSuccess('')
    setError('')
    setEmail(e.target.value)
  }

  const subscribe = async (e) => {
    e.preventDefault()
    try {
      const newSubscribe = await axios.post('/newsletter', { email })
      setSuccess(newSubscribe.data.success)
      toast.success(newSubscribe.data.success)
      setEmail('')
    } catch (error) {
      setError(error.response.data.error)
      toast.error(error.response.data.error)
      setEmail('')
    }
  }
  
  return (

    <div className='footer__container'>
      <div className='box'>
        <h1>SIGN UP FOR ALTITUDE'S NEWSLETTER</h1>
        <form>
          <input className='footer-input' type='text' value={email} onChange={(e) => emailChange(e)} name='' placeholder='Enter email address...'></input>
          <input className='footer-input' type='submit' name='' onClick={subscribe} value='SUBSCRIBE'></input>
        </form>
      </div>

      <div className='logo_1'>
        <img src='/Pictures/Altitude Fitness Management SD1 Logo.png' alt='Logo'></img>
      </div>

      <div className='social_icons'>
        <a href="https://www.instagram.com/" target='_blank' rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className='social__icon--link' />
        </a>
        <a href="https://www.youtube.com/" target='_blank' rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} className='social__icon--link' />
        </a>
        <a href="https://www.linkedin.com/" target='_blank' rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className='social__icon--link' />
        </a>
        <a href="https://twitter.com/" target='_blank' rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} className='social__icon--link' />
        </a>
      </div>

      <div className='footer__link--wrapper'>
        <div className='footer__link--items'>
            <h2>About us</h2>
            <a href="/termsofservice" target="_blank" >Terms</a>
            <a href="https://payhip.com/AltitudeMgmtIntl" target="_blank" rel="noopener noreferrer">Altitude Shop</a>
            <a href="https://altitude-media-group.breezy.hr/" target="_blank" rel="noopener noreferrer">Location</a>
            <a href="https://payhip.com/AltitudeMgmtIntl" target="_blank" rel="noopener noreferrer">Privacy policy</a>
            <a href="https://altitude-media-group.breezy.hr/" target="_blank" rel="noopener noreferrer">Carrers</a>
            </div>
        
        <div className="footer__link--items">
          <h2>Contact Us</h2>
          <a href="https://payhip.com/AltitudeMgmtIntl/contact" target="_blank" rel="noopener noreferrer">Contact</a>
          <a href="https://payhip.com/AltitudeMgmtIntl/contact" target="_blank" rel="noopener noreferrer">Support</a>
          <a href="https://payhip.com/AltitudeMgmtIntl/contact" target="_blank" rel="noopener noreferrer">Destinations</a>
        </div>

        <div className="footer__link--items">
          <h2>Social</h2>
          <a href="https://www.instagram.com/altitudefitmgmt/" target='_blank' rel="noopener noreferrer">Instagram</a>
          <a
            href="https://www.linkedin.com/company/altitudefitlife-mgmt/people/" target='_blank' rel="noopener noreferrer"
          >LinkedIn</a>
          <a href="https://twitter.com/AltitudeMgmtInt" target='_blank' rel="noopener noreferrer">Twitter</a>
          <a href="https://www.fitmolife.com/" target='_blank' rel="noopener noreferrer">FitMoLife</a>
        </div>
      </div>

      <div className="sponsors">
        <p>IN PARTNERSHIP WITH</p>
        <a href="https://www.fbafitness.com/content/fitness-business-association-1" target='_blank' rel="noopener noreferrer">
          <img className="img1" src="/Pictures/fba-logo5-1024x614.png" alt="Sponsor 2"></img>
        </a>
        <a href="https://www.ihrsa.org/">
          <img className="img2" src="/Pictures/sponor-removebg-preview.png" target='_blank' rel="noopener noreferrer" alt="Sponsor 1"></img>
        </a>
      </div>

      <div class="signatures">
        <p class="signText">Designed by the Altitude Fitness Development Team</p>
        <img src="/Pictures/MicrosoftTeams-image__7_-removebg-preview.png" class="sign2"></img>
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
      <Toaster />
    </div>
  )
}

export default Footer