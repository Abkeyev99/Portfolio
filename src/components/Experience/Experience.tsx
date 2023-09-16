import React from 'react';
import s from './Experience.module.css'
import {BsFillPatchCheckFill} from "react-icons/bs";

export const Experience = () => {

    return (
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className={`container ${s.experience__container}`}>
                <div className={s.experience__frontend}>
                    <h3>Frontend Development</h3>
                    <div className={s.experience__content}>
                        <article className={s.experience__details}>
                            <BsFillPatchCheckFill className={s.experience__details_icon}/>
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text-light'>Proficient</small>
                            </div>
                        </article>
                        <article className={s.experience__details}>
                            <BsFillPatchCheckFill className={s.experience__details_icon}/>
                           <div>
                               <h4>TypeScript</h4>
                               <small className='text-light'>Advanced</small>
                           </div>
                        </article>
                        <article className={s.experience__details}>
                            <BsFillPatchCheckFill className={s.experience__details_icon}/>
                           <div>
                               <h4>React</h4>
                               <small className='text-light'>Advanced</small>
                           </div>
                        </article>
                        <article className={s.experience__details}>
                            <BsFillPatchCheckFill className={s.experience__details_icon}/>
                            <div>
                                <h4>Next</h4>
                                <small className='text-light'>Proficient</small>
                            </div>
                        </article>
                        <article className={s.experience__details}>
                            <BsFillPatchCheckFill className={s.experience__details_icon}/>
                            <div>
                                <h4>Redux</h4>
                                <small className='text-light'>Advanced</small>
                            </div>
                        </article>
                        <article className={s.experience__details}>
                            <BsFillPatchCheckFill className={s.experience__details_icon}/>
                            <div>
                                <h4>Zustand</h4>
                                <small className='text-light'>Proficient</small>
                            </div>
                        </article>
                        <article className={s.experience__details}>
                            <BsFillPatchCheckFill className={s.experience__details_icon}/>
                            <div>
                                <h4>React-Query</h4>
                                <small className='text-light'>Proficient</small>
                            </div>
                        </article>
                        <article className={s.experience__details}>
                            <BsFillPatchCheckFill className={s.experience__details_icon}/>
                            <div>
                                <h4>MobX</h4>
                                <small className='text-light'>Proficient</small>
                            </div>
                        </article>
                        <article className={s.experience__details}>
                            <BsFillPatchCheckFill className={s.experience__details_icon}/>
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Advanced</small>
                            </div>
                        </article>
                        <article className={s.experience__details}>
                            <BsFillPatchCheckFill className={s.experience__details_icon}/>
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Advanced</small>
                            </div>
                        </article>
                    </div>
                </div>
                {/*END OF FRONTEND*/}
                <div className={s.experience__backend}>
                    <h3>Backend Development</h3>
                    <div className={s.experience__content}>
                        <article className={s.experience__details}>
                            <BsFillPatchCheckFill className={s.experience__details_icon}/>
                            <div>
                                <h4>Node.JS</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className={s.experience__details}>
                            <BsFillPatchCheckFill className={s.experience__details_icon}/>
                            <div>
                                <h4>Express.JS</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className={s.experience__details}>
                            <BsFillPatchCheckFill className={s.experience__details_icon}/>
                            <div>
                                <h4>Nest.JS</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                        <article className={s.experience__details}>
                            <BsFillPatchCheckFill className={s.experience__details_icon}/>
                            <div>
                                <h4>MongoDB</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

