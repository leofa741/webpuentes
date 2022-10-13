import React from 'react'
import { Slider } from '../../ui'
import './testimonial.css'

import {IoLogoWhatsapp} from 'react-icons/io'


export const Testimonial = () => {
  return (
      <>
          <div className="testimonials">
            
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="section-title">
                            
                              <h2>Contáctanos</h2>                            
                              </div>  <IoLogoWhatsapp
                              onClick={() => window.open('https://wa.me/+541536038167', '_blank')}
                              style={{ fontSize: 50 , color: 'green', cursor: 'pointer' }} />
                              


                              
                                                   

                                  <div className="testimonials-item">
                                      <div className="testimonials-item-content">
                                          <p>¿Tienes alguna duda con respecto a nuestros servicios?</p>                                   
                                  </div>
                                  </div>                       
                          
                      </div>
                  </div>
              </div>
          
      </>
  )
}
