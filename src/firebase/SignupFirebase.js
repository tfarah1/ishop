// import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyCeOCIDsAuDDcy1o9zaak09wO4ZWyN_vpM",
  authDomain: "laser-c7594.firebaseapp.com",
  databaseURL: "https://laser-c7594-default-rtdb.firebaseio.com",
  projectId: "laser-c7594",
  storageBucket: "laser-c7594.appspot.com",
  messagingSenderId: "1098383648381",
  appId: "1:1098383648381:web:35e8ca897c0f02e4a1b314",
  measurementId: "G-3994H3J7M8",
};

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBSaCSRnTsZ6fEs74RKx3-8EcS4zMRfNl4",
//   authDomain: "ishopplb.firebaseapp.com",
//   projectId: "ishopplb",
//   storageBucket: "ishopplb.appspot.com",
//   messagingSenderId: "796190754665",
//   appId: "1:796190754665:web:2b5af2b7052051b9f7dff8"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);



const auth = getAuth();
export const newUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      return error;
    });
};
// newUser
