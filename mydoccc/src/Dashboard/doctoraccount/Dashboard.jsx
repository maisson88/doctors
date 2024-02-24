
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
// import UseFetchData from "../../hooks/UseFetchData";
const Dashboard=()=>{
    // const {data,loading,error}=UseFetchData('url')
    const [tab,setTab]=useState('overview')
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
                {
                    tab==='overview'&&(
                        <div className="col-lg-10  col-sm-12">
                    <div className="row">
                      <div className="col-3">
                      <img style={{borderRadius:'10px'}} className="img-fluid" src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg" alt=""/> 
                      </div>
                    
                    <div className="col-7">
                    <span className="p-1 " style={{backgroundColor:'antiquewhite',borderRadius:'10px',color:'rgb(5, 75, 75)'}}>Surgeon</span>
                    <h4>Dr.Sara Ahmed Mohamed</h4>
                    <div className="d-flex">
                  <img src={starIcon} alt="" />
                  <span>4.8</span>
                  <span className="ms-1">(272)</span>
                  </div>
                 
                  <div className="mt-3 mb-5">
          
          <h6 className="about">Abot of<span> Dr.Sara Ahed Mohamed</span></h6>
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
                }
                
                {
                    tab==='profile'&&(
                        <div className="col-lg-10  col-sm-12">
                        <Profile/>
                        </div>
                    )
                }
                {
                    tab==='appointments'&&(
                        <div className="col-lg-10  col-sm-12">
                        appointments
                        </div>
                    )
                }
            </div>
        
        </div>
        
        </>
    )
}
export default Dashboard;