import React from "react";

function Props(props){
   return(
    <div className="contact-card">
        <img src={props.img}/>
        <h3>{props.name}</h3>
        <div className="info-group">
            <p>{props.phone}</p>
        </div>
        <div className="info-group">
            <p>{props.email}</p>
        </div>
    </div>
   )
}
export default Props;