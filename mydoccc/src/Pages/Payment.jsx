import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Payment = () => {
  const [done,setDone]=useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvv: "",
    address: "",
    city: "",
    state: "",
    nameOnCard: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
      


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:1001/info",formData)
      .then(res=>console.log(res.data))
      .catch(err=>console.log(err))
    // Perform form submission logic here, e.g., send data to the server
    // console.log(formData);
    // Reset the form after submission
    setFormData({
      name: "",
      email: "",
      cardNumber: "",
      expMonth: "",
      expYear: "",
      cvv: "",
      address: "",
      city: "",
      state: "",
      nameOnCard: "",
    });
   
  };

  return (
    <>
    <div class="container">

<form onSubmit={handleSubmit}>

    <div class="row d-flex justify-content-center">

        <div class="col">

            <h3 class="title">billing address</h3>

            <div class="inputBox">
                <span>full name :</span>
                <input  type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required/>
            </div>
            <div class="inputBox">
                <span>email :</span>
                <input  type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required/>
            </div>
            <div class="inputBox">
                <span>address :</span>
                <input  type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required/>
            </div>
            <div class="inputBox">
                <span>city :</span>
                <input  type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required/>
            </div>

            <div class="flex">
                <div class="inputBox">
                    <span>state :</span>
                    <input  type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required/>
                </div>
                {/* // <div class="inputBox">
                //     <span>zip code :</span>
                //     <input type="text" placeholder="123 456">
                // </div> */}
            </div>

        </div>

        <div class="col">

            <h3 class="title">payment</h3>

            <div class="inputBox">
                <span>cards accepted :</span>
                <img src="./card_img.png" alt=""/>
            </div>
            <div class="inputBox">
                <span>name on card :</span>
                <input  type="text"
            name="nameOnCard"
            value={formData.nameOnCard}
            onChange={handleChange}
            required/>
            </div>
            <div class="inputBox">
                <span>credit card number :</span>
                <input   type="number"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            required/>
            </div>
            <div class="inputBox">
                <span>exp month :</span>
                <input  type="text"
            name="expMonth"
            value={formData.expMonth}
            onChange={handleChange}
            required/>
            </div>

            <div class="flex">
                <div class="inputBox">
                    <span>exp year :</span>
                    <input  type="number"
            name="expYear"
            value={formData.expYear}
            onChange={handleChange}
            required/>
                </div>
                <div class="inputBox">
                    <span>CVV :</span>
                    <input  type="number"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            required/>
                </div>
            </div>

        </div>

    </div>

    <button  type="submit">Submit</button>

</form>

</div>

   
</>
  );
};

export default Payment;

