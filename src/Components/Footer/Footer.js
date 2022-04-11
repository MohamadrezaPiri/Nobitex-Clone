import React from 'react';
import Application from './Application/Application';
import './Footer.css';
import FooterList from './FooterList/FooterList';
import SocialMedia from './SocialMedia/SocialMedia';

const Footer = () => {
    return (
        <div className="footer-container">
            <FooterList />
            <Application />
            <SocialMedia />
        </div>
    )
}

export default Footer