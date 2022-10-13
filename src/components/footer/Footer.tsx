import React from 'react'
import logo from '/src/assets/icons/blue1.png'
import './footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';


export const Footer = () => {
  //fecha actual
  const date = new Date();
  const year = date.getFullYear();



  return (
<footer className="text-center pos-re">
    <div className="container">
      <div className="footer__box">
     
        <a className="logo" href="#">
            <img src={logo}  className='imglogo1 rotate' alt="logo"/>
        </a>

        <div className="socialf">
        <a href="#0"><i  aria-hidden="true"></i></a>
        <a href="#0"><i  aria-hidden="true"><InstagramIcon /></i></a>
        <a href="#0"><i  aria-hidden="true"><FacebookIcon/></i></a>
        <a href="#0"><i  aria-hidden="true"><LinkedInIcon/></i></a>
        <a href="#0"><i  aria-hidden="true"><TwitterIcon/></i></a>
        <a href="#0"><i  aria-hidden="true"><YouTubeIcon/></i></a>
          
        </div>

        <p>&copy; {year} Puentes Digitales. All rights reserved.</p>
      </div>
    </div>

    <div className="curve curve-top curve-center"></div>
</footer>


  )
}
