// import { useEffect } from "react"
// import { useState } from "react"
// import { toast } from "react-toastify"



// const UseFetchData=(url)=>{
//     const [data,setData]=useState([])
//     const [loading,setLoading]=useState(null)
//     const [error,setError]=useState(null)
//     const token=localStorage.getItem('token')
//     useEffect(()=>{
//         const fetchData=async()=>{
//             setLoading(true)
//             try{
//                 const res=await fetch(url,{
//                     headers:{Authorization:`Bearer ${token}`}
//                 })
//                 const result=await res.json()
//                 if(!res.ok){
//                     throw new Error(result.message+'🤢')
//                 }
//                 setData(result.data)
//                 setLoading(false)
//             }catch(err){
//                  setLoading(false)
//                  setError(err.message)
//             }
//         }
//         fetchData()
//     },[url])
//     return{
//         data,
//         loading,
//         error
//     }

// }
// export default UseFetchData()