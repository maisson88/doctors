// import React, { useState } from "react";
// import signup from "../../assets/images/signup.gif"
// import uploadImageToCloundary from "../../Utils/uploadCloudnary";

// const SignupTwoDoctor=({ formData, setFormData })=>{
//     const handleInputChange=e=>{
//         setFormData({...formData,[e.target.name]:e.target.value});
      

//     }
//     const handelFileInputChang=async(event)=>{
//         const file=event.target.files[0]
//        const isVideo=false
//         const data=await uploadImageToCloundary(file,isVideo)
//         setFormData({...formData,pasport:data.url})

//     }

  
   
//     return(
//         <>
//       <section>
        
//       <div className="container mt-5">
//         <div className="row">
//             <div className="col-md-6 col-lg-6">
//                 <img className="img-fluid" src={signup} alt="" />
//             </div>
//             <div className="col-md-6 col-lg-6">
//                <h4 className="mt-4">Create an<span>account</span></h4>
              
//             <div className="mt-3">
//                 <input className="w-100 mb-3" type="password" placeholder="Confirm your password" name="confirmpassword"  value={formData.confirmpassword} onChange={handleInputChange}   />
             
//             </div>
//             <div className="mt-3">
//                 <input className="w-100 mb-3" type="number" placeholder="phone number" name="phone"  value={formData.phone} onChange={handleInputChange}   />
             
//             </div>
//             <label for="start">Start date:</label>

// <input type="date" id="start" name="pirthdate" value={formData.pirthdate} onChange={handleInputChange}/>

//             <div className="d-flex justify-content-between">
//                 <label>Gender:  
//                 <select className="ml-2" name="gender"  value={formData.gender} onChange={handleInputChange}>
//                     <option value="male">Male</option>
//                     <option value="female">Female</option>
                    
//                 </select>
//                 </label>
        
                
               
//             </div>
//             <input  type="file" name="pasport" id="customFile" accept=".jpg, .png"  onChange={handelFileInputChang} />
             
          
           
               
       

//             </div>
//         </div>
//       </div>
//       </section>
//         </>
//     );
// }
// export default SignupTwoDoctor;





import React, { useState } from "react";
import signup from "../../assets/images/signup.gif"
import uploadImageToCloundary from "../../Utils/uploadCloudnary";
import { Link } from "react-router-dom";

const SignupTwoDoctor=({ formData, setFormData })=>{
    const [url,setUrl]=useState('')
    const handleInputChange=e=>{
        setFormData({...formData,[e.target.name]:e.target.value});
      

    }
    const handelFileInputChang=async(event)=>{
        const file=event.target.files[0]
       const isVideo=false
        const data=await uploadImageToCloundary(file,isVideo)
        setFormData({...formData,photo:data.url})
        setUrl(data.url)

    }

  
   
    return(
        <>
          <section class="p-3 p-md-4 p-xl-5">
          <div class="container">
            <div class="card border-light-subtle shadow-sm">
              <div class="row g-0">
                <div class="col-12 col-md-6 text-bg-primary">
                  <div class="d-flex align-items-center justify-content-center h-100">
                    <div class="col-10 col-xl-8 py-3">
                      {/* <img class="img-fluid rounded mb-4" loading="lazy" src="./assets/img/bsb-logo-light.svg" width="245" height="80" alt="DOKTORZ Logo"/> */}
                      <span className="badge bg-light" style={{color:'black'}}><strong>DOKTORZ</strong></span>
                      <hr class="border-primary-subtle mb-4"/>
                      <h2 class="h1 mb-4">We make digital products that drive you to stand out.</h2>
                      <p class="lead m-0">you will be able to choose among the 
most skilled doctors in different
 specialties.</p>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="card-body p-3 p-md-4 p-xl-5">
                    <div class="row">
                      <div class="col-12">
                        <div class="mb-5">
                          <h2 class="h3">Registration</h2>
                          <h3 class="fs-6 fw-normal text-secondary m-0">Hello Doctor</h3>
                        </div>
                      </div>
                    </div>
                    <form action="#!">
                      <div class="row gy-3 gy-md-4 overflow-hidden">
                        <div class="col-12">
                          <label for="firstName" class="form-label">Phone Number <span class="text-danger">*</span></label>
                          <input type="number" class="form-control"  id="firstName"  required placeholder="phone number" name="phone"  value={formData.phone} onChange={handleInputChange}   />
                        </div>
                        <div class="col-12">
                          <label for="lastName" class="form-label">Birth Date <span class="text-danger">*</span></label>
                          <input type="date" id="start" class="form-control"  name="pirthdate" value={formData.pirthdate} onChange={handleInputChange} required/>
                          
                         
                        </div>
                        <div class="col-12">
                          <label for="email" class="form-label">Gender <span class="text-danger">*</span></label>
                          <select class="form-control" name="gender"  value={formData.gender} onChange={handleInputChange} required>                     <option value="male">Male</option>
                     <option value="female">Female</option>
                    
               </select>
                         
                        </div>
                        <div class="col-12">
                          <label for="password" class="form-label">Are you a:  <span class="text-danger">*</span></label>
                          <select class="form-control"  name="role"  value={formData.role} onChange={handleInputChange} required>     
                        <option value="Patient">Patient</option>
                     <option value="Doctor">Doctor</option>
                    
               </select>
                        </div>
                        <div class="col-12">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" name="iAgree" id="iAgree" required/>
                            <label class="form-check-label text-secondary" for="iAgree">
                              I agree to the <a href="#!" class="link-primary text-decoration-none">terms and conditions</a>
                            </label>
                          </div>
                        </div>
                        {/* <div class="col-12">
                          <div class="d-grid">
                            <button class="btn bsb-btn-xl btn-primary" type="submit">Sign up</button>
                          </div>
                        </div> */}
    


<div>
    <div class="d-flex justify-content-center mb-4">
        <img id="selectedAvatar" src={url ? url :`https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg`}
        class="rounded-circle" style={{width: '200px', height: '200px',objectfit:' cover'}} alt="example placeholder" />
    </div>
    <div class="d-flex justify-content-center">
        <div class="btn btn-primary btn-rounded">
            <label class="form-label text-white m-1"  onClick={handelFileInputChang}>Upload Profile photo</label>
            <input  class="form-control " type="file" name="photo" id="customFile" accept=".jpg, .png" onChange={handelFileInputChang} />
        </div>
    </div>
</div>

                        
                      </div>
                    </form>
                    <div class="row">
                      <div class="col-12">
                        <hr class="mt-5 mb-4 border-secondary-subtle"/>
                        <p class="m-0 text-secondary text-center">Already have an account? <Link to={'/login'} class="link-primary text-decoration-none">Sign in</Link></p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12">
                        <p class="mt-5 mb-4">Or sign in with</p>
                        <div class="d-flex gap-3 flex-column flex-xl-row">
                          <a href="#!" class="btn bsb-btn-xl btn-outline-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                              <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                            </svg>
                            <span class="ms-2 fs-6">Google</span>
                          </a>
                          <a href="#!" class="btn bsb-btn-xl btn-outline-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg>
                            <span class="ms-2 fs-6">Facebook</span>
                          </a>
                        
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
   
        </>
    );
}
export default SignupTwoDoctor;