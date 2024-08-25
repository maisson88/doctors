import React , {useEffect, useRef, useState} from "react";

import axios from "axios"
// import Tetologo from "./assets/tetoicon.png"
import Tetologo from "../assets/tetoicon.png"
// import Tetologo from "./assets/tetoicon.png"
import Addbtn from "../assets/add-30.png"
import Massageicon from "../assets/message.svg"
import Home from "../assets/home.png"
import Save from "../assets/book.png"
import Upgrade from "../assets/rocky.png"
import SendBtn from "../assets/send.svg"
import Usericon from "../assets/user-icon.png"
import Tetoicon from "../assets/tetoicon.png"
import './Chat.css';
     
const Chatbot=()=>{
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const masEnd = useRef(null);

  useEffect(()=>{
  masEnd.current.scrollIntoView();
 },[messages])
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };
 
  const sendMessage = async () => {
    if (input.trim() !== '') {
      setMessages((prevMessages) => [
        ...prevMessages,
        { content: input, type: 'question', sender: 'user' }
      ]);
  
      try {
        console.log('Sending request to API...');
        const response = await axios.post('https://gemini-chatbot-1.onrender.com/ask', { question: input });
        console.log('Received response from API:', response);
  
        const aiResponse = response.data.response; // Correct access to AI response
        console.log('AI Response:', aiResponse);
  
        setMessages((prevMessages) => [
          ...prevMessages,
          { content: aiResponse, sender: 'ai', type: 'response' }
        ]);
      } catch (error) {
        console.error('Error:', error);
        if (error.response) {
          console.error('Response data:', error.response.data);
          console.error('Response status:', error.response.status);
          console.error('Response headers:', error.response.headers);
        } else if (error.request) {
          console.error('Request:', error.request);
        } else {
          console.error('Error message:', error.message);
        }
        alert('An error occurred: ' + error.message);
      }
  
      setInput('');
    }
  };
  
  

  return (
    <>
    </>

  );

}

export default Chatbot;