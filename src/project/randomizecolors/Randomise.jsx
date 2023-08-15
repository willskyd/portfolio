import React from 'react'
import Title from "../Newreact"
export default function Randomize(){
  function handleClick(e) {
    console.log("click")
  }

   const handleSecClick = (e) =>{
    console.log(getRandomColor());
    let body = document.querySelector("body")
    body.style.background = getRandomColor();
    e.target.style.backgroundColor = getRandomColor();
   };
 function getRandomColor(){
    let letters="0123456789ABCDEF"
    let color= "#"
    for (let i=0; i<6; i++){
     color += letters[Math.floor(Math.random() *16)];
    }
    return color;
 }

 document.body.style.background = "#aad"
    return(
        <div className='container'>
        <Title text={"Randomize Color"}  classes="mb-4"/>
        <div className='m-auto'>
        <button  className='btn' onClick={handleSecClick}>
            Click Me</button>
        <button  className=' btn-2' onClick={handleSecClick}>
            Click Me</button>
        <button  className=' btn-3' onClick={handleSecClick}>
            Click Me</button>
        <button  className=' btn-4' onClick={handleSecClick}>
            Click Me</button>
        </div>
    
        </div>
    )
}