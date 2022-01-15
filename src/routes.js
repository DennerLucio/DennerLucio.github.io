import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './components/Home';
import Info from './components/Info';

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