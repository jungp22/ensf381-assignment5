import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const SignupForm = ({ toggleForm }) => {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [signedUp, setSignedUp] = useState(false);
  const navigate = useNavigate();

  function handleSignUp() {
    if(password !== confirmPassword){
      setSignedUp(false);
      setMessage("Confirm password");  
      return
    }
    fetch("http://127.0.0.1:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.signedUp) {
          setSignedUp(true);
          setMessage("Signup successful");
        } else {
          setSignedUp(false);
          setMessage("Signup failed. Someone already has this username.");
        }
      })
      .catch((error) =>
        setMessage("An error occurred.")
      );
  }
  if (signedUp) {
    // Redirect to another page after successful signup
    navigate("/");
  }


  return (
    <div>
      <p>{message}</p>
      <label>
        Username:
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <label>
        Confirm Password:
        <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <button type="submit" class="login-btn" onClick={handleSignUp}>Login</button>
      <br/>
      <button type="button" onClick={toggleForm}>
        Switch to Login
      </button>

    </div>
  );
};

export default SignupForm;
