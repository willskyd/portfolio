import React,{useState, useEffect} from 'react';
import './new react.css';
import TestimonialApp from './project/Testimonial/TestimonialApp'
import Botton from './assets/components/Botton'
import {BsFillFileEarmarkPostFill} from 'react-icons/bs'
import {FaUserAlt} from 'react-icons/fa'
import {BiCommentDetail} from 'react-icons/bi'
import Title from './project/Newreact';


export default function App() { 

    // const handleClick=(e) =>{
    // console.log("my click");
    // }
  
    const [testimonials, setTestimonials] = useState("");
    const [items, setItems] = useState();
  
    useEffect(() => {
       fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
        .then(response => response.json())
        .then(json => setItems(json));
    }, [testimonials]);
    return(
      <div>
        {/* <Randomize /> */}
  
        {/* { <LikePhotoApp /> } */}
   
        <TestimonialApp />
        <Botton text={"Posts"} 
        icon={<BsFillFileEarmarkPostFill />}
        onClick={()=> setTestimonials ("posts") } 
        />{""} 
       <Botton text={"Users"} icon={<FaUserAlt />}  
       onClick={()=> setTestimonials ("users")} />
       <Botton text={"Comments"} icon={<BiCommentDetail />}  
       onClick={()=> setTestimonials ("Comments")} />
  
       <Title classes={"subtitles"} 
       text={!testimonials ?"select text from above!" : testimonials} />
       
       {!items ? null : items.map((item) => {
        return <div className="card-name" key={item.id}>
          {item.name && <h2 className='header'>{item.name}</h2>}
          <div>
            <h4>{item.title}</h4>
            <p>{item.body}</p>
          </div>
       {item.email && <small className='header'>{item.email}</small>}
  
          </div>;
       })}
      </div>
    );
  }
  