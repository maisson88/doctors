// import React from "react";
// const Foter=()=>{
//     return(
//         <>
//           {/* <!-- Footer 6 - Bootstrap Brain Component --> */}
//         <footer className="" style={{backgroundColor:'#3E8989'}}>
// {/*         
//           <!-- Widgets - Bootstrap Brain Component --> */}
//           <div className="bg-light py-3 py-md-5 py-xl-8 border-top border-light-subtle">
//             <div className="container overflow-hidden">
//               <div className="row gy-3 gy-md-5 gy-xl-0 align-items-sm-center">
//                 <div className="col-xs-12 col-sm-6 col-xl-3 order-0 order-xl-0">
//                   <div className="footer-logo-wrapper text-center text-sm-start">
//                     {/* <a href="#!"> */}
//                       {/* <h6 className="text-dark"><strong>DOKTORZ</strong></h6> */}
//                       <a class="footer-brand"  href="#"><span className="badge text-light bg-dark">DOKTORZ</span></a>
//                       {/* <img src="./assets/img/bsb-logo.svg" alt="DOKTORZ Logo" width="175" height="57"/> */}
//                     {/* </a> */}
//                   </div>
//                 </div>
        
//                 <div className="col-xs-12 col-xl-6 order-2 order-xl-1">
//                   <ul className="nav justify-content-center">
//                     <li className="nav-item">
//                       <a className="nav-link link-secondary px-2 px-md-3" href="#!">About</a>
//                     </li>
//                     <li className="nav-item">
//                       <a className="nav-link link-secondary px-2 px-md-3" href="#!">Contact</a>
//                     </li>
//                     <li className="nav-item">
//                       <a className="nav-link link-secondary px-2 px-md-3" href="#!">Advertise</a>
//                     </li>
//                     <li className="nav-item">
//                       <a className="nav-link link-secondary px-2 px-md-3" href="#!">Terms</a>
//                     </li>
//                     <li className="nav-item">
//                       <a className="nav-link link-secondary px-2 px-md-3" href="#!">Privacy</a>
//                     </li>
//                   </ul>
//                 </div>
        
//                 <div className="col-xs-12 col-sm-6 col-xl-3 order-1 order-xl-2">
//                   <ul className="nav justify-content-center justify-content-sm-end">
//                     <li className="nav-item">
//                       <a className="nav-link link-dark px-3" href="#!">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
//                           <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
//                         </svg>
//                       </a>
//                     </li>
//                     <li className="nav-item">
//                       <a className="nav-link link-dark px-3" href="#!">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
//                           <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
//                         </svg>
//                       </a>
//                     </li>
//                     <li className="nav-item">
//                       <a className="nav-link link-dark px-3" href="#!">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
//                           <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
//                         </svg>
//                       </a>
//                     </li>
//                     <li className="nav-item">
//                       <a className="nav-link link-dark px-3" href="#!">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
//                           <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
//                         </svg>
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
// {/*         
//           <!-- Copyright - Bootstrap Brain Component --> */}
//           <div className="bg-light py-3 py-md-5 border-top border-light-subtle">
//             <div className="container overflow-hidden">
//               <div className="row">
//                 <div className="col">
//                   <div className="footer-copyright-wrapper text-center">
//                     &copy; 2024. All Rights Reserved.
//                   </div>
//                   <div className="credits text-secondary text-center mt-2 fs-7">
//                     Built by <a href="https://bootstrapbrain.com/" className="link-secondary text-decoration-none">Maisson</a> with <span className="text-danger">&#9829;</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
        
//         </footer>
        
//         </>
//     );
// }
// export default Foter;

import React from "react";
const Foter=()=>{
    return(
       <>
  <div class="" style={{marginTop:'150px'}}>

<footer class="text-white text-center text-lg-start " style={{backgroundColor:'#3E8989'}}>
  
  <div class="container p-4">
  
    <div class="row mt-4">
   
      <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
        <h5 class="text-uppercase mb-4">About DOKTORZ</h5>

        <p>
          At DOKTORZ you will be able to choose among the most skilled doctors in different specialties.
        </p>

        <p>
        you can  now make your consultations with your doctor anywhere and anytime.
        </p>

        <div class="mt-4 ">
        
          <a type="button" class="btn btn-light rounded-circle text-center me-1" style={{borderRadius:'25px'}}><svg style={{color:'#3E8989'}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-facebook rounded-circle" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg></a>
        
                 
<a type="button" class="btn btn-light rounded-circle me-1 " style={{borderRadius:'25px'}}><svg style={{color:'#3E8989'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
</svg></a>
     
                 
<a type="button" class="btn btn-light rounded-circle me-1" style={{borderRadius:'25px'}}><svg style={{color:'#3E8989'}}  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
  <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
</svg></a>
       
                 
<a type="button" class="btn btn-light rounded-circle " style={{borderRadius:'25px'}}><svg style={{color:'#3E8989'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google-play" viewBox="0 0 16 16">
  <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055zM1 13.396V2.603L6.846 8zM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27"/>
</svg></a>
        </div>
      </div>
     
      <div class="col-lg-4 col-md-6 mb-4 mb-md-0 text-light text-center">
        <h5 class="text-uppercase mb-4 pb-1">Search something</h5>

        <div class="form-outline form-white mb-4">
          <input type="text" id="formControlLg" class="form-control form-control-lg text-light" placeholder="Search" style={{backgroundColor:'#3E8989',color: '#fff'}} />
         
        </div>

        <ul class="fa-ul  p-0" style={{marginLeft:"1.65em"}}>
          <li class="mb-3" style={{listStyle:'none'}}>
            <span class="fa-li text-light"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
</svg></span><span class="ms-2 text-light  ">Warsaw, 00-967, Poland</span>
          </li>
          <li class="mb-3" style={{listStyle:'none'}}>
            <span class="fa-li text-light"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
</svg></span><span class="ms-2 text-light">contact@DOkTORZ.com</span>
          </li>
          <li class="mb-3" style={{listStyle:'none'}}>
            <span class="fa-li text-light"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg></span><span class="ms-2 text-light">+ 48 234 567 88</span>
          </li>
        </ul>
      </div>
     
      <div class="col-lg-4 col-md-6 mb-4 mb-md-0 text-center ">
        <h5 class="text-uppercase mb-4">Booking Appointments</h5>

        {/* <table class="table text-center text-white">
          <tbody class="fw-normal">
            <tr>
              <td>Mon - Thu:</td>
              <td>8am - 9pm</td>
            </tr>
            <tr>
              <td>Fri - Sat:</td>
              <td>8am - 1am</td>
            </tr>
            <tr>
              <td>Sunday:</td>
              <td>9am - 10pm</td>
            </tr>
          </tbody>
        </table> */}
       <img class="img-fluid rounded " loading="lazy" src={`http://res.cloudinary.com/dvfyd13tg/image/upload/v1710516155/zqtf26p9xdlad2rrhfep.png`} width="160" height="140" alt="DOKTORZ Logo"/> 
      </div>
    
    </div>
  
  </div>


 
  <div class="text-center p-3" style={{backgroundColor:'rgb(46 107 107)'}}>
    © 2024 Copyright:
    <a class="text-white" href="">DOKTORZ.com</a>
  </div>
 
</footer>

</div>

       </>
    );
}
export default Foter;