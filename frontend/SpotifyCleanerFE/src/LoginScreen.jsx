import React from 'react';
import './containerStyles.css'


function LoginScreen(props) {

  return (
    <div className = "pageContainer">
        <div className = "smallBox">
            <div>
            <h1>Please login to Spotify!</h1>
            {props.children}
            </div>
        </div>
    </div>
  );
}

export default LoginScreen;