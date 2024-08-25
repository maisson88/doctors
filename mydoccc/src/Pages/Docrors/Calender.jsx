import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import BookForm from './BookForm';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const Calender = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState([]);
  const [number, setNumber] = useState(0);
  const [message, setmessage] = useState("");

  useEffect(() => {
    setNumber(selectedTime.length);
  }, [selectedTime]);

  console.log(number);
  const {id}=useParams()
  const token=localStorage.getItem('token')
    const cleanedTokenString = token.replace(/\\/g, "");
    const cleanedTokenString2 = cleanedTokenString.replace(/"/g, "");
    console.log(cleanedTokenString2)
    const handleDateClick = async (date) => {
      // Perform actions when a date is clicked (e.g., send data to backend)
      const formattedDate = date.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      });
      console.log('Selected Date:', formattedDate);
    
      try {
        const res = await fetch(`https://doctorz.onrender.com/api/v1/users/getAvailableTimeSlots/${id}?date=${formattedDate}`, {
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${cleanedTokenString2}`,
          },
         
        });
    
        const result = await res.json();
        if (!res.ok) {
          throw new Error(result.message);
        }
        console.log(result);
        // toast.error(result.message)
        setmessage(result.message)
        setSelectedTime(result.availableSlots)
      } catch (error) {
        console.log(error);
      
      }
    };
  return (
    <div>
      <div className="container ">
        <div className="row mt-5 py-5 px-2 d-flex justify-content-center" style={{border:'1px solid white' , borderRadius:' 20px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',backgroundColor:'#FDFDFD'}}>
       <BookForm/>





       
          <div className="col-lg-6 mt-5 ">
            <div className="row">
            <div className='d-flex justify-content-end'>
              <div>
              <div className='w-100 d-flex justify-content-end mb-3' ><h5 style={{borderBottom:"2px solid #3E8989"}}>Ticket price  <span style={{color:'#3E8989'}}>300 EGP</span></h5></div>
            
            <div className="custom-calendar">
              <Calendar
                onChange={setSelectedDate}
                value={selectedDate}
                onClickDay={handleDateClick}
              />
            </div>
              </div>
         
            </div>
        
            </div>
            {/* <div>
  {selectedTime.slice(0, 3).map((item, index) => (
    <div key={index}>{item}</div>
  ))}
</div>
<div>
  {selectedTime.slice(3,number).map((item, index) => (
    <div key={index}>{item}</div>
  ))}
</div> */}
  
    
            <div className="row  text-center">
              <div className='d-flex justify-content-center'>
              <div>
              <p className='d-flex justify-content-start mt-4'> {message}</p>
              <div className='d-flex justify-content-between'>
              {selectedTime.slice(0, 3).map((item, index) => (
                <div className="col-lg-4 col-md-6 me-1">
                  <p className='p-2 text-dark'key={index} style={{ border:'1px solid',backgroundColor:"3E8989",borderRadius:'10px'}}> 
    {item}
  </p>
                
              </div>
              ))}
              </div>
              <div className='d-flex justify-content-between'>
              {selectedTime.slice(3,number).map((item, index) => (
                <div className="col-lg-4 col-md-6 me-1">
                  <p className='p-2 text-dark'key={index} style={{ border:'1px solid',backgroundColor:"3E8989",borderRadius:'10px'}}> 
    {item}
  </p>
                
              </div>
              ))}
              </div>
           
          
                {/* <div className="col-lg-4 col-md-6">
                  <p className='p-2 text-dark' style={{ border:'1px solid',backgroundColor:"3E8989"}}>9:00 am</p>
                
              </div>
                <div className="col-lg-4 col-md-6">
                  <p className='p-2 text-dark' style={{ border:'1px solid',backgroundColor:"3E8989"}}>9:00 am</p>
                
              </div> */}
              </div>
             
              </div>
             
            </div>
            
          
          </div>
        
          
        </div>
      </div>
    </div>
  );
};

export default Calender;