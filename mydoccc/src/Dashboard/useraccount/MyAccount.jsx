
import React, { useContext } from "react";
import userImg from '../../assets/images/doctor-img01.png'
import { authContext } from "../../contextApi/AuthContext";
import { useState } from "react";
import MyBookings from "./MyBookings";
import SettingsProfile from "./SettingsProfile";
import UseGetProfile from '../../hooks/UseFetchData'
import Loading from "../../loader/Loading";
import Error from "../../compentes/Error/Error";
import { useNavigate } from "react-router-dom";
import Header from "../../compentes/Header/Header";
import Foter from "../../compentes/foater/Foter";
import ChangePassword from "./ChangePassword";
const MyAccount=()=>{
    const {dispatch}=useContext(authContext)
    const [tap,setTap]=useState('settings')
    // const {data:userData,loading,error}=UseGetProfile('url')
    // console.log(userData,"userdata")
    const navigate=useNavigate()
    const handleLogOut=()=>{
        dispatch({type:"LOGOUT"})
        navigate('/login')
        
        

    }
    return(
        <>
        <Header/>
        <section>
        <div className="container mt-5">
        {/* <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class={`${tap=='booking'&&'active'&&'text-primary'} ,breadcrumb-item `} onClick={()=>setTap('booking')} style={{cursor:'pointer'}}>My Bookings / </li>
    <li className={`${tap=='profile'&&'active'&&'text-primary'} ,breadcrumb-item `} aria-current="page" style={{cursor:'pointer'}} onClick={()=>setTap('profile')}> Profile Setteings</li>
  </ol>
</nav> */}
            {/* {loading&&!error&&<Loading/>}
            {error&&!loading&&<Error errMessage={error}/>}
            {
                !loading&&error&&( <div className="row">
                <div className="col-4">
                <div className="mt-5 d-flex items-center justify-content-center">
            <figure className="w-50 h-50 rounded-circle">
            <img src={userImg} className="w-full h-full rounded-circle" />
        </figure>

            </div>
            <div className="text-center">
                <h3>maison ahmed mohamed</h3>
                <p>maisonahmed1@gmail.com</p>
                <button className="btn btn-danger" onClick={handleLogOut}> Logout</button>
            </div>
                </div>
                <div className="col-4">
                    <button className={`${tap==='booking'&&'btn btn-success'}btn border border-warning`} onClick={()=>setTap('booking')}>My Bookings</button>
                 <button className="btn border border-warning mr-5" onClick={()=>setTap('Settengis')}>Profile setteings</button>
                    {
                        tap=='booking'?<MyBookings/>:<SettingsProfile/>
                    }
                    
                </div>
            </div>)
            }
            */}
            <div className="row">
                <div className="col-lg-3 col-md-12"> 
                <div style={{borderRadius:' 0.375rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', padding: '1.25rem',maxHeight:'800px',minWidth:'150px',backgroundColor:'white'}}>
            {/* <button  className={`btn w-100 `} onClick={()=>setTap('booking')} style={{
    backgroundColor: tap === 'booking' ? '#3E8989' : 'white',color: tap === 'booking' ? 'white' : 'black'}}>Overview</button> */}
            
            <button  className={`btn w-100 mt-2 `} onClick={()=>setTap('settings')} style={{
    backgroundColor: tap === 'settings' ? '#3E8989' : 'white',color: tap === 'settings' ? 'white' : 'black'}}>Settings</button>
    
            <button  className={`btn w-100 mt-2 `} onClick={()=>setTap('changePassword')} style={{
    backgroundColor: tap === 'changePassword' ? '#3E8989' : 'white',color: tap === 'changePassword' ? 'white' : 'black'}}>change Password</button>
    
         
         </div>

                </div>

            </div>
            












           <div className="row d-flex align-items-center justify-content-center">
                {/* <div className="col-lg-4 col-md-12">
                <div className="mt-5 d-flex items-center justify-content-center">
            <figure className="rounded-circle" style={{border:'none',maxHeight:'500px',maxWidth:'500px'}}>
            <img src={'https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg'} className="w-full h-full rounded-circle img-fluid" />
        </figure>

            </div>
            <div className="text-center">
                <span className="text-dark">Mohamed Ahmed</span>
            </div>
                </div> */}
               
                {/* <div className="col-lg-8 col-md-12"> */}
                
               
{/* {

     tap=='booking'?<MyBookings/>:(<>
     <SettingsProfile/>
     </>)

} */}
   {
                    tap==='booking'&&(
                       
                        <MyBookings/>
                    )
                }
   {
                    tap==='settings'&&(
                        <SettingsProfile/>
                        
                    )
                }
   {
                    tap==='changePassword'&&(
                       
                    <ChangePassword/>
                    )
                }

                </div>
            </div>
       
        {/* </div> */}
       
        
        </section>
        <div className="mt-5">
        <Foter/>
        </div>
        
      
        </>
    )
}
export default MyAccount;