


// import React, { useState } from "react";
// import uploadImageToCloundary from '../../Utils/uploadCloudnary'
// import  '../../Pages/SignUp.css'


// const SignupThreeDoctor=({ formData, setFormData })=>{
//     const [selectedFilephoto,setSelectedFilephoto]=useState(null)
//     const [selectedFilevideo,setSelectedFilevideo]=useState(null)
//     const [loading,setLoading]=useState(false)
//     const [previewUrl,setPreviewUrl]=useState("")
    

//     const handelFileInputChang=async(event)=>{
//         const file=event.target.files[0]
//         const isVideo = false;
//         const data=await uploadImageToCloundary(file,isVideo)
       
//         setPreviewUrl(data.url)
//         setSelectedFilephoto(data.url)
//         setFormData({...formData,photo:data.url})

//     }
//     const handelFileInputChangpasport=async(event)=>{
//         const file=event.target.files[0]
//         const isVideo = false;
//         const data=await uploadImageToCloundary(file,isVideo)
//         setFormData({...formData,pasport:data.url})

//     }

//     const handelFileInputChangvideo=async(event)=>{
//         const file=event.target.files[0]
//         const isVideo = true;
//         const data=await uploadImageToCloundary(file,isVideo)
//         setFormData({...formData,video:data.url})

//     }
    
  
//     return(
//         <>
//       <section>
        
//       <div className="container mt-5">
//         <div className="row">
        
//             <div className="col-md-6 col-lg-6">
//                <h4 className="mt-4">Create an<span>account</span></h4>
//                </div>

// <input  type="file" name="photo" id="customFile" accept=".jpg, .png" onChange={handelFileInputChang} />

// <div>
             
              
                   
//             <div>
//             </div>
              
//               <input  type="file" name="video" id="customFile"  onChange={handelFileInputChangvideo} />
       
     
               
       

              
//             </div>
//         </div>
//       </div>
//       </section>
//         </>
//     );

// }
// export default SignupThreeDoctor;






import React, { useState } from "react";
import uploadImageToCloundary from '../../Utils/uploadCloudnary'
import  '../../Pages/SignUp.css'
import { Link } from "react-router-dom";
import { useEffect } from "react";


const SignupThreeDoctor=({ formData, setFormData })=>{
    const [selectedFilephoto,setSelectedFilephoto]=useState(null)
    const [selectedFilevideo,setSelectedFilevideo]=useState(null)
    const [loading,setLoading]=useState(false)
    const [url,setUrl]=useState("")
    const [urlv,setUrlv]=useState("")
    

    
    const handelFileInputChangpasport=async(event)=>{
        const file=event.target.files[0]
        const isVideo = false;
        const data=await uploadImageToCloundary(file,isVideo)
        setFormData({...formData,card:data.url})
        console.log(data.url)
        setUrl(data.url)
        

    }

    const handelFileInputChangvideo=async(event)=>{
        const file=event.target.files[0]
        const isVideo = true;
        const data=await uploadImageToCloundary(file,isVideo)
        setFormData({...formData,video:data.url})
        console.log(data.url)
        console.log(formData.video)
        setUrlv(data.url)
       
        

    }
    useEffect(() => {
      console.log(formData.video);
    }, [formData]);
    // const handelFileInputChangvideo = async (event) => {
    //   const file = event.target.files[0];
    //   const isVideo = true;
    
    //   const fileData = await readFileAsArrayBuffer(file);
    //   const data = await uploadImageToCloundary(fileData, isVideo);
    
    //   setFormData({ ...formData, video:file});
    //   console.log(data.url);
    //   console.log(file);
    //   setUrlv(data.url);
    // };
    
    // const readFileAsArrayBuffer = (file) => {
    //   return new Promise((resolve, reject) => {
    //     const reader = new FileReader();
    
    //     reader.onload = () => {
    //       resolve(reader.result);
    //     };
    
    //     reader.onerror = () => {
    //       reject(new Error('Failed to read file as array buffer.'));
    //     };
    
    //     reader.readAsArrayBuffer(file);
    //   });
    // };
    
  
    return(
        <>
         <section class="p-3 p-md-4 p-xl-5">
          <div class="container">
            <div class="card border-light-subtle shadow-sm">
              <div class="row g-0">
                <div class="col-12 col-md-6" style={{backgroundColor:'#3E8989'}}>
                  <div class="d-flex align-items-center justify-content-center h-100">
                    <div class="col-10 col-xl-8 py-3">
                      {/* <img class="img-fluid rounded mb-4" loading="lazy" src="./assets/img/bsb-logo-light.svg" width="245" height="80" alt="DOKTORZ Logo"/> */}
                      {/* <span className="badge bg-light" style={{color:'black'}}><strong>DOKTORZ</strong></span> */}
                      <img class="img-fluid rounded " loading="lazy" src={`http://res.cloudinary.com/dvfyd13tg/image/upload/v1710516155/zqtf26p9xdlad2rrhfep.png`} width="100" height="80" alt="DOKTORZ Logo"/> 
                      <hr class="border-primary-subtle mb-4"/>
                      <h2 class="h1 mb-4 text-light">We make digital product that drive you to stand out.</h2>
                      <p class="lead m-0 text-light">you will be able to choose among the 
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
                          <h2 class="h3">Verfiy account</h2>
                          <h3 class="fs-6 fw-normal text-secondary m-0">Hello Doctor</h3>
                        </div>
                      </div>
                    </div>
                    <form action="#!">
                      <div class="row gy-3 gy-md-4 overflow-hidden">
                       
                      {/* <div>
    <div class="d-flex justify-content-center mb-4">
        <img id="selectedAvatar" src={urlv ? urlv :`https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg`}
        class="rounded-circle" style={{width: '200px', height: '200px',objectfit:' cover'}} alt="example placeholder" />
    </div>
    <div class="d-flex justify-content-center">
        <div class="btn btn-rounded"style={{backgroundColor:'#3E8989'}}>
            <label class="form-label text-white m-1">Video Verfiy</label>
            <input  class="form-control" type="file" name="video" id="customFile"  onChange={handelFileInputChangvideo} />
        </div>
    </div>
</div> */}
                        
                       
                       <div class="d-flex justify-content-center mb-4 mt-5">
    <label htmlFor="customFile" class="upload-label p-5 rounded-pill" style={{color:'#3E8989',backgroundColor:'white',padding:'10px',borderRadius:'50px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',}}>
    <svg className=""  style={{color:'#3E8989'}} xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-camera-video-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2z"/>
</svg>
      <input class="form-control" type="file" name="video" id="customFile"  onChange={handelFileInputChangvideo} style={{ display: 'none' }} />
    </label>
  </div>
  <div class="d-flex justify-content-center">

<label class="form-label text-dark m-1 btn" style={{backgroundColor:'whithe',color:'#3E8989', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',}}>Video Verfiy</label>

</div>
         
                       
                        


<div>
    <div class="d-flex justify-content-center mb-4 mt-5">
        <img id="selectedAvatar" src={url ? url :`https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg`}
        class="rounded-circle" style={{width: '200px', height: '200px',objectfit:' cover'}} alt="example placeholder" />
    </div>
    <div class="d-flex justify-content-center">
        <div class="btn btn-rounded" style={{backgroundColor:'#3E8989'}}>
            <label class="form-label text-white m-1"  >Card Verfiy</label>
            <input   class="form-control " type="file" name="card" id="customFile" accept=".jpg, .png" onChange={handelFileInputChangpasport} />
        </div>
    </div>
</div>
{/* <div class="d-flex justify-content-center mb-4 mt-5">
    <label htmlFor="customFile" class="upload-label p-5 rounded-pill" style={{color:'#3E8989',backgroundColor:'white',padding:'10px',borderRadius:'50px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',}}>
    <svg style={{color:'#3E8989'}} xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-person-vcard-fill" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm9 1.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5M9 8a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4A.5.5 0 0 0 9 8m1 2.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5m-1 2C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 0 2 13h6.96q.04-.245.04-.5M7 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0"/>
</svg>
      <input class="form-control" type="file" name="card" id="customFile" accept=".jpg, .png" onChange={handelFileInputChangpasport} style={{ display: 'none' }} />
    </label>
  </div>
  <div class="d-flex justify-content-center">

<label class="form-label text-light m-1 btn" style={{backgroundColor:'#3E8989'}}>Card Verfiy</label>

</div> */}
                        
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
                            <svg style={{color:'#3E8989'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                              <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                            </svg>
                            <span class="ms-2 fs-6" style={{color:'#3E8989'}}>Google</span>
                          </a>
                          <a href="#!" class="btn bsb-btn-xl btn-outline-primary">
                            <svg style={{color:'#3E8989'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg>
                            <span class="ms-2 fs-6" style={{color:'#3E8989'}}>Facebook</span>
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
export default SignupThreeDoctor;