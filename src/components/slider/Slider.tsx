import React, { useState } from "react"
import './slider.scss'
import { SliderImage } from "../../modules/slider"
import leftArrow from "../../assets/left-arrow.svg"
import rightArrow from "../../assets/right-arrow.svg"



interface Props {
    slides: SliderImage[]
}




const Slider: React.FC<Props> = ({ slides }) => {
    const [sliderImageI, setSliderImageI] = useState(0);

    const activateSlide = (index: number) => {
        setSliderImageI(index);
    }


    return (
        <div className="slider__container">
            <div className="slider">
                {slides.map((slide, slideI) => (
                    <div className={(sliderImageI === slideI) ? "slide_active" : "slide_inactive"}>
                        <div className="slide__content" onMouseEnter={() => activateSlide(slideI)}>
                            <p className="title">{slide.title}</p>
                            {(sliderImageI === slideI) && <p className="description">{slide.description}</p>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default Slider;

