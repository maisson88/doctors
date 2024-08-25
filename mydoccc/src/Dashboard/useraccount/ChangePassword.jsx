


import React, { useState } from "react";
import uploadImageToCloundary from '../../Utils/uploadCloudnary'
import axios from "axios";
import  '../../Pages/SignUp.css'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";


const ChangePassword=()=>{
  
    const [loading,setLoading]=useState(false)
    const token=localStorage.getItem('token')
    const cleanedTokenString = token.replace(/\\/g, "");
    const cleanedTokenString2 = cleanedTokenString.replace(/"/g, "");
    console.log(cleanedTokenString2)
    const [userData,setUserData]=useState({})

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
  

    const [formData,setFormData]=useState({
      passwordCurrent:"",
      password:"",
      passwordConfirm:""


    })
    const navigate=useNavigate()
    
    const handleInputChange=e=>{
        setFormData({...formData,[e.target.name]:e.target.value});
      

    }
 
    
    const submitHandler=async event=>{
        // console.log(formData)
       
         event.preventDefault();
        setLoading(true) 
       
       

        axios.patch('https://doctorz.onrender.com/api/v1/auth/updateMyPassword', formData, {
          headers: {
            'Authorization': `Bearer ${cleanedTokenString2}`
          }
        })
        .then(res => {
          console.log(res);
          toast.success('Update done successfully');
          navigate('/');
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
    return(
        <>
        
        <div>
        <div class="d-flex justify-content-center mb-4 mt-5">
    <label htmlFor="customFile" class="upload-label">
      <img
        id="selectedAvatar"
        src={`${userData.photo}`}
        class="rounded-circle"
        style={{ width: '200px', height: '200px', objectFit: 'cover' }}
        alt="example placeholder"
      />
    </label>
  </div>
        </div>
        <div className="col-lg-8 col-md-12">
        <div className="mt-5" style={{borderRadius:'10px',border: '0.5px solid #e0e0e9'}}>
        <div className="d-flex justify-content-center  "  style={{height:'24px',borderTopLeftRadius:'10px',borderTopRightRadius:'10px',backgroundColor:'#3E8989'}}>
              <span className="text-light ">Change Password</span>
        </div>
        <div className="d-flex justify-content-center py-5 px-2" >
        <form style={{width: '22rem'}}>
  {/* <!-- Name input --> */}
  <div data-mdb-input-init class="form-outline mb-4">
    <input type="password" id="form5Example1" class="form-control" placeholder="Current password "  name="passwordCurrent"  value={formData.passwordCurrent} onChange={handleInputChange} />
    
  </div>
  <div data-mdb-input-init class="form-outline mb-4">
    <input type="password" id="form5Example1" class="form-control" placeholder="New Password"  name="password"  value={formData.password} onChange={handleInputChange} />
    
  </div>
  <div data-mdb-input-init class="form-outline mb-4">
    <input type="password" id="form5Example1" class="form-control" placeholder="Confirm Password"  name="passwordConfirm"  value={formData.passwordConfirm} onChange={handleInputChange} />
    
  </div>

 
  
  
  {/* <!-- Checkbox --> */}
  <div class="form-check d-flex justify-content-center mb-4">
    <input
      class="form-check-input me-2"
      type="checkbox"
      value=""
      id="form5Example3"
      checked
      style={{backgroundColor:'black',borderColor:'black'}}
    />
    <label class="form-check-label" for="form5Example3">
      I have read and agree to the terms
    </label>
  </div>

  {/* <!-- Submit button --> */}
  <div className="d-flex justify-content-between">
  <button className="btn btn-block mb-4 bg-light" style={{color:'#3E8989',border:'#3E8989'}}>Cancel</button>
  <button data-mdb-ripple-init type="button" class="btn  btn-block mb-4 text-light" style={{backgroundColor:'#3E8989'}} onClick={submitHandler}>Save</button>
  </div>
  
</form>
        </div>
    
      </div>
        </div>
   
      
    
        </>
    );

}
export default ChangePassword;