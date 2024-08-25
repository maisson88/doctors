import React, { useState } from "react";
import './FedBackForm.css'
import axios from "axios";
import Foter from "../../compentes/foater/Foter";
import moment from "moment";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
const FeedBackForm=()=>{
    const [rating,setRating]=useState(0);
    const [hover,setHoverRating]=useState(0);
    const [review,setReviw]=useState('')
    const {id}=useParams()
    const token=localStorage.getItem('token')
    const cleanedTokenString = token.replace(/\\/g, "");
    const cleanedTokenString2 = cleanedTokenString.replace(/"/g, "");
    const formatDate = (dateString) => {
        return moment(dateString).format("MMM DD YYYY"); // Use Moment.js for formatting
      };
    const formData={
        rating:rating,
            textmessage:review,
            date:formatDate()
    }
    const handleSubmtReview=async e=>{
        e.preventDefault();
        // axios.post(" http://localhost:3004/feeedback",formData)
        // .then(res=>console.log(res.data))
        // .catch(err=>console.log(err))
      
            try {
              const res = await fetch(`https://doctorz.onrender.com/api/v1/doctors/${id}/reviews`, {
                method: 'post',
                headers: {
                  'content-Type': 'application/json',
                  // Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZWRjNjExOGJiOTgzNWZlNTk0NmE5NCIsImlhdCI6MTcxNDA1MzI0MCwiZXhwIjoxNzIxODI5MjQwfQ.4uVSZuw7xDrWRaXiKN9B7xq309n3gCN2TUEL3f3EjuU`,
                  Authorization: `Bearer ${cleanedTokenString2}`,
                },
                body:JSON.stringify({rating,review})
              });
            
              const result=await res.json()
              if(!res.ok){
                throw new Error(result.message)
              }
              console.log(result)
              toast.success('your feedback is done')
             
    
            } catch (error) {
              
              console.log(error)
            }
          };
        
    
  
    return(
        <>
        <form action="">
            <p>How would you rate overall experince?*</p>
            {[...Array(5)].map((_,index)=>{
                index +=1
                return(
                    <button key={index} type="button" className={`${index<= ((rating&&hover) ||hover)?"yello":"gray"}`} onClick={()=>setRating(index)} onMouseEnter={()=>setHoverRating(index)} onMouseLeave={()=>setHoverRating(rating)} onDoubleClick={()=>{
                        setHoverRating(0);
                        setRating(0);
                    }} >
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg></span>
                    </button>
                );
            })}

            <div className="align-items-center">
                <p>Share your feed back or suggection*</p>
                <textarea className="w-100" placeholder="Write Your Message"  rows="5" onChange={(e)=>setReviw(e.target.value)}></textarea>
            </div>
           
            <button className="btn text-light my-3" type="submit" style={{backgroundColor:'#96B9BB'}} onClick={handleSubmtReview}>Submit Feedback</button>
            
            
        </form>
       
        </>
    )
}
export default FeedBackForm;


































// import React, { useState } from "react";
// import './FedBackForm.css'
// import axios from "axios";
// import { useParams } from "react-router-dom";


// useEffect(()=>{
//     const getId = (id)=>{
//         axios.get(` http://localhost:3004/feeedback/${id}`)
//         .then((res)=>{
//             console.log(res.data);
//             setComents(res.data);
//         })
//         .catch((er)=>console.log(er));
//     }
//     getId(id);
// },[]);












//test

// const FeedBackForm=()=>{
//     const [rating,setRating]=useState(0);
//     const [hover,setHoverRating]=useState(0);
//     const [reviewText,setReviwText]=useState('')
//     const {id} = useParams();
//     const formData={
//         rating:rating,
//             textmessage:reviewText
//     }
//     const handleSubmtReview=async e=>{
//         e.preventDefault();
//         axios.post(` http://localhost:3004/feeedback/${id}`,formData)
//         .then(res=>console.log(res.data))
//         .catch(err=>console.log(err))
        
        
//     }
//     return(
//         <>
//         <form action="">
//             <p>How would you rate overall experince?*</p>
//             {[...Array(5)].map((_,index)=>{
//                 index +=1
//                 return(
//                     <button key={index} type="button" className={`${index<= ((rating&&hover) ||hover)?"yello":"gray"}`} onClick={()=>setRating(index)} onMouseEnter={()=>setHoverRating(index)} onMouseLeave={()=>setHoverRating(rating)} onDoubleClick={()=>{
//                         setHoverRating(0);
//                         setRating(0);
//                     }} >
//                         <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
//   <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
// </svg></span>
//                     </button>
//                 );
//             })}

//             <div>
//                 <p>Share your feed back or suggection*</p>
//                 <textarea className="w-100" placeholder="Write Your Message"  rows="5" onChange={(e)=>setReviwText(e.target.value)}></textarea>
//             </div>
//             <button className="btn btn-primary rounded-pill" type="submit" onClick={handleSubmtReview}>Submit Feedback</button>
//         </form>
//         </>
//     )
// }
// export default FeedBackForm;