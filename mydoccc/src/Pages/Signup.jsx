// import React, { useState } from "react";
// import signup from "../assets/images/signup.gif"
// import './SignUp.css'
// import { Link } from "react-router-dom";
// import axios from "axios";

// const Signup=()=>{
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
//         setSelectedFile(file);
//     setPreviewUrl(URL.createObjectURL(file));
//         console .log(file)
        
//     }
//     const submitHandler = async (event) => {
//         event.preventDefault();
      
//         const formData = new FormData();
//         formData.append("name", formData.name);
//         formData.append("email", formData.email);
//         formData.append("password", formData.password);
//         formData.append("photo", selectedFile);
//         formData.append("gender", formData.gender);
      
//         try {
//           // Send request to the backend using Axios
//           const response = await axios.post("/signupEndpoint", formData);
      
//           // Process the response
//           if (response.data.success) {
//             // Reset form fields
//             setFormData({
//               name: "",
//               email: "",
//               password: "",
//               photo: null,
//               gender: ""
//             });
      
//             // Provide feedback to the user
//             alert("Sign up successful!");
//           } else {
//             // Handle the error case
//             console.error(response.data.error);
//             alert("An error occurred. Please try again.");
//           }
//         } catch (error) {
//           console.error("Error:", error);
//           alert("An error occurred. Please try again.");
//         }
//       };
      
//     return(
//         <>
        
//       <section>
//       <div className="container mt-5">
//       <h1 >Are You Patient Or a<Link to={"/signupasdoctore"}>Doctore👀</Link></h1>
//         <div className="row">
//             <div className="col-md-6 col-lg-6">
//                 <img className="img-fluid" src={signup} alt="" />
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
// export default Signup;
















// // import axios from "axios";
// // import { useState } from "react";


// // const Signup = () => {
// //   const [fullName, setFullName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [photo, setPhoto] = useState(null);
// //   const [errorMessage, setErrorMessage] = useState('');

// //   const handleInputChange = (event) => {
// //     const { name, value } = event.target;
// //     if (name === 'full-name') {
// //       setFullName(value);
// //     } else if (name === 'email') {
// //       setEmail(value);
// //     } else if (name === 'password') {
// //       setPassword(value);
// //     } else if (name === 'photo') {
// //       setPhoto(event.target.files[0]);
// //       console.log(photo)
 
// //     }
// //   };

// //   const handleSubmit = (event) => {
// //     event.preventDefault();

// //     // Perform form validation here
// //     if (!fullName || !email || !password || !photo) {
// //       setErrorMessage('Please fill in all fields.');
// //       return;
// //     }

// //     // If all validations pass, you can proceed with form submission
// //     const formData = new FormData();
// //     formData.append('full-name', fullName);
// //     formData.append('email', email);
// //     formData.append('password', password);
// //     formData.append('photo', photo);

   
// //     // Send formData to your backend endpoint using Axios
// // axios.post('http://localhost:1000/infopatiiom', formData)
// // .then((response) => {
// // //   Process the response from the backend
// //   if (response.data.success) {
// //     // Reset form fields
// //     setFullName('');
// //     setEmail('');
// //     setPassword('');
// //     setPhoto(null);
// //     setErrorMessage('');

// //     // Provide feedback to the user
// //     alert('Sign up successful!');
// //   } else {
// //     setErrorMessage('An error occurred. Please try again.');
// //   }
// // })
// // .catch((error) => {
// //   console.error('Error:', error);
// //   setErrorMessage('An error occurred. Please try again.');
// // });
        
// //   };

// //   return (
// //     <div className="container mt-5">
// //         <h1 className='mb-3' style={{color:"#3e8989"}}>Well Come You In Our Origation🌟✨....</h1>
// //         <div className="row">
// //             <div className="col-lg-6">
// //                 <img className='img-fluid mb-md-3' src={signup} alt="" />
// //             </div>
// //             <div className=" formside col-lg-6  ">
// //             <h1 className='p-2 mb-3 h1signup'>Sign Up as Patient</h1>
// //       <form onSubmit={handleSubmit}>
// //         <div className="form-group sstyle mb-3">
// //           {/* <label htmlFor="full-name">Full Name:</label> */}
// //           <input
// //             type="text"
// //             id="full-name"
// //             name="full-name"
// //             value={fullName}
// //             onChange={handleInputChange}
// //             required
// //             placeholder='Full Name'
// //           />
// //         </div>
// //         <div className="form-group sstyle mb-3">
// //           {/* <label htmlFor="email">Email:</label> */}
// //           <input
// //             type="email"
// //             id="email"
// //             name="email"
// //             value={email}
// //             onChange={handleInputChange}
// //             required
// //             placeholder='Enter your Email'
// //           />
// //         </div>
// //         <div className="form-group sstyle mb-3">
// //           {/* <label htmlFor="password">Password:</label> */}
// //           <input
// //             type="password"
// //             id="password"
// //             name="password"
// //             value={password}
// //             onChange={handleInputChange}
// //             required
// //             placeholder='Enter your Password'
// //           />
// //         </div>
// //         <div className="form-group2">
// //           <label htmlFor="photo">Photo:</label>
// //           <input
// //           className="file-input"
// //             type="file"
// //             id="photo"
// //             name="photo"
// //             accept="image/*"
// //             onChange={handleInputChange}
// //             required
// //           />
// //         </div>
// //         <button className='btn mt-3 w-100' type="submit">Sign Up</button>
// //         {errorMessage && <p className="error-message">{errorMessage}</p>}
// //       </form>
// //             </div>
// //         </div>
    
// //     </div>
// //   );
// // };

// // export default Signup;
// *****************************************************************************************************************************








import React, { useState } from "react";
import signup from "../assets/images/signup.gif"
import  './SignUp.css'
import avater from "../assets/images/doctor-img01.png"
import uploadImageToCloundary from '../Utils/uploadCloudnary'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
// import uploadImageToCloundary from "../utilis/uploadCloudnary";
const Signup=()=>{
    const [selectedFile,setSelectedFile]=useState(null)
    const [loading,setLoading]=useState(false)
    const [previewUrl,setPreviewUrl]=useState("")
    const [formData,setFormData]=useState({

        name:"",
        email:"",
        password:"",
        photo:selectedFile,
        confirmpassword:"",
        role:"patient",
        gender:""

    })
    const navigate=useNavigate()
    
    const handleInputChange=e=>{
        setFormData({...formData,[e.target.name]:e.target.value});
      

    }
    const handelFileInputChang=async(event)=>{
        const file=event.target.files[0]
        const data=await uploadImageToCloundary(file)
        // console.log(data)
        // console .log(file)
        setPreviewUrl(data.url)
        setSelectedFile(data.url)
        setFormData({...formData,photo:data.url})

    }
    const submitHandler=async event=>{
        // console.log(formData)
       
         event.preventDefault();
        setLoading(true) 
       
        axios.post('http://localhost:1000/infopatiiom',formData)
        .then(res=>{
          console.log(res)
          toast.success('Signup done sucessfuly')
          navigate('/login')
          
          
        })
        .catch(error=>{
          console.log(error)
          toast.danger('Something wrong,please try again')

        })
           

    }
    return(
        <>
      <section>
        
      <div className="container mt-5">
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
            <div className="mt-3">
                <input className="w-100 mb-3" type="password" placeholder="Confirm your password" name="confirmpassword"  value={formData.confirmpassword} onChange={handleInputChange}   />
             
            </div>
            <div className="d-flex justify-content-between">
                <label>Are you a: 
                <select className="ml-2" name="role"  value={formData.role} onChange={handleInputChange}>
                    <option value="patient">Patient</option>
                    <option value="doctore">Doctore</option>
                    
                </select>
                </label>
                <label>Gender:  
                <select className="ml-2" name="gender"  value={formData.gender} onChange={handleInputChange}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    
                </select>
                </label>
            </div>
         
                
              
                    <input  type="file" name="photo" id="customFile" accept=".jpg, .png" onChange={handelFileInputChang} />
              
                
             
            <div>
                <button type="submit" className="btn btn-primary w-100">Sign Up</button>
            </div>
            <div className="text-center mt-3 d-flex m-auto align-item-center justify-content-center">
                <p>Aready have an account?</p>
                <Link to={'/login'}><span>Login</span></Link>
          

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