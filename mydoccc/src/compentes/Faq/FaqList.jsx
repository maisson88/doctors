
import React, { useState } from "react";
import FaqItem from "./FaqItem";
import {faqs} from './../../assets/data/faq'
import { useEffect } from "react";
import axios, { Axios } from "axios";
const FaqList=()=>{
    const [faq,setFaq]=useState([])
    useEffect(()=>{
        const getFaqInfo=()=>{
            axios.get("http://localhost:3003/faqs")
            .then(res=>{
                setFaq(res.data)
            }).catch(err=>console.log(err))
        }
        getFaqInfo()
    },[])
   
        const[isOpen,setIsOpen]=useState(false)
        const toggleAccorde=()=>{
            setIsOpen(!isOpen)
        }
    return(
        <>
        {faq.map((el)=>{
            return(
               <div  key={el.id} >
                 <div className="faq mb-3 p-2 mt-5 d-flex align-item-center justify-content-between" onClick={toggleAccorde}>
        <h6>{el.question}</h6>
        <div>{isOpen?<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-down-circle" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
</svg>:<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-up-circle" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
</svg>}</div>

        </div>
        {isOpen&&<div className="mt-2 mb-2 content p-2">
        <p>{el.content}</p>
        </div>}
               </div>
            )
        }
        )}
        </>
    )
}
export default FaqList;