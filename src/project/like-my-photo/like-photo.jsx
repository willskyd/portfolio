import React, {useState} from 'react'
import Title from '../Newreact'
import {
  AiFillSmile, 
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineComment,
} from 'react-icons/ai'
import GodyDog from './img/Dog.jpg'

export default function LikePhotoApp(){

  //  let like= true;
   const [like, setlike] = useState(false);
   const [count, setCount] = useState(0);

   const toggleLike = () =>{
    if (!like){
      setlike(true);
      setCount(count + 1);
      
    }else {
      setlike(false);
      setCount(count - 1);
    }
   };
    return (
        <div className='m-auto'>
          
          <Title text={<h2>Like Photo App</h2>}/>
          <Title classes={"subtitle"} text={`likes ${count}`}/>
           <div className="card card-dark m-auto" 
           style={{width: 300, cursor: "pointer"}}>
         <div className='card-header'>
          <AiFillSmile className='mr-2' />
            <small>DogyDog</small>
         </div>
       <img src={GodyDog} alt="img" className='photo' />
           <div className='card-footer' 
           style={{justifyContent: 'space-around' }}>
           
           
            <AiOutlineComment className='mr-3'/> {""}
            {like? <AiFillHeart className='text-Danger'
            onClick={toggleLike}/> :
             <AiOutlineHeart className='mr-4' 
             onClick={toggleLike} />  }

           </div>
           </div>
        </div>
    )
}