import Header from "../../compentes/Header/Header"
import Foter from "../../compentes/foater/Foter"



const ArticeleN=()=>{
    return(
        <>
        <Header/>
        <div className="pb-5" style={{backgroundColor:'#3E8989'}}>
            <div className="container">
                <div className="pt-5">
                    <div >
                    <img
                  // src={'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg'}
                  className="img-fluid w-100"
                  src={'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?cs=srgb&dl=pexels-pixabay-356040.jpg&fm=jpg'}
                   
                    style={{ borderRadius: "30px" ,maxHeight:'350px'}}
                  />
                    </div>
                    <div className="pt-4 d-flex justify-content-between">
                        <div >
                            <span className="text-light px-2 mb-1"  style={{backgroundColor:'#F0997A',borderRadius:'10px'}}>Medical Filed</span>
                            <h2 className="text-light mt-1">Diagnosing-Undecideds Checklist</h2>
                            <p className="text-light pb-2 w-25" style={{borderBottom:'2px solid white'}}>26,june 2024</p>
                        </div>
                        <div>
                            <button className="btn text-light" style={{backgroundColor:'#F0997A'}}>Add to Favorites <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
</svg></button>
                        </div>
                    </div>
           <p className="text-light">
           introduction:
The emergence of the novel coronavirus disease 2019 (COVID-19) caused by the severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2) has led to a global health crisis of unprecedented scale. This article provides a comprehensive overview of COVID-19, covering its epidemiology, clinical features, transmission dynamics, prevention strategies, and current treatment options.
Epidemiology:
COVID-19 was first identified in December 2019 in Wuhan, China, and has since spread rapidly worldwide, leading to millions of cases and fatalities. The virus primarily spreads through respiratory droplets and close contact with infected individuals, although airborne transmission is also possible in certain settings. Certain populations, such as the elderly and those with underlying health conditions, are at higher risk of severe illness and complications.
Clinical Features:
The clinical presentation of COVID-19 varies widely, ranging from asymptomatic infection to severe respiratory distress and multi-organ failure. Common symptoms include fever, cough, shortness of breath, fatigue, and loss of taste or smell. Severe cases may progress to pneumonia, acute respiratory distress syndrome (ARDS), and systemic inflammation, requiring intensive care and mechanical ventilation.
Transmission Dynamics:
SARS-CoV-2 spreads primarily through respiratory droplets generated when an infected person coughs, sneezes, or talks. The virus can also spread by touching contaminated surfaces and then touching the face, although this is less common. Asymptomatic and pre-symptomatic individuals can also transmit the virus, making control measures such as mask-wearing, physical distancing, and hand hygiene crucial in limiting transmission.
Prevention Strategies:
Preventing the spread of COVID-19 requires a multi-faceted approach, including vaccination, non-pharmaceutical interventions, and public health measures. Vaccination has proven to be highly effective in reducing severe illness, hospitalization, and death from COVID-19. In addition, wearing masks, practicing good hand hygiene, avoiding crowded indoor spaces, and maintaining physical distance remain important strategies for reducing transmission.
Current Treatment Options:
Treatment for COVID-19 focuses on supportive care to alleviate symptoms and complications, as well as antiviral medications and immunomodulatory therapies in certain cases. The development of vaccines has been a significant breakthrough in the fight against COVID-19, with several vaccines demonstrating high efficacy in clinical trials and real-world settings.
Conclusion:
COVID-19 continues to pose significant challenges to global public health, requiring ongoing vigilance, collaboration, and innovation to control its spread and mitigate its impact. Understanding the epidemiology, clinical features, transmission dynamics, prevention strategies, and treatment options is crucial in navigating the pandemic and protecting public health

References: world health organization

           </p>
                </div>
            </div>

        </div>
        <div className="container mt-5 mb-5">
            <div className="d-flex justify-content-between">
                <div className="ps-2" style={{borderLeft:'5px solid #3E8989'}}>
                <h5>Recent Articals</h5>
                </div>
                <div>
                <h5>Topics</h5>
                </div>
          
            </div>
            <div className="row ">
                <div className="col-lg-8 col-md-12">
                <div class="card mb-3 mt-2 mb-5" style={{maxWidth:'500px',border:'none',borderRadius:' 0.375rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',backgroundColor:'#FDFDFD'}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={`https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?cs=srgb&dl=pexels-pixabay-356040.jpg&fm=jpg`} className="img-fluid rounded-start h-100" alt="..." style={{borderRadius:' 0.375rem',}}/>
    </div>
    <div class="col-md-8">
      <div class="card-body ">
        <h6 class="card-title btn text-light p-1 rounded-pill" style={{backgroundColor:'#3E8989'}}>Medical Field</h6>
        <div>
            <h6>how to care about your health</h6>
            <p style={{color:'#A19C9C',fontSize:'12px'}}>The moment a woman discovers she is pregnant is often 
accompanied by a flood of emotions – joy, surprise, 
perhaps even a hint of anxiety. With the confirmation of</p>
        </div>
       

   
       
      </div>
    </div>
  </div>
</div>
<div class="card mb-3 mt-2 mb-5" style={{maxWidth:'500px',border:'none',borderRadius:' 0.375rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',backgroundColor:'#FDFDFD'}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={`https://images.unsplash.com/photo-1599493758267-c6c884c7071f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`} className="img-fluid rounded-start h-100" alt="..." style={{borderRadius:' 0.375rem',}}/>
    </div>
    <div class="col-md-8">
      <div class="card-body ">
        <h6 class="card-title btn text-light p-1 rounded-pill" style={{backgroundColor:'#3E8989'}}>Medical Field</h6>
        <div>
            <h6>how to care about your health</h6>
            <p style={{color:'#A19C9C',fontSize:'12px'}}>The moment a woman discovers she is pregnant is often 
accompanied by a flood of emotions – joy, surprise, 
perhaps even a hint of anxiety. With the confirmation of</p>
        </div>
       

   
       
      </div>
    </div>
  </div>
</div>
<div class="card mb-3 mt-2 mb-5" style={{maxWidth:'500px',border:'none',borderRadius:' 0.375rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',backgroundColor:'#FDFDFD'}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={`https://images.unsplash.com/photo-1602542165989-999c53234fdd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`} className="img-fluid rounded-start h-100" alt="..." style={{borderRadius:' 0.375rem',}}/>
    </div>
    <div class="col-md-8">
      <div class="card-body ">
        <h6 class="card-title btn text-light p-1 rounded-pill" style={{backgroundColor:'#3E8989'}}>Medical Field</h6>
        <div>
            <h6>how to care about your health</h6>
            <p style={{color:'#A19C9C',fontSize:'12px'}}>The moment a woman discovers she is pregnant is often 
accompanied by a flood of emotions – joy, surprise, 
perhaps even a hint of anxiety. With the confirmation of</p>
        </div>
       

   
       
      </div>
    </div>
  </div>
</div>
<div class="card mb-3 mt-2 mb-5" style={{maxWidth:'500px',border:'none',borderRadius:' 0.375rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',backgroundColor:'#FDFDFD'}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={`https://www.sgs.com/-/media/sgscorp/images/temporary/medical-device-hero.cdn.en-EG.1.jpg`} className="img-fluid rounded-start h-100" alt="..." style={{borderRadius:' 0.375rem',}}/>
    </div>
    <div class="col-md-8">
      <div class="card-body ">
        <h6 class="card-title btn text-light p-1 rounded-pill" style={{backgroundColor:'#3E8989'}}>Medical Field</h6>
        <div>
            <h6>how to care about your health</h6>
            <p style={{color:'#A19C9C',fontSize:'12px'}}>The moment a woman discovers she is pregnant is often 
accompanied by a flood of emotions – joy, surprise, 
perhaps even a hint of anxiety. With the confirmation of</p>
        </div>
       

   
       
      </div>
    </div>
  </div>
</div>
<div class="card mb-3 mt-2 mb-5" style={{maxWidth:'500px',border:'none',borderRadius:' 0.375rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',backgroundColor:'#FDFDFD'}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaoD0VbQMV86aZm4fDdRr9w3YVRlVX0yp8Xg&s`} className="img-fluid rounded-start h-100 w-100" alt="..." style={{borderRadius:' 0.375rem',}}/>
    </div>
    <div class="col-md-8">
      <div class="card-body ">
        <h6 class="card-title btn text-light p-1 rounded-pill" style={{backgroundColor:'#3E8989'}}>Medical Field</h6>
        <div>
            <h6>how to care about your health</h6>
            <p style={{color:'#A19C9C',fontSize:'12px'}}>The moment a woman discovers she is pregnant is often 
accompanied by a flood of emotions – joy, surprise, 
perhaps even a hint of anxiety. With the confirmation of</p>
        </div>
       

   
       
      </div>
    </div>
  </div>
</div>
<p className="text-light w-25 py-2 text-center m-auto mb-4 " style={{backgroundColor:'#2F4956',borderRadius:'20px'}}>Load More</p>
                </div>
                <div className="col-lg-4 col-md-12 d-flex justify-content-center">
                    <div>
                      <div className="d-flex  justify-content-center">
                      <div>
                      <div className="d-flex align-items-center mb-2" style={{borderRadius:'10px'}}>
                            <div className="p-4" style={{backgroundColor:'#EBD9B4',WebkitBorderTopLeftRadius:'10px',WebkitBorderBottomLeftRadius:'10px'}}><svg style={{color:'white'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-prescription2" viewBox="0 0 16 16">
  <path d="M7 6h2v2h2v2H9v2H7v-2H5V8h2z"/>
  <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v10.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 14.5V4a1 1 0 0 1-1-1zm2 3v10.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V4zM3 3h10V1H3z"/>
</svg></div>
<div className="p-4"  style={{WebkitBorderTopRightRadius:'10px',WebkitBorderBottomRightRadius:'10px',backgroundColor:'#3E8989'}}>
                            <h6 className="text-light">Medical Field</h6>
                        </div>

                        </div>
                        <div className="d-flex align-items-center mb-2" style={{borderRadius:'10px'}}>
                            <div className="p-4" style={{backgroundColor:'#EBD9B4',WebkitBorderTopLeftRadius:'10px',WebkitBorderBottomLeftRadius:'10px'}}><svg style={{color:'white'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-prescription2" viewBox="0 0 16 16">
  <path d="M7 6h2v2h2v2H9v2H7v-2H5V8h2z"/>
  <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v10.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 14.5V4a1 1 0 0 1-1-1zm2 3v10.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V4zM3 3h10V1H3z"/>
</svg></div>
<div className="p-4"  style={{WebkitBorderTopRightRadius:'10px',WebkitBorderBottomRightRadius:'10px',backgroundColor:'#3E8989'}}>
                            <h6 className="text-light">Medical Field</h6>
                        </div>

                        </div>
                        <div className="d-flex align-items-center" style={{borderRadius:'10px'}}>
                            <div className="p-4" style={{backgroundColor:'#EBD9B4',WebkitBorderTopLeftRadius:'10px',WebkitBorderBottomLeftRadius:'10px'}}><svg style={{color:'white'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-prescription2" viewBox="0 0 16 16">
  <path d="M7 6h2v2h2v2H9v2H7v-2H5V8h2z"/>
  <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v10.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 14.5V4a1 1 0 0 1-1-1zm2 3v10.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V4zM3 3h10V1H3z"/>
</svg></div>
<div className="p-4"  style={{WebkitBorderTopRightRadius:'10px',WebkitBorderBottomRightRadius:'10px',backgroundColor:'#3E8989'}}>
                            <h6 className="text-light">Medical Field</h6>
                        </div>

                        </div>
                      </div>
                      </div>
                     
                     
                      <div className="text-center">
                      <h5 className="mt-5">Tags</h5>
                      <div className="text-center w-75 p-5" style={{backgroundColor:'#FAFAFA',borderRadius:'20px',boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'}}>
                        <div className="d-flex justify-content-between">
                          <h6 className="p-2 text-light" style={{backgroundColor:'#3E8989',borderRadius:'10px'}}># Specialists</h6>
                          <h6 className="p-2 text-light" style={{backgroundColor:'#3E8989',borderRadius:'10px'}}># Nursing</h6>
                        </div>
                          
                        <div className="d-flex justify-content-between">
                          <h6 className="p-2 text-light" style={{backgroundColor:'#3E8989',borderRadius:'10px'}}># Medical</h6>
                          <h6 className="p-2 text-light" style={{backgroundColor:'#3E8989',borderRadius:'10px'}}># Specialists</h6>
                        </div>
                          
                        <div className="">
                          <h6 className="p-2 text-light" style={{backgroundColor:'#3E8989',borderRadius:'10px'}}># Medical_Research</h6>
                       
                        </div>
                        <div className="d-flex justify-content-between">
                          <h6 className="p-2 text-light" style={{backgroundColor:'#3E8989',borderRadius:'10px'}}>#Public_Heath</h6>
                          <h6 className="p-2 text-light" style={{backgroundColor:'#3E8989',borderRadius:'10px'}}>#Healthcare</h6>
                        </div>
                          
                      </div>
                    </div>
                     
                        <div className="text-center">
                      <h5 className="mt-5">Let's Talk</h5>
                      <div className="text-center w-75 py-5" style={{backgroundColor:'#3E8989',borderRadius:'20px',boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'}}>
                          <p className="text-light w-75 m-auto" style={{fontWeight:'bold'}}>" If you encounter any issues, feel free to reach out to us "</p>
                          <div className="d-flex justify-content-between w-50 mt-3 mb-3 m-auto text-light">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
</svg>
                          </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <h5 className="mt-5">Tags</h5>
                      <div className="text-center w-75 p-5" style={{backgroundColor:'#FAFAFA',borderRadius:'20px',boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'}}>
               <p style={{color:'#263238'}}>Subscribe to our newsletter to be among the first to keep up with the latest updates.</p>
                          <h6 className="py-2" style={{backgroundColor:'#F2F2F2',boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',color:'#C6C6C6',borderRadius:'20px'}}>Email Address</h6>
                          <h6 className="py-2 w-50 m-auto mt-3" style={{backgroundColor:'#3E8989',color:'white',borderRadius:'20px'}}>Subscribe</h6>
                      </div>
                    </div>
                    </div>
                   
                </div>
              
            </div>
            
        </div>
        <Foter/>
        
        </>
    )
}
export default ArticeleN