import React from 'react';
import './Footer.scss';
import tb from '../assets/tb-logo.svg';
import nisumLogo from '../assets/nisumlogo.png';
import logo from '../assets/tb-logo.svg';

function Footer() {
    return (
        <div className="footer row m-0">
            <div className="col-10">
                <span className="footer-text"> © Nisum Technologies Inc.</span>
                {/* <img src={tb} alt="Tailored Brand logo" className="footer-logo"/> */}
            </div>
        </div>
    )
}

export default Footer
