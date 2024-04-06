
const LoginForm = ({ toggleForm }) => {
  return (
    <div>
        <h1>Login</h1>
        <form name="login" onsubmit="validateForm(event)">
          <label for="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            placeholder="Enter your username"
          />
          <br/>
          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            placeholder="Enter your password"
          />
          <br/>

          <button type="submit" class="login-btn">Login</button>
          <br/>
          <button type="button" onClick={toggleForm}>Switch to Signup</button>
        </form>
    </div>
  );
};

export default LoginForm;
