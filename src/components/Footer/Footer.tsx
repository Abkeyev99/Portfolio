import React from 'react';
import s from './Footer.module.css'
import {FaFacebookF} from "react-icons/fa";
import {GrInstagram} from "react-icons/gr";
import {FaTelegramPlane} from "react-icons/fa";

export const Footer = () => {
    return (
        <footer>
            <a href="#" className={s.footer__logo}>AZIZ</a>

            <ul className={s.permalinks}>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className={s.footer__socials}>
                <a href="https://instagram.com"><GrInstagram/></a>
                <a href="https://facebook.com"><FaFacebookF/></a>
                <a href="https://desktop.telegram.org"><FaTelegramPlane/></a>
            </div>

            <div className={s.footer__copyright}>
                <small>&copy; ALL rights reserved</small>
            </div>
        </footer>
    );
};

