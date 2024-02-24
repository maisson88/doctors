// import React, { useState } from "react";

// const VerfiyInfoofDoctore = () => {    
//   return (
//    <>
//    <div className="container mt-5">
//     <div className="row">
//         <div className="col-lg-6">
//         <form class="needs-validation" novalidate>
//   <div class="">
//     <label for="validationCustom01" class="form-label">First name</label>
//     <input type="text" class="form-control" id="validationCustom01" value="" required/>
//     <div class="valid-feedback">
//       Looks good!
//     </div>
//   </div>
//   <div class="">
//     <label for="validationCustom03" class="form-label">Email</label>
//     <input type="email" class="form-control" id="validationCustom03" required/>
//     <div class="invalid-feedback">
//       Please provide a valid email
//     </div>
//   </div>
//   <div class="">
//     <label for="validationCustom03" class="form-label">Phone</label>
//     <input type="number" class="form-control" id="validationCustom03" required/>
//     <div class="invalid-feedback">
//       Phone Number
//     </div>
//   </div>
//   <div class="">
//     <label for="validationCustom03" class="form-label">Bio</label>
//     <input type="text" class="form-control" id="validationCustom03" required/>
//     <div class="invalid-feedback">
     
//     </div>
//   </div>
//   <div className="row">
//   <div class="col-lg-4">
//     <label for="validationCustom04" class="form-label">Gender</label>
//     <select class="form-select" id="validationCustom04" required>
//       <option selected disabled value="">Male</option>
//       <option>Female</option>
//     </select>
//     <div class="invalid-feedback">
//       Please select a valid state.
//     </div>
//   </div>
//   <div class="col-lg-4">
//     <label for="validationCustom04" class="form-label">Spaclition</label>
//     <select class="form-select" id="validationCustom04" required>
//       <option selected disabled value="">Dentistry</option>
//       <option>Dermatology</option>
//       <option>Ear, nose and throat (ENT)</option>
//       <option>Ear, nose and throat (ENT)</option>
//       <option>Ear, nose and throat (ENT)</option>
//     </select>
//     <div class="invalid-feedback">
//       Please select a valid state.
//     </div>
//   </div>
//   <div class="col-lg-4">
//   <label for="validationCustom03" class="form-label"> Ticket Price</label>
//     <input type="number" class="form-control" id="validationCustom03" required/>
//     <div class="invalid-feedback">
//       Phone Number
//     </div>
    
//   </div>
//   </div>
//   <div className="row mt-2 ">
//     <label className="mb-2 btn btn-success">Qualification*</label>
   
//     <div className="col-lg-6">
//     <label for="validationCustom01" class="form-label">Starteing Date:</label>
// <input type="date"class="form-control" id="validationCustom01" value=""  name="birthday" required/>
//     </div>
//     <div className="col-lg-6">
//     <label for="validationCustom01" class="form-label">Ending Date:</label>
// <input type="date"class="form-control" id="validationCustom01" value=""  name="birthday" required/>
//     </div>

//     <div className="col-lg-6 mt-2">
//     <label for="validationCustom01" class="form-label">Degree</label>
//     <input type="text" class="form-control" id="validationCustom01" value="" required/>
//     <div class="valid-feedback">
//       Looks good!
//     </div>
//     </div>
//     <div className="col-lg-6 mt-2">
//     <label for="validationCustom01" class="form-label">University</label>
//     <input type="text" class="form-control" id="validationCustom01" value="" required/>
//     <div class="valid-feedback">
//       Looks good!
//     </div>


//     </div>
//   </div>
//   <div className="row mt-2">
//     <label className="mb-2 btn btn-primary">Experience*</label>
   
//     <div className="col-lg-6">
//     <label for="validationCustom01" class="form-label">Starteing Date:</label>
// <input type="date"class="form-control" id="validationCustom01" value=""  name="birthday" required/>
//     </div>
//     <div className="col-lg-6">
//     <label for="validationCustom01" class="form-label">Ending Date:</label>
// <input type="date"class="form-control" id="validationCustom01" value=""  name="birthday" required/>
//     </div>

//     <div className="col-lg-6 mt-2">
//     <label for="validationCustom01" class="form-label">Posation</label>
//     <input type="text" class="form-control" id="validationCustom01" value="" required/>
//     <div class="valid-feedback">
//       Looks good!
//     </div>
//     </div>
//     <div className="col-lg-6 mt-2">
//     <label for="validationCustom01" class="form-label">University</label>
//     <input type="text" class="form-control" id="validationCustom01" value="" required/>
//     <div class="valid-feedback">
//       Looks good!
//     </div>


//     </div>
//   </div>
//   <div className="row">
//     <label className="btn btn-success mb-3 mt-3">Avilaple Appoinments</label>
//     <div className="col-lg-4">
//     <label for="validationCustom04" class="form-label">Days</label>
//     <select class="form-select" id="validationCustom04" required>
//       <option selected disabled value="">Satrday</option>
//       <option>Tuesday</option>
//     </select>
//     <div class="invalid-feedback">
//       Please select a valid state.
//     </div>

//     </div>
//     <div className="col-lg-4">
//     <label for="validationCustom04" class="form-label">Starteing Time</label>

// <input  class="form-control" id="validationCustom03" type="time"  name="" min="09:00" max="18:00" required />

//     </div>
//     <div className="col-lg-4">
//     <label for="validationCustom04" class="form-label">Ending Time</label>

// <input  class="form-control" id="validationCustom03" type="time"  name="" min="09:00" max="18:00" required />

//     </div>
//   </div>
//   <label for="validationCustom04" class="form-label mt-3 ">About</label>
 
//   <textarea className="w-100 form-control" id="validationCustom03" placeholder="Write Your Message"  rows="5" required></textarea>
//   <div className="d-flex align-item-center">
                
//                 <div className="mt-3 mb-3">
//                 <div >
//                 <label htmlFor="customFile"> Your Photo:</label>
                     
//                      <input
//                className="file-input"
//                 type="file"
//                 name="photo" id="customFile" 
//                 accept=".jpg, .png"
//                  required
//                 />
             
              
//              </div>
                   
//                 </div>
              
//             </div>
 
//   <div class="col-12">
//     <div class="form-check">
//       <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
//       <label class="form-check-label" for="invalidCheck">
//         Agree to terms and conditions
//       </label>
//       <div class="invalid-feedback">
//         You must agree before submitting.
//       </div>
//     </div>
//   </div>
//   <div class="col-12">
//     <button class="btn btn-primary w-100 mt-2" type="submit">Submit form</button>
//   </div>
// </form>

//         </div>
//     </div>
   
//    </div>
 
//    </>
//   );
// };

// export default VerfiyInfoofDoctore;


























// import React, { useState } from "react";

// const VerfiyInfoofDoctore = () => {  
    
    
//   return (
//    <>
//    <div className="container mt-5">
//     <div className="row">
//         <div className="col-lg-6">
//         <form class="needs-validation" novalidate>
//   <div class="">
//     <label for="validationCustom01" class="form-label">First name</label>
//     <input type="text" class="form-control" id="validationCustom01" value="" required/>
//     <div class="valid-feedback">
//       Looks good!
//     </div>
//   </div>
//   <div class="">
//     <label for="validationCustom03" class="form-label">Email</label>
//     <input type="email" class="form-control" id="validationCustom03" required/>
//     <div class="invalid-feedback">
//       Please provide a valid email
//     </div>
//   </div>
//   <div class="">
//     <label for="validationCustom03" class="form-label">Phone</label>
//     <input type="number" class="form-control" id="validationCustom03" required/>
//     <div class="invalid-feedback">
//       Phone Number
//     </div>
//   </div>
//   <div class="">
//     <label for="validationCustom03" class="form-label">Bio</label>
//     <input type="text" class="form-control" id="validationCustom03" required/>
//     <div class="invalid-feedback">
     
//     </div>
//   </div>
//   <div className="row">
//   <div class="col-lg-4">
//     <label for="validationCustom04" class="form-label">Gender</label>
//     <select class="form-select" id="validationCustom04" required>
//       <option selected disabled value="">Male</option>
//       <option>Female</option>
//     </select>
//     <div class="invalid-feedback">
//       Please select a valid state.
//     </div>
//   </div>
//   <div class="col-lg-4">
//     <label for="validationCustom04" class="form-label">Spaclition</label>
//     <select class="form-select" id="validationCustom04" required>
//       <option selected disabled value="">Dentistry</option>
//       <option>Dermatology</option>
//       <option>Ear, nose and throat (ENT)</option>
//       <option>Ear, nose and throat (ENT)</option>
//       <option>Ear, nose and throat (ENT)</option>
//     </select>
//     <div class="invalid-feedback">
//       Please select a valid state.
//     </div>
//   </div>
//   <div class="col-lg-4">
//   <label for="validationCustom03" class="form-label"> Ticket Price</label>
//     <input type="number" class="form-control" id="validationCustom03" required/>
//     <div class="invalid-feedback">
//       Phone Number
//     </div>
    
//   </div>
//   </div>
//   <div className="row mt-2 ">
//     <label className="mb-2 btn btn-success">Qualification*</label>
   
//     <div className="col-lg-6">
//     <label for="validationCustom01" class="form-label">Starteing Date:</label>
// <input type="date"class="form-control" id="validationCustom01" value=""  name="birthday" required/>
//     </div>
//     <div className="col-lg-6">
//     <label for="validationCustom01" class="form-label">Ending Date:</label>
// <input type="date"class="form-control" id="validationCustom01" value=""  name="birthday" required/>
//     </div>

//     <div className="col-lg-6 mt-2">
//     <label for="validationCustom01" class="form-label">Degree</label>
//     <input type="text" class="form-control" id="validationCustom01" value="" required/>
//     <div class="valid-feedback">
//       Looks good!
//     </div>
//     </div>
//     <div className="col-lg-6 mt-2">
//     <label for="validationCustom01" class="form-label">University</label>
//     <input type="text" class="form-control" id="validationCustom01" value="" required/>
//     <div class="valid-feedback">
//       Looks good!
//     </div>


//     </div>
//   </div>
//   <div className="row mt-2">
//     <label className="mb-2 btn btn-primary">Experience*</label>
   
//     <div className="col-lg-6">
//     <label for="validationCustom01" class="form-label">Starteing Date:</label>
// <input type="date"class="form-control" id="validationCustom01" value=""  name="birthday" required/>
//     </div>
//     <div className="col-lg-6">
//     <label for="validationCustom01" class="form-label">Ending Date:</label>
// <input type="date"class="form-control" id="validationCustom01" value=""  name="birthday" required/>
//     </div>

//     <div className="col-lg-6 mt-2">
//     <label for="validationCustom01" class="form-label">Posation</label>
//     <input type="text" class="form-control" id="validationCustom01" value="" required/>
//     <div class="valid-feedback">
//       Looks good!
//     </div>
//     </div>
//     <div className="col-lg-6 mt-2">
//     <label for="validationCustom01" class="form-label">University</label>
//     <input type="text" class="form-control" id="validationCustom01" value="" required/>
//     <div class="valid-feedback">
//       Looks good!
//     </div>


//     </div>
//   </div>
//   <div className="row">
//     <label className="btn btn-success mb-3 mt-3">Avilaple Appoinments</label>
//     <div className="col-lg-4">
//     <label for="validationCustom04" class="form-label">Days</label>
//     <select class="form-select" id="validationCustom04" required>
//       <option selected disabled value="">Satrday</option>
//       <option>Tuesday</option>
//     </select>
//     <div class="invalid-feedback">
//       Please select a valid state.
//     </div>

//     </div>
//     <div className="col-lg-4">
//     <label for="validationCustom04" class="form-label">Starteing Time</label>

// <input  class="form-control" id="validationCustom03" type="time"  name="" min="09:00" max="18:00" required />

//     </div>
//     <div className="col-lg-4">
//     <label for="validationCustom04" class="form-label">Ending Time</label>

// <input  class="form-control" id="validationCustom03" type="time"  name="" min="09:00" max="18:00" required />

//     </div>
//   </div>
//   <label for="validationCustom04" class="form-label mt-3 ">About</label>
 
//   <textarea className="w-100 form-control" id="validationCustom03" placeholder="Write Your Message"  rows="5" required></textarea>
//   <div className="d-flex align-item-center">
                
//                 <div className="mt-3 mb-3">
//                 <div >
//                 <label htmlFor="customFile"> Your Photo:</label>
                     
//                      <input
//                className="file-input"
//                 type="file"
//                 name="photo" id="customFile" 
//                 accept=".jpg, .png"
//                  required
//                 />
             
              
//              </div>
                   
//                 </div>
              
//             </div>
 
//   <div class="col-12">
//     <div class="form-check">
//       <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
//       <label class="form-check-label" for="invalidCheck">
//         Agree to terms and conditions
//       </label>
//       <div class="invalid-feedback">
//         You must agree before submitting.
//       </div>
//     </div>
//   </div>
//   <div class="col-12">
//     <button class="btn btn-primary w-100 mt-2" type="submit">Submit form</button>
//   </div>
// </form>

//         </div>
//     </div>
   
//    </div>
 
//    </>
//   );
// };

// export default VerfiyInfoofDoctore;





import axios from "axios";
import React, { useState } from "react";

const VerfiyInfoofDoctore = () => {  
    
    const [selectedFile,setSelectedFile]=useState(null)
    const [previewUrl,setPreviewUrl]=useState("")
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        phone:"",
        photo:selectedFile,
        gender:"",
        ticketprice:"",
        spalciation:"",
        degree:"",
        startingdateq:"",
        // endeingdate:"",
        enddatequlifaction:"",
        Posationex:"",
        startingdatex:"",
        endeingdatex:"",
        days:"",
        starteteme:"",
        endingtime:"",
        about:"",
        bio:"",
        university:"",
        universityex:"",
        videoo:selectedFile

    })
    const handleInputChange=e=>{
        setFormData({...formData,[e.target.name]:e.target.value});

    }
    const handelFileInputChang=async(event)=>{
        const file=event.target.files[0]
        setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
        console .log(file)
        console.log(formData)
        
    }
    const submitHandler = async (event) => {
        event.preventDefault();
      
        const formData = new FormData();
        formData.append("name", formData.name);
        formData.append("email", formData.email);
        formData.append("phone", formData.phone);
        formData.append("photo", selectedFile);
        formData.append("gender", formData.gender);
        formData.append("ticketprice", formData.ticketprice);
        formData.append("spalciation", formData.spalciation);
        formData.append("startingdateq",formData.startingdate);
        // formData.append("endeingdateq",endeingdate);
        formData.append("Posationex", formData.Posationex);
        formData.append("startingdatex", formData.startingdatex);
        formData.append("endeingdatex", formData.endeingdatex);
        formData.append("days", formData.days);
        formData.append("starteteme", formData.starteteme);
        formData.append("endingtime", formData.endingtime);
        formData.append("about", formData.about);
        formData.append("bio", formData.bio);
        formData.append("university", formData.university);
        formData.append("universityex", formData.universityex);
      
        formData.append("videoo",selectedFile);
        formData.append("enddatequlifaction", formData.enddatequlifaction);
      

      
        try {
          // Send request to the backend using Axios
          const response = await axios.post("/signupEndpoint", formData);
      
          // Process the response
          if (response.data.success) {
            // Reset form fields
            setFormData({
              name: "",
              email: "",
              phone: "",
              photo: null,
              gender: "",
              ticketprice:"",
              spalciation:"",
              degree:"",
              startingdateq:"",
              endeingdate:"",
              Posationex:"",
              startingdatex:"",
              endeingdatex:"",
              days:"",
              starteteme:"",
              endingtime:"",
              about:"",
              bio:"",
              university:"",
              universityex:"",
              videoo:null,
              enddatequlifaction:""
      
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
    
  return (
   <>
   <div className="container mt-5">
    <div className="row">
        <div className="col-lg-6">
        <form class="needs-validation" onSubmit={submitHandler} novalidate>
  <div class="">
    <label for="validationCustom01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationCustom01" name="name"  value={formData.name} onChange={handleInputChange} required/>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="">
    <label for="validationCustom03" class="form-label">Email</label>
    <input type="email" class="form-control" id="validationCustom03" name="email" value={formData.email} onChange={handleInputChange} required/>
    <div class="invalid-feedback">
      Please provide a valid email
    </div>
  </div>
  <div class="">
    <label for="validationCustom03" class="form-label">Phone</label>
    <input type="number" class="form-control" id="validationCustom03" name="phone" value={formData.phone} onChange={handleInputChange} required/>
    <div class="invalid-feedback">
      Phone Number
    </div>
  </div>
  <div class="">
    <label for="validationCustom03" class="form-label">Bio</label>
    <input type="text" class="form-control" id="validationCustom03" name="bio" value={formData.bio} onChange={handleInputChange} required/>
    <div class="invalid-feedback">
     
    </div>
  </div>
  <div className="row">
  <div class="col-lg-4">
    <label for="validationCustom04" class="form-label">Gender</label>
    <select class="form-select" id="validationCustom04" name="gender" value={formData.gender} onChange={handleInputChange} required>
      <option selected disabled value="">Male</option>
      <option>Female</option>
    </select>
    <div class="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div class="col-lg-4">
    <label for="validationCustom04" class="form-label">Spaclition</label>
    <select class="form-select" id="validationCustom04" name="spalciation" value={formData.spalciation} onChange={handleInputChange} required>
      <option selected disabled value="">Dentistry</option>
      <option>Dermatology</option>
      <option>Ear, nose and throat (ENT)</option>
      <option>Ear, nose and throat (ENT)</option>
      <option>Ear, nose and throat (ENT)</option>
    </select>
    <div class="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div class="col-lg-4">
  <label for="validationCustom03" class="form-label"> Ticket Price</label>
    <input type="number" class="form-control" id="validationCustom03" name="ticketprice" value={formData.ticketprice} onChange={handleInputChange} required/>
    <div class="invalid-feedback">
      Phone Number
    </div>
    
  </div>
  </div>
  <div className="row mt-2 ">
    <label className="mb-2 btn btn-success">Qualification*</label>
   
    <div className="col-lg-6">
    <label for="validationCustom01" class="form-label">Starteing Date:</label>
<input type="date"class="form-control" id="validationCustom01" name="startingdateq" value={formData.startingdateq} onChange={handleInputChange}  required/>
    </div>
    <div className="col-lg-6">
    <label for="validationCustom01" class="form-label">Ending Date:</label>
<input type="date"class="form-control" id="validationCustom01" name="enddatequlifaction" value={formData.enddatequlifaction} onChange={handleInputChange} required/>
    </div>

    <div className="col-lg-6 mt-2">
    <label for="validationCustom01" class="form-label">Degree</label>
    <input type="text" class="form-control" id="validationCustom01" name="degree" value={formData.degree} onChange={handleInputChange} required/>
    <div class="valid-feedback">
      Looks good!
    </div>
    </div>
    <div className="col-lg-6 mt-2">
    <label for="validationCustom01" class="form-label">University</label>
    <input type="text" class="form-control" id="validationCustom01" name="university" value={formData.university} onChange={handleInputChange} required/>
    <div class="valid-feedback">
      Looks good!
    </div>


    </div>
  </div>
  <div className="row mt-2">
    <label className="mb-2 btn btn-primary">Experience*</label>
   
    <div className="col-lg-6">
    <label for="validationCustom01" class="form-label">Starteing Date:</label>
<input type="date"class="form-control" id="validationCustom01" name="startingdatex" value={formData.startingdatex} onChange={handleInputChange} required/>
    </div>
    <div className="col-lg-6">
    <label for="validationCustom01" class="form-label">Ending Date:</label>
<input type="date"class="form-control" id="validationCustom01" name="endeingdatex" value={formData.endeingdatex} onChange={handleInputChange} required/>
    </div>

    <div className="col-lg-6 mt-2">
    <label for="validationCustom01" class="form-label">Posation</label>
    <input type="text" class="form-control" id="validationCustom01" name="Posationex" value={formData.Posationex} onChange={handleInputChange} required/>
    <div class="valid-feedback">
      Looks good!
    </div>
    </div>
    <div className="col-lg-6 mt-2">
    <label for="validationCustom01" class="form-label">University</label>
    <input type="text" class="form-control" id="validationCustom01" name="universityex" value={formData.universityex} onChange={handleInputChange} required/>
    <div class="valid-feedback">
      Looks good!
    </div>


    </div>
  </div>
  <div className="row">
    <label className="btn btn-success mb-3 mt-3">Avilaple Appoinments</label>
    <div className="col-lg-4">
    <label for="validationCustom04" class="form-label">Days</label>
    <select class="form-select" id="validationCustom04" name="days" value={formData.days} onChange={handleInputChange} required>
      <option selected disabled value="">Satrday</option>
      <option>Tuesday</option>
    </select>
    <div class="invalid-feedback">
      Please select a valid state.
    </div>

    </div>
    <div className="col-lg-4">
    <label for="validationCustom04" class="form-label">Starteing Time</label>

<input  class="form-control" id="validationCustom03" type="time"  min="09:00" max="18:00" name="starteteme" value={formData.starteteme} onChange={handleInputChange} required />

    </div>
    <div className="col-lg-4">
    <label for="validationCustom04" class="form-label">Ending Time</label>

<input  class="form-control" id="validationCustom03" type="time"  min="09:00" max="18:00" name="endingtime" value={formData.endingtime} onChange={handleInputChange} required />

    </div>
  </div>
  <label for="validationCustom04" class="form-label mt-3 ">About</label>
 
  <textarea className="w-100 form-control" id="validationCustom03" placeholder="Write Your Message"  rows="5" name="about" value={formData.about} onChange={handleInputChange} required></textarea>
  <div className="d-flex align-item-center">
                
                <div className="mt-3 mb-3">
                <div >
                <label htmlFor="customFile"> Your Photo:</label>
                     
                     <input
               className="file-input"
                type="file"
                name="photo" id="customFile" 
                accept=".jpg, .png"
                onChange={handelFileInputChang} 
                 required
                />
             
              
             </div>
                   
                </div>
              
            </div>
            <div className="d-flex align-item-center">
                
                <div className="mt-3 mb-3">
                <div >
                <label htmlFor="customFile">video:</label>
                     
                     <input
               className="file-input"
                type="file"
                name="videoo" id="customFile" 
                accept="video"
                onChange={handelFileInputChang} 
                 required
                />
             
              
             </div>
                   
                </div>
              
            </div>
 
  
  <div class="col-12">
    <button class="btn btn-primary w-100 mt-2" type="submit">Submit form</button>
  </div>
</form>

        </div>
    </div>
   
   </div>
 
   </>
  );
};

export default VerfiyInfoofDoctore ;

































