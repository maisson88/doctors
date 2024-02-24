// import React, { useState } from "react";
// import signup from "../assets/images/signup.gif"
// import './SignUp.css'
// import { Link } from "react-router-dom";

// const SignupasDoctore=()=>{
//     const [selectedFile,setSelectedFile]=useState(null)
//     const [previewUrl,setPreviewUrl]=useState("")
//     const [formData,setFormData]=useState({
//         name:"",
//         email:"",
//         password:"",
//         photo:selectedFile,
//         role:"patient",
//         gender:""

//     })
//     const handleInputChange=e=>{
//         setFormData({...formData,[e.target.name]:e.target.value});

//     }
//     const handelFileInputChang=async(event)=>{
//         const file=event.target.files[0]
//         console .log(file)

//     }
//     const submitHandler=async event=>{
// event.preventDefault();
//     }
//     return(
//         <>
        
//       <section>
//       <div className="container mt-5">
//       <h1 >Hello our Dear Doctore....</h1>
//         <div className="row">
//             <div className="col-md-6 col-lg-6">
//                 <img className="img-fluid" src="./doctor-nurses-special-equipment.jpg" alt="" />
//             </div>
//             <div className="col-md-6 col-lg-6">
//                <h4 className="mt-4">Create an<span>account</span></h4>
//                <form onSubmit={submitHandler}>
//                <div className="mt-3">
//                 <input className="w-100 mb-3" type="text" placeholder="Full Name" name="name"  value={formData.name} onChange={handleInputChange}  />
             
//             </div>
//             <div className="mt-3">
//                 <input className="w-100 mb-3" type="email" placeholder="Enter your Email" name="email"  value={formData.email} onChange={handleInputChange}   />
             
//             </div>
//             <div className="mt-3">
//                 <input className="w-100 mb-3" type="password" placeholder="Enter your password" name="password"  value={formData.password} onChange={handleInputChange}   />
             
//             </div>
//             <div className="d-flex justify-content-between">
//                 {/* <label>Are you a: 
//                 <select className="ml-2" name="role"  value={formData.role} onChange={handleInputChange}>
//                     <option value="patient">Patient</option>
//                     <option value="doctore">Doctore</option>
                    
//                 </select>
//                 </label> */}
//                 <label>Gender:  
//                 <select className="ml-2" name="gender"  value={formData.gender} onChange={handleInputChange}>
//                     <option value="male">Male</option>
//                     <option value="female">Female</option>
                    
//                 </select>
//                 </label>
//             </div>
//             <div className="d-flex align-item-center">
                
//                 <div className="mt-4">
//                 <div className="form-group2">
//                 <label htmlFor="customFile"> Your Photo:</label>
                     
//                      <input
//                className="file-input"
//                 type="file"
//                 name="photo" id="customFile" 
//                 accept=".jpg, .png" onChange={handelFileInputChang} 
//                  required
//                 />
             
              
//              </div>
                   
//                 </div>
              
//             </div>
//             <div>
//                 <button type="submit" className="btn btn-primary w-100">Sign Up</button>
//             </div>
//             <div className="text-center mt-3 d-flex m-auto align-item-center justify-content-center">
//                 <p>Aready have an account?</p>
//                 <a href=""><span>Login</span></a>

//             </div>
           
               
       

//                </form>
//             </div>
//         </div>
//       </div>
//       </section>
//         </>
//     );
// }
// export default SignupasDoctore;







import React, { useState } from "react";
import signup from "../assets/images/signup.gif"
import './SignUp.css'
import { Link } from "react-router-dom";
import axios from "axios";

const Signup=()=>{
    const [selectedFile,setSelectedFile]=useState(null)
    const [previewUrl,setPreviewUrl]=useState("")
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        password:"",
        photo:selectedFile,
        role:"patient",
        gender:""

    })
    const handleInputChange=e=>{
        setFormData({...formData,[e.target.name]:e.target.value});

    }
    const handelFileInputChang=async(event)=>{
        const file=event.target.files[0]
        setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
        console .log(file)
        
    }
    const submitHandler = async (event) => {
        event.preventDefault();
      
        const formData = new FormData();
        formData.append("name", formData.name);
        formData.append("email", formData.email);
        formData.append("password", formData.password);
        formData.append("photo", selectedFile);
        formData.append("gender", formData.gender);
      
        try {
          // Send request to the backend using Axios
          const response = await axios.post("/signupEndpoint", formData);
      
          // Process the response
          if (response.data.success) {
            // Reset form fields
            setFormData({
              name: "",
              email: "",
              password: "",
              photo: null,
              gender: ""
            });
      
            // Provide feedback to the user
            alert("Sign up successful!");
          } else {
            // Handle the error case
            console.error(response.data.error);
            alert("An error occurred. Please try again.");
          }
        } catch (error) {
          console.error("Error:", error);
          alert("An error occurred. Please try again.");
        }
      };
      
    return(
        <>
        
      <section>
      <div className="container mt-5">
      <h1 >doctore</h1>
        <div className="row">
            <div className="col-md-6 col-lg-6">
                <img className="img-fluid" src={signup} alt="" />
            </div>
            <div className="col-md-6 col-lg-6">
               <h4 className="mt-4">Create an<span>account</span></h4>
               <form onSubmit={submitHandler}>
               <div className="mt-3">
                <input className="w-100 mb-3" type="text" placeholder="Full Name" name="name"  value={formData.name} onChange={handleInputChange}  />
             
            </div>
            <div className="mt-3">
                <input className="w-100 mb-3" type="email" placeholder="Enter your Email" name="email"  value={formData.email} onChange={handleInputChange}   />
             
            </div>
            <div className="mt-3">
                <input className="w-100 mb-3" type="password" placeholder="Enter your password" name="password"  value={formData.password} onChange={handleInputChange}   />
             
            </div>
            <div className="d-flex justify-content-between">
                <label>Gender:  
                <select className="ml-2" name="gender"  value={formData.gender} onChange={handleInputChange}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    
                </select>
                </label>
            </div>
            <div className="d-flex align-item-center">
                
                <div className="mt-4">
                <div className="form-group2">
                <label htmlFor="customFile"> Your Photo:</label>
                     
                     <input
               className="file-input"
                type="file"
                name="photo" id="customFile" 
                accept=".jpg, .png" onChange={handelFileInputChang} 
                 required
                />
             
              
             </div>
                   
                </div>
              
            </div>
            <div>
                <button type="submit" className="btn btn-primary w-100">Sign Up</button>
            </div>
            <div className="text-center mt-3 d-flex m-auto align-item-center justify-content-center">
                <p>Aready have an account?</p>
                <a href=""><span>Login</span></a>

            </div>
           
               
       

               </form>
            </div>
        </div>
      </div>
      </section>
        </>
    );
}
export default Signup;



