import React from 'react';
import './FooterList.css';
import logo from '../../Header/nobitex-logo-1.bc7a625.webp';

const FooterList = () => {
    return (
        <div className="footer-list-container">
            <div className="nobitex">
                <img className='nobitex-footer-logo' src={logo} alt="نوبیتکس" />
                <h2 className="nobitex-footer-name">نوبیتکس</h2>
            </div>
            <div className="footer-flex">
                <div className="about-nobitex">
                    <h3 className="about-title">درباره نوبیتکس</h3>
                    <ul className="about-list">
                        <li className="about-item">درباره ما</li>
                        <li className="about-item">نوبیتکس بلاگ</li>
                        <li className="about-item">امنیت کیف پول</li>
                        <li className="about-item">قوانین و مقررات</li>
                        <li className="about-item">تماس با ما</li>
                    </ul>
                </div>
                <div className="features-nobitex">
                    <h3 className='features-footer-title'>امکانات و خدمات</h3>
                    <ul className="features-list">
                        <li className="features-item">بازار آزمایشی نوبیتکس</li>
                        <li className="features-item">معرفی به دوستان</li>
                        <li className="features-item">اپلیکیشن اندروید</li>
                        <li className="features-item">مستندات API</li>
                        <li className="features-item">گزارش تغییرات</li>
                    </ul>
                </div>
                <div className="support-nobitex">
                    <h3 className="support-title">راهنما و پشتیبانی</h3>
                    <ul className="support-list">
                        <li className="support-item">سوالات متداول</li>
                        <li className="support-item">احراز هویت و سطوح کاربری</li>
                        <li className="support-item">قیمت ها و کارمزدها</li>
                        <li className="support-item">راهنمای امنیت حساب کاربری</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FooterList