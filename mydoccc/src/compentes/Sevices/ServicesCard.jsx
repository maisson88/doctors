import React from "react";
import './Services.css'

const ServicesCard =({item,index})=>{
    const {name,desc,bgColor,textColor}=item
    return(
        <>
       
        <div className="text-center card p-3 mb-3"> 
            <h2>{name}</h2>
            <p>{desc}</p>
        </div>
        </>
    )

}
export default ServicesCard;