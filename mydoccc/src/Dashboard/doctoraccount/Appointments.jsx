import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



const Appointments=()=>{
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
    // setLoading(true) 
   
   

    axios.patch('https://doctorz.onrender.com/api/v1/auth/updateMyPassword', formData, {
      headers: {
        'Authorization': `Bearer ${cleanedTokenString2}`
      }
    })
    .then(res => {
      console.log(res);
      toast.success('Update done successfully');
      // navigate('/');
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
        {/* <div className="mt-5">
        <p>Today Dec - 24</p>
        <div class="card mb-3 mt-2" style={{maxWidth:'500px',border:'none',borderRadius:' 0.375rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={`https://img.freepik.com/free-photo/portrait-beautiful-girl-with-short-ginger-hair-looks-with-happy-relaxed-expression_273609-30416.jpg?t=st=1718035415~exp=1718036015~hmac=bc762d11f25999d8a800bbf3b285c6974bcbaf5ac853b0baf3b28c8b0a8a8f9d`} className="img-fluid rounded-start h-100" alt="..." style={{borderRadius:' 0.375rem',}}/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h6 class="card-title">Ahmed Mohamed</h6>
        <div className="d-flex justify-content-between">
        <div className="d-flex align-items-center">
        <svg className="me-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-check" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
</svg> <p class="card-text"><small class="text-muted">Fri , Jun 2023</small></p>
        </div>
       
        <div className="d-flex align-items-center">
        <svg  className="me-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
</svg> <p class="card-text"><small class="text-muted">09:00 am</small></p>
        </div>
        </div>
        <div className="d-flex justify-content-end mt-3">
        <button className="btn text-light rounded-pill" style={{backgroundColor:'#3E8989'}}>Cancel</button>
        </div>

   
       
      </div>
    </div>
  </div>
</div>
        </div> */}
          <>
    
        <div className="col-lg-8 col-md-12">
        <div>
        <div class="d-flex justify-content-center mb-2 mt-5">
    <label htmlFor="customFile" class="upload-label">
      <img
        id="selectedAvatar"
        src={`${docData.photo}`}
        class="rounded-circle"
        style={{ width: '200px', height: '200px', objectFit: 'cover' }}
        alt="example placeholder"
      />
    </label>
  </div>
        </div>
        <div className="mt-2" style={{borderRadius:'10px',border: '0.5px solid #e0e0e9'}}>
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
       

       
            </>
    )
}
export default Appointments;