import React from "react";


export default function Popupcomp({type,title }){

    const popupContainer = {
        position: "absolute",
        top:"0",
        // left:"0",
        height:"100vh",
        width:"100vw",
        background:"rgba(0,0,0,0.1)",
        zIndex: "-1"
    }

    const PopupStyle = {
   position: "relative",
   margin: "40vh",
   zIndex:"1"
    }
    
  return(
    <div style={popupContainer}>
        <div className={`${type}`} style={PopupStyle}>
            <div className="alert-close">
                <div className="d-flex">
                    <h4>{title ? title : <small className="alert-info">Popup title</small>}</h4>
                </div>
            </div>
        </div>
    </div>
  )
}