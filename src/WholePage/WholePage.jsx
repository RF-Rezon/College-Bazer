import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Utils/Footer/Footer';
import Navbar from '../Utils/Nav/Nav';

const WholePage = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default WholePage;