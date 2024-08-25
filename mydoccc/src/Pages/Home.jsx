import React from "react";
import imgHome  from './../assets/f.elconfidencial.com_original_8db_8b6_aa5_8db8b6aa54b585253e15f79a68447aeb.jpg'
import hhome from './../assets/hhome3.png'
import dd from './../assets/dd.png'
import hermosa  from './../assets/hermosa-doctora-sonriente-espera-portapapeles_151013-2865-680x350.jpg'
import images1  from './../assets/images (1).jpg'
import images2  from './../assets/images (2).jpg'
import images3  from './../assets/images (3).jpg'
import images  from './../assets/images.jpg'
import "./Home.css"
import Serviceslist from "../compentes/Sevices/Serviceslist";
import DoctoreList from "../compentes/Doctors/DoctoreList";
import faqImg from './../assets/images/faq-img.png'
import FaqList from "../compentes/Faq/FaqList";
import Testimonal from "../compentes/Testimonal/Tesimonal";
import Doctors from "./Docrors/Doctors";
import DoctorsDetails from "./Docrors/DoctorsDetails";
import Login from "./Login.jsx";
import Signup from "./Signup";
import { useEffect } from "react";
import Layout from "../LayOut/Layout";
import Foter from "../compentes/foater/Foter";
import Comments from "./Comments.jsx";
import Services from "./Services.jsx";
import Specialtest from "./Docrors/Specialtest.jsx";
import './Home.css'
import { Link } from "react-router-dom";





const Home=()=>{
  
    return(
        <>
       
        <Layout/>

        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" style={{height:'70vh',minHeight:'300px', backgroundColor:'#3E8989'}}>
      {/* <img src="..." class="d-block w-100" alt="..."> */}
      <div className="carousel-caption  d-md-block text-center d-flex align-items-center "  style={{bottom:'220px'}} >
        <div>
        <h2>Consultations & appointment</h2>
        <p className="m-auto mb-5" >you can  now make your consultations with your doctor anywhere and anytime </p>
        <button className="btn btn-primary mt-3 text-b">LEARN MORE</button>
       
        </div>
      
      
       
      </div>
    </div>
    <div  class="carousel-item" style={{height:'70vh',minHeight:'300px', backgroundColor:'#3E8989'}}>
    <div className="carousel-caption  d-md-block text-center d-flex align-items-center "  style={{bottom:'220px'}} >
        <div>
        <h2>Consultations & appointment</h2>
        <p className="m-auto mb-5" >you can  now make your consultations with your doctor anywhere and anytime </p>
        <button className="btn btn-primary mt-3 text-b">LEARN MORE</button>
       
        </div>
      
      
       
      </div>
    </div>
    <div  class="carousel-item" style={{height:'70vh',minHeight:'300px', backgroundColor:'#3E8989'}}>
    <div className="carousel-caption  d-md-block text-center d-flex align-items-center"  style={{bottom:'220px'}} >
        <div>
        <h2>Consultations & appointment</h2>
        <p className="m-auto mb-5" >you can  now make your consultations with your doctor anywhere and anytime </p>
        <button className="btn btn-primary mt-3 text-b">LEARN MORE</button>
       
        </div>
      
      
       
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
       
   




       
   

     
      <Services/>


      <div className="container " style={{marginBottom:'200px',marginTop:'150px'}}>
        <div className="row mb-5 px-3 py-3" style={{borderRadius:' 20px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',border:"none",backgroundColor:'#3E8989'}} >
            <div className="col-md-12 col-lg-6 d-flex align-items-center">
              <div>
              <h2 className="text-light" style={{fontWeight:'bolder'}}>Why our application ?</h2>
                <p className="mt-4 w-75 fw-lighter text-light" style={{fontWeight:'bold'}}>Our medical application offers a comprehensive solution designed to revolutionize the way patients access healthcare services. Here's why you should choose our app<b style={{color:'#cbfd0d'}}>  Easy Appointment Booking:</b>  We provide a seamless and intuitive booking system that allows users to schedule appointments with doctors effortlessly. With just a few taps, patients can select their preferred date and time, eliminating the hassle of long waiting times and phone calls.</p>
                <a className="btn mb-3 px-4 mt-3" href="" style={{backgroundColor:'white' ,color:'#3E8989',fontWeight:'bold'}}>Download Now!</a>
              </div>
                
            </div>
            <div className="col-md-12 col-lg-6">
                {/* <img className="img-fluid" src={imgHome} alt="" style={{borderRadius:'20px'}}/> */}
                <div className="d-flex justify-content-end">
                <img className="img-fluid" src={`https://res.cloudinary.com/dvfyd13tg/image/upload/v1718897154/ovsnq38dcas737t9d68w.png`} alt=""/>
                </div>
               
            </div>
        </div>
      </div>




      <div className="container">
        <div className="row mb-5 mt-5" >
            <div className="col-md-12 col-lg-6 d-flex align-items-center">
              <div>
              <p className="" style={{color:'#3E8989',fontWeight:"bold",textDecoration:"underline",textDecorationColor:"#3E8989"}}>About Us</p>
              <h2 className="w-75" style={{color:'#3E8989'}}>We are a medical  team with professional doctor </h2>
                <p className="mt-4 w-100" style={{color:'#585858',fontWeight:'light'}}>World class Care of every one ,Our health System offers Unmatched expert health care and specialists.</p>
                <button className=" mb-3 px-4 mt-3" href="" style={{backgroundColor:'white' ,color:'#3E8989',border:'dashed',borderRadius:'10px'}}>View More</button>
              </div>
                
            </div>
            <div className="col-md-12 col-lg-6">
                {/* <img className="img-fluid" src={imgHome} alt="" style={{borderRadius:'20px'}}/> */}
                <div className="d-flex justify-content-end">
                <img className="img-fluid" src={dd} alt=""/>
                </div>
               
            </div>
        </div>
      </div>








    

{/* <section className="py-3" style={{marginBottom:'200px',marginTop:'100px' ,backgroundColor:"#098E8E"}}> */}
<div className="text-center" style={{marginBottom:'50px',marginTop:'100px' ,backgroundColor:"#098E8E"}}>
<h5 style={{color:"white"}}><strong>Meet Our Specialist Doctor </strong></h5>
</div>

<div className="container text-center">
       
      
    </div>
<div className="container mt-5 align-item-center mb-5">
<DoctoreList/>
<div className="text-center">
<Link to={'/findedoctore'}><button className=" mb-3 px-4 mt-3" href="" style={{backgroundColor:'#3E8989' ,color:'white',borderRadius:'10px',fontWeight:'bold'}}>View More</button></Link>
</div>


</div>
{/* </section> */}

{/* 
<Specialtest/> */}

<div className="container mt-5 mb-5" >
   {/* <!--Section: FAQ--> */}
<section style={{marginBottom:'200px',marginTop:'200px'}}>
  {/* <h3 class="text-center mb-4 pb-2 text-primary fw-bold">FAQ</h3>
  <p class="text-center mb-5">
    Find the answers for the most frequently asked questions below
  </p> */}

  {/* <div class="row">
    <div class="col-md-6 col-lg-4 mb-4">
      <h6 class="mb-3 text-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar2-week-fill" viewBox="0 0 16 16">
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5m9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5M8.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM3 10.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5m3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
</svg> Create your custom Booking Page</h6>
      <p className="w-75">
         Minimize the time it takes for patients to schedule an appointment. Enable easy online self-booking with your specialists.
      </p>
    </div>

    <div class="col-md-6 col-lg-4 mb-4">
      <h6 class="mb-3 text-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
</svg> Display availability for all staff</h6>
      <p className="w-75">
         Add individual profiles for your practice’s doctors. Direct patients to the appropriate consultant and streamline booking.
      </p>
    </div>

    <div class="col-md-6 col-lg-4 mb-4">
      <h6 class="mb-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-robot" viewBox="0 0 16 16">
  <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135"/>
  <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5"/>
</svg> Chatbot Support
      </h6>
      <p className="w-75">
      Get access to Docta via chatbot for a fantastic telephealth Services.
      </p>
    </div>

    <div class="col-md-6 col-lg-4 mb-4">
      <h6 class="mb-3 "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
</svg> View your schedule on-the-go
      </h6>
      <p className="w-75">
      Stay updated when away from your clinic. Get instant notifications with the DOKTORZ mobile app for <strong><u>iOS</u></strong>  and <strong><u>Android</u></strong>  devices.
      </p>
    </div>

    <div class="col-md-6 col-lg-4 mb-4">
      <h6 class="mb-3 "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-arrow-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708z"/>
  <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
</svg> Set up recurring follow-ups
      </h6>
      <p className="w-75"> Establish full treatment plans and book <strong><u>multiple appointments</u></strong> in advance with your doctor appointment software..</p>
    </div>

    <div class="col-md-6 col-lg-4 mb-4">
      <h6 class="mb-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
  <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"/>
</svg> Offer a modern medicine experience</h6>
      <p className="w-75">
      Book and host video appointments to reach patients where they’re comfortable. Your Setmore app connects with Teleport and Zoom.
      </p>
    </div>
  </div> */}


  <div className="row py-5 px-4" style={{borderRadius:' 20px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',border:"none"}}>
    <div className="col-lg-8 col-md-12">
      <div className="row mb-4">
        <div className="col-lg-6 col-md-6">
       <svg style={{color:'#3E8989'}} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-calendar2-week-fill" viewBox="0 0 16 16">
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5m9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5M8.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM3 10.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5m3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
</svg> <h5 class="mb-3 mt-4" style={{fontWeight:'bolder',color:'rgb(21 61 61)' }}> Create your custom Booking Page</h5>
      <p className="w-75 text-secondary" >
         Minimize the time it takes for patients to schedule an appointment. Enable easy online self-booking with your specialists.
      </p>

        </div>
        <div className="col-lg-6 col-md-6">
        <svg style={{color:'#3E8989'}} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
</svg> <h5 class="mb-3 mt-4" style={{fontWeight:'bolder',color:'rgb(21 61 61)' }}> Create your custom Booking Page</h5>
      <p className="w-75 text-secondary" >
         Minimize the time it takes for patients to schedule an appointment. Enable easy online self-booking with your specialists.
      </p>

        </div>
      </div>
      <div className="row ">
        <div className="col-lg-6 col-md-6">
        <svg style={{color:'#3E8989'}} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-robot" viewBox="0 0 16 16">
  <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135"/>
  <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5"/>
</svg> <h5 class="mb-3 mt-4" style={{fontWeight:'bolder',color:'rgb(21 61 61)' }}> Create your custom Booking Page</h5>
      <p className="w-75 text-secondary" >
         Minimize the time it takes for patients to schedule an appointment. Enable easy online self-booking with your specialists.
      </p>

        </div>
        <div className="col-lg-6 col-md-6">
        <svg style={{color:'#3E8989'}} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
</svg> <h5 class="mb-3 mt-4" style={{fontWeight:'bolder',color:'rgb(21 61 61)' }}> Create your custom Booking Page</h5>
      <p className="w-75 text-secondary" >
         Minimize the time it takes for patients to schedule an appointment. Enable easy online self-booking with your specialists.
      </p>

        </div>
      </div>
    </div>
    <div className="col-lg-4 col-md-12">
      <div class="card" style={{borderRadius:' 20px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',border:"none"}}>
  <img style={{borderRadius:' 20px'}} src={`https://media.istockphoto.com/id/1555515663/photo/happy-portrait-group-and-doctors-for-healthcare-service-leadership-and-teamwork-in-hospital.jpg?s=1024x1024&w=is&k=20&c=_cne0rngGayCObcboBav1spc1h45v6D4Y8cFxQM08wI=`} class="card-img-top" alt="..."/>
  <div class="card-body text-center">
    <h5 class="card-title" style={{color:'rgb(21 61 61)'}}>Get insights on Search</h5>
    <p class="card-text text-secondary">Website visitors today demand a frictionless user expericence — especially when using search. Because of the hight standards..</p>
    <a href="#" class="btn text-light" style={{backgroundColor:"#3E8989",fontWeight:'bold'}}>FIND OUT MORE</a>
  </div>
</div>
      </div>
  </div>

</section>
{/* <!--Section: FAQ--> */}
</div>




{/* faq */}
<div className="container">
  <div className="text-center">
    <h1 style={{fontWeight:'bold'}}>What Our Patients Say</h1>
    <p className="m-auto" style={{color:'gray',width:"400px"}}>World class Care of every one ,Our health System offers Unmatched ,expert health care</p>
  </div>
<Comments/>
</div>
<div className="py-3"  style={{backgroundColor:'#3E8989'}}>
  <div className="container ">
    <div className="text-center mt-5">
    <h5 className="m-auto text-light">Check Our articles</h5>
    </div>
   
  <div className="row py-3">
    <div className="col-lg-4 col-md-6 col-sm-12">
    <div className="card mb-4"  style={{borderRadius:' 0.375rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', padding: '1.25rem',borderRadius:"20px",backgroundColor:"#FBFAFA"}}>
                  <img
                  // src={'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg'}
                  src={'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?cs=srgb&dl=pexels-pixabay-356040.jpg&fm=jpg'}
                    className="card-img-top"
                    alt="..."
                    style={{ maxHeight: "350px", borderRadius: "10px" }}
                  />
                  <div className="card-body">
                  <div className="d-flex justify-content-between align-item-center  mb-1 mt-3">
            <h6 class="card-title" style={{color:'#3E8989'}}>Features, Evaluation, and Treatment of Coronavirus (COVID-19)</h6>
            <svg style={{color:'#3E8989'}} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-bookmark-fill" viewBox="0 0 16 16">
  <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2"/>
</svg>
            </div>
           
                    
                    <div className="d-flex align-item-center justify-content-between">
                      <p className="card-text">
                        {/* <span className="specialty p-1" style={{backgroundColor:'#96B9BB'}}>{doctor.specialization}</span> */}
                      </p>
                      <div className="d-flex align-items-center">
                     
                      </div>
                    </div>
                    <div className="d-flex align-item-center justify-content-between">
                      <div>
                    
                      <p className="">COVID-19 is a disease under surveillance in the European Union (EU) and must be reported by all Member  .. etc <span><Link to={'/articeleN'}>more here</Link></span>  </p>
                       
                     </div>
                     
                    </div>
                  </div>
                </div>
    </div>
    <div className="col-lg-4 col-md-6 col-sm-12">
    <div className="card mb-4"  style={{borderRadius:' 0.375rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', padding: '1.25rem',borderRadius:"20px",backgroundColor:"#FBFAFA"}}>
                  <img
                  // src={'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg'}
                  src={'https://images.unsplash.com/photo-1599493758267-c6c884c7071f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                    className="card-img-top"
                    alt="..."
                    style={{ maxHeight: "350px", borderRadius: "10px" }}
                  />
                  <div className="card-body">
                  <div className="d-flex justify-content-between align-item-center  mb-1 mt-3">
            <h6 class="card-title" style={{color:'#3E8989'}}>Features, Evaluation, and Treatment of Coronavirus (COVID-19)</h6>
            <svg style={{color:'#3E8989'}} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-bookmark-fill" viewBox="0 0 16 16">
  <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2"/>
</svg>
            </div>
           
                    
                    <div className="d-flex align-item-center justify-content-between">
                      <p className="card-text">
                        {/* <span className="specialty p-1" style={{backgroundColor:'#96B9BB'}}>{doctor.specialization}</span> */}
                      </p>
                      <div className="d-flex align-items-center">
                     
                      </div>
                    </div>
                    <div className="d-flex align-item-center justify-content-between">
                      <div>
                    
                      <p className="">COVID-19 is a disease under surveillance in the European Union (EU) and must be reported by all Member  .. etc <span>more here</span>  </p>
                       
                     </div>
                     
                    </div>
                  </div>
                </div>
    </div>
    <div className="col-lg-4 col-md-6 col-sm-12">
    <div className="card mb-4"  style={{borderRadius:' 0.375rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', padding: '1.25rem',borderRadius:"20px",backgroundColor:"#FBFAFA"}}>
                  <img
                  // src={'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg'}
                  src={'https://images.unsplash.com/photo-1602542165989-999c53234fdd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                    className="card-img-top"
                    alt="..."
                    style={{ maxHeight: "350px", borderRadius: "10px" }}
                  />
                  <div className="card-body">
                  <div className="d-flex justify-content-between align-item-center  mb-1 mt-3">
            <h6 class="card-title" style={{color:'#3E8989'}}>Features, Evaluation, and Treatment of Coronavirus (COVID-19)</h6>
            <svg style={{color:'#3E8989'}} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-bookmark-fill" viewBox="0 0 16 16">
  <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2"/>
</svg>
            </div>
           
                    
                    <div className="d-flex align-item-center justify-content-between">
                      <p className="card-text">
                        {/* <span className="specialty p-1" style={{backgroundColor:'#96B9BB'}}>{doctor.specialization}</span> */}
                      </p>
                      <div className="d-flex align-items-center">
                     
                      </div>
                    </div>
                    <div className="d-flex align-item-center justify-content-between">
                      <div>
                    
                      <p className="">COVID-19 is a disease under surveillance in the European Union (EU) and must be reported by all Member  .. etc <span>more here</span>  </p>
                       
                     </div>
                     
                    </div>
                  </div>
                </div>
    </div>
   
  </div>
  <div className="row py-3">
    <div className="col-lg-4 col-md-6 col-sm-12">
    <div className="card mb-4"  style={{borderRadius:' 0.375rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', padding: '1.25rem',borderRadius:"20px",backgroundColor:"#FBFAFA"}}>
                  <img
                  // src={'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg'}
                  src={'https://www.sgs.com/-/media/sgscorp/images/temporary/medical-device-hero.cdn.en-EG.1.jpg'}
                    className="card-img-top"
                    alt="..."
                    style={{ maxHeight: "350px", borderRadius: "10px" }}
                  />
                  <div className="card-body">
                  <div className="d-flex justify-content-between align-item-center  mb-1 mt-3">
            <h6 class="card-title" style={{color:'#3E8989'}}>Features, Evaluation, and Treatment of Coronavirus (COVID-19)</h6>
            <svg style={{color:'#3E8989'}} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-bookmark-fill" viewBox="0 0 16 16">
  <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2"/>
</svg>
            </div>
           
                    
                    <div className="d-flex align-item-center justify-content-between">
                      <p className="card-text">
                        {/* <span className="specialty p-1" style={{backgroundColor:'#96B9BB'}}>{doctor.specialization}</span> */}
                      </p>
                      <div className="d-flex align-items-center">
                     
                      </div>
                    </div>
                    <div className="d-flex align-item-center justify-content-between">
                      <div>
                    
                      <p className="">COVID-19 is a disease under surveillance in the European Union (EU) and must be reported by all Member  .. etc <span><Link to={'/articeleN'}>more here</Link></span>  </p>
                       
                     </div>
                     
                    </div>
                  </div>
                </div>
    </div>
    <div className="col-lg-4 col-md-6 col-sm-12">
    <div className="card mb-4"  style={{borderRadius:' 0.375rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', padding: '1.25rem',borderRadius:"20px",backgroundColor:"#FBFAFA"}}>
                  <img
                  // src={'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg'}
                  src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaoD0VbQMV86aZm4fDdRr9w3YVRlVX0yp8Xg&s'}
                    className="card-img-top"
                    alt="..."
                    style={{ maxHeight: "260px", borderRadius: "10px" }}
                  />
                  <div className="card-body">
                  <div className="d-flex justify-content-between align-item-center  mb-1 mt-3">
            <h6 class="card-title" style={{color:'#3E8989'}}>Features, Evaluation, and Treatment of Coronavirus (COVID-19)</h6>
            <svg style={{color:'#3E8989'}} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-bookmark-fill" viewBox="0 0 16 16">
  <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2"/>
</svg>
            </div>
           
                    
                    <div className="d-flex align-item-center justify-content-between">
                      <p className="card-text">
                        {/* <span className="specialty p-1" style={{backgroundColor:'#96B9BB'}}>{doctor.specialization}</span> */}
                      </p>
                      <div className="d-flex align-items-center">
                     
                      </div>
                    </div>
                    <div className="d-flex align-item-center justify-content-between">
                      <div>
                    
                      <p className="">COVID-19 is a disease under surveillance in the European Union (EU) and must be reported by all Member  .. etc <span>more here</span>  </p>
                       
                     </div>
                     
                    </div>
                  </div>
                </div>
    </div>
    <div className="col-lg-4 col-md-6 col-sm-12">
    <div className="card mb-4"  style={{borderRadius:' 0.375rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', padding: '1.25rem',borderRadius:"20px",backgroundColor:"#FBFAFA"}}>
                  <img
                  // src={'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg'}
                  src={'https://my-doc.com/wp-content/uploads/2020/04/regular-medical-check-up-singapore-doctor-patient-1024x683.jpg'}
                    className="card-img-top"
                    alt="..."
                    style={{ maxHeight: "260px", borderRadius: "10px" }}
                  />
                  <div className="card-body">
                  <div className="d-flex justify-content-between align-item-center  mb-1 mt-3">
            <h6 class="card-title" style={{color:'#3E8989'}}>Features, Evaluation, and Treatment of Coronavirus (COVID-19)</h6>
            <svg style={{color:'#3E8989'}} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-bookmark-fill" viewBox="0 0 16 16">
  <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2"/>
</svg>
            </div>
           
                    
                    <div className="d-flex align-item-center justify-content-between">
                      <p className="card-text">
                        {/* <span className="specialty p-1" style={{backgroundColor:'#96B9BB'}}>{doctor.specialization}</span> */}
                      </p>
                      <div className="d-flex align-items-center">
                     
                      </div>
                    </div>
                    <div className="d-flex align-item-center justify-content-between">
                      <div>
                    
                      <p className="">COVID-19 is a disease under surveillance in the European Union (EU) and must be reported by all Member  .. etc <span>more here</span>  </p>
                       
                     </div>
                     
                    </div>
                  </div>
                </div>
    </div>
   
  </div>

  <div className="text-center">
  <button  className=" mb-4  m-auto px-2" style={{backgroundColor:'white',color:'#3E8989',borderRadius:'10px',fontWeight:'bold'}}>Read More</button>
  </div>
 
  </div>

</div>

<div className="container mt-5 mb-5">
<h3 class="text-center mb-2 pb-2 text-dark fw-bold ">FAQs<b style={{color:'#3E8989'}}>.</b></h3>
  

   <div className="d-flex justify-content-center">
   <div className="w-50">
    {/* <h6 className="badge text-light bg-dark mb-4">Most question from our beloved patients</h6> */}
    
<FaqList/>





  </div>

   </div>
   




 










</div>




<Foter/>

{/* <Doctors/> */}
{/* <DoctorsDetails/> */}
{/* <Login/> */}
{/* <Signup/> */}


        </>
    );
} 
export default Home;