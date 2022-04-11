import React from 'react';
import './WhyNobitex.css';
import why1 from './why1.1503e60.webp';
import why2 from './why2.c43f234.webp';
import why3 from './why3.e58afe1.webp';

const WhyNobitex = () => {
    return (
        <>
            <h2 className='why-title'>چرا نوبیتکس را انتخاب کینم؟</h2>
            <div className="why">
                <div className="why1">
                    <img className='why-image' src={why1} alt="ساده و کاربردی" />
                    <h3 className='why-titles'>ساده و کاربردی</h3>
                    <p className="why-description">محیط ساده و کاربردی نوبیتکس، معامله ارزدیجیتال را برای شما لذت بخش خواهد کرد.</p>
                </div>
                <div className="why2">
                    <img src={why2} alt="خرید و فروش امن" className="why-image why-image2" />
                    <h3 className='why-titles'> خرید و فروش امن </h3>
                    <p className="why-description">اولویت نوبیتکس امنیت است. با خیالی آسوده و بدون نگرانی خرید و فروش کنید.</p>
                </div>
                <div className="why3">
                    <img src={why3} alt="پیشرو وسریع" className="why-image" />
                    <h3 className='why-titles'>پیشرو و سریع</h3>
                    <p className="why-description">تنوع رمزارزها و سرعت معاملات، نوبیتکس را جزو بهترین بازارهای آنلاین قرار داده است.</p>
                </div>
            </div>
        </>
    )
}

export default WhyNobitex