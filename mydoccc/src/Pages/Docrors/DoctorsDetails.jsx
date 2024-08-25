import React, { useState } from "react";
import doctoreImg from '../../assets/images/doctor-img02.png';
import './DoctorsDetailes.css';
import starIcon from "../../assets/images/Star.png"
import FeedBack from "./FeedBack";
import About from "./About";
import SidePanedl from "./SidePanel";
import Header from "../../compentes/Header/Header";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Foter from "../../compentes/foater/Foter";
import Calender from "./Calender";
const DoctorsDetails=()=>{
    const [tab,setTab]=useState('about')
    const [det , setDet] = useState({});
  
    const { id }= useParams();
    console.log(useParams())
    useEffect(()=>{
        const getId = (id)=>{
            axios.get(`https://doctorz.onrender.com/api/v1/doctors/${id}`)
            .then((res)=>{
                console.log(res.data);
                setDet(res.data.data.data);
              
            })
            .catch((er)=>console.log(er));
        }
        getId(id);
    },[]);
    return(
        <>
        <Header/>
        {det?(  <div className="container mt-5">
            <div className="row d-flex ">
                <div className=" col-md-6 col-lg-3">
                    {det.photo?(<img  className="img-fluid h-100"   src={det.photo}alt="" style={{borderRadius:'10px'}} />):(
                        <div className="text-center d-flex align-items-center justify-content-center h-100 w-100">
                              <div class="spinner-border" style={{color:'#3E8989'}} role="status">

</div>
                        </div>
                      )}
                    
                </div>
                <div className=" col-md-6 col-lg-5">
                <span className="specialty  py-2 px-2 mb-3" style={{backgroundColor:'#96B9BB'}} >{det.specialization}</span>
                     <h3 className="mt-3" style={{color:'#363636',fontSize:'20px'}}> {det.fullName}</h3>
                 
                
                 
                  <span className="text-secondary">Heart Surgeon, United Hospital</span>
                  <div className="col-6 mt-3">
                  <div className="d-flex justify-content-between">
                  <div className="d-flex align-items-center">
                  {/* <img src={starIcon} alt="" /> */}
                  <svg xmlns="http://www.w3.org/2000/svg" style={{color:'#44A0A0'}} width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
                  <span className="ms-2" style={{color:'#626060'}}>{det.ratingAverage}</span>
                  <span style={{color:'#626060'}}> ({det.ratingsQuantity})</span>
                  </div>
                  <div className="d-flex align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" style={{color:'#44A0A0'}} width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
</svg>
                  <span className="ms-2" style={{color:'#626060'}}> 980</span>
                  
                  </div>
                  <div className="d-flex align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" style={{color:'#44A0A0'}} width="16" height="16" fill="currentColor" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
  <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"/>
</svg>
                  <span className="ms-2" style={{color:'#626060'}}>4 Yrs</span>
                  
                  </div>
                  </div>
                  </div>
                
                  
                 <p  className="text-secondary mt-3"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quis vitae vero iste a sit odit repudiandae? Soluta pariatur consectetur totam dolorum repudiandae suscipit obcaecati sit, harum dolor, mollitia iusto.</p>
                
                </div>
                <div className="col-md-6 col-lg-4">
                    <SidePanedl/>
                 </div>

            </div>
            <div className="bb w-100">
                <button className={` ${tab==="about"&&'border-b'} me-2`} onClick={()=>setTab('about')}>About</button>
                <button className={`${tab==="feedback" &&'border-f'}  me-2`} onClick={()=>setTab('feedback')}>Feedback</button>
                <button className={`${tab==="book" &&'border-f'}`} onClick={()=>setTab('book')}>Book Appointment</button>
            </div>
            <div className="mb-5">
                {
                    tab==='about'&&<About/>
                }
                {
                    tab==='feedback'&&<FeedBack/>
                }
                {
                    tab==='book'&&<Calender/>
                }
            </div>
        </div>):(<div class="spinner-border" role="status">
  <span class="sr-only">Loading...</span>
</div>)}
      
    <Foter/>
        </>
    );
}
export default DoctorsDetails;