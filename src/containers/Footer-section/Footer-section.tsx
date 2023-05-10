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
                        <input type="text" />
                        <input type="email" />
                        <input type="text" />
                        <input type="submit"/>
                        <input type="button" />
                    </form>
                </div>
                <div className="footer__top__right">
                    <p>Let's work together to build something amazing. Contact me to get started</p>
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