import axios from "axios"
import { useState } from "react"
import { toast } from "react-toastify"
import uploadImageToCloundary from "../../Utils/uploadCloudnary"
import { useEffect } from "react"


const Profile=()=>{
    const [url,setUrl]=useState("")
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



    const handelFileInputChangpasport=async(event)=>{
        const file=event.target.files[0]
        const isVideo = false;
        const data=await uploadImageToCloundary(file,isVideo)
        setFormData({...formData,photo:data.url})
        console.log(data.url)
        setUrl(data.url)
        
    }
    const [formData,setFormData]=useState({
      about:'',
     specialization:'',
      ticketPrice:0,
    //   min:'',
    //   max:'',
    hospital:'',
      address:'',
      phone:'',
     achievements:'',
      phoneNumber:'',
      area:'',
      city:'',
    //   timeSlots:[],
      photo:null
    })
    const handleInputChange=e=>{
        setFormData({...formData,[e.target.name]:e.target.value})

    }

    const addItem=(key,item)=>{
      setFormData(prevFormDta=>({...prevFormDta,[key]:[...prevFormDta[key],item]}))
    }
    const handelReuseableInputChange=(key,index,event)=>{
        const {name,value}=event.target
        setFormData(prevFormDta=>{
            const updateItem=[...prevFormDta[key]]
            updateItem[index][name]=value
            return{
                ...prevFormDta,
                key:updateItem
            }
        })
    }
    const addTimeSlots=e=>{
       
        e.preventDefault();
        addItem('timeSlots',{
            day:"",
            startingTime:"",
            endingTime:""

        })
    }
    const handleTimeSlotesChange=(event,index)=>{
        handelReuseableInputChange('timeSlots',index,event)
    }
    const updateProfileHaandler=async e=>{
        e.preventDefault()

        axios.patch('https://doctorz.onrender.com/api/v1/doctors/updateMe', formData, {
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
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
             
            } else if (error.request) {
              console.log(error.request);
            
            } else {
              console.log('Error', error.message);
            
            }
          });
     





        // axios.post('http://localhost:1000/infopatiiom',formData)
        // .then(res=>{
        //   console.log(res)
         
          
          
        // })
        // .catch(error=>{
        //   console.log(error)
          
    
        // })
    }
    return(
        <>
        <div className="row d-flex justify-content-between">
        <div className="col-lg-8 col-md-12">
        <div className="d-flex justify-content-center"> <h4>Profile Information</h4></div>
        <div className="d-flex justify-content-center p-3">
         {/* <h4>Profile Information</h4> */}
        <div className="mb-5">
        <form>
            <div className="row">
                <span>About</span>
                <textarea name="about" value={formData.about} onChange={handleInputChange} style={{border:'none', borderRadius:' 0.375rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',backgroundColor:'white'}}></textarea>
            </div>
            <div className="row ">
    
            <div className="col-lg-6 col-sm-12 ">
            <p className="mb-1 mt-4" style={{color:'rgb(5, 75, 75)'}}>specialization</p>
            <select className="w-100" name="specialization"  value={formData.specialization} onChange={handleInputChange} style={{border:'none', borderRadius:' 0.375rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',backgroundColor:'white'}}>

          
              <option value="Cardiology">Cardiology</option>
              <option value="Dermatology">Dermatology</option>
              <option value="Oncology">Oncology</option>
              <option value="Neurology">Neurology</option>
              <option value="Pediatrics">Pediatrics</option>
              <option value="Gynecology">Gynecology</option>
              <option value="Orthopedics">Orthopedics

</option>
              <option value="Psychiatry">Psychiatry

</option>
                </select>
            </div>
               
                
            <div className="col-lg-6 col-md-12 col-sm-12 ">
            <p className="mb-1 mt-4" style={{color:'rgb(5, 75, 75)'}}>Ticket Price </p>
            <input className="w-100" type="number" name="ticketPrice" value={formData.ticketPrice} onChange={handleInputChange} style={{border:'none', borderRadius:' 0.375rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',backgroundColor:'white'}}/>
            </div>
                
                  


                
            
            </div>
            <div className="row mt-3">
    
    <div className="col-lg-6 col-md-12">
    
    <p>Max</p>
    <input className="w-100" type="number" name="max" value={formData.max} onChange={handleInputChange} style={{border:'none', borderRadius:' 0.375rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',backgroundColor:'white'}}/>
    </div>
       
        
    <div className="col-lg-6 col-md-12">
    <p>Min</p>
    <input className="w-100" type="number" name="min" value={formData.min} onChange={handleInputChange} style={{border:'none', borderRadius:' 0.375rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',backgroundColor:'white'}}/>
    </div>
    </div>
    <div className="row mt-3">
        <span>Hospital</span>
        <input type="text" name="hospital" value={formData.hospital} onChange={handleInputChange} style={{border:'none', borderRadius:' 0.375rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',backgroundColor:'F4F4F4'}} />
    </div>
    <div className="row mt-3">
        <span>Locations of the Clinic</span>
        <input type="text" name="address" value={formData.address} onChange={handleInputChange} style={{border:'none', borderRadius:' 0.375rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',backgroundColor:'F4F4F4'}} />
    </div>
    <div className="row mt-3">
        <span>phone number of the clinc</span>
        <input type="number" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} style={{border:'none', borderRadius:' 0.375rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',backgroundColor:'F4F4F4'}} />
    </div>
    <div className="row mt-3">
        <div className="col">
        <button className="btn btn-dark w-100" onClick={addTimeSlots}>Add TimeSlot <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg></button>
        </div>
    
    </div>
    
        {formData.timeSlots?.map((item,index)=>
            <>
            <div className="row mt-3">
                 <div className="col">
                    <p style={{color:'rgb(5, 75, 75)'}}>Day*</p>
                    <select name="day" value={item.day} onChange={e=>handleTimeSlotesChange(e,index)} id="" style={{border:'none', borderRadius:' 0.375rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',backgroundColor:'F4F4F4'}} >
                        <option value="">select</option>
                        <option value="saturday">Saturday</option>
                        <option value="sunday">Sunday</option>
                        <option value="monday">Monday</option>
                        <option value="tuesday">Tuesday</option>
                        <option value="wensday">wensday</option>
                        <option value="thhurday">Thhurday</option>
                        <option value="friday">Friday</option>
                    </select>
                 </div>
                 <div className="col">
                    <p style={{color:'rgb(5, 75, 75)'}}>Starting Time</p>
                   <input type="time" name="startingTime"  value={item.startingTime} onChange={e=>handleTimeSlotesChange(e,index)} style={{border:'none', borderRadius:' 0.375rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',backgroundColor:'F4F4F4'}} />
                 </div>
                 <div className="col">
                    <p style={{color:'rgb(5, 75, 75)'}}>Ending Time</p>
                   <input type="time" name="endingTime"  value={item.endingTime} onChange={e=>handleTimeSlotesChange(e,index)} style={{border:'none', borderRadius:' 0.375rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',backgroundColor:'F4F4F4'}} />
                 </div>
                 </div>
            </>
        )}
    
   
    <div className="row mt-3">
                <span>Achievements</span>
                <textarea name="achievements" value={formData.achievements} onChange={handleInputChange} style={{border:'none', borderRadius:' 0.375rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',backgroundColor:'white'}}></textarea>
            </div>
            <div className="row mt-3">
        <span>Number of vodafone cash</span>
        <input type="number" name="phoneNumberVodafone" value={formData.phoneNumberVodafone} onChange={handleInputChange} style={{border:'none', borderRadius:' 0.375rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',backgroundColor:'F4F4F4'}} />
    </div>
    <div className="row mt-3">
    <span>Chooce City</span>
    <select value={formData.city} name="city" onChange={handleInputChange} style={{border:'none', borderRadius:' 0.375rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',backgroundColor:'F4F4F4'}} >
              <option value=""></option>
              <option value="El Gamaiaat">El Gamaiaat</option>
              <option value="El Mahata El Gadeda">El Mahata El Gadeda

</option>
              <option value="Manshiat Elshohada">Manshiat Elshohada
</option>
            </select>
    </div>
    <div className="row mt-3">
    <span>Chooce Area</span>
    <select  name="area" value={formData.area} onChange={handleInputChange} style={{border:'none', borderRadius:' 0.375rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',backgroundColor:'F4F4F4'}} >
    <option value=""></option>
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
    <div className="row mt-5">
    <button className="btn btn-dark" type="submit" onClick={updateProfileHaandler}>Update Profile</button>
    </div>
    
        </form>
        </div>
        </div>
       
        </div>
     
       
<div className="col-lg-4 col-md-12">  
<div>
    {/* <div class="d-flex justify-content-center mb-4 mt-5">
        <img id="selectedAvatar" src={url ? url :`https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg` }
        class="rounded-circle" style={{width: '200px', height: '200px',objectfit:' cover'}} alt="example placeholder" />
    </div> */}

<div class="d-flex justify-content-center mb-4 mt-5">
    <label htmlFor="customFile" class="upload-label">
      <img
        id="selectedAvatar"
        src={url ? url :` ${docData.photo}`}
        class="rounded-circle"
        style={{ width: '200px', height: '200px', objectFit: 'cover', cursor: 'pointer' }}
        alt="example placeholder"
      />
      <input class="form-control" type="file" name="photo" id="customFile" accept=".jpg, .png" onChange={handelFileInputChangpasport} style={{ display: 'none' }} />
    </label>
  </div>

    <div class="d-flex justify-content-center">

<label class="form-label text-dark m-1">{docData.fullName}</label>

</div>
</div>
     </div>
  
        </div>
  
        
        </>
    )


}
export default Profile