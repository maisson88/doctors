

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
           <div className="d-flex align-items-center justify-content-center">
           <p>You don't have any appointments yet,<span className="text-danger">book</span></p>
           </div>
         
        </>
    )

}
export default MyBookings;