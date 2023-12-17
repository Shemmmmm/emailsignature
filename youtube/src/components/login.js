import React from 'react';
import { GoogleLogin } from 'react-google-login';


export function Login() {
    const responseGoogle = (response) => {
        console.log('response');
      };
            return (
            <GoogleLogin
              clientId="YOUR_GOOGLE_CLIENT_ID"
              buttonText="Login with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
        );
      };
