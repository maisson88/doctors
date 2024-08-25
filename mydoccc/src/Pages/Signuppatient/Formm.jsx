import React, { useState } from "react";
import SignupOne from "./SignupOne";
import SignupTwo from "./SignupTwo";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function Formm() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
        fullName:"",
        email:"",
        password:"",
        age:"",
        userType:"user",
        photo:null,
        passwordConfirm:"",
        phone:"",
        // pirthdate:"",
        gender:"",
        
  });
  const navigate=useNavigate()
  const submitHandler=async event=>{
    if(valdite()){
      axios.post('https://doctorz.onrender.com/api/v1/auth/signup',formData)
      .then(res=>{
        console.log(res)
        toast.success('Signup done sucessfuly')
        navigate('/login')
        
        
      })
      .catch(error=>{
        console.log(error)
        toast.success(error.message)
  
      })

    }
   
  
   
  
    
   
       

}
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
  // if(formData.confirmpassword===''||formData.confirmpassword===null){
  //   result=false;
  //   toast.warning('please enter your confirm password')
   
  // }
  // if(formData.phone.length<11&&formData.phone.length>11){
  //   result=false;
  //   toast.warning('please enter your valid number')
   
  // }
  // if(formData.name===''||formData.name===null){
  //   result=false;
  //   toast.warning('please enter your name')
   
  // }
  // if(formData.confirmpassword!=formData.password){
  //   result=false;
  //   toast.warning('confirm password not equel password')
   
  // }
 
  return result;
}

  const FormTitles = ["step 1 of 2", "step 2 of 2"];

  const PageDisplay = () => {
    if (page === 0) {
      return <SignupOne formData={formData} setFormData={setFormData}  />;
    } else if (page === 1) {
      return <SignupTwo formData={formData} setFormData={setFormData} />;
    } 
  };

  return (
    < >
      
      
      {/* <div className="container mt-5">
      <span>{FormTitles[page]}</span>
      </div> */}
          
        
        <>{PageDisplay()}</>

       
       <div className="container mt-5 d-flex">
       <button
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
            className="btn mb-5 text-light"
            style={{backgroundColor:'#3E8989'}}
          
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
            className="btn  mb-5 ms-5 text-light"
            
          >
            {page === FormTitles.length - 1 ? "Submit" : "Continue"}
          </button>
    
       </div>
          
      
    </>
  );
}

export default Formm;
