import React from "react";
import { useState } from "react";
import { db } from "./Database";
import { newUser } from "./SignupFirebase";
import { ref, set } from "firebase/database";
import { useNavigate } from "react-router-dom";

function writeUserData(userId, data) {
  // const db = getDatabase();
  set(ref(db, "users/" + userId), data);
}

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(0);
  const navigate = useNavigate();

  // user info obj
  let userData = {};

  const handleSubmit = (e) => {
    e.preventDefault();
    userData = {
      firstName: firstName,
      lastName: lastName,
      username: username,
    };
    newUser(username, password)
      .then((user) => {
        console.log(user);
        //update user data
        writeUserData(user.uid, userData);
        // db;
      })
      .catch((e) => console.log(e));
    //
    navigate('/');
    console.log(userData);
  };

  return (
    <div className="form">
      <form
        className="main"
        onSubmit={(e) => {
          handleSubmit(e);
        }}>
        <h2 className="login-header">Register</h2> 

      <div className="input-container">       
        <input
          required
          name="firstName"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}/>
          <label>First Name</label>
      </div>
      <div className="input-container">       
        <input
          required
          name="lastName"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}/>
          <label>Last Name</label>
      </div>
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
      <div className="button-container">
         <button className="sui" value="checkout" type="submit">Register</button>
      </div>
      <div className="register-link">
        <p>Already have an account? <a href="http://localhost:3000/Signin">Login</a></p>
      </div>
      </form>
    </div>
  );
}

export default Signup;
