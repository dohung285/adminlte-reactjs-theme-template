import React from 'react'
import Header from './Header';
import Leftside from './Leftside';

import Home from './Home';

import Footer from './Footer';




const Layout = () => {
    return (
        <div className="wrapper">
            <Header/>   
            <Leftside />
            <Home />
            <Footer />
        </div>

    )
}

export default Layout
