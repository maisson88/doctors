import React, { useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import SignupOneDoctor from "./SignupOneDoctor";
import SignupTwoDoctor from "./SignupTwoDoctor";
import SignupthreeDoctor from "./SignupThreeDoctor";
import SignupThreeDoctor from "./SignupThreeDoctor";
function Formmdoctor() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    
    
    fullName:"",
    email:"",
    password:"",
    age:"",
    userType:"doctor",
    // photo:null,
    passwordConfirm:"",
    video:null, 
    phoneNumber:"",
    card:null, 
   
    gender:"",
     // pirthdate:"",
    
    
       

  });
  const navigate=useNavigate()
  const submitHandler=async event=>{
    if(valdite()){
      // axios.post('https://doctorz.onrender.com/api/v1/auth/signup',formData,{
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //   },
      // })
      axios.post('https://doctorz.onrender.com/api/v1/auth/signup',formData)
      .then(res=>{
        console.log(res)
        toast.success('Signup done sucessfuly')
        navigate('/login')
        
        
      })
      .catch(error=>{
        console.log(error)
        toast.error(error.response.data.message)
  
      })

    }
   
  
   
  
    
   
       

}

  const FormTitles = ["step 1 of 3", "step 2 of 3","step 3 of 3"] 

  const PageDisplay = () => {
    if (page === 0) {
      return <SignupOneDoctor formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <SignupTwoDoctor formData={formData} setFormData={setFormData} />;
    } 
 else if (page === 2){
    return <SignupThreeDoctor formData={formData} setFormData={setFormData} />;
  } 
  };
  const valdite=()=>{
    let result=true;
    const regExp=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    if(formData.email===''||formData.email===null){
      result=false;
      toast.warning('please enter your Email')
      
    }
    if(formData.password===''||formData.password===null){
      result=false;
      toast.warning('please enter your password')
     
    }
    if(!regExp.test(formData.password)){
      result=false;
      toast.warning('The password must be at least 8 characters long')
     
    }
    if(formData.passwordConfirm===''||formData.passwordConfirm===null){
      result=false;
      toast.warning('please enter your confirm password')
     
    }
    if(formData.phoneNumber.length<11&&formData.phoneNumber.length>11){
      result=false;
      toast.warning('please enter your valid number')
     
    }
    // if(formData.name===''||formData.name===null){
    //   result=false;
    //   toast.warning('please enter your name')
     
    // }
    // if(formData.confirmpassword!=formData.password){
    //   result=false;
    //   toast.warning('confirm password not equel password')
     
    // }
    // if(formData.video===''||formData.video===null){
    //   result=false;
    //   toast.warning('please upload the video')
     
    // }
    // if(formData.pasport===''||formData.pasport===null){
    //   result=false;
    //   toast.warning('please upload the pasport')
     
    // }
    return result;
  }

  return (
    < >
      
      <div className="container mt-5">
      <span style={{color:'#3E8989'}}>{FormTitles[page]}</span>
      </div>
         
        
        <>{PageDisplay()}</>
       
       <div className="container">
       <button
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
            className="btn text-light mb-5 " style={{backgroundColor:'#3E8989'}}
          >
            Back
          </button>
          <button
          style={{backgroundColor:'#3E8989'}}
            onClick={() => {
              if (page === FormTitles.length - 1) {
              
                // alert("FORM SUBMITTED");
                submitHandler();
               
                // console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
            className="btn mb-5 ms-5 text-light"
          >
            {page === FormTitles.length - 1 ? "Submit" : "Continue"}
          </button>
       </div>
          
    
      
    </>
  );
}

export default Formmdoctor;
