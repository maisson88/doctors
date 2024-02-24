import axios from "axios"
import { useState } from "react"



const Profile=()=>{
    const [formData,setFormData]=useState({
      about:'',
      splicationt:'',
      price:0,
      min:'',
      max:'',
      location:'',
      phone:'',
      achievements:'',
      phoneNumberVodafone:'',
      area:'',
      city:'',
      timeSlots:[]
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
        axios.post('http://localhost:1000/infopatiiom',formData)
        .then(res=>{
          console.log(res)
         
          
          
        })
        .catch(error=>{
          console.log(error)
          
    
        })
    }
    return(
        <>
        <div className="d-flex justify-content-center"> <h3>Profile Information</h3></div>
        <div className="w-50 mb-5">
        <form>
            <div className="row">
                <span>About</span>
                <textarea name="about" value={formData.about} onChange={handleInputChange} style={{border:'none', borderRadius:' 0.375rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',backgroundColor:'white'}}></textarea>
            </div>
            <div className="row mt-3">
    
            <div className="col-6">
            <p>Splicationt</p>
            <select className="" name="splicationt"  value={formData.splicationt} onChange={handleInputChange} style={{border:'none', borderRadius:' 0.375rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',backgroundColor:'white'}}>

                    <option value="Surgeon">Surgeon</option>
                    <option value="Neurologist">Neurologist</option>
                    <option value="Dermatologist">Dermatologist</option>
                </select>
            </div>
               
                
            <div className="col-6">
            <p>Ticket Price </p>
            <input type="number" name="price" value={formData.price} onChange={handleInputChange} style={{border:'none', borderRadius:' 0.375rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',backgroundColor:'white'}}/>
            </div>
                
                  


                
            
            </div>
            <div className="row mt-3">
    
    <div className="col-6">
    
    <p>Max</p>
    <input type="number" name="max" value={formData.max} onChange={handleInputChange} style={{border:'none', borderRadius:' 0.375rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',backgroundColor:'white'}}/>
    </div>
       
        
    <div className="col-6">
    <p>Min</p>
    <input type="number" name="min" value={formData.min} onChange={handleInputChange} style={{border:'none', borderRadius:' 0.375rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',backgroundColor:'white'}}/>
    </div>
    </div>
    <div className="row mt-3">
        <span>Locations of the Clinic</span>
        <input type="text" name="location" value={formData.location} onChange={handleInputChange} style={{border:'none', borderRadius:' 0.375rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',backgroundColor:'F4F4F4'}} />
    </div>
    <div className="row mt-3">
        <span>phone number of the clinc</span>
        <input type="number" name="phone" value={formData.phone} onChange={handleInputChange} style={{border:'none', borderRadius:' 0.375rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',backgroundColor:'F4F4F4'}} />
    </div>
    <div className="row mt-3">
        <div className="col">
        <button className="btn btn-dark" onClick={addTimeSlots}>Add Time Slots <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg></button>
        </div>
    
    </div>
    
        {formData.timeSlots?.map((item,index)=>
            <>
            <div className="row mt-3">
                 <div className="col">
                    <p>Day*</p>
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
                    <p>Starting Time</p>
                   <input type="time" name="startingTime"  value={item.startingTime} onChange={e=>handleTimeSlotesChange(e,index)} style={{border:'none', borderRadius:' 0.375rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',backgroundColor:'F4F4F4'}} />
                 </div>
                 <div className="col">
                    <p>Ending Time</p>
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
    <select value={formData.city} name="city" onChange={handleInputChange} style={{border:'none', borderRadius:' 0.375rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',backgroundColor:'F4F4F4'}} >
              <option value="">In this City</option>
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
       
        
        </>
    )


}
export default Profile