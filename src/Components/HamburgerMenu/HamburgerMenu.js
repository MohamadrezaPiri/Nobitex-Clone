import React from 'react';
import './HamburgerMenu.css';
import price from './download1.svg'
import friends from './download2.svg';
import howToUse from './download3.svg';
import question from './download4.svg'

const HamburgerMenu = ({ showHamburger, setShowHamburger }) => {

    const deleteHamburger = () => {
        setShowHamburger(!showHamburger)
    }

    return (
        <div className='hamburger-menu-container'>
            <div className='hamburger-menu-list'>
                <i onClick={deleteHamburger} className='fa fa-arrow-right'></i>
                <div className="hamburger-menu-item">
                    <img src={price} alt="قیمت لحظه ای رمزارزها" />
                    <a href="#" className="hamburger-menu-link">قیمت لحظه ای رمزارزها</a>
                </div>
                <div className="hamburger-menu-item">
                    <img className='friends' src={friends} alt="معرفی به دوستان" />
                    <a href="#" className="hamburger-menu-link">معرفی به دوستان</a>
                </div>
                <div className="hamburger-menu-item">
                    <img className='howToUse' src={howToUse} alt="راهنمای استفاده" />
                    <a href="#" className="hamburger-menu-link">راهنمای استفاده</a>
                </div>
                <div className="hamburger-menu-item">
                    <img className='question-img' src={question} alt="سوالی دارید؟" />
                    <a href="#" className="hamburger-menu-link">سوالی دارید؟</a>
                </div>
                <div className="hamburger-menu-item">
                    <a href="#" className="hamburger-menu-link nobiGift">نوبی گیفت</a>
                </div>
            </div>
        </div>
    )
}

export default HamburgerMenu