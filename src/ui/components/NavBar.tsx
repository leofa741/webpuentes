
import React, { useState } from 'react'
import { Link, NavLink, BrowserRouter as Router } from 'react-router-dom';
import logo from '/src/assets/icons/blue1.png'
import Button from '@mui/material/Button';
import './styles.css'



const classNameFunc = ( isActive:any ) => (isActive ? "active" : "");



export const NavBar = () => {

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);

  return (

<>
<header>
<nav className={colorChange ? 'navbar colorChange' : 'nav'}>
        <div className="logo">Puentes<strong>Digitales</strong>     

        

        <img src={logo} alt="logo" className='imglogo rotate' />    

        
        </div>
        <input type="checkbox" id="checkbox"/>
        <label htmlFor="checkbox" id="icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
        
        <ul>
        <li><NavLink    className={classNameFunc} to='/home'>Home</NavLink></li> 
        <li><a href="#">Servicios</a></li>
                  <li><a href="#">Soluciones</a></li>        
        <li><NavLink    className={classNameFunc} to='/login'  >login</NavLink>
        <ul className="submenu">
                  <li><a href="#">Soluciones</a></li>
                  <li><a href="#">Soluciones</a></li>
                  <li><a href="#">Soluciones</a></li>
                  <li><a href="#">Soluciones</a></li>
                 
              </ul>
        </li>   
        <li><NavLink   className={classNameFunc} to='/register'   >register</NavLink></li>    
        <li><a href="#">Empresa</a></li>   
       <li> <NavLink className={classNameFunc} to='/contact' > <Button style={{color: 'white', borderRadius: '6px',  border: '1.7px solid white'}} variant="outlined" color="inherit">Contacto</Button> </NavLink ></li>
     
        </ul>
      
    </nav>
</header>
</>

    
   
  )
}
