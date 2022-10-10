import React from "react";
import './Logo.css';
import Tilt from 'react-parallax-tilt';
import facerGrey from './facer-grey.png';

function Logo() {
    return <div style={{height: "8rem", paddingTop: "1.5rem"}}>
    <Tilt>
        <img className="logo" src={facerGrey} alt="facer-logo" />
    </Tilt>
    </div>
}

export default Logo;