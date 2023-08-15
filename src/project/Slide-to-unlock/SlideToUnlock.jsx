import React, {useState} from "react";
import LockSlider from "./LockSlider";
 import {AiFillUnlock} from "react-icons/ai"
import LockScreenImg from "../Slide-to-unlock/img/wills1.jpg"
import HomeScreenImg from "../Slide-to-unlock/img/good.jpg"

export default function SlideToUnlock(){
   
     const [uiProps, setUiProps] = useState({

        uiText: "Unlock Screen",
        uiColor: "#eee",
        uiBg: `url(${LockScreenImg}) center/cover`,
     });
    const [showLockSlider, setShowLockSlider]= useState(true);
    const [lockSlidervalue, setLockSlidervalue] = useState(0);
    
   
    const handleLockSliderInput = (e)=>{
        setLockSlidervalue(e.target.value);
        // console.log(e.target.value);
         setShowLockSlider()
    };
    

    

    return(
        <div className="kontainer text-center margin-btm "  
        style={{
            height: "80vh",
            marginTop: "15vh",
            width: 330,
            border: "4px solid #000",
            borderRadius: "20px",
            marginLeft: "15%",
            background: uiProps.uiBg,
            
        }}>
            <h1 className="title" style={{color: uiProps.uiColor}}>
                {""}
                {uiProps.uiText}</h1>
            {showLockSlider ? (<LockSlider width={"250px"} 
            handleInput={handleLockSliderInput}
            value={lockSlidervalue}/>)  
            : (<AiFillUnlock className="unlock" />)}
           
            
        </div>
    )
}