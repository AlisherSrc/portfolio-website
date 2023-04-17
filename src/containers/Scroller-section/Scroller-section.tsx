import React from "react";
import './scroller-section.scss'
import Slider from "../../components/slider/Slider";
import { SliderImage } from "../../modules/slider";



const ScrollerSection = () => {
    const slides : SliderImage[] = [
        {
            title: "Responsive and Compatible",
            description: "Design and develop websites that work seamlessly across all devices and browsers.",
            backgroundImage: "https://images.unsplash.com/photo-1643930493431-472102e838fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        
        },
        {
            title: "SEO optimized",
            description: "Websites that are optimized for search engines to improve their visibility and ranking.",
            backgroundImage: "https://images.unsplash.com/photo-1657812160299-6b656decd5b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80"
        },
        {
            title: "Accessable for everyone",
            description: "Websites with accessibility in mind to ensure that everyone can access and use them.",
            backgroundImage: "https://images.unsplash.com/photo-1625490939776-17cef70ec079?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        },
    ]

    return (
        <section className="scroller-section">
            <h2>Building websites that</h2>
            <Slider slides={slides}/>

        </section>
    )
}

export default ScrollerSection;