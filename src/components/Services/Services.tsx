import React from 'react';
import s from './Services.module.css'
import {BsCheck} from "react-icons/bs";

export const Services = () => {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className={`container ${s.services__container}`}>
                <article className={s.service}>
                    <div className={s.service__head}>
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className={s.service__list}>
                        <li>
                            <BsCheck className={s.service__list_icon}/>
                            <p>Creating an amazing design for an application</p>
                        </li>
                        <li>
                            <BsCheck className={s.service__list_icon}/>
                            <p>Visually appealing, polished, and professional web app</p>
                        </li>
                        <li>
                            <BsCheck className={s.service__list_icon}/>
                            <p>Optimized for mobile devices and search engines</p>
                        </li>
                        <li>
                            <BsCheck className={s.service__list_icon}/>
                            <p>Matching the current trends</p>
                        </li>
                        <li>
                            <BsCheck className={s.service__list_icon}/>
                            <p>Intuitive to use</p>
                        </li>
                        <li>
                            <BsCheck className={s.service__list_icon}/>
                            <p>With easily accessible contact information</p>
                        </li>
                    </ul>
                </article>
                {/*END OF UI/UX*/}
                <article className={s.service}>
                    <div className={s.service__head}>
                        <h3>Web Development</h3>
                    </div>
                    <ul className={s.service__list}>
                        <li>
                            <BsCheck className={s.service__list_icon}/>
                            <p>Single page applications</p>
                        </li>
                        <li>
                            <BsCheck className={s.service__list_icon}/>
                            <p>Cross-platform and hybrid apps</p>
                        </li>
                        <li>
                            <BsCheck className={s.service__list_icon}/>
                            <p>Progressive web apps</p>
                        </li>
                        <li>
                            <BsCheck className={s.service__list_icon}/>
                            <p>Using technologies proven by time</p>
                        </li>
                        <li>
                            <BsCheck className={s.service__list_icon}/>
                            <p>Regularly checked for any broken links or not working scripts</p>
                        </li>
                        <li>
                            <BsCheck className={s.service__list_icon}/>
                            <p>Website Maintenance</p>
                        </li>
                        <li>
                            <BsCheck className={s.service__list_icon}/>
                            <p>Customer Relationship Management</p>
                        </li>
                        <li>
                            <BsCheck className={s.service__list_icon}/>
                            <p>Web Hosting</p>
                        </li>
                    </ul>
                </article>
                {/*END OF WEB DEVELOPMENT*/}
                <article className={s.service}>
                    <div className={s.service__head}>
                        <h3>Backend Development</h3>
                    </div>
                    <ul className={s.service__list}>
                        <li>
                            <BsCheck className={s.service__list_icon}/>
                            <p>API Development and Integration with frontend</p>
                        </li>
                        <li>
                            <BsCheck className={s.service__list_icon}/>
                            <p>Back-End Software Development</p>
                        </li>
                        <li>
                            <BsCheck className={s.service__list_icon}/>
                            <p>End-to-end Security</p>
                        </li>
                        <li>
                            <BsCheck className={s.service__list_icon}/>
                            <p>Scalability</p>
                        </li>
                        <li>
                            <BsCheck className={s.service__list_icon}/>
                            <p>Latest Technology</p>
                        </li>
                        <li>
                            <BsCheck className={s.service__list_icon}/>
                            <p>Full-cycle Backend Development</p>
                        </li>
                        <li>
                            <BsCheck className={s.service__list_icon}/>
                            <p>Cloud Back-End Solutions</p>
                        </li>
                        <li>
                            <BsCheck className={s.service__list_icon}/>
                            <p>Backend Refactoring</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    );
};

