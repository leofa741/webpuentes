

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Footer, Social } from '../components';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { NavBar,  Slider } from '../ui';
import {NavBarl} from '../ui/components/navbar/NavBarl';
import { Contact } from '../components';



export const AppRouter = () => {
    
    return (
        <>
            <body >
               <NavBar />
                <div style={{ overflowY: "scroll", height: "800px" }}></div>

              

                <Routes >
                    
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />                   
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<h1>404</h1>} />
                </Routes>

                <Social />

                <Footer />
            </body>
        </>
    );
    
    };
