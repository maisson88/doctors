import React from "react";
const Services=()=>{
    return(
        <>
       <div className="container">
       <div className="mt-5 text-center">
        <h5><strong>Our Great Doctores</strong></h5>
        <p className="w-50 m-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
    </div>
        <div className="row mt-5">
            <div className="col-lg-3 col-md-6 mb-3">
                <div className="p-3 " style={{borderRadius:' 0.375rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', padding: '1.25rem'}}>
                <figure className="m-auto" style={{width:'50px',height:'50px'}}>
    <img class="img-fluid" src="doctor.png" alt="User Avatar" />
    </figure>
    
                   
                    
                    <div className="text-center ">
                    <span className="text-dark mt-2"><strong>All speclites</strong></span>
                    <p className="w-100 mt-2 text-sm">you can reach out to 3500+doctors from 80+ specialties,who are experiend in telemediene.</p>
                    </div>
                   

                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
                <div className="p-3 " style={{borderRadius:' 0.375rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', padding: '1.25rem'}}>
                <figure className="m-auto" style={{border:'none',width:'50px',height:'50px'}}>
    <img class="img-fluid" src="privacy.png" alt="User Avatar" />
    </figure>
    
                   
                    
                    <div className="text-center ">
                    <span className="text-dark mt-2"><strong>private & Secure</strong></span>
                    <p className="w-100 mt-2 text-sm">All your data is protected and safegurded with sucresd SSL.data rest encryption</p>
                    </div>
                   

                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
                <div className="p-3 " style={{borderRadius:' 0.375rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', padding: '1.25rem'}}>
                <figure className="m-auto" style={{border:'none',width:'50px',height:'50px'}}>
    <img class="img-fluid" src="customer-review.png" alt="User Avatar" />
    </figure>
    
                   
                    
                    <div className="text-center ">
                    <span className="text-dark mt-2"><strong>Million Customers</strong></span>
                    <p className="w-100 mt-2 text-sm">Trusted by million and serving users worldwide.Users from 196 countires and counting.</p>
                    </div>
                   

                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
                <div className="p-3 " style={{borderRadius:' 0.375rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', padding: '1.25rem',maxHeight:'800px'}}>
                <figure className="m-auto " style={{ border:'none',width:'50px',height:'50px'}}>
    <img class="img-fluid" src="chatbot.png" alt="User Avatar" />
    </figure>
    
                   
                    
                    <div className="text-center ">
                    <span className="text-dark mt-2"><strong>Chatbot Support</strong></span>
                    <p className="w-100 mt-2 text-sm">Get access to Docta via chatbot for a fantastic telephealth Services.</p>
                    </div>
                   

                </div>
            </div>
        </div>
       </div>
        </>
    );
}
export default  Services;