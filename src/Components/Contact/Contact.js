import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <h3 className='contact-title'>هفت روز هفته، در 24 ساعت شبانه‌روز پاسخگوی شما هستیم</h3>
            <div className="contacts">
                <p className='contact-email'>support@nobitex.ir</p>
                <div className="contacts-btns">
                    <button className='contact-us-btn'>تماس با پشتیبانی</button>
                    <button className='questions-btn'> سوالات متداول </button>
                </div>
            </div>
        </div>
    )
}

export default Contact