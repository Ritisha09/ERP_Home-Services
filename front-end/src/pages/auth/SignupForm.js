import React, { useEffect, useState } from "react";
import "./loginform.css";
import { Link } from "react-router-dom";

const SignupForm = () => {
  const [popupStyle, showPopup] = useState("hide");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const popup = () => {
    console.log('0');
    showPopup("login-popup");
    setTimeout(() => showPopup("hide"), 3000);
  };

  const handleUsernameChange = (event) => {
    const value= event.target.value;
    setUsername(value);
  };

  const handlePasswordChange = (event) => {
    const value= event.target.value;
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
    } catch (error) {
      console.log('ero');
    }
  };

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
            <input type="password" placeholder="Password" value={password} onChange = {handlePasswordChange}/>

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
