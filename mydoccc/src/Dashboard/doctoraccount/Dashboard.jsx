
import React from "react";
import Loading from "../../loader/Loading";
import Error from "../../compentes/Error/Error";
import Tabs from "./Tabs";
import { useState } from "react";
import Header from "../../compentes/Header/Header";

import starIcon from "../../assets/images/Star.png"
import About from "../../Pages/Docrors/About";
import { formatDate } from "../../Utils/formatDate";
import Profile from "./Profile";
import Appointments from "./Appointments";
import { useEffect } from "react";
import axios from "axios";
import Foter from "../../compentes/foater/Foter";
// import UseFetchData from "../../hooks/UseFetchData";
const Dashboard=()=>{
    // const {data,loading,error}=UseFetchData('url')
    const [tab,setTab]=useState('Profile')
    const [docData,setDocData]=useState({})
    const token=localStorage.getItem('token')
    const cleanedTokenString = token.replace(/\\/g, "");
    const cleanedTokenString2 = cleanedTokenString.replace(/"/g, "");
    console.log(cleanedTokenString2)
    useEffect(()=>{
        const getDoctore=()=>{
          axios.get('https://doctorz.onrender.com/api/v1/doctors/me', {
            headers: {
              'Authorization': `Bearer ${cleanedTokenString2}`
            }
          })
          .then(res => {
            console.log("doctor",res.data.data.data);
            setDocData(res.data.data.data)
            console.log("docdata",docData)
         
          
          })
          .catch(error => {
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
             
            } else if (error.request) {
              console.log(error.request);
            
            } else {
              console.log('Error', error.message);
            
            }
          });
      
        }
        getDoctore();
      
      },[]) 
    return(
        <>
        <Header/>
        
        <div className="container mt-5">
            {/* {loading&& !error && <Loading/>}
            {error&& !loading && <Error/>}
            {
                !loading && !error&&(<></>)
            } */}
            <div className="row">
                <div className="col-lg-2 col-sm-12">
                    <Tabs tab={tab} setTab={setTab}/>
                </div>
                {/* {
                    tab==='overview'&&(
                        <div className="col-lg-10  col-sm-12">
                    <div className="row">
                      <div className="col-lg-3 col-sm-12 mt-3">
                      <img style={{borderRadius:'10px'}} className="img-fluid h-100" src={docData.photo} alt=""/> 
                      </div>
                    
                    <div className="col-lg-7  mt-3">
                    <span className="p-1 " style={{backgroundColor:'antiquewhite',borderRadius:'10px',color:'rgb(5, 75, 75)'}}>{docData.specialization}</span>
                    <h4>{docData.fullName}</h4>
                    <div className="d-flex">
                  <img src={starIcon} alt="" />
                  <span>{docData.ratingAverage}</span>
                  <span className="ms-1">({docData.ratingsQuantity})</span>
                  </div>
                 
                  <div className="mt-3 mb-5">
          
          <h6 className="about">Abot of <span>{docData.fullName}</span></h6>
          <p className="w-lg-50" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt esse repudiandae magni placeat ipsam suscipit, architecto corporis at iste officia, vitae qui est unde nemo perferendis eaque sequi? Dignissimos, nostrum?</p>
          </div>
          <h5>Education</h5>
          <span>{formatDate("12-04-2010")}</span>
          <div className="d-flex justify-content-between">
          <p>PHD in Neurologist </p>
              <p>Mount Adora Hospital, Sylhet.</p>
          </div>
          <h5 className="mb-3">Experience</h5>
          <span className="experince py-2 px-2">{formatDate("12-04-2018")}</span>
          
       
                    </div>
                   
                    </div>
                   
                    
                </div>
                    )
                } */}
                
                {
                    tab==='profile'&&(
                        <div className="col-lg-10  col-sm-12  d-flex justify-content-center mt-4">
                            <div className="">
                        <Profile/>
                        </div>
                        </div>
                        
                    )
                }
                {
                    tab==='appointments'&&(
                        <div className="col-lg-10  col-sm-12 d-flex align-items-center justify-content-center">
                        <Appointments/>
                        </div>
                    )
                }
            </div>
        
        </div>
        <Foter/>
        
        </>
    )
}
export default Dashboard;