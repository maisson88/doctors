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

    //   <div className="sidebar">
    //     <div className="upperSide">
    //       <div className="upperSideTop">
    //         <img src={Tetologo} alt="" className="logo" />
    //         <span className="brand">Teto</span>
    //         <button className="midBtn">
    //           <img src={Addbtn} alt="" className="addBtn" /> New Chat
    //         </button>
    //       </div>
    //       <div className="upperSideBottom">
    //         <button className="query">
    //           <img src={Massageicon} alt="" /> I have a headache?
    //         </button>
    //         <button className="query">
    //           <img src={Massageicon} alt="" /> What is COVID-19?
    //         </button>
    //       </div>
    //     </div>
    //     <div className="lowerSide">
    //       <div><img src={Home} alt="" /> Home</div>
    //       <div><img src={Save} alt="" /> Save</div>
    //       <div><img src={Upgrade} alt="" /> Upgrade to Pro</div>
    //     </div>
    //   </div>
    //   <div className="main">
    //     <div className="chat-window">
    //       {messages.map((message, index) => (
    //         <div key={index} className={`message ${message.sender}`}>
    //           {message.sender === 'ai' && <img src={Tetoicon} alt="" style={{ width: '30px', height: '30px', marginRight: '10px', borderRadius: '50%' }} />}
    //           {message.content}
    //         </div>
    //       ))}
    //       <div ref={masEnd} />
    //     </div>
    //     <div className="chat footeree">
    //       <div className="inp">
    //         <input type="text" value={input} onChange={handleInputChange} placeholder="Type your message..." />
    //         <button onClick={sendMessage} className="send"><img src={SendBtn} alt="send" /></button>
    //       </div>
    //       <p>Teto may produce inaccurate information about people, places, or facts. Teto version 2.4.9</p>
    //     </div>
    //   </div>
    // </div>
  );

}

export default Chatbot;