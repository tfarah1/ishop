// const Login = () => {
//   return (
//     <div className="form">
//       <form>
//         <div className="input-container">
//           <label>Username </label>
//           <input type="text" name="uname" required />
//         </div>
//         <div className="input-container">
//           <label>Password </label>
//           <input type="password" name="pass" required />
//         </div>
//         <div className="button-container">
//           <input type="submit" />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from 'react';
// import {
//   auth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from 'firebase';
// import { useDispatch } from 'react-redux';
// // import { login } from '../../features/userSlice';
// // import './Login.css';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const [profilePic, setProfilePic] = useState('');
//   const dispatch = useDispatch();

//   const loginToApp = (e) => {
//     e.preventDefault();

//     signInWithEmailAndPassword(auth, email, password)
//       .then((userAuth) => {
//         console.log(userAuth);
//       })
//       .catch((err) => {
//         alert(err);
//       });
//   };

//   const register = () => {
//     if (!name) {
//       return alert('Please enter a full name');
//     }

//     console.log('register the user');

//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userAuth) => {
//         console.log(userAuth);
//       })
//       .catch((err) => {
//         alert(err);
//       });
//   };

//   return (
//     <div className='login'>
//       <img src='Linkedin_Logo_text.svg' alt='' />
//       <form>
//         <input
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder='Full name (required if registering)'
//           type='text'
//         />

//         <input
//           value={profilePic}
//           onChange={(e) => setProfilePic(e.target.value)}
//           placeholder='Profile picture URL (optional)'
//           type='text'
//         />
//         <input
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder='Email'
//           type='email'
//         />
//         <input
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder='Password'
//           type='password'
//         />
//         <button type='submit' onClick={loginToApp}>
//           Sign In
//         </button>
//       </form>

//       <p>
//         Not a member?{' '}
//         <span className='login__register' onClick={register}>
//           Register Now
//         </span>
//       </p>
//     </div>
//   );
// }

// export default Login;

// import React from "react";
// import { useState } from "react";

// function Login() {

//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState(0);

//   // user info obj
//   const userData = [];

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     userData.push(firstName, lastName, username, email);

//     console.log(userData);
//   };

//   return (
//     <form
//       className="main"
//       onSubmit={(e) => {
//         handleSubmit(e);
//       }}
//     >
//       <label>First Name:</label>
//       <br />
//       <input
//         required
//         name="firstName"
//         type="text"
//         value={firstName}
//         onChange={(e) => setFirstName(e.target.value)}
//       />

//       <br />
//       <label>Last Name:</label>
//       <br />
//       <input
//         required
//         name="lastName"
//         type="text"
//         value={lastName}
//         onChange={(e) => setLastName(e.target.value)}
//       />

//       <br />
//       <label>Username: </label>
//       <br />
//       <input
//         required
//         name="username"
//         type="text"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />

//       <br />
//       <label>Email: </label>
//       <br />
//       <input
//         required
//         name="email"
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <br />

//       <br />
//       <button type="submit" value="checkout" className="btn btn-dark">
//         Login
//       </button>
//     </form>
//   );
// }

// export default Login;
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { signIn } from "./SigninFirebase";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const userData = [];

  const handleSubmit = (e) => {
    e.preventDefault();
    userData.push({ username: username, password: password });
    //authentication
    signIn(username, password);
    // signInWithEmailAndPassword(username, password)
    console.log(userData);
  };

  return (
    <form
      className="main"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <label>Username: </label>
      <br />
      <input
        required
        name="username"
        type="email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <br />
      <label>Password: </label>
      <br />
      <input
        required
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />

      <br />
      <button type="submit" value="checkout" className="btn btn-dark">
        Login
      </button>
    </form>
  );
}

export default Login;
