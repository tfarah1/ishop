import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../firebase/SigninFirebase";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const userData = [];

  const handleSubmit = (e) => {
    e.preventDefault();
    userData.push({ username: username, password: password });
    //authentication
    signIn(username, password);
    // signInWithEmailAndPassword(username, password)
    navigate("/");
    console.log(userData);
  };

  return (
    <div className="login-form">
    <form
      className="login-main"
      onSubmit={(e) => {
        handleSubmit(e);
      }}>
      <h2 className="login-header">Login</h2> 
      <div className="input-container">       
        <input
          required
          name="username"
          type="email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}/>
          <label>Email</label>
      </div>
      <div className="input-container">       
        <input
          required
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}/>
          <label>Password</label>
      </div>
      {/* <div className="remember-forget">
          <div className="remember">
            <input type="checkbox"/>
            <label>Remember Me</label>
          </div>
          <div className="forget">
            <a href="/">Forget Password?</a>
          </div>
        </div> */}
      <div className="button-container">
         <button className="sui" value="checkout" type="submit">Login</button>
      </div>
      <div className="register-link">
            <p>Don't have an account? <a href="http://localhost:3000/signup">Register</a></p>
      </div>

    </form>
    </div>
  );
}

export default Login;
