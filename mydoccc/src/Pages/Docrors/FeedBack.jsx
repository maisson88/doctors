import React, { useState } from "react";
import avater from "../../assets/images/avatar-icon.png"
import "./FeedBack.css"
import FeedBackForm from "./FeddBackForm";
import moment from 'moment';
import axios from "axios";
import { useEffect } from "react";
import { json, useParams } from "react-router-dom";
const FeedBack=()=>{
    const [showFeedBack,setFeedBack]=useState(false);
    const [comments,setComents]=useState([])
    const {id}=useParams()
    const token=localStorage.getItem('token')
    const cleanedTokenString = token.replace(/\\/g, "");
    const cleanedTokenString2 = cleanedTokenString.replace(/"/g, "");
  
    // useEffect(()=>{
    //     const getfeed=()=>{
    //         // axios.get(" http://localhost:3004/feeedback")
    //         axios.get(`https://doctorz.onrender.com/api/v1/reviews/${id}`)
    //         .then(res=>{
    //             setComents(res.data)
    //         }).catch(err=>console.log(err))
    //     }
    //     getfeed()
    // },[])
    useEffect(() => {
      console.log(cleanedTokenString2)
      const fetchData = async () => {
        try {
          const res = await fetch(`https://doctorz.onrender.com/api/v1/doctors/${id}/reviews`, {
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
          setComents(result.data.reviews)

        } catch (error) {
          
          console.log(error)
        }
      };
    
      fetchData();
      
    }, []);
    const formatDate = (dateString) => {
        return moment(dateString).format("MMM DD YYYY"); // Use Moment.js for formatting
      };
      return(
        <>
      <div>
  <h6 class="my-3 ">All reviews({comments.length})</h6>


 {
    comments.map((e)=>{
        return(
            <>
             <div  class="d-flex align-item-center" key={e.user._id}>
             {/* <div  class="d-flex align-item-center" key={e._id}> */}
    <figure className="me-3 mt-2 " style={{border:'none',maxWidth:'40px',maxHeight:'40px',borderRadius:"200px"}}>
    <img class="img-fluid rounded-pill" src={e.user.photo} alt="User Avatar"  style={{borderRadius:"300px"}}/>
    </figure>
    
    <div>
      <span class="text-sm">{e.user.fullName}</span>
      <p style={{color:'gray',fontSize:"13"}}>{formatDate(e.createdAt)}</p>
      
    </div>
  </div>
  <div className="d-lg-flex justify-content-between">
  <p class="text-sm">{e.review}</p>
  <div className="starcolor">
  {
    [...Array(e.rating)].map((_,index)=><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
  </svg>
  )
  }
  
  </div>
 
  </div>
  
            </>
        )
    })
 }
  
</div>
{
    !showFeedBack&&(
        <div className="text-center mb-5 ">
    <button className="btn text-light w-25 " onClick={()=>setFeedBack(true)} style={{backgroundColor:'#96B9BB'}}>Give feedback</button>
  </div>
  
    )
}
      {showFeedBack&&<FeedBackForm/>}
        </>
    )
}
export default FeedBack;

















// import React, { useState } from "react";
// import avater from "../../assets/images/avatar-icon.png"
// import "./FeedBack.css"
// import FeedBackForm from "./FeddBackForm";
// import moment from 'moment';
// import axios from "axios";
// import { useEffect } from "react";
// import { useParams } from "react-router-dom";
// const FeedBack=()=>{
//     const [showFeedBack,setFeedBack]=useState(false);
//     const [comments,setComents]=useState([])

  
//     const {id} = useParams();
//     useEffect(()=>{
//         const getId = (id)=>{
//             axios.get(` http://localhost:3004/feeedback/${id}`)
//             .then((res)=>{
//                 console.log(res.data);
//                 setComents(res.data);
//             })
//             .catch((er)=>console.log(er));
//         }
//         getId(id);
//     },[]);

    
    // const [comments,setComents]=useState([])
    // useEffect(()=>{
    //     const getfeed=()=>{
    //         axios.get(" http://localhost:3004/feeedback")
    //         .then(res=>{
    //             setComents(res.data)
    //         }).catch(err=>console.log(err))
    //     }
    //     getfeed()
//     // },[])
//     const formatDate = (dateString) => {
//         return moment(dateString).format("MMM DD YYYY"); // Use Moment.js for formatting
//       };
//       return(
//         <>
//       <div>
//   <h6 class="mb-3">All reviews({comments.length})</h6>


//  {
//     comments.map((e)=>{
//         return(
//             <>
//              <div key={e.id} class="d-flex align-item-center">
//     <figure className="me-3 mt-2 ">
//     <img class="img-fluid" src={avater} alt="User Avatar" />
//     </figure>
    
//     <div>
//       <span class="">Ali Ahmed</span>
//       <p>{formatDate(e.date)}</p>
//     </div>
//   </div>
//   <div className="d-lg-flex justify-content-between">
//   <p>{e.textmessage}</p>
//   <div className="starcolor">
//   {
//     [...Array(e.rating)].map((_,index)=><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
//     <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
//   </svg>
//   )
//   }
  
//   </div>
 
//   </div>
  
//             </>
//         )
//     })
//  }
  
// </div>
// {
//     !showFeedBack&&(
//         <div className="text-center mb-5 ">
//     <button className="btn btn-primary rounded-pill " onClick={()=>setFeedBack(true)}>Give feedback</button>
//   </div>
  
//     )
// }
//       {showFeedBack&&<FeedBackForm/>}
//         </>
//     )
// }
// export default FeedBack;