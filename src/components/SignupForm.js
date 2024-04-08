import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const SignupForm = ({ toggleForm }) => {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [signedUp, setSignedUp] = useState(false);
  const navigate = useNavigate();

  function handleSignUp() {
    fetch("http://127.0.0.1:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.authenticated) {
          setSignedUp(true);
          setMessage("Authentication successful");
        } else {
          setSignedUp(false);
          setMessage("Authentication failed. Incorrect username or password.");
        }
      })
      .catch((error) =>
        setMessage("Authentication failed. Incorrect username or password.")
      );
  }
  if (signedUp) {
    // Redirect to another page after successful authentication
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
      <button type="submit" class="login-btn" onClick={handleSignUp}>Login</button>
      <br/>
      <button type="button" onClick={toggleForm}>
        Switch to Login
      </button>

    </div>
  );
};

export default SignupForm;
