import React, {useState} from 'react';
import Title from './project/Newreact'

// import Wills from './project/more'
// import East from './project/same'

export default function App() { 

  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleNameChange = (e) =>{
   setName(e.target.value)
  }
  const handleDateChange = (e) =>{
    setDate(e.target.value)
   }
  const inputStyle = {
    border: "none",
    bordeerButtom: "2px dotted",
    outline: "none",
    padding: ".35rem 0",
  };
  document.body.style.background="#aad";
  return(
    <div className='container ' >
    {/* <Title text={"Name"} /> */}
    <Title text={name} />
    <Title text={!date ?"Dob" :date} />
   <p>
    Lorem ipsum dolor sit amet consectetur adipisicing 
    elit. Ex sequi quia cum unde, corporis magnam nisi 
    laboriosam quis nesciunt? Repellat eum neque totam 
    molestias et fuga, quam quia exercitationem. Eum!
   </p>
    <footer style={{justifycontent: "space-around",
  position: "relative", top:"40vh"}}>
   <input type="Date" value={date} style={inputStyle} 
   onChange={handleDateChange}/>
   <input type="Name" value={name} style={inputStyle} 
   onChange={handleNameChange} />
   </footer>
    </div>
  )
}
