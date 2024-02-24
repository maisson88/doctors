import React from "react";
import starIcon from "../../assets/images/Star.png"
import "./DoctoreCard.css"
const DoctoreCard=({doctor})=>{
    const { name, specialty, avgRating, totalRating, photo, totalPatients,hospital}=doctor
    return(
        <>
        {/* <div class="card mb-3">
  <img src={photo} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{name}</h5>
    <div className="d-flex align-item-center justify-content-between">
    <p class="card-text"><span className="specialty p-1">{specialty}</span></p>
     <div>
    <img src={starIcon} alt="" />
    <span>{avgRating}</span>
    <span className="ms-1">({totalRating})</span>
    </div>
    </div>
    <div className="d-flex align-item-center justify-content-between">
    <div>
    <h6>+{totalPatients} patients</h6>
    <p>At: {hospital}</p>
    </div>
    <a href="#" class="mt-3"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"  class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
  <path  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
</svg></a>
   
    </div>
    
   
   
   
   
  </div>
</div> */}
      
       
        </>
    )
}
export default DoctoreCard;