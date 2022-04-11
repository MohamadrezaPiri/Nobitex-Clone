import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-container">
            <h1 className='banner-title'>خرید و فروش امن بیت‌کوین و ارزهای دیجیتال </h1>
            <h3 className='banner-title2'>به بزرگترین بازار ارز دیجیتال ایران بپیوندید</h3>
            <form>
                <input placeholder='ایمیل خود را وارد کنید' type="email" id="input-email" />
                <button className='form-btn' type='submit'>شروع کنید</button>
            </form>
        </div>
    )
}

export default Banner