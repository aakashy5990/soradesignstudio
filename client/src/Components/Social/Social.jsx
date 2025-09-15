import React from 'react'
import './Social.css'
import monogram from "../../assets/monogram-01.png"
import SocialIcons from '../../SocialIcons/SocialIcons'

function Social() {
  return (
    <footer>
    <div className="footer_section">
      <div className="footer_main_section">
        <p className="footer_header">
          Ready to get those <br />
          <span>mind-blowing </span> ideas live ?
        </p>
        <div className="footer_button_section">
          <a href="https://whatsform.com/4bj9mX\" target='blank'>
            <button className="footer_btn_button">Send a message</button>
          </a>
        </div>
        <div className="footer_social_icons">
          <div className="footer_social_main_icons">
            <SocialIcons.InstagramIcon></SocialIcons.InstagramIcon>
            <SocialIcons.YoutubeIcon></SocialIcons.YoutubeIcon>
            <SocialIcons.LinkedinIcon></SocialIcons.LinkedinIcon>
            <SocialIcons.FacebookIcon></SocialIcons.FacebookIcon>
            <SocialIcons.BehanceIcon></SocialIcons.BehanceIcon>
          </div>
        </div>
      </div>
      <div className="footer_logo_email">
        <div className="footer_logo">
          <img src={monogram} alt="monogram" />
        </div>
        <div className="footer_email">
          <p>Email:&nbsp; Vikashy263@gmail.com</p>
          <p>Contact:&nbsp;<a href="tel:+917455925669">+91 7455925669</a></p>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Social