import React from 'react';
import Header from '../Header/index.js';
import Footer from '../Footer/index';

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="container mx-auto">
                {children}
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Layout;