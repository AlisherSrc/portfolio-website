import React, { useRef, useState } from "react";

import './footer-section.scss';

import instagram_icom from "./../../assets/instagram-icon.svg";
import twitter_icon from "./../../assets/twitter-icon.svg";

import emailjs from '@emailjs/browser';

const FooterSection = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [success, setSuccess] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [emptyFieldsError,setEmptyFieldsError] = useState<boolean>(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setEmptyFieldsError(false);
        setSuccess(false);
        
        if (formRef.current) {
            const formData = new FormData(formRef.current);

            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');

            if (!name || !email || !message) {
                setEmptyFieldsError(true);
                return;
            }
        }


        setLoading(true);
        if (formRef.current) {
            emailjs.sendForm('service_zjwel1e', 'template_as12w9i', formRef.current, 'DHlm68mwpqcJ6QzMx')
                .then((res) => {
                    setSuccess(true);
                    setLoading(false);
                    formRef.current?.reset();
                }, (error) => {
                    console.log(error.text);
                    setLoading(false);
                });
        };
    }

    return (
        <section className="footer-section">
            <div className="footer__top">
                <div className="footer__top__right">
                    <p>Let's work together to build something amazing. Contact me to get started!</p>
                </div>
                <div className="footer__top__left">
                    <form ref={formRef} onSubmit={handleSubmit} >
                        <div className="form__userinfo">
                            <div>
                                <label htmlFor="name">NAME:</label>
                                <input type="text" name="name" className="form__name" />
                            </div>
                            <div>
                                <label htmlFor="email">EMAIL:</label>
                                <input type="email" name="email" className="form__email" />
                            </div>
                        </div>

                        <div className="form__message__container">
                            <label htmlFor="message">MESSAGE:</label>
                            <textarea name="message" rows={15} className="form__message" />
                        </div>

                        <div className="form__buttons">
                            <input type="submit" value='SEND MESSAGE' />
                            <input type="button" value='CLEAR' onClick={() => formRef.current?.reset()} />
                            {loading && <div className="lds-circle"><div></div></div>}
                        </div>
                        {success && <p className="form__success_message">Thanks! I will reply as soon as possible</p>}
                        {emptyFieldsError && <p className="form__error_message">Please fill out all fields before submitting</p>}
                    </form>
                </div>
            </div>
            <div className="footer__bottom">
                <ul>
                    <li>
                        <a href="https://www.instagram.com/a_akito_o/" target="blank"><img src={instagram_icom} alt="instagram" title="instagram icon" /></a>
                    </li>
                    <li>
                        <a href="https://twitter.com/alishror?s=21&t=lv-SYWat5HQHm75cuHNWGg" target="blank"><img src={twitter_icon} alt="twitter" title="twitter icon" /></a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default FooterSection;