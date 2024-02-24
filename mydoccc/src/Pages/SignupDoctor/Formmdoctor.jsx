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
        name:"",
        email:"",
        password:"",
        role:"doctor",
        photo:null,
        confirmpassword:"",
        phone:"",
        pirthdate:"",
        pasport:null, 
        gender:"",
        video:null, 
       

  });
  const navigate=useNavigate()
  const submitHandler=async event=>{
    if(valdite()){
      axios.post('http://localhost:1000/infopatiiom',formData)
    .then(res=>{
      console.log(res)
      toast.success('Signup done sucessfuly')
      navigate('/login')
      
      
    })
    .catch(error=>{
      console.log(error)
      toast.danger('Something wrong,please try again')

    })

    }
    
       

}

  const FormTitles = ["step 1 of 3", "step 2 of 3","step 3 of 3"];

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
      toast.danger('The password must be at least 8 characters long')
     
    }
    if(formData.confirmpassword===''||formData.confirmpassword===null){
      result=false;
      toast.warning('please enter your confirm password')
     
    }
    if(formData.phone.length<11&&formData.phone.length>11){
      result=false;
      toast.warning('please enter your valid number')
     
    }
    if(formData.name===''||formData.name===null){
      result=false;
      toast.warning('please enter your name')
     
    }
    if(formData.confirmpassword!=formData.password){
      result=false;
      toast.warning('confirm password not equel password')
     
    }
    if(formData.video===''||formData.video===null){
      result=false;
      toast.warning('please upload the video')
     
    }
    if(formData.pasport===''||formData.pasport===null){
      result=false;
      toast.warning('please upload the pasport')
     
    }
    return result;
  }

  return (
    < >
      
      <div className="container mt-5">
      <span>{FormTitles[page]}</span>
      </div>
         
        
        <>{PageDisplay()}</>
       
       <div className="container">
       <button
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
            className="btn btn-primary mb-5 "
          >
            Back
          </button>
          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
              
                // alert("FORM SUBMITTED");
                submitHandler();
               
                // console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
            className="btn btn-primary mb-5 ms-5"
          >
            {page === FormTitles.length - 1 ? "Submit" : "Continue"}
          </button>
       </div>
          
    
      
    </>
  );
}

export default Formmdoctor;
