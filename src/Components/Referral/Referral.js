import React from 'react';
import './Referral.css';
import referral from './profit-img.565e983.webp';

const Referral = () => {
    return (
        <div className='referral-container'>
            <div className="referral">
                <h1 className="referral-title">در سود نوبیتکس سهیم باشید</h1>
                <p className="referral-description">
                    با دعوت از دوستانتان با لینک اختصاصی خود، هر بار که معامله می‌کنند برای همیشه تا 30% از کارمزد معاملاتشان از طرف نوبیتکس به شما تعلق می‌گیرد
                </p>
                <button className="referral-more-info">بیشتر بدانید</button>
            </div>
            <img src={referral} alt="referral" className="referral-image" />
        </div>
    )
}

export default Referral;