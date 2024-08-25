// import React from "react";
// import './About.css'
// import { formatDate } from "../../Utils/formatDate";
// import { useEffect } from "react";
// import axios from "axios";
// import { useState } from "react";
// import { useParams } from "react-router-dom";

// const About=()=>{
//     const [det , setDet] = useState({});
//     const {id} = useParams();
//     useEffect(()=>{
//         const getId = (id)=>{
//             axios.get(`http://localhost:3002/doctors/${id}`)
//             .then((res)=>{
//                 console.log(res.data);
//                 setDet(res.data);
//             })
//             .catch((er)=>console.log(er));
//         }
//         getId(id);
//     },[]);
    
//     return(
//         <>
//         <div className="mt-3 mb-5">
          
//         <h6 className="about">Abot of<span> {det.name}</span></h6>
//         <p className="w-lg-50" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt esse repudiandae magni placeat ipsam suscipit, architecto corporis at iste officia, vitae qui est unde nemo perferendis eaque sequi? Dignissimos, nostrum?</p>
//         </div>
//         <h5>Education</h5>
//         <span>{formatDate("12-04-2010")}</span>
//         <div className="d-flex justify-content-between">
//         <p>PHD in Neurologist </p>
//             <p>Mount Adora Hospital, Sylhet.</p>
//         </div>
//         <h5 className="mb-3">Experience</h5>
//         <span className="experince py-2 px-2">{formatDate("12-04-2018")}</span>
        
     
//         </>
//     )
// }
// export default About;













import React from "react";
import './About.css'
import { formatDate } from "../../Utils/formatDate";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

const About=()=>{
    const [det , setDet] = useState({});
  
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
        <div className="mt-3 mb-5">
          
        <h6 className="about">Abot of<span> {det.fullName}</span></h6>
        <p className="w-lg-50" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt esse repudiandae magni placeat ipsam suscipit, architecto corporis at iste officia, vitae qui est unde nemo perferendis eaque sequi? Dignissimos, nostrum?</p>
        </div>
        <h5>Education</h5>
        <span>{formatDate("12-04-2010")}</span>
        <div className="d-flex justify-content-between">
        <p>PHD in Neurologist </p>
            <p>Mount Adora Hospital, Sylhet.</p>
        </div>
        <h5 className="mb-3">Experience</h5>
        <span className="experince py-2 px-2">{formatDate("12-04-2018")}</span>
        
     
        </>
    )
}
export default About;