import React from "react";
import './SidePanedl.css'
const SidePanedl=()=>{
    return(
        <>
        <div className="pt-3 pb-2 sidepanel mt-5">
            <div className="d-flex justify-content-between">
                <p>Ticket Price</p>
                <span>150 BDT</span>
            </div>
            <p>Avilaple Time Slots:</p>
            <div className="me-0 text=center">
            <ul >
                <li className="d-flex justify-content-between">
                    <p>Sunday</p>
                    <p>4:00PM - 9:30PM</p>

                </li>
                <li className="d-flex justify-content-between">
                    <p>Friyday</p>
                    <p>4:00PM - 9:30PM</p>

                </li>
                <li className="d-flex justify-content-between">
                    <p>Teuseday</p>
                    <p>4:00PM - 9:30PM</p>

                </li>
            </ul>
            </div>
           
            <div className="text-center mb-2">
            <button className="btn btn-primary w-100">Book Appointment</button>
            </div>
           
        </div>
      </>
    )
}
export default SidePanedl