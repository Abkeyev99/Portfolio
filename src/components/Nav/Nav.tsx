import React, {useState} from 'react';
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import s from './Nav.module.css'

export const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')

    return (
        <nav className={s.nav}>
            <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? s.active : ''}><AiOutlineHome/></a>
            <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? s.active : ''}><AiOutlineUser/></a>
            <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? s.active : ''}><BiBook/></a>
            <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? s.active : ''}><RiServiceLine/></a>
            <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? s.active : ''}><BiMessageSquareDetail/></a>
        </nav>
    );
};

