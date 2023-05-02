import React from "react";
import './scroller-section.scss'
import Slider from "../../components/slider/Slider";
import { SliderImage } from "../../modules/slider";
import slides from "../../data/slides";


const ScrollerSection = () => {

    return (
        <section className="scroller-section">
            <h2>Building websites that</h2>
            <Slider slides={slides}/>

        </section>
    )
}

export default ScrollerSection;