import React from 'react'







import { Header } from '../header/Header'
import { Home } from '../home/Home'
import { Banner } from '../banner/Banner'
import { Testimonial } from '../testimonial/Testimonial'


export const HomeContenido = () => {
  return (
    <>
     <Header />
     <Home />     
     <Testimonial />
     <Banner />
  </>
  )
}
