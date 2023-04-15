import React from "react"
import './slide.scss'


const Slide = (props:any) => {
    return (
        <div className="slide">
            <p>{props.mainText}</p>
            <p>{props.additionalText}</p>
        </div>
    )
}


export default Slide;

