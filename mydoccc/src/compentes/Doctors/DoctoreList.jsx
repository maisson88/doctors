// import React from "react";
// import {doctors} from "./../../assets/data/doctore"
// import DoctoreCard from "./DoctoreCard";
// import { useState } from "react";
// import { useEffect } from "react";
// import axios from 'axios';
// import starIcon from "../../assets/images/Star.png"
// import { Link } from "react-router-dom";
// const DoctoreList =()=>{
//     const[min , setMin] = useState(0);
//     const[max , setMax] = useState(3);
//     const [doctorInfo,setDoctorInfo]=useState([]);
//     useEffect(()=>{
//         const getDoctore=()=>{
//             axios.get("http://localhost:3002/doctors")
//             .then(res=>{
//                 console.log(res.data)
//                 setDoctorInfo(res.data)
//             }).catch(error=>console.log(error))


//         }
//         getDoctore();

//     },[])
   
//     return(
//         <>
//          <div className="row">
//             {/* <img src="./logo192.png" alt="" /> */}
//         {doctorInfo.map((el)=>{
//              if (el.id <= max && el.id > min)
//             return(
//                 <div className="col-lg-4 col-md-6" key={el.id}>
                   
                   
//                 <div class=" mb-3" style={{borderRadius:' 20px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', padding: '1.25rem',backgroundColor:"white"}}>
//          <img src={el.photo?el.photo:"./logo192.png"} class="card-img-top img-fluid" alt="..." style={{maxHeight:'350px',borderRadius:'20px'}}/>
//          <div class="card-body">
//             <div className="d-flex justify-content-between align-item-center  mb-1 mt-3">
//             <h6 class="card-title">{el.name}</h6>
//            <p style={{color:"#626060"}}>4.8 (272)</p>
//             </div>
           
//            <div className="d-flex align-item-center justify-content-between">
//            <p class="card-text"><span className="specialty p-1" style={{backgroundColor:'#96B9BB'}}>{el.specialty}</span></p>
//             {/* <div className="d-flex align-items-center">
          
//            <svg xmlns="http://www.w3.org/2000/svg" style={{color:'#44A0A0'}} width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
//   <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
// </svg>
//            <span className="ms-1">{el.avgRating}</span>
//            <span className="ms-1">({el.totalRating})</span>
//            </div> */}
//            </div>
//            <div className="d-flex align-item-center justify-content-between">
//            <div>
//            <p>+{el.totalPatients} patients</p>
//            <p>At: {el.hospital}</p>
//            </div>
//            <Link to={`/${el.id}`} href="#" class="mt-3"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"  class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
//          <path  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
//        </svg></Link>
          
//            </div>
           
          
          
          
          
//          </div>
//        </div>
//                </div>
//             )
//         }
          
//         )}
//         </div>
//         {/* <div className="row">
//         {doctors.map((doctor)=>(
//              <div className="col-lg-4" key={doctor.id}>
//         <DoctoreCard  doctor={doctor}/>
//         </div>
//         ))}
//         </div> */}
     
//         </>
//     )
// }
// export default DoctoreList;




















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
            axios.get("https://doctorz.onrender.com/api/v1/doctors")
            .then(res=>{
                console.log(res.data.data.data)
                setDoctorInfo(res.data.data.data)
            }).catch(error=>console.log(error))


        }
        getDoctore();

    },[])
   
    return(
        <>
       <div className="row py-3" style={{borderRadius:' 20px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', border: "none"}}>
  {doctorInfo.length > 0 ? (
    doctorInfo.slice(0, 4).map((el) => {
      return (
        <div className="col-lg-3 col-md-6" key={el._id}>
          <div className="mb-3" style={{borderRadius:' 20px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', padding: '1.25rem', backgroundColor:"white"}}>
            <img src={el.photo} className="card-img-top img-fluid" alt="..." style={{height:'300px', borderRadius:'20px'}}/>
            <div className="card-body">
              <div className="d-flex justify-content-between align-item-center  mb-1 mt-3">
                <h6 className="card-title">{el.fullName}</h6>
                <p style={{color:"#626060"}}>{el.ratingAverage} ({el.ratingsQuantity})</p>
              </div>
              <div className="d-flex align-item-center justify-content-between">
                <p className="card-text"><span className="specialty p-1" style={{backgroundColor:'#96B9BB'}}>{el.specialization}</span></p>
              </div>
              <div className="d-flex align-item-center justify-content-between mt-4">
                <div>
                  <p>+150 patients</p>
                  <p className="" style={{fontWeight:"bolder"}}>At:Heart Surgeon, United Hospital</p>
                </div>
                <Link to={`/${el._id}`} href="#" className="mt-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                    <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    })
  ) : (
    <div className="d-flex justify-content-center mt-5">
      <div className="spinner-border" role="status" style={{color:'#3E8989'}}>
        {/* <span className="sr-only">Loading...</span> */}
      </div>
    </div>
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
