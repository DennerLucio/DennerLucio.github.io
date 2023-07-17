import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './components/Contato';
import Info from './components/Tecnologia';

function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/info" element={<Info />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Rotas;