import React from 'react';
import s from './Portfolio.module.css'

import {PortfolioDataType, PortfolioOtherInfoType, PortfolioType} from "../../store/portfolioSlice";

type PortfolioPropsType = {
    portfolioData: PortfolioDataType[]
    otherInfo: PortfolioOtherInfoType
}

export const Portfolio = (props: PortfolioPropsType) => {

    return (
        <section id='portfolio'>
            <h5>{props.otherInfo.title}</h5>
            <h2>{props.otherInfo.name}</h2>

            <div className={`container ${s.portfolio__container}`}>
                {props.portfolioData.map(el => {
                    return <article key={el.id} className={s.portfolio__item}>
                        <div className={s.portfolio__item_image}>
                            <img src={el.image} alt=""/>
                        </div>
                        <h3>{el.title}</h3>
                        <div className={s.portfolio__item_cta}>
                            <a href={el.github} className='btn' target='_blank'>{props.otherInfo.github}</a>
                            <a href={el.demo} className='btn btn-primary' target='_blank'>{props.otherInfo.liveDemo}</a>
                        </div>
                    </article>
                    })
                }
            </div>
        </section>
    );
};

