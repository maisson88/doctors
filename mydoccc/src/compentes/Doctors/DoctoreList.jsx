import React from "react";
import {doctors} from "./../../assets/data/doctore"
import DoctoreCard from "./DoctoreCard";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import starIcon from "../../assets/images/Star.png"
import { Link } from "react-router-dom";
const DoctoreList =()=>{
    const[min , setMin] = useState(0);
    const[max , setMax] = useState(3);
    const [doctorInfo,setDoctorInfo]=useState([]);
    useEffect(()=>{
        const getDoctore=()=>{
            axios.get("http://localhost:3002/doctors")
            .then(res=>{
                console.log(res.data)
                setDoctorInfo(res.data)
            }).catch(error=>console.log(error))


        }
        getDoctore();

    },[])
   
    return(
        <>
         <div className="row">
            {/* <img src="./logo192.png" alt="" /> */}
        {doctorInfo.map((el)=>{
             if (el.id <= max && el.id > min)
            return(
                <div className="col-lg-4 col-md-6" key={el.id}>
                   
                   
                <div class=" mb-3" style={{borderRadius:' 0.375rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', padding: '1.25rem'}}>
         <img src={el.photo?el.photo:"./logo192.png"} class="card-img-top img-fluid" alt="..." style={{maxHeight:'350px',borderRadius:'10px'}}/>
         <div class="card-body">
           <h6 class="card-title">{el.name}</h6>
           <div className="d-flex align-item-center justify-content-between">
           <p class="card-text"><span className="specialty p-1">{el.specialty}</span></p>
            <div>
           <img src={starIcon} alt="" />
           <span>{el.avgRating}</span>
           <span className="ms-1">({el.totalRating})</span>
           </div>
           </div>
           <div className="d-flex align-item-center justify-content-between">
           <div>
           <h6>+{el.totalPatients} patients</h6>
           <p>At: {el.hospital}</p>
           </div>
           <Link to={`/${el.id}`} href="#" class="mt-3"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"  class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
         <path  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
       </svg></Link>
          
           </div>
           
          
          
          
          
         </div>
       </div>
               </div>
            )
        }
          
        )}
        </div>
        {/* <div className="row">
        {doctors.map((doctor)=>(
             <div className="col-lg-4" key={doctor.id}>
        <DoctoreCard  doctor={doctor}/>
        </div>
        ))}
        </div> */}
     
        </>
    )
}
export default DoctoreList;
