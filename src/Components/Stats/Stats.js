import React from 'react';
import './Stats.css';

const Stats = () => {
    return (
        <div className="stats-container">
            <div className="users">
                <div className="stats-number">
                    <h1 className='unit'>K</h1>
                    <h1 className='number'>600+</h1>
                </div>
                <p className="stats-title">کاربر فعال</p>
            </div>
            <div className="transactions">
                <div className="stats-number">
                    <h1 className='unit'>M</h1>
                    <h1 className='number'>5.5+</h1>
                </div>
                <p className="stats-title">معاملات انجام شده</p>
            </div>
            <div className="transactions-volume">
                <div className="stats-number">
                    <h1 className='unit'>B</h1>
                    <h1 className='number'>200+</h1>
                </div>
                <p className="stats-title">حجم معاملات</p>
            </div>
        </div>
    )
}

export default Stats