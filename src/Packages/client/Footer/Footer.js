import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div>
        <div className='logo'>
            <img src='/public/Pictures/'></img>
        </div>
        <div className='social_icons'>
        <a href="https://www.instagram.com/altitudefitmgmt/" class="social__icon--link"><i class="fab fa-instagram"></i></a>
      <a href="https://www.youtube.com/@fitmolife" class="social__icon--link"><i class="fab fa-youtube"></i></a>
      <a href="https://www.linkedin.com/company/altitudefitlife-mgmt/people/" class="social__icon--link"><i class="fab fa-linkedin"></i></a>
      <a href="https://twitter.com/AltitudeMgmtInt" class="social__icon--link"><i class="fab fa-twitter"></i></a>
        </div>
        <div className='footer_link--wrapper'>
        <div className='footer__link--items'>
            <h2>About us</h2>
            <a href="https://payhip.com/AltitudeMgmtIntl">Terms and Conditions</a>
            <a href="https://payhip.com/AltitudeMgmtIntl">Altitude Shop</a>
            <a href="https://altitude-media-group.breezy.hr/">Location</a>
            <a href="https://payhip.com/AltitudeMgmtIntl">Privacy policy</a>
            </div>
        </div>
        <div class="footer__link--items">
            <h2>Contact Us</h2>
            <a href="https://payhip.com/AltitudeMgmtIntl/contact">Contact</a>
            <a href="https://payhip.com/AltitudeMgmtIntl/contact">Support</a>
            <a href="https://payhip.com/AltitudeMgmtIntl/contact">Destinations</a>
          </div>
          <div class="footer__link--items">
            <h2>Social Media</h2>
            <a href="https://www.instagram.com/altitudefitmgmt/">Instagram</a>
            <a
              href="https://www.linkedin.com/company/altitudefitlife-mgmt/people/"
              >LinkedIn</a>
            <a href="https://twitter.com/AltitudeMgmtInt">Twitter</a>
          </div>
        <div>
        <section class="footer_p_2">
        <p class="website__rights">
          © 2023 Altitude Management International, a registered Altitude
        </p>
        <p class="website__rights">
          Enterprises Company. All rights reserved
        </p>
        <p class="website__rights"> Altitude Enterprises, LLC | 500 7th Avenue | Suite 12B111 | </p>
        <p class="website__rights"> New York, NY | 10018</p>
        <p class="website__rights"> Corporate: (646) 974-8678 | General: (646) 974-8677</p>
        <p class="website__rights"> FEIN: 852758695 | NYCR: 00450656</p>
      </section>
        </div>
    </div>
  )
}

export default Footer