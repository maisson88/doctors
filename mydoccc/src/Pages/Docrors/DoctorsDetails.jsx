import React, { useState } from "react";
import doctoreImg from '../../assets/images/doctor-img02.png';
import './DoctorsDetailes.css';
import starIcon from "../../assets/images/Star.png"
import FeedBack from "./FeedBack";
import About from "./About";
import SidePanedl from "./SidePanel";
import Header from "../../compentes/Header/Header";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Foter from "../../compentes/foater/Foter";
const DoctorsDetails=()=>{
    const [tab,setTab]=useState('about')
    const [det , setDet] = useState({});
    const {id} = useParams();
    useEffect(()=>{
        const getId = (id)=>{
            axios.get(` http://localhost:3002/doctors/${id}`)
            .then((res)=>{
                console.log(res.data);
                setDet(res.data);
            })
            .catch((er)=>console.log(er));
        }
        getId(id);
    },[]);
    return(
        <>
        <Header/>
        <div className="container mt-5">
            <div className="row">
                <div className=" col-md-6 col-lg-3">
                    <img  className="img-fluid" src={det.photo} alt="" style={{borderRadius:'10px'}} />
                </div>
                <div className=" col-md-6 col-lg-5">
                  <span className="specialty mt-5 py-2 px-2 mb-3" >Neurologist</span>
                  <h3>{det.name}</h3>
                  <div className="d-flex">
                  <img src={starIcon} alt="" />
                  <span>4.8</span>
                  <span>(272)</span>
                  </div>
                 <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quis vitae vero iste a sit odit repudiandae? Soluta pariatur consectetur totam dolorum repudiandae suscipit obcaecati sit, harum dolor, mollitia iusto.</p>
                
                </div>
                <div className="col-md-6 col-lg-4">
                    <SidePanedl/>
                 </div>

            </div>
            <div className="bb w-75">
                <button className={` ${tab==="about"&&'border-b'} me-2`} onClick={()=>setTab('about')}>About</button>
                <button className={`${tab==="feedback" &&'border-f'}`} onClick={()=>setTab('feedback')}>Feedback</button>
            </div>
            <div className="mb-5">
                {
                    tab==='about'&&<About/>
                }
                {
                    tab==='feedback'&&<FeedBack/>
                }
            </div>
        </div>
    <Foter/>
        </>
    );
}
export default DoctorsDetails;