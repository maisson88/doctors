
import React from "react";
import {LoginSocialFacebook} from 'reactjs-social-login';
import {FacebookLoginButton} from 'react-social-login-buttons'
import { useState } from "react";

const LoginFacebook=()=>{
   
    return(
        <>
        
             <LoginSocialFacebook
                appId="2631374420363446"
                onResolve={(response)=>{
                    console.log(response)
                }}
                onReject={(err)=>{
                    console.log(err)
                }}
               
               >
                  
                   <FacebookLoginButton/>
               </LoginSocialFacebook>
        
       
      
        </>
    )
}
export default LoginFacebook;



// import React, { useState } from "react";
// import { LoginSocialFacebook } from "reactjs-social-login";
// import { FacebookLoginButton } from "react-social-login-buttons";

// const LoginFacebook = () => {
//   const [profile, setProfile] = useState(null);

//   const handleFacebookLogin = async (response) => {
//     try {
//       const res = await fetch("http://localhost:1000/infooo", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ access_token: response.accessToken }),
//       });

//       if (res.ok) {
//         const data = await res.json();
//         setProfile(data.profile);
//       } else {
//         // Handle error response from the backend
//         console.log("Authentication failed");
//       }
//     } catch (error) {
//       // Handle any network or server errors
//       console.log("Error:", error);
//     }
//   };

//   return (
//     <>
//       {!profile ? (
//         <LoginSocialFacebook
//           appId="2631374420363446"
//           onResolve={handleFacebookLogin}
//           onReject={(err) => {
//             console.log(err);
//           }}
//         >
//           <FacebookLoginButton />
//         </LoginSocialFacebook>
//       ) : (
//         <div>
//           <h1>{profile.name}</h1>
//           <img src={profile.picture.data.url} alt="Profile" />
//         </div>
//       )}
//     </>
//   );
// };

// export default LoginFacebook;