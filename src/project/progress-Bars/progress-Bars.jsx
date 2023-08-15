import React, {useRef, useEffect, useState} from "react";
import Title from "../Title"
import { ProgressBar } from "../../assets/components/ProgressBarr";
export default function Progress(){
  const [completed, setCompleted] = useState(0);
  const [Status, setStatus] = useState({
    ui:55,
    ux: 33,
    data: 20,
  })

    const projectDate = [
        {bgColor:"#7633f9", completed: Status.ui},
        {bgColor:"#28a745", completed: Status.ux},
        {bgColor:"#dc3545", completed: Status.data},

];
  
    const InputStyle={
        width:"50px",
        border:"none",
        outline:"none",
        textAlign:"center",
        borderBottom:"1px solid lightgray",
     }
    const uiInput = useRef(null);

     useEffect(() => {
      uiInput.current.focus();
     })

    return(
        <div className="Container">
            <Title text={"Progress Bars"} />
            
            <h2>Project Status:</h2>

            <ul className="out">
                <li>
              UI Status:{""}
              <input type="number"
              style={InputStyle} 
              ref={uiInput}
              value={""} 
              onChange={(e)=> console.log(e.target.value)}/>
                </li>
                <li>
              UX Status:{""}
              <input type="number"
              style={InputStyle} 
              value={""} 
              onChange={(e)=> console.log(e.target.value)}/>
                </li>
                <li>
              DATA Status:{""}
              <input type="number"
              style={InputStyle} 
              value={""} 
              onChange={(e)=> console.log(e.target.value)}/>
                </li>

            </ul>
    
         {projectDate.map((date) => (
             <ProgressBar
            // key={idx} 
             bgColor={date.bgColor}
             completed={date.completed} />

         ))}

        </div>
    )
}