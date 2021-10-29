import React from 'react'
import helloLight from '../src/oeye.png';
import helloDark from '../src/oeye.png';

const Footer = () => {
    return (
        <div>
            <hr/>
            <p className="footer-text"><img src={darkMode ? helloDark : helloLight} alt="hello" className="hello-img" width="145" /><br></br>
                <br></br>
                <small> <strong> Copyright © 2021 MMO </strong><br></br>
               
            </p>
        </div>
    )
}

export default Footer

