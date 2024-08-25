// import React, { useState } from "react";
// import './LogIn.css'
// import Layout from "../LayOut/Layout";
// import Foter from "../compentes/foater/Foter";
// import { Link } from "react-router-dom";
// import Signup from "./Signup";
// const Login=()=>{
//     const [formData,setFormData]=useState({
//         email:"",
//         password:"",

//     })
//     const handleInputChange=e=>{
//         setFormData({...formData,[e.target.name]:e.target.value});

//     }
//     return(
//         <>
//         <Layout/>
//         <div className="container mt-5 mb-5">
//         <div className="loggggg w-50 m-auto">
//            <h5>Hello <span>Wellcome</span>Back!!🌟✨</h5>
//            <form action="" className="py-2">
//             <div>
//                 <input className="w-100 mb-3" type="email" placeholder="Enter your Email" name="email" value={formData.email} onChange={handleInputChange} />
             
//             </div>
//             <div>
//             <input  className="w-100 mb-4" type="password" placeholder="Enter your password" name="password" value={formData.password} onChange={handleInputChange} />
           
//             </div>
//             <div>
//                 <button type="submit" className="btn btn-primary w-100">Submit</button>
//             </div>
//             <div className="text-center mt-3 d-flex m-auto align-item-center justify-content-center">
//                 <p>Don&apos;have an account?</p>
     
//                 <Link to={'/signup'}><span>Rgester</span></Link>

//             </div>
//            </form>

//         </div>
//         </div>
      
      
//         </>
//     );
// }
// export default Login;








// import React, { useState } from "react";
// import './LogIn.css'
// import Layout from "../LayOut/Layout";
// import Foter from "../compentes/foater/Foter";
// import { Link } from "react-router-dom";
// import Signup from "./Signup";


// import { useNavigate } from "react-router-dom";
// import axios from "axios";


// export const Login = () => {
//   const [email, setEmail] = useState('');
//   const [pass, setPass] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const formData = {
//         email: email,
//         password: pass
//       };

//       // Make an HTTP POST request to the backend API endpoint
//       const response = await axios.post('/api/login', formData);

//       console.log(response.data); // Assuming the backend returns a response

//       // Check the response from the backend
//       if (response.data.success) {
//         navigate('/home');
//         alert("You Are Successfully Logged In");
//       } else {
//         navigate('/signup');
//         alert("Email or Password is not matching with our record");
    
//       }
//     } catch (error) {
//       console.error(error);
//       alert("An error occurred during login. Please try again.");
   

//     }
//   };

//   return (
    

//       <div className="container mt-5 mb-5">
//         <h1 style={{color:" cornflowerblue"}}>Hiii👀...</h1>
//         <div className="row">
          
//             <div className="col-lg-6">
//                 <img className="img-fluid" src="./Authentication-cuate.png" alt="" />
//             </div>
   
//             <div className="col-lg-6 d-flex  align-items-center">
//             <div className="loggggg w-100 m-auto">
//             <h5>Hello <span>Wellcome</span>Back!!🌟✨</h5>
//            <form onSubmit={handleSubmit} className="py-2">
//             <div>
//                  <input className="w-100 mb-3" value={email}  onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
             
//             </div>
//             <div>
//              <input  className="w-100 mb-4" value={pass}  onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
           
//            </div>
//            <div>
//                 <button className="btn btn-primary w-100" type="submit" >LOG IN</button>
//              </div>
//             <div className="text-center mt-3 d-flex m-auto align-item-center justify-content-center">
//                <p>Don&apos;have an account?</p>
     
//                 <Link to={'/signup'}><span>Rgester</span></Link>

//            </div>
//            </form>
//          </div>
//             </div>
//         </div>
         
//         </div>
//   );
// };
// export default Login;







import React, { useState,useContext } from "react";
import './LogIn.css'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { authContext } from "../contextApi/AuthContext";
import { Link } from "react-router-dom";
import Header from "../compentes/Header/Header";
import LoginFacebook from "./LoginFacebook";



const Login=()=>{
    const [formData,setFormData]=useState({
        email:"",
        password:"",

    })
    const [loading,setLoading]=useState(false)
    const {dispatch}=useContext(authContext)
    const navigate=useNavigate()
    const handleInputChange=e=>{
        setFormData({...formData,[e.target.name]:e.target.value});

    }
    const submitHandler=async event=>{
      // console.log(formData)
     
       event.preventDefault();
   if(valdite()){
    try{
      const res=await fetch('https://doctorz.onrender.com/api/v1/auth/login',{
        method:"post",
        headers:{
          'content-type':'application/json',
        },
        body:JSON.stringify(formData)
      })
      const result=await res.json();
      if (!res.ok){
        throw new Error(result.message)
      }
      dispatch({
        type:'LOGIN_SUCCESS',
        payload:{
          user:result.data,
          token:result.token,
          role:result.userType,
          // password:result.password,
          
        }
  
      })
      console.log(result,"login data")
     
      console.log(result.data.user.role)
      toast.success('Login done sucessfuly')
      navigate('/')
      
  
     }catch(err){
      console.log(err)
      toast.error(err.message)
     }
       
  
   }
  }
  const valdite=()=>{
    let result=true;
    if(formData.email===''||formData.email===null){
      result=false;
      toast.warning('please enter your Email')
      
    }
    if(formData.password===''||formData.password===null){
      result=false;
      toast.warning('please enter your password')
     
    }
    return result;
  }
    return(
        <>
       
        {/* <div className="container mb-5 mt-5">
        <div className="loggggg w-50 m-auto mt_5">
           <h5>Hello <span>Wellcome</span>Back !!🌟✨</h5>
           <form action="" className="py-2" onSubmit={submitHandler}>
            <div>
                <input required className="w-100 mb-3" type="email" placeholder="Enter your Email" name="email" value={formData.email} onChange={handleInputChange} />
             
            </div>
            <div>
            <input required  className="w-100 mb-4" type="password" placeholder="Enter your password" name="password" value={formData.password} onChange={handleInputChange} />
           
            </div>
            <div>
                <button type="submit" className="btn btn-primary w-100">Submit</button>
            </div>
            <div className="text-center mt-3 d-flex m-auto align-item-center justify-content-center">
                <p>Don&apos;have an account?</p>
                <Link to={'/form/patient'}><span>Rgester</span></Link>
                

            </div>
           </form>

        </div>
        </div> */}


<section class="p-3 p-md-4 p-xl-5">
          <div class="container">
            <div class="card border-light-subtle shadow-sm">
              <div class="row g-0">
                <div  class="col-12 col-md-6" style={{backgroundColor:'#3E8989'}}>
                  <div class="d-flex align-items-center justify-content-center h-100">
                    <div class="col-10 col-xl-8 py-3">
                      {/* <span className="badge bg-light" style={{color:'black'}}><strong>DOKTORZ</strong></span> */}
                     
                      <img class="img-fluid rounded " loading="lazy" src="logo3.png" width="100" height="80" alt="DOKTORZ Logo"/> 
                     
                      <hr class="border-light-subtle mb-4"/>
                    
                      <h2 class="h1 mb-4 text-light">We make digital product that drive you to stand out.</h2>
                      <p class="lead m-0 text-light">you will be able to choose among the 
most skilled doctors in different
 specialties </p>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="card-body p-3 p-md-4 p-xl-5">
                    <div class="row">
                      <div class="col-12">
                        <div class="mb-5">
                          <h1 class="h3">Log in</h1>
                          <h3 class="fs-6 fw-normal text-secondary m-0">WELL COME BACK</h3>
                        </div>
                      </div>
                    </div>
                    <form action="#!">
                      <div class="row gy-3 gy-md-4 overflow-hidden">
                        {/* <div class="col-12">
                          <label for="firstName" class="form-label">First Name <span class="text-danger">*</span></label>
                          <input type="email" class="form-control" name="firstName" id="firstName" placeholder="First Name" required/>
                        </div> */}
                     
                        <div class="col-12">
                          <label for="email" class="form-label">Email <span class="text-danger">*</span></label>
                          <input type="email" class="form-control" id="email" placeholder="name@example.com" required name="email"  value={formData.email} onChange={handleInputChange} />
                        </div>
                        <div class="col-12">
                          <label for="password" class="form-label">Password <span class="text-danger">*</span></label>
                          <input type="password" class="form-control"   required name="password"  value={formData.password} onChange={handleInputChange} />
                        </div>
                       
                        <div class="col-12">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" name="iAgree" id="iAgree" required/>
                            <label class="form-check-label text-secondary" for="iAgree">
                              I agree to the <a href="#!" class="text-decoration-none" style={{color:'#3E8989'}}>terms and conditions</a>
                            </label>
                          </div>
                        </div>
                         <div class="col-12">
                          <div class="d-grid">
                            <button class="btn bsb-btn-xl text-light" type="submit" onClick={submitHandler} style={{backgroundColor:'#3E8989'}}>Sign in</button>
                          </div>
                        </div> 
                      </div>
                    </form>
                    <div class="row">
                      <div class="col-12">
                        <hr class="mt-5 mb-4 border-secondary-subtle"/>
                        <p class="m-0 text-secondary text-center">Don&apos;have an account? <Link to={'/form/patient'} class="link-primary text-decoration-none">Sign UP</Link></p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12 text-center">
                        <p class="mt-5 mb-4">Or sign in with</p>
                        <div class="d-flex gap-3 flex-column flex-xl-row">
                          <a href="#!" class="btn bsb-btn-xl btn-outline-primary">
                            <svg style={{color:'#3E8989'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                              <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                            </svg>
                            <span class="ms-2 fs-6" style={{color:'#3E8989'}}>Google</span>
                          </a>
                          <a href="#!" class="btn bsb-btn-xl btn-outline-primary">
                            <svg style={{color:'#3E8989'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg>
                            <span class="ms-2 fs-6" style={{color:'#3E8989'}}>FaceBook</span>
                          </a>
                        
                        </div>
                      </div>
                    </div>
                    {/* <div className="row">
                      <div className="col-12 d-flex justify-content-center">
                        <button>
                        <LoginFacebook/>
                        </button>
                     

                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


    
       
  
        </>
    );
}
export default Login;