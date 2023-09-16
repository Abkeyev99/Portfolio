import React from 'react';
import s from './About.module.css'
import ME from '../../assets/photo2.jpg'
import {FaAward} from "react-icons/fa";
import {RiFolder3Fill} from "react-icons/ri";
import {SlGraduation} from "react-icons/sl";


export const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className={`container ${s.about__container}`}>
                <div className={s.about__me}>
                    <div className={s.about__me_image}>
                        <img src={ME} alt="About Image"/>
                    </div>
                </div>
                <div className={s.about__content}>
                    <div className={s.about__cards}>
                        <article className={s.about__card}>
                            <SlGraduation className={s.about__icon}/>
                            <h5>Education</h5>
                            <small>University Education at the Moscow Polytechnic University</small>
                        </article>

                        <article className={s.about__card}>
                            <FaAward className={s.about__icon}/>
                            <h5>Experience in IT</h5>
                            <small>1 year and 4 months of development</small>
                        </article>

                        <article className={s.about__card}>
                            <RiFolder3Fill className={s.about__icon}/>
                            <h5>Projects</h5>
                            <small>8 Completed</small>
                        </article>
                    </div>
                    <p>
                        My name is Azizbek. I'm an outstanding frontend developer with incredible
                        learning skills and the ability to solve problems without giving up. My goal
                        as a developer is to apply my technical skills in IT development and
                        troubleshooting to realize the vision and mission of the company.
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    );
};


