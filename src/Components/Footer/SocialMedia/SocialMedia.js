import React from 'react';
import './SocialMedia.css';

const SocialMedia = () => {
    return (
        <div className="social-media-container">
           <div className="social-media-btns">
                <button className="social-media-btn twitter">
                <i className='fa fa-twitter'></i>
            </button>
            <button className="social-media-btn linkedin">
                <i className='fa fa-linkedin'></i>
            </button>
            <button className="social-media-btn telegram">
                <i className='fa fa-telegram'></i>
            </button>
            <button className="social-media-btn instagram">
                <i className='fa fa-instagram'></i>
            </button>
           </div>
        </div>
    )
}

export default SocialMedia