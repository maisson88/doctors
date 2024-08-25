


import React, { useState } from "react";
import uploadImageToCloundary from '../../Utils/uploadCloudnary'
import axios from "axios";
import  '../../Pages/SignUp.css'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext } from "react";
import { authContext } from "../../contextApi/AuthContext";
import { useEffect } from "react";


const SettingsProfile=()=>{
  const [url,setUrl]=useState("")
  const token=localStorage.getItem('token')

  const cleanedTokenString = token.replace(/\\/g, "");
  const cleanedTokenString2 = cleanedTokenString.replace(/"/g, "");
  console.log(cleanedTokenString2)
  // const {user,dispatch}=useContext(authContext)
  const [userData,setUserData]=useState({})
  // console.log(user)

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




  const handelFileInputChangpasport=async(event)=>{
      const file=event.target.files[0]
      const isVideo = false;
      const data=await uploadImageToCloundary(file,isVideo)
      setFormData({...formData,photo:data.url})
      console.log(data.url)
      setUrl(data.url)
      
  }
    const [selectedFilephoto,setSelectedFilephoto]=useState(null)
    const [selectedFilevideo,setSelectedFilevideo]=useState(null)
    const [loading,setLoading]=useState(false)
    const [previewUrl,setPreviewUrl]=useState("")
    const [formData,setFormData]=useState({

      fullName:"",
        email:"",
        // phoneNumber:"",
        // date:"",
        // area:'',
        photo:'https://img.freepik.com/free-photo/portrait-beautiful-girl-with-short-ginger-hair-looks-with-happy-relaxed-expression_273609-30416.jpg?t=st=1718035415~exp=1718036015~hmac=bc762d11f25999d8a800bbf3b285c6974bcbaf5ac853b0baf3b28c8b0a8a8f9d', 
        


    })
    const navigate=useNavigate()
    
    const handleInputChange=e=>{
        setFormData({...formData,[e.target.name]:e.target.value});
      

    }
   
    
    const submitHandler=async event=>{
        // console.log(formData)
       
         event.preventDefault();
        setLoading(true) 
       
   

        axios.patch('https://doctorz.onrender.com/api/v1/users/updateMe', formData, {
            headers: {
              'Authorization': `Bearer ${cleanedTokenString2}`
            }
          })
          .then(res => {
            console.log(res);
            toast.success('Update done successfully');
            
          })
          .catch(error => {
            if (error.response) {
              console.log("hell",error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
             toast.error('please enter your email and name')
            
             
            } else if (error.request) {
              console.log("heel",error.request);
              toast.error(error.request.errors.message)
            
            } else {
              console.log('Error', error.message);
              toast.error(error.message)
            
            }
          });

    }
    return(
        <>
      
   <div className="col-lg-4 col-md-12">
   <div>
  <div class="d-flex justify-content-center mb-4 mt-5">
    <label htmlFor="customFile" class="upload-label">
      <img
        id="selectedAvatar"
        src={url ? url : `${userData.photo}`}
        class="rounded-circle"
        style={{ width: '200px', height: '200px', objectFit: 'cover', cursor: 'pointer' }}
        alt="example placeholder"
      />
      <input class="form-control" type="file" name="photo" id="customFile" accept=".jpg, .png" onChange={handelFileInputChangpasport} style={{ display: 'none' }} />
    </label>
  </div>
  <div class="d-flex justify-content-center">

      <label class="form-label text-dark m-1">{userData.fullName}</label>
    
  </div>
</div>
                </div>




                <div className="col-lg-8 col-md-12">
                <div className="mt-5" style={{borderRadius:'10px',border: '0.5px solid #e0e0e9'}}>
        <div className="d-flex justify-content-center  "  style={{height:'24px',borderTopLeftRadius:'10px',borderTopRightRadius:'10px',backgroundColor:'#3E8989'}}>
              <span className="text-light ">Mange Profile</span>
        </div>
        <div className="d-flex justify-content-center py-5 px-2" >
        <form style={{width: '22rem'}}>
  {/* <!-- Name input --> */}
  <div data-mdb-input-init class="form-outline mb-4">
    <input type="text" id="form5Example1" class="form-control" placeholder="Your Name"  name="fullName"  value={formData.fullName} onChange={handleInputChange} />
    
  </div>

  {/* <!-- Email input --> */}
  <div data-mdb-input-init class="form-outline mb-4">
    <input type="email" id="form5Example2" class="form-control" placeholder="Email address" name="email"  value={formData.email} onChange={handleInputChange}  />
    
  </div>
  <div data-mdb-input-init class="form-outline mb-4">
    <input type="number" id="form5Example2" class="form-control" placeholder="Mobile Number" name="phone"  value={formData.phone} onChange={handleInputChange}  />
    
  </div>
  <div data-mdb-input-init class="form-outline mb-4">
  <input type="date" id="birthday"  className="w-100 p-2"  name="date"  value={formData.date} onChange={handleInputChange} style={{border:'1px solid #cdcdcd',borderRadius:'8px'}} />
  </div>
  <div data-mdb-input-init class="form-outline mb-4">
  <select class="form-control w-100"  name="area"  value={formData.area} onChange={handleInputChange} style={{border:'1px solid #cdcdcd',borderRadius:'8px'}}>
                    <option value="Alexandria">Alexandria</option>
                    <option value="Assiut">Assiut</option>
                    <option value="Bani Suef">Bani Suef</option>
                    <option value="Cairo">Cairo</option>
                    <option value="Damietta">Damietta</option>
                    <option value="El Beheria">El Beheria</option>
                    <option value="El Dakahlia">El Dakahlia</option>
                    <option value="El Ismailia">El Ismailia</option>
                    
                </select>
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
export default SettingsProfile;