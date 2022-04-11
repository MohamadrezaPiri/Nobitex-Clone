import React from 'react';
import './Application.css';
import directDownload from './direct-download.b18563c.svg';
import bazarDownload from './download-from-bazar.c31e7c3.svg';
import myketDownload from './download-from-myket.5271d95.svg';
import simulatorMarketDownload from './download-simulator-market.0402cd5.svg';

const Application = () => {
    return (
        <div className='application'>
            <p className="application-description">با اپلیکیشن موبایل نوبیتکس از هیچ معامله‌ای عقب نمی‌مونی!</p>
            <div className="application-download-btns">
                <div className="first-row">
                    <button className="application-download-btn">
                        <img className='application-download-img' src={directDownload} alt="دریافت مستقیم" />
                    </button>
                    <button className="application-download-btn bazar">
                        <img className='application-download-img' src={bazarDownload} alt="" />
                    </button>
                </div>
                <div className="second-row">
                    <button className="application-download-btn">
                        <img className='application-download-img' src={myketDownload} alt="" />
                    </button>
                    <button className="application-download-btn simulator">
                        <img className='application-download-img' src={simulatorMarketDownload} alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Application