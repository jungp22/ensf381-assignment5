
const SignupForm = ({ toggleForm }) => {
  return (
    <div>
        <form name="signup" onsubmit="validateForm(event)">
          <label for="username">Username:</label>
          <br/>
          <input
            type="text"
            id="username"
            name="username"
            required
            placeholder="Enter your username"
          />
          <br/>
          <label for="password">Password:</label><br/>
          <input
            type="password"
            id="password"
            name="password"
            required
            placeholder="Enter your password"
          />
          <br/>
          <label for="password-confirm">Confirm your Password:</label><br/>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            required
            placeholder="Confirm your password"
          />
          <br/>
          <label for="email">Email:</label><br/>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter your email"
          />
          <br/>

          <button type="submit" class="signup-btn">Login</button><br/>
          <p>
            Already have an account?<br/>
            <button type="button" onClick={toggleForm}>Switch to Login</button>
          </p>
        </form>
    </div>
  );
};

export default SignupForm;
