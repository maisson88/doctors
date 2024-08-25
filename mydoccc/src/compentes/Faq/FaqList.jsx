
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
                 <div className="faq mb-3 p-3 mt-5 d-flex align-item-center justify-content-between" style={{backgroundColor:"#D3E4E4"}} onClick={toggleAccorde}>
        <h6>{el.question}</h6>
        <div>{isOpen?<svg style={{color:"#3E8989"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg>:<svg style={{color:"#3E8989"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
  <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
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