import React from "react";
import { doctors } from "../../assets/data/doctore";
import DoctoreCard from "../../compentes/Doctors/DoctoreCard";
import './Doctores.css'

const Doctors=()=>{
    return(
        <>
        <section>
            <div className="container align-item-center text-center">
            <div class="input-group mb-3 w-75 m-auto">
  <input type="search" class="form-control py-2" placeholder="Find your doctore"/>
  <div class="input-group-append">
    <button class="btn btn-primary py-2" type="button">Search</button>
  </div>
</div>
                {/* <div>
                <h2 className="mb-2">Find a Doctore</h2>
                <input type="search" className="mb-5 py-3 ps-4 pe-2 w-100 bg-transparent"  placeholder="find your doctore"/>
                <button>search</button>
                </div> */}
                
            </div>
        </section>
        <div className="container mt-5 mb-5">
        <div className="row">
        {doctors.map((doctor)=>(
             <div className="col-lg-4" key={doctor.id}>
        <DoctoreCard  doctor={doctor}/>
        </div>
        ))}
        </div>
     
        </div>
        
        </>
    );
}
export default Doctors;