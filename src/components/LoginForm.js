import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ toggleForm }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();
  function handleAuthentication() {
    fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.authenticated) {
          setAuthenticated(true);
          setMessage("Authentication successful");
        } else {
          setAuthenticated(false);
          setMessage("Authentication failed. Incorrect username or password.");
        }
      })
      .catch((error) =>
        setMessage("Authentication failed. Incorrect username or password.")
      );
  }
  if (authenticated) {
    // Redirect to another page after successful authentication
    navigate("/products");
  }

  return (
    <div>
      <h1>Login</h1>
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
      <button type="submit" class="login-btn" onClick={handleAuthentication}>Login</button>
      <br/>
      <button type="button" onClick={toggleForm}>
        Switch to Signup
      </button>
    </div>
  );
};

export default LoginForm;
