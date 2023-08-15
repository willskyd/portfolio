import React from "react";
import './LockSlider.css'
export default function LockSlider( {handleInput, sliderValue, width} ){

    let SliderStyle = {
     appearance: "none",
     width: !width ? "300px" : width,
     height: "50px",
     background: "rgba(188, 190, 188, 0.5)",
     outline: "none",
     borderRadius: "20px",
     marginButtom: "10px"
    };
    return(
        <input type="range" className="slider" 
        style={SliderStyle} 
        value={sliderValue}
        onInput={handleInput}/>
    )
}