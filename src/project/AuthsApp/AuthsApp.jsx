import React, {useState} from "react";
import Title from "../Title"
export default function AuthsApp(){
const [ui, setUi]= useState({
    wrapper:true,
    title: "Authenticate"
})

    return(
        <div className="Container" style={{width: 300,}}>
           <Title text={ui.title} />

           {ui.wrapper && (
           <form action=""></form>
           )}
        </div>
    )
}