

import React from "react";
import UseFetchData from "../../hooks/UseFetchData";
import DoctoreCard from '../../compentes/Doctors/DoctoreCard'
import Loading from "../../loader/Loading";
import Error from "../../compentes/Error/Error";


const MyBookings=()=>{
    // const {data:appointments,loading,error}=UseFetchData('url')
    return(
        <>
       {/* { loading&&!error&&<Loading/>}
            
           {error&&!loading&&<Error errMessage={error}/>}
           {
            !loading&&!error&&<>
                {
                    appointments.map(doctor=><DoctoreCard doctor={doctor} key={doctor.id}/>)
                }
            </>
           }
           {
            !loading&&!error&&appointments.length==0&&<h2>you are not book any doctor yet!</h2>
           } */}
           {/* <div className="d-flex align-items-center justify-content-center">
           <p>You don't have any appointments yet,<span className="text-danger">book</span></p>
           </div> */}
           <div className="col-lg-8 col-md-12 d-flex justify-content-center">
           <div class="card mb-5 mt-3 w-75" style={{maxWidth:'500px',maxHeight:'150px',border:'none',borderRadius:' 0.375rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={`https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg`} className="w-100  rounded-start" alt="..." style={{borderRadius:' 0.375rem',maxHeight:'150px'}}/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h6 class="card-title">DR.Ahmed Mohamed</h6>
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <svg className="me-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-check" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
            </svg>
            <p class="card-text"><small class="text-muted">Fri , Jun 2023</small></p>
          </div>
          <div className="d-flex align-items-center">
            <svg  className="me-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
            </svg>
            <p class="card-text"><small class="text-muted">09:00 am</small></p>
          </div>
        </div>
       
      </div>
    </div>
  </div>
</div>

           </div>
         
         
        </>
    )

}
export default MyBookings;