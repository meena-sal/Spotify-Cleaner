import React from 'react';


function LoginScreen(props) {
    const containerStyle = {
        display: 'flex',       
        justifyContent: 'center', 
        alignItems: 'center',     
        minHeight: '100vh',    
      };

    const smallBox = {
        backgroundColor: 'green',
        color: 'black',
        width: '50vh',
        height: '50vh',
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center'
    }

    


  return (
    <div style = {containerStyle}>
        <div style = {smallBox}>
            <div>
            <h1>Please login to Spotify!</h1>
            {props.children}
            </div>
        </div>
    </div>
  );
}

export default LoginScreen;