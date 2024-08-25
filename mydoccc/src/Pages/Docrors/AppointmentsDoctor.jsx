import axios from "axios";
import { useEffect, useState } from "react";


const AppointmentsDoctor=()=>{
  const token=localStorage.getItem('token')

  const cleanedTokenString = token.replace(/\\/g, "");
  const cleanedTokenString2 = cleanedTokenString.replace(/"/g, "");
  console.log(cleanedTokenString2)
  // const {user,dispatch}=useContext(authContext)
  const [docData,setDocData]=useState({})
  const [appointments,setAppoinments]=useState([])
  
  // useEffect(()=>{
  //     const getDoctore=()=>{
  //       axios.get('https://doctorz.onrender.com/api/v1/doctors/me', {
  //         headers: {
  //           'Authorization': `Bearer ${cleanedTokenString2}`
  //         }
  //       })
  //       .then(res => {
  //         console.log("user aapintments",res.data.data.data);
  //         setDocData(res.data.data.data)
  //         // console.log("userdata",userData)
       
        
  //       })
  //       .catch(error => {
  //         if (error.response) {
  //           console.log(error.response.data);
  //           console.log(error.response.status);
  //           console.log(error.response.headers);
           
  //         } else if (error.request) {
  //           console.log(error.request);
          
  //         } else {
  //           console.log('Error', error.message);
          
  //         }
  //       });
    
  //     }
  //     getDoctore();
    
  //   },[]) 
    useEffect(() => {
      console.log(cleanedTokenString2)
      const getDoctore= async () => {
        try {
          const res = await fetch(`https://doctorz.onrender.com/api/v1/doctors/me`, {
            method: 'get',
            headers: {
              'content-Type': 'application/json',
              // Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZWRjNjExOGJiOTgzNWZlNTk0NmE5NCIsImlhdCI6MTcxNDA1MzI0MCwiZXhwIjoxNzIxODI5MjQwfQ.4uVSZuw7xDrWRaXiKN9B7xq309n3gCN2TUEL3f3EjuU`,
              Authorization: `Bearer ${cleanedTokenString2}`,
            },
          });
        
          const result=await res.json()
          if(!res.ok){
            throw new Error(result.message)
          }
          console.log(result)
          console.log("user aapintments",res.data.data.data);
            setDocData(res.data.data.data)

        } catch (error) {
          
          console.log(error)
        }
      };
    
      getDoctore();
      
    }, []);
 
    useEffect(() => {
      console.log(cleanedTokenString2)
      const fetchData = async () => {
        try {
          const res = await fetch(`https://doctorz.onrender.com/api/v1/doctors/appointments/6675cc9e9d206398065ac88e`, {
            method: 'get',
            headers: {
              'content-Type': 'application/json',
              // Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZWRjNjExOGJiOTgzNWZlNTk0NmE5NCIsImlhdCI6MTcxNDA1MzI0MCwiZXhwIjoxNzIxODI5MjQwfQ.4uVSZuw7xDrWRaXiKN9B7xq309n3gCN2TUEL3f3EjuU`,
              Authorization: `Bearer ${cleanedTokenString2}`,
            },
          });
        
          const result=await res.json()
          if(!res.ok){
            throw new Error(result.message)
          }
          console.log("hh",result.appointments)
          setAppoinments(result.appointments)

        } catch (error) {
          
          console.log(error)
        }
      };
    
      fetchData();
      
    }, []);
    return(
        <>
          <div className="col-lg-7 col-md-12 ">
          <div className="py-2 py-4 px-5  justify-content-center" style={{backgroundColor:'rgb(44 105 105)' ,borderRadius:'20px'}}>
          <div className="">
        <p className="text-light">Today Dec - 24</p>
        {appointments?(appointments.map((e)=>{
          return(
            <>
                    <div key={e._id} class="card mb-3 mt-2" style={{maxWidth:'500px',border:'none',borderRadius:' 0.375rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={e.userId.photo} className="img-fluid rounded-start h-100" alt="..." style={{borderRadius:' 0.375rem',}}/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h6 class="card-title">{e.userId.fullName}</h6>
        <div className="d-flex justify-content-between">
        <div className="d-flex align-items-center">
        <svg className="me-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-check" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
</svg> <p class="card-text"><small class="text-muted">{e.date}</small></p>
        </div>
       
        <div className="d-flex align-items-center">
        <svg  className="me-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
</svg> <p class="card-text"><small class="text-muted">{e.time}</small></p>
        </div>
        </div>
        <div className="d-flex justify-content-end mt-3">
        <button className="btn text-light rounded-pill" style={{backgroundColor:'#3E8989'}}>Cancel</button>
        </div>

   
       
      </div>
    </div>
  </div>
</div>
            </>
          )
        })):(<><h1>no</h1></>)}
     

        </div>
            
            </div>
            </div>
        </>
    )
}
export default AppointmentsDoctor