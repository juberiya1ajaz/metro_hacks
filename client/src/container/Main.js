import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import LungCancerPrediction from '../pages/LungCancerPrediction';

function Main() {

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/lungCancerPrediction" element={<LungCancerPrediction />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Main;
