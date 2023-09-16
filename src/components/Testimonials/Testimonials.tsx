import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'
import s from './Testimonials.module.css'
import {TestimonialsDataType} from "../../store/testimonialsSlice";


type TestimonialsPropsType = {
    testimonialsData: TestimonialsDataType[]
}

export const Testimonials = (props: TestimonialsPropsType) => {

    return (
        <section id='testimonials'>
            <h5>Review from other experienced Developers</h5>
            <h2>Review</h2>

            <Swiper className={`container ${s.testimonials__container}`}
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {props.testimonialsData.map(el => {
                    return <SwiperSlide key={el.id} className={s.testimonial}>
                        <div className={s.avatar}>
                            <img src={el.avatar} alt="niko"/>
                        </div>
                        <h5 className={s.name}>{el.name}</h5>
                        <small className={s.review}>{el.review}</small>
                    </SwiperSlide>
                })}
            </Swiper>
        </section>
    );
};
