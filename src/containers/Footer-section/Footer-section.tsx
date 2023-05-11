import React from "react";

import './footer-section.scss';

import instagram_icom from "./../../assets/instagram-icon.svg";
import twitter_icon from "./../../assets/twitter-icon.svg";


const FooterSection = () => {
    return (
        <section className="footer-section">
            <div className="footer__top">
                <div className="footer__top__left">
                    <form>
                        <div className="form__userinfo">
                            <div>
                                <p>NAME:</p>
                                <input type="text" className="form__name" />
                            </div>
                            <div>
                                <p>EMAIL:</p>
                                <input type="email" className="form__email" />
                            </div>
                        </div>

                        <div className="form__message__container">
                            <p>MESSAGE:</p>
                            <textarea rows={15} cols={75} className="form__message" />
                        </div>

                        <div className="form__buttons">
                            <input type="submit" value='SEND MESSAGE' />
                            <input type="button" value='CLEAR' />
                        </div>
                    </form>
                </div>
                <div className="footer__top__right">
                    <p>Let's work together to build something amazing. Contact me to get started!</p>
                </div>
            </div>
            <div className="footer__bottom">
                <ul>
                    <li>
                        <img src={instagram_icom} />
                    </li>
                    <li>
                        <img src={twitter_icon} />
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default FooterSection;