import React from "react";
import Alerts from "../../assets/components/Alerts";

export default function AlertsApp(){
    return(
        <div>
      <Alerts text={"success"} message={"successful log in"} />
        </div>
    )
}