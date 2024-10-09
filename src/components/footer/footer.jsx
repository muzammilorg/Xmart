import React from 'react'
import styles from './footer.module.scss'
import qrCode from '../../assets/qr-code.png'
import googlePlay from '../../assets/google-play-store-logo.png'
import appStore from '../../assets/appstore.png'
import facebookIcon from '../../assets/icons/facebook-icon.svg'
import twitterIcon from '../../assets/icons/twitter-icon.svg'
import instagramIcon from '../../assets/icons/instagram-icon.svg'
import linkedinIcon from '../../assets/icons/linkedin-icon.svg'
import sendIcon from '../../assets/icons/send-icon.svg'


export const Footer = () => {
  return (

    <>


    <div className={`${styles.footer_container}`}>
      <div className='container '>

      
      <div className={`row`}>
        <div className={`${styles.footer_section} col-lg-2 col-4`}>
          <h4>Exclusive</h4>
          <h5>Subscribe</h5>
          <p>Get 10% off your first order</p>
          <div className={`${styles.email_input} d-flex`}>
          <input className="form-control me-2" type="search" placeholder="Enter Your Email" aria-label="Search" />
          <img src={sendIcon} alt="" />
          </div>
        </div>
        <div className={`${styles.footer_section} col-lg-2 col-4`}>
          <h5>Support</h5>
          <li>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
          <li>exclusive@gmail.com</li>
          <li>+88015-88888-9999</li>
        </div>
        <div className={`${styles.footer_section} col-lg-2 col-4`}>
          <h5>Account</h5>
          <li>My Account</li>
          <li>Login / Register</li>
          <li>Cart</li>
          <li>Wishlist</li>
          <li>Shop</li>
        </div>
        <div className={`${styles.footer_section} col-lg-2 col-4`}>
          <h5>Quick Links</h5>
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
          <li>FAQ</li>
          <li>Contact</li>
        </div>
        <div className={`${styles.footer_section} d-flex flex-column justify-content-center col-lg-2 col-4`}>
          <h5>Download App</h5>
          <p className={styles.footer_deal}>Save $3 with App New User Only</p>
          <div className='d-flex gap-2'> 
            <figure><img src={qrCode} alt="QR Code" /></figure>
            <div>
              <figure><img src={googlePlay} alt="Google Play Store" /></figure>
              <figure><img src={appStore} alt="App Store" /></figure>
            </div>
          </div>
          <div className={`${styles.footer_icons} d-flex justify-content-between`}>
          <figure><img src={facebookIcon} style={{width: '10px'}} alt="Facebook Icon" /></figure>
          <figure><img src={twitterIcon} alt="Twitter Icon" /></figure>
          <figure><img src={instagramIcon} alt="Instagram Icon" /></figure>
          <figure><img src={linkedinIcon} alt="LinkedIn Icon" /></figure>
          </div>
        </div>

      </div>
      </div>
    <div className={`${styles.footerbar_container} mt-3  `}>
        <span>&copy; Copyright Xmart 2024. All Right Reserved</span>
    </div>
    


    </div>
    </>
)
}
