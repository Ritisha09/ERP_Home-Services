import React, { useEffect, useState } from "react";
import "./loginform.css";
import {Link} from "react-router-dom"

const SignupForm = () => {
    const [popupStyle, showPopup] = useState("hide");

    const popup = () => {
      showPopup("login-popup");
      setTimeout(() => showPopup("hide"), 3000);
    };
  
  return (
    <div>
        <div className="page">
           
            <div className="cover">
                <div className="alt-login">
                <div className="skylink"></div>
                </div>
                
                <h2>SignUp</h2>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
        
                
                <div className="login-btn" onClick={popup}>
                <Link to = "dashboard"> 
                 <h3>Submit</h3>
                
                </Link>
                </div>
        
            </div>
        </div>
    </div>
  )
}


export default SignupForm