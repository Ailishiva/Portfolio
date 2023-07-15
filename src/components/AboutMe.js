import "./AboutMeStyles.css";

import React from "react";

const PricingCard = () =>{
    return (

        <div className="aboutme">
        <h3> EDUCATION </h3>
            <div className="card-container">
                <div className="card">
                    <p className="btc"> Matriculation </p>
                    <span className="bar"></span>
                     <p>T s Residential. School(Boys) peddapur Camp jagtial, Telangana.</p>
                    <p> 75% </p>
                    
                  
                </div>

                <div className="card">
                    <p className="btc"> Diploma </p>
                    <span className="bar"></span>
                     <p>Anurag Engineering College  Suryapet, Telangana.</p>
                    <p> 83% </p>
                   
                </div>

                <div className="card">
                    <p className="btc"> Bachelor Of Technology </p>
                    <span className="bar"></span>
                     <p>Abr College of Engineering and Technology  prakasham , AndraPradesh.</p>
                    <p> 81% </p>
                   
                </div>
            </div>
        
        </div>
    )
}
export default PricingCard;