import * as React from 'react'
import './contact.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Banner } from '../banner/Banner';

export const Contact = () => {
  return (
   <>
  <section id="contact">
  
  <h1 className="section-header">Contacto</h1>
  <ul className="social-media-list">
<li>
  <h5>Si deseas recibir más información acerca de nuestras áreas de experticia y productos contacta con nosotros. Seguro podemos ofrecerte una solución.</h5>
  </li>
  <hr/>



</ul>
  <div className="contact-wrapper">
  
  <div className="direct-contact-container">

<ul className="contact-list">
  <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">City, State</span></i></li>
  
  <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">(212) 555-2368</a></span></i></li>
  
  <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:#" title="Send me an email">hitmeup@gmail.com</a></span></i></li>
  
</ul>
</div> 
    
    <form id="contact-form" className="form-horizontal" role="form">
       
      <div className="form-group">
        <div className="col-sm-12">

          <TextField type="text" name="name" className="form-control-input" id="name" label="nombre" variant="standard" />
        </div>
      </div>

      <div className="form-group">
        <div className="col-sm-12">
        <TextField type="email" name="email" className="form-control-input" id="email" label="Email" variant="standard" />
          
        </div>
      </div>
      <div className="form-group">
        <div className="col-sm-12">
        <TextField type="tel" name="email" className="form-control-input" id="tel"  label="Telefono" variant="standard" />
          
        </div>
      </div>
      <div className="form-group">
        <div className="col-sm-12">
        <TextField type="text" name="empresa" className="form-control-input" id="empresa"  label="Empresa" variant="standard" />
         
        </div>
      </div>
      <div className="form-control-textarea">
      <TextField
      className="form-control-input"
      name="message"
          id="standard-multiline-static"
          label="Mensaje"
          multiline
          rows={4}
          defaultValue="ingrese su mensaje"
          variant="standard"
          
        />
      </div>
  <div className="send-button">

      <Button style={{color: '#28AEC2', borderRadius: '6px',  border: '1.7px solid #28AEC2'}} variant="outlined" size="large" color="primary">Enviar</Button>
      
    
</div>
      
      
    </form>
    

    
      
    
  </div>
  
</section>  
  <Banner />
  
   </>
  )
}
