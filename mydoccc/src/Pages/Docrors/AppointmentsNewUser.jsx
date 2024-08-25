import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";


const AppointmentsNewUser=()=>{
  const token=localStorage.getItem('token')

  const cleanedTokenString = token.replace(/\\/g, "");
  const cleanedTokenString2 = cleanedTokenString.replace(/"/g, "");
  console.log(cleanedTokenString2)
  // const {user,dispatch}=useContext(authContext)
  const [userData,setUserData]=useState({})
  const [appointments,setAppoinments]=useState([])
  
  useEffect(()=>{
      const getDoctore=()=>{
        axios.get('https://doctorz.onrender.com/api/v1/users/me', {
          headers: {
            'Authorization': `Bearer ${cleanedTokenString2}`
          }
        })
        .then(res => {
          console.log("user aapintments",res.data.data.data);
          setUserData(res.data.data.data)
          // console.log("userdata",userData)
       
        
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
    useEffect(()=>{
      const getAppointments=()=>{
        axios.get(`https://doctorz.onrender.com/api/v1/users/appointments/${userData._id}`, {
          headers: {
            'Authorization': `Bearer ${cleanedTokenString2}`
          }
        })
        .then(res => {
          console.log("new",res.data.appointments);
          // setUserData(res.data.data.data)
          // console.log("userdata",userData)
       setAppoinments(res.data.appointments)
        
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
      getAppointments();
    
    },[userData]) 
    return(
        <>
        {/* <div className="col-lg-7 col-md-12 ">
                    <div className="py-2 py-4 text-center px-5  justify-content-center" style={{backgroundColor:'rgb(44 105 105)' ,borderRadius:'20px'}}>
                    <div>
                    <div  className="w-lg-75 w-md-100 mb-3 text-light" style={{borderRadius:' 0.375rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', padding: '1.25rem',backgroundColor:'rgb(44 105 105)',border:'2px solid white'}}>
                <div className="d-flex justify-content-between">
                <div className="d-flex">
                <figure className="m-auto " style={{ border:'none',width:'50px',height:'50px'}}>
    <img class="img-fluid rounded-circle" src={`https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg`} alt="User Avatar" style={{width:'50px',height:'50px'}}/>
    </figure>
    <div className="ms-2">
    <span className="text-light" style={{fontWeight:'bold'}}>DR.Ali Ahmed</span>
    <p>Feb 19 2023</p>
    </div>
    
                </div>
                <div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>


                </div>
                <p>8:30</p>
                </div>
              
             
                </div>
               
              
                
                
              </div>
              <div  className="w-lg-75 w-md-100 mb-3" style={{borderRadius:' 0.375rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', padding: '1.25rem',backgroundColor:'white'}}>
                <div className="d-flex justify-content-between">
                <div className="d-flex">
                <figure className="m-auto " style={{ border:'none',width:'50px',height:'50px'}}>
    <img class="img-fluid rounded-circle" src={`https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg`} alt="User Avatar" style={{width:'50px',height:'50px'}}/>
    </figure>
    <div className="ms-2">
    <span>DR.Ali Ahmed</span>
    <p>Feb 19 2023</p>
    </div>
    
                </div>
                <div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>


                </div>
                <p>8:30</p>
                </div>
              
             
                </div>
               
              
                
                
              </div>
                    </div>
                        </div>
                   
                    </div> */}

<div className="col-lg-7 col-md-12 ">
<div className="py-2 py-4 text-center px-5  justify-content-center" style={{backgroundColor:'rgb(44 105 105)' ,borderRadius:'20px'}}>

{appointments.map((e)=>{
  return(
    <>
            <div  className="w-lg-75 w-md-100 mb-3 text-light" style={{borderRadius:' 0.375rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', padding: '1.25rem',backgroundColor:'rgb(44 105 105)',border:'2px solid white'}}>
                <div className="d-flex justify-content-between">
                <div className="d-flex">
                <figure className="m-auto " style={{ border:'none',width:'50px',height:'50px'}}>
    <img class="img-fluid rounded-circle" src={e.doctorId.photo} alt="User Avatar" style={{width:'50px',height:'50px'}}/>
    </figure>
    <div className="ms-2">
    <span className="text-light" style={{fontWeight:'bold'}}>{e.doctorId.fullName}</span>
    <p>{e.date}</p>
    </div>
    
                </div>
                <div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>


                </div>
                <p>{e.time}</p>
                </div>
              
             
                </div>
               
              
                
                
              </div>
    </>
  )
})}

  </div>

  </div>
        </>
    )
}
export default AppointmentsNewUser