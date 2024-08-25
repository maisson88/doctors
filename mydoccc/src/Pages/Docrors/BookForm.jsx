import axios from "axios"
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify"


const BookForm=()=>{
  const {id}=useParams()
  const navigate=useNavigate()
  const[det,setDet]=useState({})
  const [appointments,setAppointments]=useState({})
  const token=localStorage.getItem('token')
  const [userData,setUserData]=useState({})
  
    const cleanedTokenString = token.replace(/\\/g, "");
    const cleanedTokenString2 = cleanedTokenString.replace(/"/g, "");
    console.log(id)
    useEffect(()=>{
      const getDoctore=()=>{
        axios.get('https://doctorz.onrender.com/api/v1/users/me', {
          headers: {
            'Authorization': `Bearer ${cleanedTokenString2}`
          }
        })
        .then(res => {
          console.log("user",res.data.data.data);
          setUserData(res.data.data.data)
          console.log("userdata",userData)
       
        
        })
        .catch(error => {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
           
          } else if (error.request) {
            console.log(error.request);
          
          } else {
            console.log('Error', error.message);
          
          }
        });
    
      }
      getDoctore();

    
    },[]) 
    const [idUser, setIdUser] = useState('');
    useEffect(() => {
      if (userData && userData._id) {
        setIdUser(userData._id);
      }
    }, [userData]);
  
    console.log("idUser", idUser);
  
    
  const [formData, setFormData] = useState({
    doctorId: `${id}`,
  userId: "66886d677330171688d7d684",
  userName: "",
  time: "",
  age: "",
  phoneNumber: "01006699856",
  date:"Thursday, July 18, 2024"
    
});
  const submitHandler=async event=>{
    
    try {
      const res = await fetch(`https://doctorz.onrender.com/api/v1/users/appointment`, {
        method: 'post',
        headers: {
          'content-Type': 'application/json',
          // Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZWRjNjExOGJiOTgzNWZlNTk0NmE5NCIsImlhdCI6MTcxNDA1MzI0MCwiZXhwIjoxNzIxODI5MjQwfQ.4uVSZuw7xDrWRaXiKN9B7xq309n3gCN2TUEL3f3EjuU`,
          Authorization: `Bearer ${cleanedTokenString2}`,
        },
        body:JSON.stringify(formData)
      });
    
      const result=await res.json()
      if(!res.ok){
        throw new Error(result.message)
      }
      console.log(result)
      toast.success('Booking Done Succesfily')
      // navigate('/paymentCard')
      setAppointments(result.appointment)
      
     

    } catch (error) {
      
      console.log(error)
      toast.error(error.message)

    }
  };

    
   
      const handleInputChange=e=>{
        setFormData({...formData,[e.target.name]:e.target.value});
      

    }

    useEffect(()=>{
      const getId = (id)=>{
          axios.get(`https://doctorz.onrender.com/api/v1/doctors/${id}`)
          .then((res)=>{
              console.log(res.data);
              setDet(res.data.data.data);
            
          })
          .catch((er)=>console.log(er));
      }
      getId(id);
  },[]);
   
    useEffect(() => {
      const postData = async () => {
        try {
          const response = await fetch(`https://doctorz.onrender.com/api/v1/payment/pay/${appointments._id}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${cleanedTokenString2}`,
            },
            body: JSON.stringify({ amount: det.ticketPrice})
          });
  
          if (response.ok) {
            const responseData = await response.json();
            console.log(responseData);
            window.location.href = responseData.paymentUrl
          } else {
            console.log('Post request failed.');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
  
      postData();
    }, [appointments._id]);


    return(
        <>
      
        <div className="col-lg-6 mb-5">
            <div> <h1 className='mb-5 w-50'><span style={{color:'#3E8989'}}>Book an</span> Appointment</h1></div>
         
            <div>
              <div className="card text-white" style={{borderRadius: "1rem" , boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',backgroundColor:'#3E8989'}}>
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Book an Appointment</h2>
                    <p className="text-white-50 mb-5">Please enter your Data!</p>

                    <div data-mdb-input-init className="form-outline form-white mb-4">
                      <input type="text" id="typeEmailX" className="form-control form-control-lg" placeholder='Full Name'  name="userName" value={formData.userName} onChange={handleInputChange}/>
                    </div>

                    <div data-mdb-input-init className="form-outline form-white mb-4">
                      <input type="number" id="typePasswordX" className="form-control form-control-lg" placeholder='AGE' name="age" value={formData.age} onChange={handleInputChange}/>
                    </div>
                    
                    <div data-mdb-input-init className="form-outline form-white mb-4">
                      <input type="number" id="typePasswordX" className="form-control form-control-lg" placeholder='Phone Number' name=" phoneNumber" value={formData.phoneNumber} onChange={handleInputChange}/>
                    </div>
                    <div data-mdb-input-init className="form-outline form-white mb-4">
                      <input type="time" id="typePasswordX" className="form-control form-control-lg" placeholder='enter your time' name="time" value={formData.time} onChange={handleInputChange} />
                    </div>
                    {/* <div data-mdb-input-init className="form-outline form-white mb-4">
                      <select  id="typePasswordX" className="form-control form-control-lg" placeholder='enter your time' >
                      <option value="saturday">Saturday</option>
                       <option value="sunday">Sunday</option>
                       <option value="monday">Monday</option>
                       <option value="tuesday">Tuesday</option>
                       <option value="wednesday">Wednesday</option>
                       <option value="thursday">Thursday</option>
                       <option value="friday">Friday</option>
                        </select>
                    </div> */}
                     <div data-mdb-input-init className="form-outline form-white mb-4">
                      <input type="date" id="typePasswordX" className="form-control form-control-lg" placeholder='enter your time' name="date" value={formData.date} onChange={handleInputChange}  />
                    </div>

                    <button data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-light btn-lg px-5 mt-5" type="submit"onClick={submitHandler}>Request an Appointment</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        </>
    )
}
export default BookForm