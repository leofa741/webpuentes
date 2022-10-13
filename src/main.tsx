import React from 'react'
import ReactDOM from 'react-dom/client'
import{BrowserRouter} from 'react-router-dom'



import '../src/assets/css/slick.css'
import '../src/assets/css/components.css'
import '../src/assets/css/bootstrap.min.css'
import '../src/assets/css/magnific-popup.css'
import '../src/assets/css/icon-font.css'
import '../src/assets/css/style.css'
import '../src/assets/css/font-awesome.min.css'
import '../src/assets/css/cubeportfolio.min.css'

import App from './App'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </React.StrictMode>

)
