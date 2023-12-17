// import React from 'react';
// import { GoogleLogin } from 'react-google-login';


// export function Login() {
//     const responseGoogle = (response) => {
//         console.log('response');
//       };
//             return (
//             <GoogleLogin
//               clientId="YOUR_GOOGLE_CLIENT_ID"
//               buttonText="Login with Google"
//               onSuccess={responseGoogle}
//               onFailure={responseGoogle}
//               cookiePolicy={'single_host_origin'}
//             />
//         );
//       };
import React, { useState } from "react";
import '../signup.css';
export function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function Submit() {
    
  }
  return (
    <form className="sign_up_form">
      <input
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        placeholder="First name"
        type="text"
        name="firstName"
        required
      />
      <input
        value={lastName}
        onChange={e => setLastName(e.target.value)}
        placeholder="Last name"
        type="text"
        name="lastName"
        required
      />
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email address"
        type="email"
        name="email"
        required
      />
      <input
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
        name="password"
        required
      />
      <button type="submit" onClick={Submit}>Submit</button>
    </form>
  );
}