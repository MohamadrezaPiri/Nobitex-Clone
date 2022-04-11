import React, { useState } from 'react';
import './Header.css';
import logo from './nobitex-logo-1.bc7a625.webp';

function Header({ showHamburger, setShowHamburger }) {

    const [isHovered, setIsHovered] = useState(false);


    const hoverHandler = () => {
        setIsHovered(true)
    }

    const hoverOutHandler = () => {
        setIsHovered(false)
    }

    const clickHandler = () => {
        setShowHamburger(!showHamburger)
    }

    return (

        <nav className='nav'>
            {/*habmurger menu */}
            <div onClick={clickHandler} className="hamburger-menu">
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </div>
            {/* end of habmurger menu */}
            <ul className='nav-list'>
                <li className='nav-item first-li'>
                    <img className='logo' src={logo} alt="نوبیتکس" />
                    <a className='nav-link' href="#">
                        <h1 className='header-title'>نوبیتکس</h1>
                    </a>
                </li>
                <li onMouseOver={hoverHandler} onMouseOut={hoverOutHandler} className='nav-item nav-item-price'>
                    <a className='nav-link' href="#">قیمت لحظه ای</a>
                    <i className='fa fa-sort-down sort-down'></i>
                    <div className={isHovered ? "price-hamburger-menu" : "no-hamburger-menu"}>
                        <ul className="price-hamburger-menu-list">
                            <li className="price-hamburger-menu-item">
                                <a className="price-hamburger-menu-link" href="#">بیت کوین</a>
                            </li>
                            <li className="price-hamburger-menu-item">
                                <a className="price-hamburger-menu-link" href="#">اتریوم</a>
                            </li>
                            <li className="price-hamburger-menu-item">
                                <a className="price-hamburger-menu-link" href="#">تتر</a>
                            </li>
                            <li className="price-hamburger-menu-item">
                                <a className="price-hamburger-menu-link" href="#">بیت کوین کش</a>
                            </li>
                            <li className="price-hamburger-menu-item">
                                <a className="price-hamburger-menu-link" href="#">سایر ارزهای دیجیتال</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href="#">معرفی به دوستان</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href="#">راهنمای استفاده</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href="#">سوالی دارید؟</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href="#">نوبی گیفت</a>
                </li>
            </ul>

            <div className='nav-icons'>
                <button className='bell-btn'>
                    <i className='fa fa-bell'></i>
                </button>
                <button className='account-btn'>
                    <i className='fa fa-user'></i>
                </button>


            </div>
        </nav>

    )
}

export default Header;