import React from 'react'


export default function Wills({GodyDog}){

    
    return(
        <div className="container p-6">
          <TailwindCss >
            text button
          </TailwindCss>

        </div>
    
    //     <div className="chat-notification bg-gray-200 mt-4 ">
    //     <div className="chat-notification-logo-wrapper">
    //        <img src="" alt="img" />
    //     </div>
    //     <div className="chat-notification-content">
    //       <h4 className="chat-notification-title text-success">ChitChat</h4>
    //       <p className="chat-notification-message text-blue-450">You have a new message!</p>
    //     </div>
    //   </div>
     
    )
}

function TailwindCss(props){
    return(
        <button className="bg-blue-450 text-white
        font-medium px-4 py-2 rounded hover:bg-blue-600 ">
            {props.children}
        </button>
    )
}