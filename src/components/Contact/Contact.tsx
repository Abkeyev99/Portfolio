import React, {useRef} from 'react';
import s from './Contact.module.css'
import {MdEmail} from "react-icons/md";
import {IoLogoWhatsapp} from "react-icons/io";
import {FaTelegramPlane} from "react-icons/fa";
import emailjs from 'emailjs-com'

export const Contact = () => {
    const form = useRef<any>()
    const sendEmail = (e: any) => {
        e.preventDefault();
        emailjs.sendForm('service_qe0rnak', 'template_b87c1on', form.current, 'b4haVZCxV7NgfuNFj')
        e.target.reset()
    };
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className={`container ${s.contact__container}`}>
                <div className={s.contact__options}>
                    <article className={s.contact__option}>
                        <MdEmail className={s.contact__option_icon}/>
                        <h4>Email</h4>
                        <h5>azizbek.abdimavlonov@outlook.com</h5>
                        <a href="mailto:azizbek.abdimavlonov@outlook.com" target='_blank'>Send a message</a>
                    </article>
                    <article className={s.contact__option}>
                        <FaTelegramPlane className={s.contact__option_icon}/>
                        <h4>Telegram</h4>
                        <h5>+77477864600</h5>
                        <a href="mailto:azizbek.abdimavlonov@mail.ru" target='_blank'>Send a message</a>
                    </article>
                    <article className={s.contact__option}>
                        <IoLogoWhatsapp className={s.contact__option_icon}/>
                        <h4>WhatsApp</h4>
                        <h5>+77477864600</h5>
                        <a href="https://api.whatsapp.com/send?phone=+77477864600" target='_blank'>Send a message</a>
                    </article>
                </div>
                {/*END OF CONTACT OPTIONS*/}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='user_name' placeholder='Your Full Name' required/>
                    <input type="email" name='user_email' placeholder='Your Email' required/>
                    <textarea name="user_message" rows={7} placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    );
};

