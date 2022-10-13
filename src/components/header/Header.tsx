import React from 'react'

import './header.css'

export const Header = () => {
  return (
    <>
       <div id="showcase">
    <div className="container showcase">
        <div className="full-width text-center showcase-caption mt-30">
            <h1 className="text-white">
                <span className="text-primary">C</span>onstruimos <span className="text-danger">T</span>u <span className="text-success">I</span>dea
            </h1>
    			<h4>Conectamos Ideas.Construimos Puentes</h4>
             
                  <p>somos una empresa de Outsourcing de Innovación, que se dedica a brindar servicios de desarrollo y diseño de software, modernización de aplicaciones, 
            desarrollo de aplicaciones móviles, desarrollo de aplicaciones web, desarrollo de aplicaciones de escritorio

         </p>
                    <div className="showcase-button">
                      <a href="#features" className="button-style showcase-btn">
                        Learn More
                      </a>
                      <a href="#services" className="button-style showcase-btn">
                        Get Started
                      </a>
                </div>
    		</div>
      </div>
  </div>
    </>
  )
}
