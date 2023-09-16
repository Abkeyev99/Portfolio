import React from 'react';
import s from './Header.module.css'
import CV from './../../assets/Storyboards.pdf'

export const CTA = () => {
    return (
        <div className={s.cta}>
            <a href={CV} download='cd.pdf' className='btn'>Download CV</a>
            <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
    );
};

