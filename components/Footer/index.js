import React from 'react';

const Footer = () => {
    return (
        <div className="bg-gray-700 p-4">
            <div className="container mx-auto text-center font-bold text-white">
                Projeto desenvolvido por: Leonardo Massafelli - {' '}
                <a className='hover:underline' href='https://www.linkedin.com/in/leonardo-massafelli/'>Linkedin</a>
            </div>
            <div className='mt-3 text-center'>
                <img className="inline-block p-4" src='/logofsm.png'></img>
                <img className="inline-block p-4" src='/logodevpleno.png'></img>
            </div>
        </div>
    )
}

export default Footer;