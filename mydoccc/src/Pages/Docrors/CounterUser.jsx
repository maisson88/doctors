

const CounterUser=()=>{
    return(
        <>
          <div className="col-lg-7 col-md-12 ">
                    <div className="py-2 py-4 text-center px-5  justify-content-center" style={{backgroundColor:'rgb(44 105 105)' ,borderRadius:'20px'}}>
                        <h1 className="text-light"style={{fontWeight:'bolder'}}>3</h1>
                        <p className="text-light">The Total Patients Before You</p>
                        <h6 className="mb-5" style={{fontWeight:'bolder',color:'yellowgreen'}} >Best Score</h6>
                        <p className="mt-5">Want to request an aAppointment?</p>
                        <button className="btn bg-light rounded-circle" style={{color:'#3E8989',fontWeight:'bold'}}>Request an Appointment</button>
                        </div>
                    </div>
        </>
    )

}
export default CounterUser
