import React from "react";

export default function Botton({text="click", btnClass, icon, onClick}) {
    return(
        <button className={`btn ${btnClass} bt--1`} 
        onClick={onClick}>
            {icon}
            {text}
             {/* this is the longer way
             {!text? "click" :text} */}
        </button>
    )
};