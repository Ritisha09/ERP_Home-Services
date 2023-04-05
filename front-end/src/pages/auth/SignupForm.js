import React, { useEffect, useState } from "react";
import "./loginform.css";
import { Link } from "react-router-dom";

const SignupForm = () => {
  const [popupStyle, showPopup] = useState("hide");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const[usernameError, setUsernameError] = useState("");
  const[passwordError, setPasswordError] = useState("");

  const [isRegistered, setIsRegistered] = useState(false);
  const [error, setError] = useState("");


  const popup = () => {
    console.log('0');
    showPopup("login-popup");
    setTimeout(() => showPopup("hide"), 3000);
  };

  const handleUsernameChange = (event) => {
    
    const value= event.target.value;
    if(value.length <= 4){
      setUsernameError("Username should be atleat 4 characters long");
    }else{
      setUsernameError("");
    }
    setUsername(value);
  };

  const handlePasswordChange = (event) => {
    const value= event.target.value;
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
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();
      console.log(data); // Do something with the response
      
      // edge case
      if(response.status === 400 && data.error === "**User is already registered**"){
        setIsRegistered(true);
        setError(data.error);
      }else if(response.status === 201 && data.message === "User registered successfully!!"){
        setError(data.message);
      }else if(response.status ===400 && data.error === "**Missing username or password**"){
        setError(data.error);
      }else{
        setError("");
      }
    
    } catch (error) {
      console.log('error');
    }
  };

  const isUsernameValid = username.length >= 5 && !usernameError;
  const isPasswordValid = password.length >= 8 && !passwordError;

  return (
    <div>
      <div className="page">
        {/* <div className="cover"> */}
          <form className="cover" onSubmit={submitHandler}>
            <div className="alt-login">
              <div className="skylink"></div>
            </div>

            <h2>SignUp</h2>
            <input type="text" placeholder="Username" value={username} onChange = {handleUsernameChange} />
            <p className = "error">{usernameError}</p>
            <input type="password" placeholder="Password" value={password} onChange = {handlePasswordChange}/>
            {/* displaying edge cases error on frontend */}
            <p className = "error">{passwordError}</p>
            <p style={{ color: 'brown' }}>{error}</p>

            <button className="login-btn" onClick={popup}>
              {/* <Link to="dashboard"> */}
                <h3>Submit</h3>
              {/* </Link> */}
            </button>
            
          </form>
        {/* </div> */}
      </div>
    </div>
  );
};

export default SignupForm;
