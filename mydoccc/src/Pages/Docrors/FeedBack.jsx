import React, { useState } from "react";
import avater from "../../assets/images/avatar-icon.png"
import "./FeedBack.css"
import FeedBackForm from "./FeddBackForm";
import moment from 'moment';
import axios from "axios";
import { useEffect } from "react";
const FeedBack=()=>{
    const [showFeedBack,setFeedBack]=useState(false);
    const [comments,setComents]=useState([])
    useEffect(()=>{
        const getfeed=()=>{
            axios.get(" http://localhost:3004/feeedback")
            .then(res=>{
                setComents(res.data)
            }).catch(err=>console.log(err))
        }
        getfeed()
    },[])
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
             <div  class="d-flex align-item-center">
    <figure className="me-3 mt-2 " style={{border:'none',maxWidth:'30px',maxHeight:'30px'}}>
    <img class="img-fluid" src={avater} alt="User Avatar" />
    </figure>
    
    <div>
      <span class="text-sm">Ali Ahmed</span>
      <p>{formatDate(e.date)}</p>
    </div>
  </div>
  <div className="d-lg-flex justify-content-between">
  <p class="text-sm">{e.textmessage}</p>
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
    <button className="btn btn-primary rounded-pill " onClick={()=>setFeedBack(true)}>Give feedback</button>
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