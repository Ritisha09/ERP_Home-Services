import React, { useEffect, useState } from "react";
// import { gapi } from "gapi-script";
import "./loginform.css";
import {Link} from "react-router-dom"


const LoginForm = () => {
//   useEffect(() => {
//     function start() {
//       gapi.client.init({
//         clientId:
//           "79474543031-tmjo35916ufn421ej3u1i2ljao2apr4s.apps.googleusercontent.com",
//         scope: "",
//       });
//     }
//     gapi.load("client: auth2", start);
//   });

  const [popupStyle, showPopup] = useState("hide");

  const popup = () => {
    showPopup("login-popup");
    setTimeout(() => showPopup("hide"), 3000);
  };

  const onSuccess = (e) => {
    alert("User signed in");
    console.log(e);
  };

  const onFailure = (e) => {
    alert("User sign in Failed");
    console.log(e);
  };

  return (
    
    <div className="page">
           
    <div className="cover">
      <div className="alt-login">
        <div className="skylink"></div>
      </div>
      
      <h2>Login</h2>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />

      
      <div className="login-btn" onClick={popup}>
      <Link to = "dashboard"> 
        Login
      </Link>
      </div>
      

      {/* <div className="alt-login">
        <div className="facebook"></div>
        <div className="google">
          <GoogleLogin
            className="blue"
            clientId="79474543031-tmjo35916ufn421ej3u1i2ljao2apr4s.apps.googleusercontent.com"
            buttonText=""
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={false} // alternative is true, which keeps the user signed in
            icon={false} // alt is true, and this puts the google logo on your button, but I don't like it
            theme="dark" // alternative is light, which is white
          />
        </div>
      </div> */}  

      {/* <div className={popupStyle}>
        <h3>Login Failed</h3>
        <p>Username or password incorrect</p>
      </div> */}


    </div>
    </div>
  );
};

export default LoginForm;
