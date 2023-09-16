import React from 'react';
import s from './Header.module.css';
import myProfilePhoto from '../../assets/profilePhoto.jpg'
import {CTA} from "./CTA";
import {HeaderSocials} from "./HeaderSocials";

export const Header = () => {
    return (
        <header className={s.header}>
            <div className={`container ${s.header__container}`}>
                <h5>Hello I'm</h5>
                <h1>Aziz</h1>
                <h5 className='text-light'>React.JS Developer</h5>
                <CTA />
                <HeaderSocials/>

                <div className={s.me}>
                    <img className={s.myPhoto} src={myProfilePhoto} alt="me"/>
                </div>
                <a href="#contact" className={s.scroll__down}>Scroll Down</a>
            </div>
        </header>
    );
};

