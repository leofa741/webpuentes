import React from 'react'

import './home.css'

export const Home = () => {
  return (
    <>
    <div id="features">
     <div className="text-center features-caption features">
                <h3>
                    <span style={{color:'#0086AA' }}>¡Mira! Es así como podemos ayudarte:</span>
                    
                </h3>
                  <h4>Unleashing Digital Innovation</h4>
                  <p>
                        <span style={{color:'#3F3F40' }}>Somos una empresa de desarrollo de software, especializada en la creación de aplicaciones móviles y sitios web. </span>    
                  </p>
     </div>
          <div className="container">
            <div className="row">
              <div className="col-sm bottom-space">
                    <div className="feature-box">
                        <i className="fa fa-image fa-5x fa-icon-image"></i>
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            <span style={{color:'#0086AA' }}>Diseño de sitios web</span>
                           

                        </h3>
                        <p className="feature-box__text">
                            <span style={{color:'#3F3F40' }}>Creamos sitios web atractivos y funcionales que se adaptan a cualquier dispositivo. </span>
                        </p>
                    </div>
              </div>
              <div className="col-sm bottom-space">
                    <div className="feature-box">
                        <i className="fa fa-mobile fa-5x fa-icon-image"></i>
                    
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            <span style={{color:'#0086AA' }}>Desarrollo de aplicaciones móviles</span>
                        </h3>
                        <p className="feature-box__text">
                            <span style={{color:'#3F3F40' }}>Desarrollamos aplicaciones móviles nativas para iOS y Android. </span>
                        </p>
                    </div>
              </div>
              <div className="col-sm bottom-space">
                    <div className="feature-box">
                        <i className="fa fa-5x fa-icon-image fa-code"></i>
                    
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            <span style={{color:'#0086AA' }}>Desarrollo de software</span>
                        </h3>
                        <p className="feature-box__text">
                            <span style={{color:'#3F3F40' }}>Desarrollamos software a la medida de tus necesidades. </span>
                        </p>
                    </div>
              </div>
            </div>
     </div>
      <div className="features-section-2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm features-section-2-col-1 hover-effect">
            </div>
            <div className="col-sm features-section-2-col-2 ">
              <div className="features-section-2-col-2__content">
                <h2>
                    <span style={{color:'#0086AA' }}>¿Por qué elegirnos?</span>
                </h2>
                  <p>
                        <span style={{color:'#3F3F40' }}>Somos una empresa de desarrollo de software, especializada en la creación de aplicaciones móviles y sitios web.

                        Elige nuestra agencia y tendrás a tu disposición a un equipo de especialistas en diferentes áreas con el que conseguirás una comunicación integral, coherente y adaptada a todos los canales de tu negocio, empresa o emprendimiento.

Pero eso no es lo más importante.

Trabajemos juntos y lograrás que los clientes te elijan una vez y vuelvan a hacerlo para siempre.

Haz que todo ese trabajo que haces cada día sea observado, comprendido y elegido por las personas.

Optimiza tu comunicación. Convierte más. Vende más.
                        
                         </span>


                
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
   
    </>
  )
}
