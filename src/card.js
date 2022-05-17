import React from "react";

function Card ({coverPhoto, pin, location, maps, title, date, description}){

    return(
        <div className="main-section">
            <div className="cards">
                <img src={`./images/${coverPhoto}`} alt="cover" className="cover-photo" height="250px"/>
               
         
            </div>
            <div className="content">
            <p className="place">
            <img src={`./images/${pin}`} alt="pin" className="pin"  />
            {/* <p className="country">{location}</p> */}
            <span>{location}</span>
            <a href="#">{maps}</a>
            </p>
        <div className="main-text">
        <h2 className="title">{title}</h2>
        <p className="dates">{date}</p>
        <p className="detail">{description}</p>

        </div>
   
        </div>

        </div>
    )
}

export default Card;