import React from 'react';
import Twitter from '../images/twitter-icon.png';
import Facebook from '../images/facebook-icon.png';
import Instagram from '../images/instagram-icon.png';
import GitHub from '../images/github-icon.png';

export default function Footer() {
    return (
        <footer>
            <img src={Twitter} alt="twitter" className="twitter--icon"/>
            <img src={Facebook} alt="facebook" className="facebook--icon"/>
            <img src={Instagram} alt="instagram" className="instagram--icon"/>
            <img src={GitHub} alt="github" className="github--icon"/>
        </footer>
    )
}