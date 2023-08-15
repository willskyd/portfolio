import React, {useState, useEffect} from "react";
import Botton from './Botton'

export default function Alerts({type, message}){

  const [showAlert,setShowAlert]=useState(true);

  const closeAlert = (e) => {
    e.target.parentElement.parentElement.classList.add("fadeAlert");

    setTimeout(() => {
      showAlert(false);
    }, 400);
  };
    return(showAlert && <div className={`Alert alert-${type}`}>
      <div className="alert-closed">
        <span className="alert-close">{message}</span>
        <Botton  btnClass={"btn-close"} text={"X"} 
        onClick={closeAlert}/>
      </div>
    </div>    )
     
  }