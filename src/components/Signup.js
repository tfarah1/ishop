// import React from "react";

// const Signup = () => {
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

// export default Signup;

//               ////


import React from "react";
import { useState } from "react";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(0);

  // user info obj
  const userData = [];

  const handleSubmit = (e) => {
    e.preventDefault();
    userData.push({firstName:firstName, lastName:lastName, username:username, password:password});
    // register link to database
    console.log(userData);
  };

  return (
    <form
      className="main"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <label>First Name:</label>
      <br />
      <input
        required
        name="firstName"
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <br />
      <label>Last Name:</label>
      <br />
      <input
        required
        name="lastName"
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />

      <br />
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

export default Signup;
