


import React, { useState } from "react";
import uploadImageToCloundary from '../../Utils/uploadCloudnary'
import axios from "axios";
import  '../../Pages/SignUp.css'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const SettingsProfile=()=>{
    const [selectedFilephoto,setSelectedFilephoto]=useState(null)
    const [selectedFilevideo,setSelectedFilevideo]=useState(null)
    const [loading,setLoading]=useState(false)
    const [previewUrl,setPreviewUrl]=useState("")
    const [formData,setFormData]=useState({

        name:"",
        email:"",
        phone:"",
        date:"",
        area:'',
        photo:selectedFilephoto, 
        video:selectedFilevideo, 


    })
    const navigate=useNavigate()
    
    const handleInputChange=e=>{
        setFormData({...formData,[e.target.name]:e.target.value});
      

    }
    const handelFileInputChang=async(event)=>{
        const file=event.target.files[0]
        const isVideo = false;
        const data=await uploadImageToCloundary(file,isVideo)
       
        // console.log(data)
        // console .log(file)
        setPreviewUrl(data.url)
        setSelectedFilephoto(data.url)
        setFormData({...formData,photo:data.url})

    }

    const handelFileInputChangvideo=async(event)=>{
        const file=event.target.files[0]
        const isVideo = true;
        const data=await uploadImageToCloundary(file,isVideo)
       
        // console.log(data)
        // console .log(file)
        setPreviewUrl(data.url)
        setSelectedFilevideo(data.url)
        setFormData({...formData,video:data.url})

    }
    
    const submitHandler=async event=>{
        // console.log(formData)
       
         event.preventDefault();
        setLoading(true) 
       
        axios.post('http://localhost:1000/infopatiiom',formData)
        .then(res=>{
          console.log(res)
          toast.success('Update done sucessfuly')
          navigate('/')
          
          
        })
        .catch(error=>{
          console.log(error)
          toast.danger('Something wrong,please try again')

        })
           

    }
    return(
        <>
      {/* <section>
        
      <div className="container mt-5">
        <div className="row">
        
            <div className="col-md-6 col-lg-6">
               <h4 className="mt-4">Create an<span>account</span></h4>
               <form onSubmit={submitHandler}>
               <div className="mt-3">
                <input className="w-100 mb-3" type="text" placeholder="Full Name" name="name"  value={formData.name} onChange={handleInputChange}  />
             
            </div>
            <div className="mt-3">
                <input className="w-100 mb-3" type="email" placeholder="Enter your Email" name="email"  value={formData.email} onChange={handleInputChange}   />
             
            </div>
            <div className="mt-3">
                <input className="w-100 mb-3" type="number" placeholder="Enter your mobile" name="phone"  value={formData.phone} onChange={handleInputChange}   />
             
            </div>
          
            <div className="mt-3">
                <input type="date" id="birthday"  className="w-100 mb-3"  placeholder="Enter your mobile" name="date"  value={formData.date} onChange={handleInputChange} />
             
            </div>
              
                    <input  type="file" name="photo" id="customFile"  onChange={handelFileInputChang} />
             
            <div>
            </div>
              
              <input  type="file" name="video" id="customFile"  onChange={handelFileInputChangvideo} />
       
      <div>
            <select className="ml-2" name="area"  value={formData.area} onChange={handleInputChange}>
                    <option value="Alexandria">Alexandria</option>
                    <option value="Assiut">Assiut</option>
                    <option value="Bani Suef">Bani Suef</option>
                    <option value="Cairo">Cairo</option>
                    <option value="Damietta">Damietta</option>
                    <option value="El Beheria">El Beheria</option>
                    <option value="El Dakahlia">El Dakahlia</option>
                    <option value="El Ismailia">El Ismailia</option>
                    
                </select>
                <button type="submit" className="btn btn-primary w-100">Update profile</button>
            </div>
          
               
       

               </form>
            </div>
        </div>
      </div>
      </section> */}
      <div className="mt-5" style={{borderRadius:'10px',border: '0.5px solid #e0e0e9'}}>
        <div className="bg-dark d-flex justify-content-center  " style={{height:'24px',borderTopLeftRadius:'10px',borderTopRightRadius:'10px'}}>
              <span className="text-light ">Mange Profile</span>
        </div>
        <div className="d-flex justify-content-center py-5 px-2" >
        <form style={{width: '22rem'}}>
  {/* <!-- Name input --> */}
  <div data-mdb-input-init class="form-outline mb-4">
    <input type="text" id="form5Example1" class="form-control" placeholder="Your Name"  name="name"  value={formData.name} onChange={handleInputChange} />
    
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
  <button className="btn btn-dark btn-block mb-4 bg-light text-dark">Cancel</button>
  <button data-mdb-ripple-init type="button" class="btn btn-dark btn-block mb-4" onClick={submitHandler}>Save</button>
  </div>
  
</form>
        </div>
    
      </div>
    
        </>
    );

}
export default SettingsProfile;