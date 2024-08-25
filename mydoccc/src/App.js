
import './App.css';
import Layout from './LayOut/Layout';
import Home from './Pages/Home';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import DoctorsDetails from './Pages/Docrors/DoctorsDetails';
import FindDoctore from './Pages/Docrors/FindDoctore';
import Serviceslist from './compentes/Sevices/Serviceslist';
import Payment from './Pages/Payment';
import SignupasDoctore from './Pages/SignupasDoctore';
import VerfiyInfoofDoctore from './Pages/VerfiyInfoofDoctore';
import MyAccount from './Dashboard/useraccount/MyAccount';
import Dashboard from './Dashboard/doctoraccount/Dashboard';
import ProtectedRoute from './routes/ProtectedRoute';
import SignupOne from './Pages/Signuppatient/SignupOne';
import SignupTwo from './Pages/Signuppatient/SignupTwo';
import Formm from './Pages/Signuppatient/Formm';
import Formmdoctor from './Pages/SignupDoctor/Formmdoctor';
import SignupOneDoctor from './Pages/SignupDoctor/SignupOneDoctor';
import SignupTwoDoctor from './Pages/SignupDoctor/SignupTwoDoctor';

import SignupThreeDoctor from './Pages/SignupDoctor/SignupThreeDoctor';
import PaymentCard from './Pages/PaymentCard';
import Chatbot from './Pages/Chatbot';
import ProfileNew from './Pages/Docrors/ProfileNew';
import ProfileDocNew from './Pages/Docrors/ProfileDocNew';
import ArticeleN from './Pages/Docrors/ArticeleN';
import DoneBayment from './Pages/Docrors/DoneBayment';




function App() {
  return (
  
    <HashRouter>
    <Routes>
      <Route path='' element={<Home/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='chatbot' element={<Chatbot/>}/>
      {/* <Route path='doctoredetails' element={<DoctorsDetails/>}/> */}
      <Route path="/:id" element={<DoctorsDetails/>} />
      <Route path="findedoctore" element={<FindDoctore/>} />
      <Route path="services" element={<Serviceslist/>} />
      {/* <Route path="payment" element={<Payment/>} /> */}
      <Route path="paymentCard" element={<PaymentCard/>} />
      <Route path='signupasdoctore' element={<SignupasDoctore/>}/>
      <Route path='verfiyInfoofDoctore' element={<VerfiyInfoofDoctore/>}/>
      {/* <Route path='user/profile/me' element={<ProtectedRoute allowedRoles={'user'}><MyAccount/></ProtectedRoute>}/>
      <Route path='doctor/profile/me' element={<ProtectedRoute allowedRoles={'doctor'}><Dashboard/></ProtectedRoute>}/> */}
      <Route path='user/profile/me' element={<MyAccount/>}/>
      <Route path='doctor/profile/me' element={<Dashboard/>}/>
      <Route path='sigup1asPatient' element={<SignupOne/>}/>
      <Route path='sigup2asPatient' element={<SignupTwo/>}/>
      <Route path='SignupOneDoctor' element={<SignupOneDoctor/>}/>
      <Route path='SignupTwoDoctor' element={<SignupTwoDoctor/>}/>
      <Route path='SignupThreeDoctor' element={<SignupThreeDoctor/>}/>
      <Route path='form/patient' element={<Formm/>}/>
      <Route path='form/doctor' element={<Formmdoctor/>}/>
      <Route path='profileNew' element={<ProfileNew/>}/>
      <Route path='profileDocNew' element={<ProfileDocNew/>}/>
      <Route path='articeleN' element={<ArticeleN/>}/>
      <Route path='DoneBayment' element={<DoneBayment/>}/>
      
      

    </Routes>
    </HashRouter>
   
  //   <Layout/>
  //  <Home/> 
  
    
    
    
  ); 
}

export default App;
