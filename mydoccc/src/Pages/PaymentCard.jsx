// import { Link } from "react-router-dom";

// const PaymentCard=()=>{
//     return(
//         <>
       
//         <div class="container"  style={{marginTop:'200px'}}>
            
//             <div class="row h-100 d-flex justify-content-center align-items-center" >
//         <div class="col-xs-12 col-md-4 " > 
//             <div class="panel panel-default"style={{border:'none', borderRadius:' 0.375rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',backgroundColor:'white'}}>
//                 <div class="panel-heading d-flex aligin-items-center justify-content-between align-items-center p-2" style={{backgroundColor:'rgb(22 29 71)' ,color:'white',borderTopLeftRadius:'10px',borderTopRightRadius:'10px'}}>
//                     <h3 class="panel-title" style={{display:'inline',fontWeight:'bold'}}>
//                         Payment Details
//                     </h3>
//                     <div class="checkbox pull-right">
//                         <label>
//                             <input type="checkbox" />
//                             Remember
//                         </label>
//                     </div>
//                 </div>
//                 <div class="panel-body p-3">
//                     <form role="form">
//                     <div class="form-group">
//                         <label for="cardNumber">
//                             CARD NUMBER</label>
//                         <div class="input-group">
//                             <input type="text" class="form-control" id="cardNumber" placeholder="Valid Card Number"
//                                 required autofocus />
                            
//                         </div>
//                     </div>
//                     <div class="row mt-3">
//                         <div class="col-xs-7 col-md-7">
//                             <div class="form-group ">
//                                 <label for="expityMonth">
//                                     EXPIRY DATE</label>
//                                 <div class="col-xs-6 col-lg-6 pl-ziro">
//                                     <input type="text" class="form-control" id="expityMonth" placeholder="EXPIRY DATE" required />
//                                 </div>
                                
//                             </div>
//                         </div>
//                         <div class="col-xs-5 col-md-5 pull-right">
//                             <div class="form-group">
//                                 <label for="cvCode">
//                                     CV CODE</label>
//                                 <input type="password" class="form-control" id="cvCode" placeholder="CV" required />
//                             </div>
//                         </div>
//                     </div>
//                     </form>
//                 </div>
//             </div>
            
//                 <button className="btn  btn-lg btn-block w-100 mb-3 mt-3 text-light" style={{backgroundColor:'#0a2245'}}><span className="text-light me-5">Ticket Price</span><span className="badge badge-light bg-light rounded-bill" style={{color:"#0a2245"}}>4200$</span>
//                 </button>
    
//             <br/>
//             <a href="http://www.jquery2dotnet.com" className="btn btn-success btn-lg btn-block w-100" role="button" style={{backgroundColor:'rgb(86 112 151)'}}>Pay</a>
//         </div>
//     </div>
//             </div>
      
  


//         </>
//     )
// }
// export default PaymentCard;


import { Link } from "react-router-dom";
import Header from "../compentes/Header/Header";
import Foter from "../compentes/foater/Foter";

const PaymentCard = () => {
  return (
    <>
    <Header/>
      <div
        class=""
        style={{
        height:"100vh",
          backgroundImage: "url('https://ik.imagekit.io/hipay/Adobe_Stock_236122392_a647718235_gpTKXKv7y.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div class="row  d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
          <div class="col-xs-12 col-md-4">
            <div
              class="panel panel-default"
              style={{
                border: "none",
                borderRadius: "0.375rem",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                backgroundColor: "white",
              }}
            >
              <div
                class="panel-heading d-flex aligin-items-center justify-content-between align-items-center p-2"
                style={{
                  backgroundColor: "#3E8989",
                  color: "white",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              >
                <h3 class="panel-title" style={{ display: "inline", fontWeight: "bold" }}>
                  Payment Details
                </h3>
                <div class="checkbox pull-right">
                  <label>
                    <input type="checkbox" />
                    Remember
                  </label>
                </div>
              </div>
              <div class="panel-body p-3">
                <form role="form">
                  <div class="form-group">
                    <label for="cardNumber">CARD NUMBER</label>
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        id="cardNumber"
                        placeholder="Valid Card Number"
                        required
                        autofocus
                      />
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-xs-7 col-md-7">
                      <div class="form-group ">
                        <label for="expityMonth">EXPIRY DATE</label>
                        <div class="col-xs-6 col-lg-6 pl-ziro">
                          <input
                            type="text"
                            class="form-control"
                            id="expityMonth"
                            placeholder="EXPIRY DATE"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-xs-5 col-md-5 pull-right">
                      <div class="form-group">
                        <label for="cvCode">CV CODE</label>
                        <input
                          type="password"
                          class="form-control"
                          id="cvCode"
                          placeholder="CV"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <button
              className="btn btn-lg btn-block w-100 mb-3 mt-3 text-light"
              style={{ backgroundColor: "#3E8989" }}
            >
              <span className="text-light me-5">Ticket Price</span>
              <span
                className="badge badge-light bg-light rounded-bill"
                style={{ color: "#0a2245" }}
              >
                4200$
              </span>
            </button>

            <br />
            <Link
              to={'/DoneBayment'}
              className="btn btn-success btn-lg btn-block w-100"
              role="button"
              style={{ backgroundColor: "#3E8989" }}
            >
              Pay
            </Link>
          </div>
        </div>
      </div>
  
    </>
  );
};

export default PaymentCard;