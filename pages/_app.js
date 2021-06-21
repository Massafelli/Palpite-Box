import React from 'react';
import '../css/styles.css';
import Layout from '../components/Layout/index.js';

const MyApp = ({ Component, pageProps }) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp;