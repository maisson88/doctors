
import React from "react";
import Layout from './LayOut/Layout';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import DoctorsDetails from './Pages/Docrors/DoctorsDetails';
import FindDoctore from './Pages/Docrors/FindDoctore';
import Serviceslist from './compentes/Sevices/Serviceslist';
import Payment from './Pages/Payment';
import SignupasDoctore from './Pages/SignupasDoctore';
import VerfiyInfoofDoctore from './Pages/VerfiyInfoofDoctore';

const Routers=()=>{
    return(
    <>
    <Routes>
      <Route path='' element={<Home/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<Signup/>}/>
      {/* <Route path='doctoredetails' element={<DoctorsDetails/>}/> */}
      <Route path="/:id" element={<DoctorsDetails/>} />
      <Route path="findedoctore" element={<FindDoctore/>} />
      <Route path="services" element={<Serviceslist/>} />
      <Route path="payment" element={<Payment/>} />
      <Route path='signupasdoctore' element={<SignupasDoctore/>}/>
      <Route path='verfiyInfoofDoctore' element={<VerfiyInfoofDoctore/>}/>

    </Routes>
   
    </>)
}
export default Routers
