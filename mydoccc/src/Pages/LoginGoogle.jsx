import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useContext, useState } from 'react';
import { authContext } from "../contextApi/AuthContext";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const LoginGoogle=()=>{
  const [email, setEmail] = useState("");
  const [fullName, setfullName] = useState("");
  const [photo,setphoto]=useState("")
  const {dispatch}=useContext(authContext)
  const navigate=useNavigate()
const postFormData = async () => {
  try {
    const response = await axios.post('https://doctorz.onrender.com/api/v1/auth/google', {email,fullName,photo});
    console.log(response.data);
    dispatch({
        type:'LOGIN_SUCCESS',
        payload:{
          user:response.data,
          token:response.token,
          role:response.userType,
          // password:result.password,
          
        }
  
      })
      navigate('/')
  } catch (error) {
    console.log(error);
  }
};


    return(
        <>
        <GoogleLogin
  onSuccess={credentialResponse => {
    const credentialResponseDecoded=jwtDecode(credentialResponse.credential)
    console.log(credentialResponseDecoded);
  setEmail(credentialResponseDecoded.email)
  setfullName(credentialResponseDecoded.name)
  setphoto(credentialResponseDecoded.picture)
    // console.log(formData)
    postFormData();
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>;


        </>
    )
}
export default LoginGoogle;

