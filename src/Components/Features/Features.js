import React from 'react';
import './Features.css';
import nobitex from './app-screenshot.b581154.webp';
import feature1 from './download1.webp';
import feature2 from './download2.webp';
import feature3 from './download3.webp';
import feature4 from './download4.webp';

const Features = () => {
    return (
        <div className="features-container">
            <h1 className='features-title'>بهترین امکانات خرید و فروش ارزهای دیجیتال</h1>
            <div className="features-flex">
                <div className="features">
                    <div className="feature">
                        <div className='feature-image-div'>
                            <img className='feature-image' src={feature1} alt="feature1" />
                        </div>
                        <div className='feature-information'>
                            <h3 className="feature-title">مدیریت موجودی کیف پول</h3>
                            <p className="feature-description">رمزارزهای دیجیتال محبوب را خرید و فروش کنید و در یکجا وضعیت موجودی خود را دنبال کنید</p>
                        </div>
                    </div>
                    <div className="feature">
                        <div className='feature-image-div'>
                            <img className='feature-image' src={feature2} alt="feature1" />
                        </div>
                        <div className='feature-information'>
                            <h3 className="feature-title">پرداخت با کارت‌های شتاب  </h3>
                            <p className="feature-description">معامله انواع رمزارز با تومان از طریق واریز و برداشت با کارت‌های بانکی عضو شتاب</p>
                        </div>
                    </div>
                    <div className="feature">
                        <div className='feature-image-div'>
                            <img className='feature-image' src={feature3} alt="feature1" />
                        </div>
                        <div className='feature-information'>
                            <h3 className="feature-title">کیف پول امن   </h3>
                            <p className="feature-description"> رمز اختصاصی کیف پول شما به صورت آفلاین نگهداری می شود و در برابر هک ایمن خواهد بود </p>
                        </div>
                    </div>
                    <div className="feature">
                        <div className='feature-image-div'>
                            <img className='feature-image' src={feature4} alt="feature1" />
                        </div>
                        <div className='feature-information'>
                            <h3 className="feature-title">   کارمزد رقابتی</h3>
                            <p className="feature-description"> کارمزد خرید و فروش در نوبیتکس بسیار کم است و با بالاتر رفتن حجم معاملات کاهش می‌یابد</p>
                        </div>
                    </div>
                </div>
                <img className='features-image' src={nobitex} alt="app" />
            </div>
        </div>
    )
}

export default Features