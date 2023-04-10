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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage]  = useState("");
  
  const[usernameError, setUsernameError] = useState("");
  const[passwordError, setPasswordError] = useState("");


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

  const handleUsernameChange = (event) => {
    const value= event.target.value;
    setErrorMessage("");
    if(value.length <= 4){
      setUsernameError("Username should be atleat 4 characters long");
    }else{
      setUsernameError("");
    }
    setUsername(value);
  };

  const handlePasswordChange = (event) => {
    const value= event.target.value;
    setErrorMessage("");
    if(value.length < 8){
      setPasswordError("Password must be 8 characters long");
    }else{
      setPasswordError("");
    }
    setPassword(value);
  };


  const submitHandler = async (e) => {
    e.preventDefault();
    console.log('1');
    try {
      const response = await fetch('http://localhost:5000/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();
      console.log(data); // Do something with the response

      // edge case
      if(response.status === 400 && data.error ===  "**Missing username or password**"){
        setErrorMessage(data.error);
      }else if(response.status === 400 && data.error === "**Invalid username or password**"){
        setErrorMessage(data.error);
      }else if(response.status === 401 && data.error === "**Invalid username or password**"){
        setErrorMessage(data.error);
      }else if(response.status === 200){
        setErrorMessage(data.message);
        // if authenticated redirect to dashboard
        window.location.href = '/dashboard';
      }else{
        setErrorMessage("");
      }

    } catch (error) {
      console.log('error');
    }
  };


  return (
    
    <div className="page">
           
    <form className="cover" onSubmit = {submitHandler}> 
      <div className="alt-login">
        <div className="skylink"></div>
      </div>
      
      <h2>Login</h2>
      <input type="text" placeholder="Username" value = {username} onChange = {handleUsernameChange}/>
      <p className = "error">{usernameError}</p>
      <input type="password" placeholder="Password" value = {password} onChange = {handlePasswordChange}/>
      <p className = "error">{passwordError}</p>
      <p style={{ color: 'brown' }}>{errorMessage}</p>

      
      <button className="login-btn" onClick={popup}>
      {/* <Link to = "dashboard">  */}
        Login
      {/* </Link> */}
      </button>
      

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


    </form>
    </div>
  );
};

export default LoginForm;
