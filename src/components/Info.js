import React from 'react';
import Profile from '../images/profile-pic.png';
import Mail from '../images/mail-icon.png';
import LinkedIn from '../images/linkedin-icon-small.png';

export default function Info() {
    return (
        <div>
            <img src={Profile} alt="Profile pic" className="profile--pic"/>
            <div className="info">
                <h2 className="info--name">James Demetros</h2>
                <h5 className="info--description">Frontend Developer</h5>
                <h6 className="info--website">jamesdemetros.website</h6>
            </div>
            <div className="buttons">  
                <a href="//mailto:jamesdemetros@gmail.com" target="_blank" rel="noreferrer"> 
                <button type="button" className="mail--button"><img src={Mail} alt="" 
                    className="mail--icon"/>Email</button></a>
                <a href=
                    "//www.linkedin.com/in/james-demetros-6a4b60a8"  target="_blank" rel="noreferrer">
                <button type="button" className="linkedin--button">
                    <img src={LinkedIn} alt="" className="linkedin--icon"/>LinkedIn</button></a>
            </div>
        </div>
    )
}