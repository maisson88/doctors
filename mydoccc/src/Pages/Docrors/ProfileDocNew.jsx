import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../compentes/Header/Header";
import starIcon from "../../assets/images/Star.png"
import { formatDate } from "../../Utils/formatDate";
import AppointmentsDoctor from "./AppointmentsDoctor";


const ProfileDocNew=()=>{
    const [tap,setTap]=useState('overview')
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
        <div style={{backgroundColor:'#3E8989',height:'300vh'}}>
            <div className="container ">
                <h3 className="text-light py-3">Your Profile</h3>
                <div className="row">
                    <div className="col-lg-5 col-md-12 mb-4">
                        <div className="py-2 pb-4 text-center  justify-content-center" style={{backgroundColor:'rgb(44 105 105)' ,borderRadius:'20px'}}>
                        <div class="d-flex justify-content-center mb-2 mt-5">
    <label htmlFor="customFile" class="upload-label">
    {docData.photo?(
          <img
          id="selectedAvatar"
          src={`${docData.photo}`}
          class="rounded-circle"
          style={{ width: '200px', height: '200px', objectFit: 'cover', cursor: 'pointer' }}
          alt="example placeholder"
        />
        
      ):(
        <div class="spinner-border text-light" role="status">
 
</div>
      )}
    
      
    </label>
  </div>
  <div class="d-flex justify-content-center">

<label class="form-label text-light">{docData.fullName}</label>

</div>
<div class="d-flex justify-content-center">

<div className="d-flex justify-content-between  ">
   <Link to={'/doctor/profile/me'}><button className="btn  me-2" onClick={()=>setTap('information')} style={{backgroundColor: tap === 'information' ? '#3E8989' : 'white',color: tap === 'information' ? 'white' : '#3E8989',fontWeight:'bold'}}>Information</button></Link> 
    <button className="btn   me-2" onClick={()=>setTap('appointments')} style={{backgroundColor: tap === 'appointments' ? '#3E8989' : 'white',color: tap === 'appointments' ? 'white' : '#3E8989',fontWeight:'bold'}}>Appointments</button>
    <button className="btn " onClick={()=>setTap('overview')} style={{backgroundColor: tap === 'overview' ? '#3E8989' : 'white',color: tap === 'overview' ? 'white' : '#3E8989',fontWeight:'bold'}}>Overview</button>
</div>

</div>
                        </div>
                    </div>
                    

                   {
                    tap=='overview'&&(
                        <>
                          <div className="col-lg-7 col-md-12">
                          <div className="py-2 py-4 text-light px-5 " style={{backgroundColor:'rgb(44 105 105)' ,borderRadius:'20px'}}>
                          <div className="row">
                    
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
          <span style={{color:'pink'}}>{formatDate("12-04-2010")}</span>
          <div className="d-flex justify-content-between">
          <p>PHD in Neurologist </p>
              <p>Mount Adora Hospital, Sylhet.</p>
          </div>
          <h5 className="mb-3">Experience</h5>
          <span className="experince py-2 px-2">{formatDate("12-04-2018")}</span>
          
       
                    </div>
                   
                    </div>
                            </div>
                
                            </div>
                        </>
                    )
                   }
                  
                    {
                      tap=='appointments'&&<AppointmentsDoctor/>
                    }
                   
                    {/* {
                      tap=='counter'&&<CounterUser/>
                    } */}
                </div>
            </div>

        </div>
        </>
    )
}
export default ProfileDocNew