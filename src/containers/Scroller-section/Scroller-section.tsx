import React from "react";
import './scroller-section.scss'
import Slide from "../../components/slide/Slide";

import leftArrow from "../../assets/left-arrow.svg"
import rightArrow from "../../assets/right-arrow.svg"


const ScrollerSection = () => {
    return (
        <section className="scroller-section">
            <h2>Building websites that</h2>
            <div className="slides">
                <Slide mainText="Responsive and Compatible"
                    additionalText="Design and develop websites that work seamlessly across all devices and browsers." />
                <Slide id="slide-2" mainText="SEO optimized"
                    additionalText="Websites that are optimized for search engines to improve their visibility and ranking." />
                <Slide id="slide-3" mainText="Accessable for everyone"
                    additionalText="Websites with accessibility in mind to ensure that everyone can access and use them." />
            </div>
            <div className="scroller-section__btns">
                <div className="scroller-section__btn scroller-section__btn_prev">
                    <img src={leftArrow} />
                </div>

                <div className="scroller-section__btn scroller-section__btn_next">
                    <img src={rightArrow} />
                </div>
            </div>

        </section>
    )
}

export default ScrollerSection;