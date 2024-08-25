import axios from "axios"
import Header from "../../compentes/Header/Header"
import Foter from "../../compentes/foater/Foter"
import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import AppointmentsNewUser from "./AppointmentsNewUser"
import CounterUser from "./CounterUser"


const ProfileNew=()=>{
    const token=localStorage.getItem('token')

    const cleanedTokenString = token.replace(/\\/g, "");
    const cleanedTokenString2 = cleanedTokenString.replace(/"/g, "");
    console.log(cleanedTokenString2)
    // const {user,dispatch}=useContext(authContext)
    const [userData,setUserData]=useState({})
    const [tap,setTap]=useState('counter')
    useEffect(()=>{
        const getDoctore=()=>{
          axios.get('https://doctorz.onrender.com/api/v1/users/me', {
            headers: {
              'Authorization': `Bearer ${cleanedTokenString2}`
            }
          })
          .then(res => {
            console.log("user",res.data.data.data);
            setUserData(res.data.data.data)
            console.log("userdata",userData)
         
          
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
        <div style={{backgroundColor:'#3E8989',height:'400vh'}}>
            <div className="container ">
                <h3 className="text-light py-3">Your Profile</h3>
                <div className="row">
                    <div className="col-lg-5 col-md-12 mb-4">
                        <div className="py-2 pb-4 text-center  justify-content-center" style={{backgroundColor:'rgb(44 105 105)' ,borderRadius:'20px'}}>
                        <div class="d-flex justify-content-center mb-2 mt-5">
    <label htmlFor="customFile" class="upload-label">
      {userData.photo?(
          <img
          id="selectedAvatar"
          src={`${userData.photo}`}
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

<label class="form-label text-light">{userData.fullName}</label>

</div>
<div class="d-flex justify-content-center">

<div className="d-flex justify-content-between  ">
   <Link to={'/user/profile/me'}><button className="btn  me-2" onClick={()=>setTap('information')} style={{backgroundColor: tap === 'information' ? '#3E8989' : 'white',color: tap === 'information' ? 'white' : '#3E8989',fontWeight:'bold'}}>Information</button></Link> 
    <button className="btn   me-2" onClick={()=>setTap('appointments')} style={{backgroundColor: tap === 'appointments' ? '#3E8989' : 'white',color: tap === 'appointments' ? 'white' : '#3E8989',fontWeight:'bold'}}>Appointments</button>
    <button className="btn " onClick={()=>setTap('counter')} style={{backgroundColor: tap === 'counter' ? '#3E8989' : 'white',color: tap === 'counter' ? 'white' : '#3E8989',fontWeight:'bold'}}>Counter</button>
</div>

</div>
                        </div>
                    </div>
                    


                  
                    {
                      tap=='appointments'&&<AppointmentsNewUser/>
                    }
                   
                    {
                      tap=='counter'&&<CounterUser/>
                    }
                </div>
            </div>

        </div>
        </>
    )
}
export default ProfileNew