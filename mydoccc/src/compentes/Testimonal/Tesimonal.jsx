import React from "react";
import patientAvater from '../../assets/images/patient-avatar.png'
const Testimonal=()=>{
    return(
        <>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block " src={patientAvater} alt="First slide"/>
      <img class="d-block" src={patientAvater} alt="Third slide"/>
      <img class="d-block" src={patientAvater} alt="Third slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block " src={patientAvater} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block" src={patientAvater} alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
        </>
    )
}
export default Testimonal