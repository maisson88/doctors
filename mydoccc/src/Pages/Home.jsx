import React from "react";
import imgHome  from './../assets/f.elconfidencial.com_original_8db_8b6_aa5_8db8b6aa54b585253e15f79a68447aeb.jpg'
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



const Home=()=>{
  
    return(
        <>
        <Layout/>
      <div className="container mt-5">
        <div className="row" >
            <div className="col-md-12 col-lg-6 d-flex align-items-center">
              <div>
              <h1 className="">We help patient live a healthy,longer life</h1>
                <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus qui minus facere sed quos cum praesentium modi quisquam soluta! Necessitatibus eveniet, ad hic ea modi rem totam dolore optio delectus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia corrupti illo commodi voluptates at soluta, sequi cupiditate ipsam, praesentium error quod. Ratione numquam aliquam tempora natus ex dolorum quibusdam praesentium.</p>
                <a className="btn btn-dark mb-3" href="">Requist Aappointment</a>
              </div>
                
            </div>
            <div className="col-md-12 col-lg-6">
                <img className="img-fluid" src={imgHome} alt="" style={{borderRadius:'20px'}}/>
            </div>
        </div>
      </div>
      <Services/>
    

<section style={{marginBottom:'200px',marginTop:'100px'}}>
<div className="container text-center mt-5">
        <h5><strong>Our Great Doctores</strong></h5>
        <p className="w-50 m-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
    </div>
<div className="container mt-5 align-item-center mb-5">
<DoctoreList/>
</div>
</section>


<Specialtest/>

<div className="container mt-5 mb-5" >
   {/* <!--Section: FAQ--> */}
<section style={{marginBottom:'200px',marginTop:'200px'}}>
  {/* <h3 class="text-center mb-4 pb-2 text-primary fw-bold">FAQ</h3>
  <p class="text-center mb-5">
    Find the answers for the most frequently asked questions below
  </p> */}

  <div class="row">
    <div class="col-md-6 col-lg-4 mb-4">
      <h6 class="mb-3 text-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar2-week-fill" viewBox="0 0 16 16">
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5m9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5M8.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM3 10.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5m3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
</svg> Create your custom Booking Page</h6>
      <p>
         Minimize the time it takes for patients to schedule an appointment. Enable easy online self-booking with your specialists.
      </p>
    </div>

    <div class="col-md-6 col-lg-4 mb-4">
      <h6 class="mb-3 text-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
</svg> Display availability for all staff</h6>
      <p>
         Add individual profiles for your practice’s doctors. Direct patients to the appropriate consultant and streamline booking.
      </p>
    </div>

    <div class="col-md-6 col-lg-4 mb-4">
      <h6 class="mb-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-robot" viewBox="0 0 16 16">
  <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135"/>
  <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5"/>
</svg> Chatbot Support
      </h6>
      <p>
      Get access to Docta via chatbot for a fantastic telephealth Services.
      </p>
    </div>

    <div class="col-md-6 col-lg-4 mb-4">
      <h6 class="mb-3 "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
</svg> View your schedule on-the-go
      </h6>
      <p>
      Stay updated when away from your clinic. Get instant notifications with the DOKTORZ mobile app for <strong><u>iOS</u></strong>  and <strong><u>Android</u></strong>  devices.
      </p>
    </div>

    <div class="col-md-6 col-lg-4 mb-4">
      <h6 class="mb-3 "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-arrow-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708z"/>
  <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
</svg> Set up recurring follow-ups
      </h6>
      <p> Establish full treatment plans and book <strong><u>multiple appointments</u></strong> in advance with your doctor appointment software..</p>
    </div>

    <div class="col-md-6 col-lg-4 mb-4">
      <h6 class="mb-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
  <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"/>
</svg> Offer a modern medicine experience</h6>
      <p>
      Book and host video appointments to reach patients where they’re comfortable. Your Setmore app connects with Teleport and Zoom.
      </p>
    </div>
  </div>
</section>
{/* <!--Section: FAQ--> */}
</div>




{/* faq */}
<Comments/>
<div className="container mt-5">
<h3 class="text-center mb-4 pb-2 text-dark fw-bold ">FAQ</h3>
  <p class="text-center mb-5">
    Find the answers for the most frequently asked questions below
  </p>
  <div className="row">
    <div className="col-lg-6">
    <img className="img-fluid mb-5" src={faqImg} alt="" />
    </div>
    <div className="col-lg-6">
    {/* <h6 className="badge text-light bg-dark mb-4">Most question from our beloved patients</h6> */}
    
<FaqList/>
    </div>
  </div>




 










</div>

{/* <div className="container text-center mt-5">
  <h3 >Whats Our Patients Say</h3>
  <p className="w-50 m-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, velit aspernatur ipsa laboriosam </p>
</div> */}

{/* <Testimonal/> */}

<Foter/>

{/* <Doctors/> */}
{/* <DoctorsDetails/> */}
{/* <Login/> */}
{/* <Signup/> */}

        </>
    );
} 
export default Home;