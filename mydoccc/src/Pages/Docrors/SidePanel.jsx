import React from "react";
import './SidePanedl.css'
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
const SidePanedl=()=>{
    // const {_id}=useParams()
    // console.log(_id)
    const [det , setDet] = useState({});
    // useEffect(()=>{
    //     const getId = (_id)=>{
    //         axios.get(`127.0.0.1:4000/api/v1/users/getAvailableTimeSlots/65f201f8348144c00a8ac187`)
    //         .then((res)=>{
               
    //             setDet(res);
    //             console.log(det)
    //         })
    //         .catch((er)=>console.log(er));
    //     }
    //     getId(_id);
    // },[]);
    const { id }= useParams();
    console.log(useParams())
    useEffect(()=>{
        const getId = (id)=>{
            axios.get(`https://doctorz.onrender.com/api/v1/doctors/${id}`)
            .then((res)=>{
                console.log(res.data);
                setDet(res.data.data.data);
              
            })
            .catch((er)=>console.log(er));
        }
        getId(id);
    },[]);
    return(
        <>
        <div className="pt-3 pb-2 sidepanel mt-5" style={{backgroundColor:'white'}}>
            <div className="d-flex justify-content-between">
                <p>Ticket Price</p>
                <span>{det.ticketPrice} EGP</span>
            </div>
            <p>Avilaple Time Slots:</p>
            <div className="me-0 text=center">
            <ul >
                <li className="d-flex justify-content-between">
                    <p>Sunday</p>
                    <p>4:00PM - 9:30PM</p>

                </li>
                <li className="d-flex justify-content-between">
                    <p>Friyday</p>
                    <p>4:00PM - 9:30PM</p>

                </li>
                <li className="d-flex justify-content-between">
                    <p>Teuseday</p>
                    <p>4:00PM - 9:30PM</p>

                </li>
            </ul>
            </div>
           
            <div className="text-center mb-2">
            <button className="btn  w-100" style={{backgroundColor:'#3E8989',color:"white"}}>Book Appointment</button>
            </div>
           
        </div>
      </>
    )
}
export default SidePanedl