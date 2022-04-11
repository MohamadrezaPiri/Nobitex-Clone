import React from 'react';
import './News.css';
import news1 from './news-1-desktop.f0fe746.webp';
import news2 from './news-2-desktop.e69a8e7.webp';
import news3 from './news-3-desktop.3da3323.webp';

const News = () => {
    return (
        <div className='news-container'>
            <img className='news-image' src={news1} alt="news1" />
            <img className='news-image' src={news2} alt="news2" />
            <img className='news-image' src={news3} alt="news3" />
        </div>
    )
}

export default News